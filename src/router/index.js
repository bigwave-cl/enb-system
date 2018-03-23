import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store';
import Index from '@/views/index.vue';
import Login from '@/views/user/login.vue';

import Layout from '@/views/layout.vue';

import {
	refreshTitle
} from '@/utils'
import {
	User
} from '@/services';

const user = new User();

//懒加载路由

//view->注册页面
const Register = resolve => require.ensure([], () => resolve(require('@/views/user/register.vue')), '');

//view->账户管理相关页面
//sub->赛事管理页面
const AccountManage = resolve => require.ensure([], () => resolve(require('@/views/account/manage.vue')), '');
//sub->权限管理页面
const AccountPermission = resolve => require.ensure([], () => resolve(require('@/views/account/permission.vue')), '');

//view->赛事资料相关页面
//sub->账户管理页面
const MatchInformation = resolve => require.ensure([], () => resolve(require('@/views/match/information.vue')), '');

const beforeEach = (toRoute, fromRoute, next) => {
	if (user.auth != 'none' && user.auth.token) {
		Vue.prototype.$user = {
			username: user.user.name,
			email: user.user.email,
			company: user.user.company,
			token: user.auth.token,
			role: user.auth.type,
			loginOut: user.loginOut
		};
	} else {
		Vue.prototype.$user = null;
	}
	refreshTitle(toRoute.meta && toRoute.meta.title || 'ENB·System');

	if (toRoute.path == '/login' && user.auth != 'none' && user.auth.token) {
		next({
			replace: true,
			path: '/'
		});
	} else {
		if (toRoute.meta && toRoute.meta.requiresAuth && user.auth == 'none') {
			next({
				path: '/login',
				replace: true,
				query: {
					redirect: toRoute.fullPath
				}
			});
		} else{
			if( toRoute.path != '/login' && 
				toRoute.path != '/404' && 
				toRoute.path.indexOf('/account') == -1 && 
				!store.getters.matchId){
				next({
					path: '/accountmanage',
					replace: true,
				});
			}else{
				next();
			}
		}
	}
}
const afterEach = (toRoute, fromRoute) => {}

Vue.use(Router)
const AccountRouter = [{
	path: '/accountmanage',
	name: 'accountmanage',
	component: AccountManage,
	meta: {
		title: 'ENB·账户管理·赛事管理',
		showNavBar: true,
		requiresAuth: true
	}
}, {
	path: '/accountpermission',
	name: 'accountpermission',
	component: AccountPermission,
	meta: {
		title: 'ENB·账户管理·权限管理',
		showNavBar: true,
		requiresAuth: true
	}
}]

const MatchRouter = [{
	path: '/match',
	name: 'match',
	component: Layout,
	redirect: 'noredirect',
	children: [{
		path: 'information',
		name: 'matchInformation',
		component: MatchInformation,
		meta: {
			title: 'ENB·账户管理·赛事资料',
			showNavBar: true,
			showMenuBar: true,
			requiresAuth: true
		}
	}]
}]

export const AllRoutersMap = [{
		path: '/',
		name: 'index',
		component: Index,
		meta: {
			title: 'ENB·首页',
			requiresAuth: true,
			showNavBar: true,
			showMenuBar: true
		}
	},
	{
		path: '/404',
		name: '404',
		component: resolve => require.ensure([], () => resolve(require('@/views/errorPage/404.vue')), ''),
		meta: {
			title: 'ENB·404',
		}
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
		meta: {
			title: 'ENB·登录'
		}
	}, {
		path: '/register',
		name: 'register',
		component: Register,
		meta: {
			title: 'ENB·注册',
			showNavBar: true,
		}
	},
	...AccountRouter,
	...MatchRouter, {
		path: '*',
		redirect: '/404'
	}
];

const router = new Router({
	routes: AllRoutersMap
})

router.beforeEach(beforeEach)
// router.afterEach(afterEach)
export default router;
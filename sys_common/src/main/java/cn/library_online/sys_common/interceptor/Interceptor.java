package cn.library_online.sys_common.interceptor;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Interceptor implements HandlerInterceptor {

    @Override
    public void afterCompletion(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, Exception arg3)
            throws Exception {
        // 执行完毕，返回前拦截
    }

    @Override
    public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, ModelAndView arg3)
            throws Exception {
        // 在处理过程中，执行拦截
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object arg2) throws Exception {
//        Cookie[] cookies = request.getCookies();
//        boolean flag = false;
//        for (Cookie cookie : cookies) {
//            if ("manager".equals(cookie.getName())) {
//                flag = true;
//                break;
//            }
//        }
//        if (flag){
//            return true;
//        } else {
//            // 拦截后进入登录页面
//            response.sendRedirect("/resources/pages/manager/error.html");
//            return false;
//        }

        System.out.println(request.getRequestURI());
        String requestURI = request.getRequestURI();
        if (requestURI.startsWith("/user")){
            request.getRequestDispatcher("/library_online"+requestURI).forward(request, response);
        }

        return true;

    }
}

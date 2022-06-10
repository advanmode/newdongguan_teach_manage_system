package xuqiu.spring.Config;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;


/**
 * @author 150149
 */
@Configuration
public class MyInterceptor extends WebMvcConfigurationSupport {

    private String UPLOAD_FOLDER = "E:/visual studio/项目储存/需求分析/Spring/img/";

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/img/**").addResourceLocations("file:" + UPLOAD_FOLDER);
        registry.addResourceHandler("/**").addResourceLocations("file:" + "E:/visual studio/项目储存/需求分析/前端/dist/");
        super.addResourceHandlers(registry);
    }
}
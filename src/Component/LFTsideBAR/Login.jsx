import React from 'react'
export default function Login() {
    return (
        <div class="app app-header-fixed ">
        <div class="container loginContainer">
            <div class="loginwsection">
        <div class="navbar-brand_login block m-t"> <img src="../uploads/images/logos/logo_login.png"/> </div>
                    <div class="login-lang-btn">
                    <ul class="nav">
                        <li class="dropdown">
                            <a href="#" data-toggle="dropdown" class="dropdown-toggle width_flag">
                                                                                <img src="public_html/images/flags/en.png">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                                <b class="caret"></b>
                            </a>
                            <!-- dropdown -->
                            <ul class="dropdown-menu animated fadeInRight">
                                                        <li>
                                    <a href="javascript:changeDefaultLanguageCommon('1');">
                                        <img src="public_html/images/flags/en.png"> English
                                    </a>
                                </li>
                                                        <li>
                                    <a href="javascript:changeDefaultLanguageCommon('2');">
                                        <img src="public_html/images/flags/es.png"/> Español
                                    </a>
                                </li>
                                                        <li>
                                    <a href="javascript:changeDefaultLanguageCommon('3');">
                                        <img src="public_html/images/flags/ch.png"> 中文
                                    </a>
                                </li>
                                                        <li>
                                    <a href="javascript:changeDefaultLanguageCommon('4');">
                                        <img src="public_html/images/flags/de.png"> Deutsch
                                    </a>
                                </li>
                                                        <li>
                                    <a href="javascript:changeDefaultLanguageCommon('5');">
                                        <img src="public_html/images/flags/pt.png"> Português
                                    </a>
                                </li>
                                                        <li>
                                    <a href="javascript:changeDefaultLanguageCommon('6');">
                                        <img src="public_html/images/flags/fr.png"> français
                                    </a>
                                </li>
                                                        <li>
                                    <a href="javascript:changeDefaultLanguageCommon('7');">
                                        <img src="public_html/images/flags/it.png"> italiano
                                    </a>
                                </li>
                                                        <li>
                                    <a href="javascript:changeDefaultLanguageCommon('8');">
                                        <img src="public_html/images/flags/tr.png"> Türk
                                    </a>
                                </li>
                                                        <li>
                                    <a href="javascript:changeDefaultLanguageCommon('9');">
                                        <img src="public_html/images/flags/po.png"> polski
                                    </a>
                                </li>
                                                        <li>
                                    <a href="javascript:changeDefaultLanguageCommon('10');">
                                        <img src="public_html/images/flags/ar.png"> العربية
                                    </a>
                                </li>
                                                        <li>
                                    <a href="javascript:changeDefaultLanguageCommon('11');">
                                        <img src="public_html/images/flags/ru.png"> русский
                                    </a>
                                </li>
                                
                            </ul>
                        </li>
                    </ul>
                </div>
                      
          
                <div class="loginforms">
                    
        
        <div id="span_js_messages" style="display:none;"> <span id="error_msg1">You must enter username</span> <span id="error_msg2">You must enter password</span> <span id="error_msg3">You must enter captcha</span> </div>
         
        <form action="https://backoffice.infinitemlmsoftware.com/backoffice/login/verifylogin_admin" class="" id="login_form_admin" name="login_form_admin" autocomplete="off" method="post" accept-charset="utf-8" novalidate="novalidate">
        <input type="hidden" name="inf_token" value="dfc9bbff0ac43db4325d564c06411151">                                          
        
                <input type="password" style="display:none">
                <input type="text" style="display:none">
                <div class="text-danger  text-center" ng-show="authError"> </div>
                
        
        
                <div class="list-group form-group login-input">
                    <div class="list-group-item">
                        <input type="text" name="admin_username" id="admin_usernme" autocomplete="Off" placeholder="Username" value="" class="form-control no-border">
                        
                    </div>
                    <div class="list-group-item form-group">
                        <input type="password" name="admin_password" id="admin_password" placeholder="Password" class="form-control no-border password" value="">
                       
                    </div>
                            </div>
                <div class="forgotpassword">          
                  <div class="text-left"><a href="login/forgot_password.html">Forgot Password?</a></div>
                  <div class="text-right"><a href="login/user.html">User Login</a></div>
                </div>
                <div class="login-btn">
                  <input type="submit" id="admin_login" name="admin_login" value="Login" class="btn btn-lg btn-primary btn-block">
                </div>        
        
                <div class="m-t-md">
                    <span id="loginmsg" style="display:none"></span>
                </div>
                <p class="text-center link-fade"><small>Don't have an account? </small> <a class="register info-link" href="https://infinitemlmsoftware.com/register.php">
                                        Signup now
                                    </a></p>
        
        </form>
                
                
            
                
                
                                     <div class="text-center text-center m-t-sm"><a href="https://infinitemlmsoftware.com/" target="_blank"><i class="fa fa-long-arrow-left" aria-hidden="true"></i> Back to website</a></div>
                                    
                                    
            <div class="text-center" ng-include="'tpl/blocks/page_footer.html'"></div>
        
        
                </div>
            </div>
        </div>
        
            {/* <style type="text/css">
                .app:before {
                background-color: #fff;
                }
                body {
            background: #f3f3f3 ; */}
        
            {/* /* background-image: url(http://localhost/mlm_design/uploads/images/logos/loginbg.png);
            background-size: cover; */
        } 
        {/* .list-group-item {
            background-color: transparent;
        
        }
        .app-header-fixed {
            padding-top: 0px;
            display: grid;
            height: 100%;
            align-items: center;
        } */}
            {/* </style> */}
{/*         
            <script>
                function changeDefaultLanguageCommon(language_id) {
                    $.ajax({
                        url: base_url + 'login/change_default_language',
                        data: { language: language_id },
                        type: 'post',
                        success: function(data) {
                            if (data == 'yes') {
                                location.reload();
                            }
                        },
                        error: function(error) {
                            console.log(error);
                        }
                    });
                }
            </script> */}
        
        
                
                
            </div>
    )
}

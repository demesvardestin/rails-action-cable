class Users::RegistrationsController < Devise::RegistrationsController
    
    before_action :configure_permitted_parameters, if: :devise_controller?

    protected
    
    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :username, :password])
        devise_parameter_sanitizer.permit(:sign_in, keys: [:email, :password])
    end
    
    def after_sign_up_path_for(resource)
        root_path
    end
    
end
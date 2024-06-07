import { ref, onMounted } from 'vue'
import { identityScriptLoader } from './components/loadScript'

export const useIdentityPayKYC = (props) => {
    const scriptLoaded = ref(false);
    const scriptError = ref('');

    const options = {
        first_name: props.first_name,
        last_name: props.last_name,
        email: props.email,
        merchant_key: props.merchant_key,
        user_ref: props.user_ref,
        is_test: props.is_test,
        config_id: props.config_id,
        callback: props.callback
    }
    onMounted(async () => {
        try {
            await identityScriptLoader();
            scriptLoaded.value = true;
        } catch (error) {
            scriptError.value = error;
        }
    });

    const verifyWithIdentity = () => {
        if (scriptLoaded.value)
            window.IdentityKYC.verify(options);
    }

    return verifyWithIdentity;
}

export default useIdentityPayKYC;
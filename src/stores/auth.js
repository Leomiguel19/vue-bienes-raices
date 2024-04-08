import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { useFirebaseAuth } from 'vuefire'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {
    
    const auth = useFirebaseAuth()
    const authUser = ref({})
    const errorMsg = ref('')

    const errorCodes = {
        'auth/invalid-credential' : 'Credenciales NO válidas',
        'auth/user-not-found' : 'Usuario no encontrado',
        'auth/wrong-password' : 'El password es incorrecto',
    }

    // watch((errorMsg), () => {
    //     setTimeout(() => {
    //         errorMsg.value = undefined
    //     }, 3000);
    // })

    function login({email, password}){
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                authUser.value = user

                console.log(authUser.value)
            })
            .catch((error) => {
                errorMsg.value = errorCodes[error.code]
            })
    }

    const hasError = computed(() => errorMsg.value) 

    return {
        login,
        hasError,
        errorMsg
    }
})
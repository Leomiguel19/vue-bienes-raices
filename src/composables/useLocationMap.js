import { ref } from 'vue'

export default function useLocationMap(){

    const zoom = ref(17)
    const center = ref([25.767424,-80.192053])

    return {
        zoom,
        center
    }
}
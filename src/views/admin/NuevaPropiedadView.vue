<script setup>
    import { useForm, useField } from 'vee-validate'
    import { validationSchema, imageSchema } from '@/validation/propiedadSchema';

    const items = [1, 2, 3, 4, 5]

    const { handleSubmit } = useForm({ 
        validationSchema: {
            ...validationSchema,
            ...imageSchema,
        }
    })

    const titulo = useField('titulo')
    const imagen = useField('imagen')
    const precio = useField('precio')
    const habitaciones = useField('habitaciones')
    const wc = useField('wc')
    const estacionamiento = useField('estacionamiento')
    const descripcion = useField('descripcion')

    const submit = handleSubmit((values) => {
        console.log(values)
    })
</script>

<template>
    <v-card max-width="800" flat class="mx-auto my-10">
        <v-card-title class="text-h4 font-weight-bold" tag="h3">
            Nueva Propiedad
        </v-card-title>
        <v-card-subtitle class="text-h5 py-5">
            Crea una nueva propiedad llenando el siguiente formulario
        </v-card-subtitle>

        <v-form class="mt-10">
            <v-text-field 
                label="Titulo Propiedad" 
                class="mb-5" 
                bg-color="blue-grey-lighten-4" 
                v-model="titulo.value.value"
                :error-messages="titulo.errorMessage.value"
            />

            <v-file-input 
                label="Fotografía" 
                bg-color="blue-grey-lighten-4" 
                accept="image/jpeg"
                prepend-icon="mdi-camera" 
                class="mb-5" 
                v-model="imagen.value.value"
                :error-messages="imagen.errorMessage.value"
            />

            <v-text-field 
                label="Precio" 
                bg-color="blue-grey-lighten-4" 
                class="mb-5" 
                v-model="precio.value.value"
                :error-messages="precio.errorMessage.value"
            />

            <v-row>
                <v-col cols="12" md="4">
                    <v-select 
                        label="Habitaciones" 
                        bg-color="blue-grey-lighten-4" 
                        class="mb-5" 
                        :items="items" 
                        v-model="habitaciones.value.value"
                        :error-messages="habitaciones.errorMessage.value"        
                    />
                </v-col>
                <v-col cols="12" md="4">
                    <v-select 
                        label="WC" 
                        bg-color="blue-grey-lighten-4" 
                        class="mb-5" 
                        :items="items" 
                        v-model="wc.value.value"
                        :error-messages="wc.errorMessage.value"        
                    />
                </v-col>
                <v-col cols="12" md="4">
                    <v-select 
                        label="Lugares Estacionamiento" 
                        bg-color="blue-grey-lighten-4" 
                        class="mb-5" 
                        :items="items" 
                        v-model="estacionamiento.value.value"
                        :error-messages="estacionamiento.errorMessage.value"        
                    />
                </v-col>
            </v-row>
            <v-textarea 
                label="Descripción" 
                class="mb-5" 
                bg-color="blue-grey-lighten-4"
                v-model="descripcion.value.value"
                :error-messages="descripcion.errorMessage.value"
            ></v-textarea>
            <v-checkbox label="Alberca"/>

            <v-btn
                color="pink-accent-3"
                block
                @click="submit"
            >
                Agregar Propiedad
            </v-btn>
        </v-form>
    </v-card>
</template>

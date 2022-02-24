

export const validacion = (dataForm) => {

    let errors={};
    if (!dataForm.name){
        errors.name= "Nombre es requerido"
    }

    if (!dataForm.email){
        errors.email= "Email es requerido"
    }

    if (!dataForm.tel){
        errors.tel= "Telefono es requerido"
    }

  return errors;

  
};

export default validacion
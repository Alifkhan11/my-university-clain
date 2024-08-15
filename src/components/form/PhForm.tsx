import { ReactNode } from "react"
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form"

type TDefaultConfig = {
   defaultValues?: Record<string, any>;
}

type TFromProps = {
   onSubmit: SubmitHandler<FieldValues>
   children: ReactNode
} & TDefaultConfig

const PhForm = ({ onSubmit, children, defaultValues }: TFromProps) => {
   // const PhForm=({onSubmit,children}:any)=>{

   const fromConfig: TDefaultConfig = {}
   if (defaultValues) {
      fromConfig['defaultValues'] = defaultValues;
   }
   console.log(fromConfig.defaultValues);
   const methods = useForm(fromConfig)
   return (
      <FormProvider {...methods}>
         <form onSubmit={methods.handleSubmit(onSubmit)}>
            {children}
         </form>
      </FormProvider>
   )
}

export default PhForm


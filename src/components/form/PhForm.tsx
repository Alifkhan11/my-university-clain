/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import { ReactNode } from "react"
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form"

type TDefaultConfig = {
   defaultValues?: Record<string, any>;
   resolver?:any
}

type TFromProps = {
   onSubmit: SubmitHandler<FieldValues>
   children: ReactNode
} & TDefaultConfig

const PhForm = ({ onSubmit, children, defaultValues,resolver }: TFromProps) => {
   // const PhForm=({onSubmit,children}:any)=>{

   const fromConfig: TDefaultConfig = {}
   if (resolver) {
      fromConfig['resolver'] = resolver;
   }
   if (defaultValues) {
      fromConfig['defaultValues'] = defaultValues;
   }
   // console.log(fromConfig.defaultValues);
   const methods = useForm(fromConfig)

   const submit:SubmitHandler<FieldValues>=(data)=>{
      onSubmit(data)
      // methods.reset()
   }

   return (
      <FormProvider {...methods}>
         <Form layout="vertical" onFinish={methods.handleSubmit(submit)}>
            {children}
         </Form>
      </FormProvider>
   )
}

export default PhForm


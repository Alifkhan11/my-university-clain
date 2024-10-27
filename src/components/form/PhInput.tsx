import { Form, Input } from "antd"
import { Controller } from "react-hook-form"

type TInputeProps = {
    type: string
    name: string
    label?: string

}

const PhInput = ({ type, name, label }: TInputeProps) => {
    // const PhInput = ({ type, name, label }: any) => {
    return (
        <div style={{ marginBottom: '20px' }}>
            {/* {label ? label : null} */}
            <Controller name={name}
                render={({ field }) => (<Form.Item label={label}>
                    <Input type={type} id={name} {...field} size="large"/>
                </Form.Item>)}
            />
        </div>
    )
}

export default PhInput
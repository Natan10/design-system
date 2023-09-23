import { ComponentProps } from 'react'
import { Input, Prefix, TextInpuContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInpuContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInpuContainer>
  )
}

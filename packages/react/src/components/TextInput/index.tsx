import { ComponentProps, forwardRef, ElementRef } from 'react'
import { Input, Prefix, TextInpuContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>,TextInputProps>(({ prefix, ...props }: TextInputProps, ref) => {
  return (
    <TextInpuContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input ref={ref} {...props} />
    </TextInpuContainer>
  )
}
)

TextInput.displayName = 'TextInput'
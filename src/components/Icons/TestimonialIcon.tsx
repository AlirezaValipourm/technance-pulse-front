import { IIconProps } from './IconProps.type'
import { FC } from 'react'
import { cn } from '@/components/uiKit/lib/utils'

export const TestimonialIcon: FC<IIconProps> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#BBB8EC" stroke="#BBB8EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn(className)}>
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" fill='#BBB8EC' stroke='#BBB8EC' />
            <path d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7" fill='#14132F' stroke='#14132F' className='scale-90 origin-center'/>
        </svg>
    )
}

import { FC } from 'react'
import { IIconProps } from './IconProps.type'
import { cn } from '../uiKit/lib/utils'

export const CircleIcon: FC<IIconProps> = ({ className }) => {
    return (
        <div className={cn("w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-l from-0 from-[#464646] to-55% to-[#0d0d0d]", className)}>
            <div className='w-4 h-4 rounded-full bg-gray-50'></div>
        </div>
    )
}

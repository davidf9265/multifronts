import {
    Card,
    CardHeader,
    Image,
    CardFooter,
    Button,
    CardProps,
} from '@nextui-org/react';
import React from 'react';

interface TicketCardProps extends CardProps {
    actionButtonCallback?: () => void;
    subtitle?: string;
    title?: string;
    footerInfo?: string;
    actionButtonLabel?: string;
    picture?: string;
    actionButtonVariant?:
        | 'primary'
        | 'default'
        | 'secondary'
        | 'success'
        | 'warning'
        | 'danger';
}

export const TicketCard: React.FC<TicketCardProps> = ({
    actionButtonCallback,
    title,
    subtitle,
    footerInfo,
    actionButtonLabel,
    picture,
    actionButtonVariant,
    ...props
}) => {
    return (
        <Card
            isFooterBlurred
            className="w-full h-full col-span-12 sm:col-span-5"
            {...props}
        >
            <CardHeader className="absolute z-10 flex-col items-start bg-white bg-opacity-[.3]">
                <p className="text-tiny text-black/60 uppercase font-bold">
                    {subtitle}
                </p>
                <h4 className="text-black font-medium text-2xl">{title}</h4>
            </CardHeader>
            <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover filter saturate-[.35] contrast-[.45]"
                src={picture || 'https://nextui.org/images/card-example-6.jpeg'}
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                    <p className="text-black text-tiny">{footerInfo}</p>
                </div>
                <Button
                    className="text-tiny"
                    color={actionButtonVariant || 'primary'}
                    radius="full"
                    size="sm"
                    onClick={actionButtonCallback}
                >
                    {actionButtonLabel}
                </Button>
            </CardFooter>
        </Card>
    );
};

export default TicketCard;

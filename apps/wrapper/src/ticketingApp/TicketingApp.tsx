import {
    Badge,
    Button,
    Link,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    useDisclosure,
} from '@nextui-org/react';
import {
    addToCart,
    addToStore,
    removeFromCart,
} from '../redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { VeevartAppHeader, TicketCard } from '@veevart/veevartapp';
import { CartIcon } from '@veevart/veevartapp';
import { useState } from 'react';

const exampleTickets = [
    {
        title: 'Soldiers exhibition',
        subtitle: 'Exhibition',
        picture:
            'https://www.goarmy.com/content/dam/goarmy/content-splits/enlisted-soldiers-mechanic_sm.jpg',
        footerInfo: 'Feel the war',
        price: 100,
    },
    {
        title: 'Cars',
        subtitle: 'Exhibition',
        picture:
            'https://67cdn.co.uk/137/3/409525/172683255266ed5fa8ee0ef_0s2a8510.jpg?width=389&height=240&crop=auto',
        footerInfo: 'Fast always',
        price: 200,
    },
    {
        title: 'Nature',
        subtitle: 'Exhibition',
        picture:
            'https://images.squarespace-cdn.com/content/v1/61c4da8eb1b30a201b9669f2/e2e0e62f-0064-4f86-b9d8-5a55cb7110ca/Korembi-January-2024.jpg',
        footerInfo: 'Feel the nature',
        price: 300,
    },
    {
        title: 'Gym Legends',
        subtitle: 'Exhibition',
        picture:
            'https://m.media-amazon.com/images/I/51HNlQoNPFL._UXNaN_FMjpg_QL85_.jpg',
        footerInfo: 'Feel the power',
        price: 400,
    },
];
interface Ticket {
    title: string;
    subtitle: string;
    picture: string;
    footerInfo: string;
    price: number;
}

export function TicketingApp() {
    const dispatch = useAppDispatch();
    const items = useAppSelector((state) => state.cartReducer.items);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handleAddToCart = (ticket: Ticket) => {
        dispatch(addToCart(ticket));
    };

    return (
        <div className="box-border	p-4 m-4 border-2 shadow-lg rounded-2xl">
            <Navbar className="flex align-top">
                <NavbarBrand>
                    <p className="font-bold text-inherit">Tickets</p>
                </NavbarBrand>
                <NavbarContent
                    className="hidden sm:flex gap-4"
                    justify="center"
                >
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Features
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            Customers
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Integrations
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="lg:flex">
                        <Link href="#">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Badge
                            color="danger"
                            content={items.length || 0}
                            shape="circle"
                        >
                            <CartIcon
                                className="cursor-pointer translate-y-1"
                                onClick={onOpen}
                                size={30}
                            />
                        </Badge>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>

            <div className="grid grid-cols-9 grid-rows-2 grid-flow-rows gap-4">
                {exampleTickets.map((ticket) => {
                    return (
                        <TicketCard
                            actionButtonCallback={() => {
                                handleAddToCart(ticket);
                            }}
                            className="col-span-3"
                            title={ticket.title}
                            subtitle={ticket.subtitle}
                            footerInfo={ticket.footerInfo}
                            picture={ticket.picture}
                            actionButtonLabel="Add to cart"
                        />
                    );
                })}
            </div>

            <br />

            <Modal
                isOpen={isOpen}
                placement="center"
                size="full"
                onOpenChange={onOpenChange}
            >
                <ModalContent className="h-full flex">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex-none">
                                Modal Title
                            </ModalHeader>
                            <ModalBody className="grow overflow-scroll">
                                <div className="grid grid-cols-12 gap-4 auto-rows-[300px] ">
                                    {items.map((item) => {
                                        console.log('item >>> ', item);
                                        try {
                                            return (
                                                <TicketCard
                                                    actionButtonCallback={() => {
                                                        dispatch(
                                                            removeFromCart(
                                                                item.id as string
                                                            )
                                                        );
                                                    }}
                                                    className="col-span-3"
                                                    title={item.title as string}
                                                    subtitle={
                                                        item.subtitle as string
                                                    }
                                                    footerInfo={
                                                        item.footerInfo as string
                                                    }
                                                    picture={
                                                        item.picture as string
                                                    }
                                                    actionButtonLabel="Remove"
                                                    actionButtonVariant="danger"
                                                />
                                            );
                                        } catch (error) {
                                            return null;
                                        }
                                    })}
                                </div>
                            </ModalBody>
                            <ModalFooter className="flex-none">
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}

export default TicketingApp;

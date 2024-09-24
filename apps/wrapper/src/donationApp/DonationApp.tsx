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
import { addToCart, removeFromCart } from '../redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { TicketCard } from '@veevart/veevartapp';
import { CartIcon } from '@veevart/veevartapp';

interface Donation {
    title: string;
    subtitle: string;
    picture: string;
    footerInfo: string;
    donationAmount: number;
}
const exampleDonations = [
    {
        title: 'Poor children',
        subtitle: 'Donation',
        picture:
            'https://static.vecteezy.com/system/resources/thumbnails/027/012/938/small_2x/hungry-starving-poor-little-child-looking-at-the-camera-photo.jpg',
        footerInfo: 'Embrace the children',
        donationAmount: 100,
    },
    {
        title: 'Artists',
        subtitle: 'Donation',
        picture:
            'https://media.istockphoto.com/id/1183183783/photo/female-artist-works-on-abstract-oil-painting-moving-paint-brush-energetically-she-creates.jpg?s=612x612&w=0&k=20&c=JLPrSmpdzPklAVKycBJ83oPASPfFPS46XvN0TShfLwI=',
        footerInfo: 'Embrace the artists',
        donationAmount: 200,
    },
    {
        title: 'Cancer patients',
        subtitle: 'Donation',
        picture:
            'https://www.hemoncnc.com/wp-content/uploads/2019/03/what-cancer-patients-really-want-to-hear.png',
        footerInfo: 'Embrace the patients',
        donationAmount: 300,
    },
    {
        title: 'Villegas',
        subtitle: 'Donation',
        picture:
            'https://media.licdn.com/dms/image/D4E03AQGaqgtyeJhY4Q/profile-displayphoto-shrink_200_200/0/1693247653819?e=2147483647&v=beta&t=sjzp_uKLPT-ZY9nmBTDXe7MgflXLlu-YTQmq5bJa8P0',
        footerInfo: 'Help the villegas',
        donationAmount: 400,
    },
];

export function DonationApp() {
    const dispatch = useAppDispatch();
    const items = useAppSelector((state) => state.cartReducer.items);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handleAddToCart = (donation: Donation) => {
        dispatch(addToCart(donation));
    };

    return (
        <div className="box-border	p-4 m-4 border-2 shadow-lg rounded-2xl	">
            <Navbar className="flex align-top">
                <NavbarBrand>
                    <p className="font-bold text-inherit">Donation</p>
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
                {exampleDonations.map((donation) => {
                    return (
                        <TicketCard
                            actionButtonCallback={() => {
                                handleAddToCart(donation);
                            }}
                            title={donation.title}
                            className="col-span-3"
                            subtitle={donation.subtitle}
                            footerInfo={donation.footerInfo}
                            picture={donation.picture}
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

export default DonationApp;

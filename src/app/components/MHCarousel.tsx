import { Carousel, Typography } from "./Material-Components";

const MHCarousel = ()=> {
    const sliders = [{
        id: 1,
        title: 'Service under the excellence of renowned Dr. Sarvottam Rao',
        description: '',
        imageURL: '/maternity-child-care.jpg'
    },
    {   
        id: 2,
        title: 'Maternity and Baby care',
        description: '',
        imageURL: '/maternity-child-care.jpg'
    },
    {
        id: 3,
        title: 'NICU - Neonatal Intensive Care Unit',
        description: '',
        imageURL: '/maternity-child-care.jpg'
    }]
    return (
        <Carousel className="h-1/2">
            {sliders.map( slider => (
            <div key={slider.id} className="relative w-full" style={{height: "42rem"}}>
            <img
                src="/maternity-child-care.jpg"
                alt="Maternity and Baby Care"
                className="h-full w-full object-cover"
            
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                {slider.title}
                </Typography>
                <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                >
                    It is not so much for its beauty that the forest makes a claim
                    upon men&apos;s hearts, as for that subtle something, that
                    quality of air that emanation from old trees, that so
                    wonderfully changes and renews a weary spirit.
                </Typography>
                </div>
            </div>
            </div>
        ))}
        </Carousel>
        )
}
export default MHCarousel;
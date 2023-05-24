import {
    Typography
} from "./Material-Components";


  export default function Services() {
    const servicesList = [{
        id: 1,
        title: "Maternity / Pregnancy Care",
        description: "Maternity care is crucial for ensuring the health and well-being of both the mother and the baby. By receiving appropriate medical attention, education, and support throughout pregnancy and beyond, women can have a positive and safe childbirth experience while promoting the healthy development of their child.",
        isReadMore: false,
        imageUrl: 'pregnancy.jpg'
    }, {
        id: 2,
        title: "Birthing Care",
        description: "Birth care varies depending on cultural practices, healthcare systems, and individual preferences. The goal is to provide a safe and supportive environment for women during the transformative experience of giving birth, promoting the well-being of both the mother and the newborn.",
        isReadMore: false,
        imageUrl: '/birth-care.jpg'
    },
    {
        id: 3,
        title: "New Born and Child care",
        description: "Newborn and child care is the process of providing for the physical, emotional, and developmental needs of infants and young children. It includes a variety of tasks, such as feeding, bathing, dressing, changing diapers, playing, and providing comfort.",
        isReadMore: false,
        imageUrl: '/child-care.jpg'
    },
    {
        id: 4,
        title: "Baby Care",
        description: "Baby care requires attentive and nurturing caregiving to meet the needs of the growing child. It is essential to provide love, care, and attention to support the baby's physical, emotional, and cognitive development. Consulting with healthcare professionals and accessing reliable parenting resources can provide additional guidance and support for effective baby care.",
        isReadMore: false,
        imageUrl: '/baby-care.jpg'
    },
    {
        id: 5,
        title: "Gynaecology Care",
        description: "Gynaecology care is the medical care of the female reproductive system. It is provided by a gynecologist, who is a doctor who specializes in women's health. Gynecologists offer a wide range of services",
        isReadMore: false,
        imageUrl: '/gynaecology.jpg'
    },
    {
        id: 6,
        title: "Diabetes Care",
        description: "Diabetic care is the process of managing diabetes to prevent or delay complications. It includes a variety of lifestyle changes, such as eating a healthy diet, exercising regularly, and maintaining a healthy weight. Diabetic care also includes taking medication, if needed, and monitoring blood sugar levels.",
        isReadMore: false,
        imageUrl: '/diabetic.jpg'
    }];
    return (
        <>
        <Typography variant="h3" color="blue-gray" className="mb-10">Services offered</Typography>
        

        {/* <section className=" flex flex-col p-2 md:pt-4">
        <article className="group bg-gray-700 text-gray-200 flex flex-wrap md:flex-inherit rounded-lg shadow-xl relative overflow-hidden mb-8 flex-row">
            <a className="contents">
                <img className="relative w-full md:max-w-xs md:max-h-full max-h-48 object-cover " 
                src="pregnancy.jpeg"/>
            </a>
            <div className="relative flex flex-col p-4">
                <h1 className="text-3xl mb-2">Pregnancy CardHeader</h1>
                <div className="w-0 group-hover:w-48 h-1 rounded "></div>
            <div className="text-justify">This is a content</div>
            </div>
           
        </article>
        <article className="group bg-white text-gray-200 flex flex-wrap md:flex-inherit rounded-lg shadow-xl relative overflow-hidden mb-8 flex-row">
            <a className="contents">
                <img className="relative w-full md:max-w-xs md:max-h-full max-h-48 object-cover " 
                src="pregnancy.jpeg"/>
            </a>
            <div className="relative flex flex-col p-4">
            <Typography variant="h6" color="blue" className="uppercase mb-4"></Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2">
        
            </Typography>
            <Typography color="gray" className="font-normal mb-8">
           gasgasgasgasgasgas asasfas asdasfgasgasg
            </Typography>
            {<a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
                Learn More 
                <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
            </Button>
            </a>}
            </div>
           
        </article>
    </section> */}

    <div className="grid md:grid-flow-col grid-flow-row gap-4 grid-rows-2 sm:grid-cols-1">
        
        {servicesList.map((service) => (
            <div key={service.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <a href="#">
                    <img className="rounded-t-lg" src={service.imageUrl} alt="" />
                </a>
                
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{service.title}</h5>
                        <Typography color="gray" className="font-medium mb-4">
                            {service.description}
                        </Typography>
                    </a>
                    
                    {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {doctor.practice.map(each => ( <span class="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">{each}</span>))}
                       
</p> */}
                </div>
            </div>
        ))
        }
        </div>

        {/* <div className="grid md:grid-flow-col grid-flow-row grid-rows-3 gap-4">
            
       {servicesList.map(service => (
      <article className="group bg-white text-gray-200 flex flex-wrap md:flex-inherit rounded-lg shadow-xl relative overflow-hidden mb-8 flex-row">
      <a className="contents">
          <img className="relative w-full md:max-w-xs md:max-h-full max-h-48 object-cover " 
          src="pregnancy.jpeg"/>
      </a>
      <div className="relative flex flex-col p-4">
      <Typography variant="h6" color="blue" className="uppercase mb-4"></Typography>
      <Typography variant="h4" color="blue-gray" className="mb-2">
     Pregnancy Care
      </Typography>
      <Typography color="gray" className="font-normal mb-8">
     gasgasgasgasgasgas asasfas asdasfgasgasg
      </Typography>
      {<a href="#" className="inline-block">
      <Button variant="text" className="flex items-center gap-2">
          Learn More 
          <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
      </Button>
      </a>}
      </div>
     
  </article>
    //    <Card className="flex-row w-full max-w-[44rem] sm:m-2">
    //         <CardHeader shadow={false} floated={false} className="contents">
    //             <img 
    //             src={service.imageUrl} 
    //             alt="image" 
    //             className="relative w-full md:max-w-xs md:max-h-full max-h-48 object-cover"
    //             />
    //         </CardHeader>
    //         <CardBody>
    //             <Typography variant="h6" color="blue" className="uppercase mb-4"></Typography>
    //             <Typography variant="h4" color="blue-gray" className="mb-2">
    //             {service.title}
    //             </Typography>
    //             <Typography color="gray" className="font-normal mb-8">
    //             {service.description}
    //             </Typography>
    //             {service.isReadMore && <a href="#" className="inline-block">
    //             <Button variant="text" className="flex items-center gap-2">
    //                 Learn More 
    //                 <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
    //             </Button>
    //             </a>}
    //         </CardBody>
    //     </Card>
    
    
    ))}
      </div> */}
      </>
    );
  }
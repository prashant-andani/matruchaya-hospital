import Constants from "../constants";
import {
    Typography,
  } from "./Material-Components";

  export default function Doctors() {
    const doctorsList = [{
        name: "Dr. Sarvottam Rao",
        designation: "MBBS, MD, FICOG",
        practice: ["Obstetrics", "Gynaecology care"],
        photoURL: ''
    }, {
        name: "Dr. Nandini Bhosgi",
        designation: "MBBS, MS, CCDM",
        practice: ["Obstetrics", "Gynaecology", "Diabetes care"],
        photoURL: ''
    },
    {
        name: "Dr. Revanasiddappa Bhosgi",
        designation: "MBBS, MD, FIPM",
        practice: ["Newborn", "Child care"],
        photoURL: '/revanasiddappa_bhosgi.jpg'
    },
   ];
    return (
        <>
        <Typography variant="h3" color={Constants.themeColor} className="mb-10">Doctors</Typography>
       
        <div className="grid md:grid-flow-col grid-flow-row gap-4 sm:grind-cols-1">                             
            {doctorsList.map(doctor => (
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg" src={doctor.photoURL} alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{doctor.name}</h5>
                            <Typography color="gray" className="font-bold mb-4">
                                {doctor.designation}
                            </Typography>
                        </a>
                        
                        <p class="mb-3 font-normal text-white-700">
                            {doctor.practice.map(each => ( <span style={{"backgroundColor": '#7e52a0'}} className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{each}</span>))}
                        </p>
                    </div>
                </div>
            ))
            }
            </div>
      </>
    );
  }
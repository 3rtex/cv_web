import React, { useContext, useState } from 'react'

export const portfolio_data = [
    {
        img: '/images/smart-home.png',
        title: 'Energy recommendation system for smarthome',
        type: 'Semester project and then it continues in the Master project',
        date: 'February 2023',
        content_short: 'A system implemented in Python suggesting recommendation to optimize the use of the solar panels.',
        author: 'Dylan Mamié',
        content_long: [
            {
                txt: ['We have a smart home equiped with solar panel but no battery to keep the energy. Sensors have been installed in the house and we want to implement a recommendation system that maximize the use of the solar panels and help reduce the energy consumption.',
                    'The goal of this project is to analyze existing methods for recommendation systems, especially for smart homes, based on the different sensors present. The objective would be to develop an entire pipeline processing the received data to then indicate to the user recommendations allowing to optimize its electrical energy consumption while promoting the use of the solar panel green energy.',
                    'We can see below the pipeline imagined for this project.'],
            },
            {
                img: '/images/smart-home_pipeline.png',
                txt: 'Figure 1: pipeline of the recommendation system'
            },

            { txt: ['// WIP: we will update this entry at the end of the project'], },

        ]

    },
    {
        img: '/images/crapauduc.png',
        title: 'Amphibian image detection',
        type: 'Semester project',
        date: 'January 2022',
        content_short: 'Detection of amphibian on pictures to prove the use of the construction of passage under the roads for them. There is a movement sensor triggering the image capture whenever something move in the tunnel.',
        author: 'Joé Donzallaz, Jérôme Vial, Dylan Mamié',
        content_long: [
            {
                txt: ['The canton of Vaud has built several tunnels under the road in the commune of Gimel, to allow animals to cross safely. In order to justify the costs of this project, cameras have been installed to count the number of animal crossings. These cameras are programmed to take a series of pictures when a movement is detected, either during the day or at night (figure 1).',
                    'Originally, the counting of newts, frogs or toads on the images captured in the tunnel was done manually. This task is time consuming and it is easy to miss an animal. The main objective of this project is therefore to automate this task using the images already labeled and a machine learning model.',
                    'The tasks to be performed can be broken down as follows: selection of the images, image processing, choice of features, choice of a pre-trained model and its parameters, evaluation of the quality of the results.'],
            },
            {
                img: '/images/crapauduc_raw.png',
                txt: 'Figure 1: raw image if a frog and a newt'
            },

            {
                txt: ['We used 2 principal machine learning techniques to solve this problem: Object detection and Transfer learning.',
                    'For the object detection, we decided to use SSD. SSD uses a pre-trained model (with the final classification layer removed) such as ResNet or ImageNet to extract features from images. It then adds its own convolutional layers at the top of the model to obtain the delimitations of the objects with their with their classes and scores in output.',
                    'For the transfer learning, we used pre-trained models proposed by TensorFlow to only have to train the "high-level" layers and thus save a significant amount of time. These models were pre-trained on the COCO 2017 dataset. As frogs and newts are not part of the labelled elements, it is necessary  to teach these models to recognize them before moving on to the prediction phase.',
                    'Our models have been able to identify some frogs and newts but not all of them (figure 2). Our model is therefore still far from perfect for perfect for several reasons. We had not enough labelled data and we had not the time to do this task. We had difficulty assessing the quality of the results obtained since the usual metrics do not apply directly to a case of object detection. This is why new metrics, such as mean Average Precision (mAP) have been developed. The minimum score threshold also plays a major role and must be adjusted depending on the model and the results obtained. We only had time to use SSD for the object detection but we could also try to use YOLOv3 or R-CNN per example.'],
            },

            {
                img: '/images/crapauduc.png',
                txt: 'Figure 2: detection of frogs with blur or with a leaf on top of it',
            },
            {
                txt: ['We proved that it\'s possible to use Machine Learning for this problem but a lot of amelioration to our work must be made to be used in production.'],
            }
        ]
    },
    {
        img: '/images/berlioz.jpg',
        title: 'Pet follow-up cross-platform application',
        type: 'Bachelor project',
        date: 'July 2021',
        content_short: 'A Flutter application with a Laravel backend to help take care of pets. We used an authentication system with Google and Facebook accounts. The designs were given.',
        author: 'Dylan Mamié',
        content_long: [
            {
                txt: [
                    'Pet owners, when they want to find information about shelters, veterinarians, pet stores or even lost and found pets, must browse through many different websites to find what they are looking for. This project aims to help pet owners have everything they need to properly educate a pet or find anything related to it in one cross-platform application. In addition to these features, the app will give users the ability to add their own pets to the app to add their activities, medical records or reminders that will send them notifications.',
                    'The main goal of this project is to implement a cross-platform application that will meet all the needs of a pet owner, as mentioned above.',
                    'There are many features to implement in this project. We weren\'t sure if we would have time to implement them all, so it was decided to make two prototypes for the most important features first, the other features are nice to have but not mandatory. In summary, the first prototype contains the authentication process, implemented with a Facebook and Google login. The second prototype contains the most important features of the application, i.e. the pet profile management with its activities, medical records and reminders; the lost & found pets pages and the adoption pets page. The client provided the layouts and menus he wanted for the application. A goal was to satisfy his requests. You can see an example of the layouts below.'
                ],
            },
            {
                img: '/images/petyourpets.png',
                txt: 'Figure 1: designs of the application provided by X Designs'
            },

            {
                txt: [
                    'Below you can find the architecture diagram based on the technology choices we made for this application during the analysis.',
                    'For the frontend, we decided to implement our views with Flutter which will allow us to have a single codebase for the web, iOS and Android parts as shown on the diagram. We then decided to create a Laravel REST server as a backend that will contact our MySQL server with the help of the Eloquent ORM to store and retrieve the data necessary for the application to function correctly.',
                    'The interesting parts of the project implementation were the image picking for the pets\' image in a cross-platform way and then store the images on the backend; using the local notifications on the mobile phone to create reminders and the BLoC pattern design we used for Flutter. BLoC is a state management library for Dart that helped us manage the different states of the views and isolate the logic codes from the user interfaces.',
                    ''
                ],
            },

            {
                img: '/images/petyourpets_architecture.png',
                txt: 'Figure 2: architecture of the project',
            },
        ],
    },
    {
        img: '/images/profiling2.png',
        title: 'Profiling an industrial vision processing pipeline',
        type: 'Semester project',
        date: 'Mai 2021',
        content_short: 'Project with Asyril SA with the aim to profile the C++ code of a vision processing pipeline on one of their product.',
        author: 'Dylan Mamié',
        content_long: [{txt:['TODO']}],
    },
    {
        img: '/images/skeleton_detection.png',
        title: 'Skeleton detection',
        type: 'Semester project',
        date: 'Mai 2021',
        content_short: 'Detection of the skeleton of a dancer in order to detect the emotions emerging. We also had to see if we could check the skeleton on the shadow of the dancer. Implemented in Python.',
        author: 'Jérôme Vial, Dylan Mamié',
        content_long: [{txt:['TODO']}],
    },
    {
        img: '/images/lez-dance.png',
        title: 'Lez\'Dance',
        date: 'July 2018',
        content_short: 'Website for the Lez\'Dance line dance group, written in plain HTML, CSS and JS. It contains galleries of pictures and choregraphies of dances. We used PHP scripts to upload the pictures and choregraphies.',
        a: 'http://lez-dance.ch/',
    },
    {
        img: '/images/emf-ddc2.png',
        title: 'FLIR thermal camera mobile application',
        type: 'Apprenticeship final project',
        date: 'July 2017',
        content_long: 'Final work of apprenticeship nominated for the ICT Awards 2017. Android application that used a thermal FLIR camera to detect the heat loss on building.',
        author: 'Dylan Mamié',
        content_long: [{txt:['TODO']}],
    },
]


export const PortfolioContext = React.createContext({
    data: {},
})

export const useData = () => useContext(PortfolioContext)

export const PortfolioProvider = ({ children }) => {
    const [data] = useState(portfolio_data)

    return <PortfolioContext.Provider value={{ data }}>{children}</PortfolioContext.Provider>
}
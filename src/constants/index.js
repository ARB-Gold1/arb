import { jakob, rene, kal } from "../assets"
import { RiExternalLinkLine } from "react-icons/ri"

export const navlinks = [
    { id: 1, title: 'Waitlists', link: "#" },
    { id: 2, title: 'Roadmap', link: "#" },
    { id: 3, title: 'Tokenomic', link: "#" },
    { id: 4, title: 'Whitepaper', link: "#" },
    { id: 5, title: 'Buy Token', link: "#" },
    { id: 6, title: 'About', link: "#" },
]

export const taglines = [
    {id: 1, title: '$12M', desc: "Invested", Icon: ''},
    {id: 2, title: '+200', desc: "Funded", Icon: ''},
    {id: 3, title: '5.0', desc: "High Rated", Icon: ''},
]


export const features = [
    { 
     headline: "Film Finance",
     title: "Have you been thinking about how to fund your project",
     subtitle: "we understand that the world of film funding can be overwhelming and confusing. that's why we've made it our mission to make the process as easy and straighforward as possible. with our services you'll get access to funding",
     image: jakob,
     btnTitle: "Apply for now",
     BtnIcon: RiExternalLinkLine,
     direction: "leftToRight"
    },
    
    { 
     headline: "Rewards",
     title: "You can earn points and rewards during production of your film",
     subtitle: "our rewards system is just one more way that we're commited to supporting and investing in our filmmakers. we want to see your project succeed and we want to be part of your journey. Apply for funding now and start earning points today",
     image: kal,
     btnTitle: "Apply for now",
     BtnIcon: RiExternalLinkLine,
     direction: "rightToLeft"
    },
    
    { 
     headline: "Payment",
     title: "Integrated system that can accept a variety of types of payments",
     subtitle: "we are commited to providing you with the best possible service and our integrated payment system is just one more way that we're making the funding process easier and more convinien for you. Apply now and take advantage of our integrated payment system",
     image: rene,
     btnTitle: "Apply for now",
     BtnIcon: RiExternalLinkLine,
     direction: "leftToRight"
    }
    
]


export const applications = [
    { 
        id: 1, 
        title: "Submit your project", 
        description: "All you have to do is fill out our online application and submit it along with the required documents and materials",
        position: "left" 
    },
    { 
        id: 2, title: "Application Review", description: "Our team of experienced industry professionals will review your application and work",
        position: "middle" 
    },
    { 
        id: 3, 
        title: "Your film get funded", 
        description: "Once your application approved, we'll provide you with the funding you need to bring your project to life",
        position: "right" 
    },
]


export const faqs = [
    { 
        id: 1, 
        question: "How do we apply for funding in ARBGold", 
        answer: ' you can apply by filling out an online application form and submit a proposal detailing your project. our team of experts will review your application and provide a feedback how to improve a proposal. once your proposal is ready, you can submit to us for review' 
    },
    { 
        id: 2, 
        question: "What kind of project did you fund", 
        answer: ' you can apply by filling out an online application form and submit a proposal detailing your project. our team of experts will review your application and provide a feedback how to improve a proposal. once your proposal is ready, you can submit to us for review' 
    },
    { 
        id: 3, 
        question: "How long does the funding process take", 
        answer: ' you can apply by filling out an online application form and submit a proposal detailing your project. our team of experts will review your application and provide a feedback how to improve a proposal. once your proposal is ready, you can submit to us for review' 
    },
    { 
        id: 4, 
        question: "What are the terms of the funding agreement", 
        answer: 'you can apply by filling out an online application form and submit a proposal detailing your project. our team of experts will review your application and provide a feedback how to improve a proposal. once your proposal is ready, you can submit to us for review' 
    },
    { 
        id: 5, 
        question: "Can i apply for funding for multiple projects", 
        answer: ' you can apply by filling out an online application form and submit a proposal detailing your project. our team of experts will review your application and provide a feedback how to improve a proposal. once your proposal is ready, you can submit to us for review' 
    },
]


export const footerLinks = [
    {id: 1, title: 'Waitlists'},
    {id: 2, title: 'Buy Token'},
    {id: 3, title: 'Whitepaper'},
    {id: 4, title: 'Roadmap'},
    {id: 5, title: 'Tokenomic'},
]
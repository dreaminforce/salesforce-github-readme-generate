const rawClouds = [
  {
    name: "Einstein AI",
    src: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/06/icon-ai.svg?w=1024",
  },
  {
    name: "Sales Cloud",
    src: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/06/icon-sales.svg?w=1024",
  },
  {
    name: "Service Cloud",
    src: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/06/icon-service.svg?w=1024",
  },
  {
    name: "Experience Cloud",
    src: "https://www.dreaminforce.com/wp-content/uploads/2026/02/BGBGBG-removebg-preview.png",
  },
  {
    name: "Marketing Cloud",
    src: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/06/icon-marketing.svg?w=1024",
  },
  {
    name: "Commerce Cloud",
    src: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/06/icon-commerce.svg?w=1024",
  },
  {
    name: "Data 360 (Data Cloud)",
    src: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/06/icon-data-cloud.svg?w=1024",
  },
  {
    name: "Tableau",
    src: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/06/icon-tableau.svg?w=1024",
  },
  {
    name: "MuleSoft",
    src: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/06/icon-mulesoft.svg?w=1024",
  },
  {
    name: "Slack",
    src: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/06/icon-slack.svg?w=1024",
  },
  {
    name: "Agentforce 360 Platform",
    src: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/06/icon-platform.svg?w=1024",
  },
  {
    name: "Heroku",
    src: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/06/icon-heroku.svg?w=1024",
  },
  {
    name: "Net Zero Cloud",
    src: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/06/icon-net-zero.svg?w=1024",
  },
  {
    name: "Small Business",
    src: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/06/icon-small-business.svg?w=1024",
  },
  {
    name: "Partners",
    src: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/06/icon-partner-apps.svg?w=1024",
  },
  {
    name: "Customer Success",
    src: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/06/icon-cust-success.svg?w=1024",
  },
];

const rawCerts = [
  {
    name: "Advanced Field Service Accredited Professional",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAHxP&oid=00DF0000000gZsu&lastMod=1746785688000",
  },
  {
    name: "B2B Commerce for Administrators Accredited Professional",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAQRC&oid=00DF0000000gZsu&lastMod=1746785761000",
  },
  {
    name: "B2B Commerce for Developers Accredited Professional",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAKYg&oid=00DF0000000gZsu&lastMod=1746785908000",
  },
  {
    name: "Communications Cloud Accredited Professional",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MALL4&oid=00DF0000000gZsu&lastMod=17467860080000",
  },
  {
    name: "Consumer Goods Cloud Accredited Professional",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MACPs&oid=00DF0000000gZsu&lastMod=17467861100000",
  },
  {
    name: "Consumer Goods Cloud: Trade Promotion Management Accredited Professional",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAHR8&oid=00DF0000000gZsu&lastMod=1746786186000",
  },
  {
    name: "Contact Center Accredited Professional",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MARtV&oid=00DF0000000gZsu&lastMod=1746786303000",
  },
  {
    name: "CPQ and Billing Consultant Accredited Professional",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000RvF1C&oid=00DF0000000gZsu&lastMod=1757043094000",
  },
  {
    name: "Energy and Utilities Cloud Accredited Professional",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MARlS&oid=00DF0000000gZsu&lastMod=1746786418000",
  },
  {
    name: "Financial Services Cloud Accredited Professional",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAS9d&oid=00DF0000000gZsu&lastMod=1746786505000",
  },
  {
    name: "Health Cloud Accredited Professional",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MASET&oid=00DF0000000gZsu&lastMod=1746786591000",
  },
  {
    name: "Heroku Developer Accredited Professional",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MASKv&oid=00DF0000000gZsu&lastMod=17467867030000",
  },
  {
    name: "Loyalty Management Accredited Professional",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MASXp&oid=00DF0000000gZsu&lastMod=1746786791000",
  },
  {
    name: "Manufacturing Cloud Accredited Professional",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAIOp&oid=00DF0000000gZsu&lastMod=1746786853000",
  },
  {
    name: "Marketing Cloud Advanced Cross Channel Accredited Professional",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAKqQ&oid=00DF0000000gZsu&lastMod=1746786920000",
  },
  {
    name: "Marketing Cloud Intelligence Accredited Professional",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MASsn&oid=00DF0000000gZsu&lastMod=1746787007000",
  },
  {
    name: "Marketing Cloud Personalization Accredited Professional",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAIgf&oid=00DF0000000gZsu&lastMod=1746787093000",
  },
  {
    name: "Media Cloud Accredited Professional",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MATAX&oid=00DF0000000gZsu&lastMod=1746787343000",
  },
  {
    name: "Net Zero Cloud Accredited Professional",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MASWF&oid=00DF0000000gZsu&lastMod=1746787492000",
  },
  {
    name: "Order Management Administrator Accredited Professional",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAFKU&oid=00DF0000000gZsu&lastMod=1746787580000",
  },
  {
    name: "Order Management Developer Accredited Professional",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAKgl&oid=00DF0000000gZsu&lastMod=1746787662000",
  },
  {
    name: "Process Automation Accredited Professional",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MARrv&oid=00DF0000000gZsu&lastMod=1746787817000",
  },
  {
    name: "Public Sector Solutions Accredited Professional",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAJCq&oid=00DF0000000gZsu&lastMod=1746788014000",
  },
  {
    name: "Salesforce Certified Agentforce Specialist",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA14b&oid=00DF0000000gZsu&lastMod=1746774124000",
  },
  {
    name: "Salesforce Certified Application Architect",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA3cf&oid=00DF0000000gZsu&lastMod=1746774357000",
  },
  {
    name: "Salesforce Certified B2B Solution Architect",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA47J&oid=00DF0000000gZsu&lastMod=1746774504000",
  },
  {
    name: "Salesforce Certified B2C Commerce Architect",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA5Mj&oid=00DF0000000gZsu&lastMod=1746774836000",
  },
  {
    name: "Salesforce Certified B2C Commerce Cloud Developer",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA71x&oid=00DF0000000gZsu&lastMod=1750929333000",
  },
  {
    name: "Salesforce Certified B2C Solution Architect",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA7mj&oid=00DF0000000gZsu&lastMod=17467754610000",
  },
  {
    name: "Salesforce Certified Business Analyst",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA5ky&oid=00DF0000000gZsu&lastMod=1746775595000",
  },
  {
    name: "Salesforce Certified CPQ Administrator",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA8XV&oid=00DF0000000gZsu&lastMod=1746775710000",
  },
  {
    name: "Salesforce Certified CRM Analytics and Einstein Discovery Consultant",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MACXt&oid=00DF0000000gZsu&lastMod=1746777701000",
  },
  {
    name: "Salesforce Certified Data Cloud Consultant",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MACb7&oid=00DF0000000gZsu&lastMod=1746777787000",
  },
  {
    name: "Salesforce Certified Education Cloud Consultant",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MACBK&oid=00DF0000000gZsu&lastMod=1746777861000",
  },
  {
    name: "Salesforce Certified Experience Cloud Consultant",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAC4t&oid=00DF0000000gZsu&lastMod=1746777975000",
  },
  {
    name: "Salesforce Certified Field Service Consultant",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MADH3&oid=00DF0000000gZsu&lastMod=1746778048000",
  },
  {
    name: "Salesforce Certified Heroku Architect",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAE53&oid=00DF0000000gZsu&lastMod=1746778476000",
  },
  {
    name: "Salesforce Certified Industries CPQ Developer",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAEGL&oid=00DF0000000gZsu&lastMod=1746778584000",
  },
  {
    name: "Salesforce Certified JavaScript Developer",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAERd&oid=00DF0000000gZsu&lastMod=1746778675000",
  },
  {
    name: "Salesforce Certified Marketing Cloud Account Engagement Consultant",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAEY5&oid=00DF0000000gZsu&lastMod=1746778751000",
  },
  {
    name: "Salesforce Certified Marketing Cloud Account Engagement Specialist",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA4P6&oid=00DF0000000gZsu&lastMod=1746778826000",
  },
  {
    name: "Salesforce Certified Marketing Cloud Email Specialist",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA6nT&oid=00DF0000000gZsu&lastMod=1746778963000",
  },
  {
    name: "Salesforce Certified Marketing Cloud Engagement Administrator",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAEzV&oid=00DF0000000gZsu&lastMod=1746779113000",
  },
  {
    name: "Salesforce Certified Marketing Cloud Engagement Consultant",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAExu&oid=00DF0000000gZsu&lastMod=1746779207000",
  },
  {
    name: "Salesforce Certified Marketing Cloud Engagement Developer",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MACck&oid=00DF0000000gZsu&lastMod=1746779293000",
  },
  {
    name: "Salesforce Certified Marketing Cloud Engagement Foundations",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000M9wJS&oid=00DF0000000gZsu&lastMod=17467726020000",
  },
  {
    name: "Salesforce Certified MuleSoft Catalyst Consultant",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAFNh&oid=00DF0000000gZsu&lastMod=1746779398000",
  },
  {
    name: "Salesforce Certified MuleSoft Developer",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAFSX&oid=00DF0000000gZsu&lastMod=1746779466000",
  },
  {
    name: "Salesforce Certified MuleSoft Developer II",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAD2Y&oid=00DF0000000gZsu&lastMod=1746779554000",
  },
  {
    name: "Salesforce Certified MuleSoft Hyperautomation Developer",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAFdp&oid=00DF0000000gZsu&lastMod=1746779653000",
  },
  {
    name: "Salesforce Certified MuleSoft Integration Foundations",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAJBC&oid=00DF0000000gZsu&lastMod=1746782446000",
  },
  {
    name: "Salesforce Certified MuleSoft Platform Architect",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MABX1&oid=00DF0000000gZsu&lastMod=1746779772000",
  },
  {
    name: "Salesforce Certified MuleSoft Platform Integration Architect",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAFp7&oid=00DF0000000gZsu&lastMod=17467798500000",
  },
  {
    name: "Salesforce Certified Nonprofit Cloud Consultant (NPC)",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAG0P&oid=00DF0000000gZsu&lastMod=17467799240000",
  },
  {
    name: "Salesforce Certified Nonprofit Success Pack Consultant",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA8an&oid=00DF0000000gZsu&lastMod=1746780043000",
  },
  {
    name: "Salesforce Certified Omnistudio Consultant",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MABgg&oid=00DF0000000gZsu&lastMod=1746780478000",
  },
  {
    name: "Salesforce Certified Omnistudio Developer",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAGgL&oid=00DF0000000gZsu&lastMod=17467805850000",
  },
  {
    name: "Salesforce Certified Platform Administrator",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAGlB&oid=00DF0000000gZsu&lastMod=17467806380000",
  },
  {
    name: "Salesforce Certified Platform Administrator II",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA8Sh&oid=00DF0000000gZsu&lastMod=1746780709000",
  },
  {
    name: "Salesforce Certified Platform App Builder",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAEmf&oid=00DF0000000gZsu&lastMod=1746780791000",
  },
  {
    name: "Salesforce Certified Platform Data Architect",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAH9N&oid=00DF0000000gZsu&lastMod=1746780867000",
  },
  {
    name: "Salesforce Certified Platform Developer",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA9LY&oid=00DF0000000gZsu&lastMod=1746780949000",
  },
  {
    name: "Salesforce Certified Platform Developer II",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000M9w3J&oid=00DF0000000gZsu&lastMod=1746772244000",
  },
  {
    name: "Salesforce Certified Platform Development Lifecycle and Deployment Architect",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MACCx&oid=00DF0000000gZsu&lastMod=1746781106000",
  },
  {
    name: "Salesforce Certified Platform Foundations",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA6fO&oid=00DF0000000gZsu&lastMod=1746782543000",
  },
  {
    name: "Salesforce Certified Platform Identity and Access Management Architect",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAHMH&oid=00DF0000000gZsu&lastMod=1746781203000",
  },
  {
    name: "Salesforce Certified Platform Integration Architect",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAD90&oid=00DF0000000gZsu&lastMod=1746781278000",
  },
  {
    name: "Salesforce Certified Platform Sharing and Visibility Architect",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAEwI&oid=00DF0000000gZsu&lastMod=1746781356000",
  },
  {
    name: "Salesforce Certified Platform Strategy Designer",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAHUM&oid=00DF0000000gZsu&lastMod=17467814700000",
  },
  {
    name: "Salesforce Certified Platform User Experience Designer",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA970&oid=00DF0000000gZsu&lastMod=1746781558000",
  },
  {
    name: "Salesforce Certified Revenue Cloud Consultant",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000RvFu2&oid=00DF0000000gZsu&lastMod=1757043006000",
  },
  {
    name: "Salesforce Certified Sales Cloud Consultant",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAHu9&oid=00DF0000000gZsu&lastMod=1746781628000",
  },
  {
    name: "Salesforce Certified Sales Foundations",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA4go&oid=00DF0000000gZsu&lastMod=1746782661000",
  },
  {
    name: "Salesforce Certified Service Cloud Consultant",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAI2D&oid=00DF0000000gZsu&lastMod=1746781709000",
  },
  {
    name: "Salesforce Certified Slack Administrator",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAIBt&oid=00DF0000000gZsu&lastMod=1746781780000",
  },
  {
    name: "Salesforce Certified Slack Consultant",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAIJx&oid=00DF0000000gZsu&lastMod=1746781874000",
  },
  {
    name: "Salesforce Certified Slack Developer",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAHuA&oid=00DF0000000gZsu&lastMod=1746781969000",
  },
  {
    name: "Salesforce Certified System Architect",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAGWf&oid=00DF0000000gZsu&lastMod=1746780435000",
  },
  {
    name: "Salesforce Certified Tableau Architect",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA9rm&oid=00DF0000000gZsu&lastMod=1746778707000",
  },
  {
    name: "Salesforce Certified Tableau Consultant",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA8MG&oid=00DF0000000gZsu&lastMod=1746778751000",
  },
  {
    name: "Salesforce Certified Tableau Data Analyst",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MAEbJ&oid=00DF0000000gZsu&lastMod=1746778793000",
  },
  {
    name: "Salesforce Certified Tableau Desktop Foundations",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MACL0&oid=00DF0000000gZsu&lastMod=1746778831000",
  },
  {
    name: "Salesforce Certified Tableau Server Administrator",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MADSM&oid=00DF0000000gZsu&lastMod=1746778874000",
  },
  {
    name: "Salesforce Certified Technical Architect - Architect Evaluation",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA6U6&oid=00DF0000000gZsu&lastMod=1746782051000",
  },
  {
    name: "Salesforce Certified Technical Architect - Architect Review Board Exam",
    src: "https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA6U6&oid=00DF0000000gZsu&lastMod=1746782051000",
  },
];

const rawTechStack = [
  "Apex",
  "Lightning Web Components (LWC)",
  "Lightning Design System (SLDS)",
  "Flow Builder",
  "OmniStudio",
  "Data Cloud",
  "Agentforce",
  "MuleSoft Anypoint",
  "Tableau",
  "Slack",
  "Salesforce CLI",
  "DevOps Center",
];

const form = document.getElementById("profileForm");
const output = document.getElementById("output");
const status = document.getElementById("status");
const cloudsContainer = document.getElementById("clouds");
const certsContainer = document.getElementById("certs");
const techStackContainer = document.getElementById("techStack");
const certSearch = document.getElementById("certSearch");
const showSelectedCerts = document.getElementById("showSelectedCerts");
const preview = document.getElementById("preview");
const outputPanel = document.querySelector(".output-panel");
const copyBtn = document.getElementById("copyBtn");
const downloadBtn = document.getElementById("downloadBtn");
const resetBtn = document.getElementById("resetBtn");
const demoBtn = document.getElementById("demoBtn");
const previewBtn = document.getElementById("previewBtn");
const selectAllClouds = document.getElementById("selectAllClouds");
const clearClouds = document.getElementById("clearClouds");
const selectAllCerts = document.getElementById("selectAllCerts");
const clearCerts = document.getElementById("clearCerts");
const selectAllTech = document.getElementById("selectAllTech");
const clearTech = document.getElementById("clearTech");
const customTech = document.getElementById("customTech");

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const clouds = rawClouds.map((item, index) => ({
  ...item,
  id: `${slugify(item.name)}-${index}`,
}));
const certs = rawCerts.map((item, index) => ({
  ...item,
  id: `${slugify(item.name)}-${index}`,
}));
const techStack = rawTechStack.map((name, index) => ({
  name,
  id: `${slugify(name)}-${index}`,
}));

const normalizeUrl = (value) => {
  if (!value) return "";
  if (/^(https?:\/\/|mailto:)/i.test(value)) return value;
  return `https://${value}`;
};

const LINKEDIN_ICON_URL = "https://img.icons8.com/?size=100&id=8808&format=png&color=000000";
const GITHUB_ICON_URL = "https://img.icons8.com/?size=100&id=12599&format=png&color=000000";
const BLOG_ICON_URL = "https://img.icons8.com/?size=100&id=GsMdC9NCKCAD&format=png&color=000000";
const EMAIL_ICON_URL = "https://img.icons8.com/?size=100&id=12623&format=png&color=000000";

const buildIconLink = (href, src, alt, size = 28) =>
  `<a href="${href}"><img src="${src}" alt="${alt}" width="${size}" height="${size}" /></a>`;

const buildIconRow = (items) => (items.length ? `<p align="left">\n${items.join("\n")}\n</p>` : "");

const getLines = (value) =>
  value
    .split(/\n/)
    .map((line) => line.trim())
    .filter(Boolean);

const getTags = (value) =>
  value
    .split(/[,\n]/)
    .map((tag) => tag.trim())
    .filter(Boolean);

const uniqueTags = (tags) => {
  const seen = new Set();
  return tags.filter((tag) => {
    const key = tag.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

const setStatus = (message) => {
  status.textContent = message;
  if (!message) return;
  window.clearTimeout(setStatus._timer);
  setStatus._timer = window.setTimeout(() => {
    status.textContent = "";
  }, 2600);
};

const renderOption = (item, type) => {
  const label = document.createElement("label");
  label.className = "icon-choice";
  label.dataset.name = item.name.toLowerCase();
  label.innerHTML = `
    <input type="checkbox" id="${type}-${item.id}" data-type="${type}" />
    <span class="icon"><img src="${item.src}" alt="${item.name}" loading="lazy" /></span>
    <span class="text">${item.name}</span>
  `;
  return label;
};

const renderTagOption = (item) => {
  const label = document.createElement("label");
  label.className = "tag-choice";
  label.dataset.name = item.name.toLowerCase();
  label.innerHTML = `
    <input type="checkbox" id="tech-${item.id}" data-type="tech" />
    <span>${item.name}</span>
  `;
  return label;
};

const buildIconBlock = (items) => {
  if (!items.length) return "";
  const icons = items
    .map((item) => `  <img src="${item.src}" alt="${item.name}" width="40" />`)
    .join("\n");
  return `<p align="left">\n${icons}\n</p>`;
};

const collectSelected = (items, type) =>
  items.filter((item) => document.getElementById(`${type}-${item.id}`)?.checked === true);

const collectProjects = () => {
  const projects = [1, 2, 3]
    .map((index) => {
      const name = document.getElementById(`project${index}`).value.trim();
      if (!name) return null;
      const link = document.getElementById(`project${index}link`).value.trim();
      const desc = document.getElementById(`project${index}desc`).value.trim();
      return { name, link, desc };
    })
    .filter(Boolean);
  return projects;
};

const buildReadme = () => {
  const name = document.getElementById("name").value.trim() || "Your Name";
  const headline = document.getElementById("headline").value.trim();
  const company = document.getElementById("company").value.trim();
  const location = document.getElementById("location").value.trim();
  const pronouns = document.getElementById("pronouns").value.trim();
  const banner = normalizeUrl(document.getElementById("banner").value.trim());
  const bio = document.getElementById("bio").value.trim();
  const current = document.getElementById("current").value.trim();
  const learning = document.getElementById("learning").value.trim();
  const ask = document.getElementById("ask").value.trim();
  const fun = document.getElementById("fun").value.trim();
  const highlights = getLines(document.getElementById("highlights").value);
  const selectedTech = collectSelected(techStack, "tech").map((item) => item.name);
  const customTechTags = getTags(customTech.value);
  const techTags = uniqueTags([...selectedTech, ...customTechTags]);
  const email = document.getElementById("email").value.trim();
  const blog = normalizeUrl(document.getElementById("website").value.trim());
  const linkedin = normalizeUrl(document.getElementById("linkedin").value.trim());
  const github = normalizeUrl(document.getElementById("github").value.trim());
  const trailhead = normalizeUrl(document.getElementById("trailhead").value.trim());
  const twitter = normalizeUrl(document.getElementById("twitter").value.trim());
  const showQuote = document.getElementById("showQuote").checked;
  const quote = document.getElementById("quote").value.trim();
  const selectedClouds = collectSelected(clouds, "cloud");
  const selectedCerts = collectSelected(certs, "cert");
  const projects = collectProjects();

  const lines = [];

  if (banner) {
    lines.push(`![Banner](${banner})`, "");
  }

  lines.push(`# Hi, I'm ${name} 👋`);

  const headlineBits = [
    headline ? `**${headline}**` : "",
    company,
    location,
  ].filter(Boolean);
  if (headlineBits.length) {
    lines.push(headlineBits.join(" · "));
  }

  if (bio) {
    lines.push("", bio);
  }

  const bullets = [];
  if (pronouns) bullets.push(`😄 Pronouns: ${pronouns}`);
  if (current) bullets.push(`🔭 ${current}`);
  if (learning) bullets.push(`🌱 ${learning}`);
  if (ask) bullets.push(`💬 Ask me about ${ask}`);
  if (fun) bullets.push(`⚡ ${fun}`);

  if (bullets.length) {
    lines.push("", ...bullets.map((item) => `- ${item}`));
  }

  if (selectedClouds.length) {
    lines.push("", "## Salesforce Clouds & Products", "", buildIconBlock(selectedClouds));
  }

  if (selectedCerts.length) {
    lines.push("", "## Certifications", "", buildIconBlock(selectedCerts));
  }

  if (techTags.length) {
    lines.push("", "## Tech Stack", "", techTags.map((tag) => `\`${tag}\``).join(" "));
  }

  if (highlights.length) {
    lines.push("", "## Highlights", "", ...highlights.map((item) => `- ${item}`));
  }

  if (projects.length) {
    lines.push("", "## Featured Projects", "");
    projects.forEach((project) => {
      const link = project.link ? `[${project.name}](${normalizeUrl(project.link)})` : project.name;
      const desc = project.desc ? ` — ${project.desc}` : "";
      lines.push(`- ${link}${desc}`);
    });
  }

  const iconLinks = [];
  if (email) iconLinks.push(buildIconLink(`mailto:${email}`, EMAIL_ICON_URL, "Email"));
  if (blog) iconLinks.push(buildIconLink(blog, BLOG_ICON_URL, "Blog"));
  if (linkedin) iconLinks.push(buildIconLink(linkedin, LINKEDIN_ICON_URL, "LinkedIn"));
  if (github) iconLinks.push(buildIconLink(github, GITHUB_ICON_URL, "GitHub"));

  const textLinks = [];
  if (trailhead) textLinks.push(`[Trailhead](${trailhead})`);
  if (twitter) textLinks.push(`[Twitter/X](${twitter})`);

  if (iconLinks.length || textLinks.length) {
    lines.push("", "## Connect", "");
    if (iconLinks.length) lines.push(buildIconRow(iconLinks));
    if (textLinks.length) lines.push(textLinks.join(" · "));
  }

  if (showQuote && quote) {
    lines.push("", `> ${quote}`);
  }

  return lines.join("\n").trim() + "\n";
};

let previewVisible = false;

const renderPreview = () => {
  if (!preview) return;
  if (!previewVisible) return;
  if (window.marked) {
    const html = marked.parse(output.value, { gfm: true, breaks: true });
    const sanitized = window.DOMPurify
      ? DOMPurify.sanitize(html, { ADD_ATTR: ["align", "width", "height"] })
      : html;
    preview.innerHTML = sanitized;
  } else {
    preview.textContent = "Live preview unavailable (markdown parser not loaded).";
  }
};

const updateSelectionStates = () => {
  document.querySelectorAll(".icon-choice, .tag-choice").forEach((label) => {
    const input = label.querySelector("input");
    label.classList.toggle("is-selected", input?.checked === true);
  });
};

const updateOutput = () => {
  output.value = buildReadme();
  filterCerts();
  updateSelectionStates();
  renderPreview();
};

const filterCerts = () => {
  const query = certSearch.value.trim().toLowerCase();
  const selectedOnly = showSelectedCerts.checked;
  const labels = certsContainer.querySelectorAll(".icon-choice");
  labels.forEach((label) => {
    const input = label.querySelector("input");
    const matches = !query || label.dataset.name.includes(query);
    const visible = matches && (!selectedOnly || input.checked);
    label.style.display = visible ? "grid" : "none";
  });
};

const setAll = (container, checked, shouldUpdate = true) => {
  container.querySelectorAll("input[type='checkbox']").forEach((input) => {
    input.checked = checked;
    input.defaultChecked = checked;
  });
  if (shouldUpdate) updateOutput();
};

const copyOutput = async () => {
  try {
    await navigator.clipboard.writeText(output.value);
    setStatus("Copied to clipboard.");
  } catch (error) {
    output.select();
    document.execCommand("copy");
    setStatus("Copied to clipboard.");
  }
};

const downloadOutput = () => {
  const blob = new Blob([output.value], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "README.md";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  setStatus("README.md downloaded.");
};

const resetForm = () => {
  form.reset();
  setAll(cloudsContainer, false, false);
  setAll(certsContainer, false, false);
  setAll(techStackContainer, false, false);
  certSearch.value = "";
  showSelectedCerts.checked = false;
  customTech.value = "";
  updateOutput();
  setStatus("Form reset.");
};

const togglePreview = () => {
  previewVisible = !previewVisible;
  outputPanel.classList.toggle("preview-on", previewVisible);
  previewBtn.textContent = previewVisible ? "Show Code" : "Show Preview";
  previewBtn.setAttribute("aria-pressed", String(previewVisible));
  renderPreview();
};

const setSelectedByNames = (container, names) => {
  const targets = new Set(names.map((name) => name.toLowerCase()));
  container.querySelectorAll(".icon-choice, .tag-choice").forEach((label) => {
    const input = label.querySelector("input");
    input.checked = targets.has(label.dataset.name);
  });
};

const fillDemo = () => {
  document.getElementById("name").value = "Maya Chen";
  document.getElementById("headline").value = "Salesforce Solution Architect";
  document.getElementById("company").value = "Nimbus CX Labs";
  document.getElementById("location").value = "Seattle, WA";
  document.getElementById("pronouns").value = "she/her";
  document.getElementById("banner").value =
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80";
  document.getElementById("bio").value =
    "I design scalable CRM experiences across Sales, Service, and Data Cloud with an AI-first mindset.";
  document.getElementById("current").value = "Building Agentforce copilots for customer success teams";
  document.getElementById("learning").value = "RAG patterns, Data Cloud segmentation, and Slack automations";
  document.getElementById("ask").value = "Sales Cloud revops strategy, LWC performance, governance";
  document.getElementById("fun").value = "I turn Trailhead quests into team learning challenges";
  document.getElementById("highlights").value =
    "Led a 3-region Sales Cloud rollout for 2,000+ users\\nDelivered Einstein-powered service deflection flows\\nBuilt a reusable Data Cloud ingestion toolkit";
  document.getElementById("project1").value = "Agentforce Success Desk";
  document.getElementById("project1link").value = "https://github.com/example/agentforce-success-desk";
  document.getElementById("project1desc").value = "AI-assisted knowledge routing for service teams";
  document.getElementById("project2").value = "Revenue Cloud Sprint Kit";
  document.getElementById("project2link").value = "https://github.com/example/revenue-cloud-sprint-kit";
  document.getElementById("project2desc").value = "Reusable CPQ + billing flows for fast launches";
  document.getElementById("project3").value = "Data Cloud Mapper";
  document.getElementById("project3link").value = "https://github.com/example/data-cloud-mapper";
  document.getElementById("project3desc").value = "Standardized schema mappings for MuleSoft pipelines";
  document.getElementById("email").value = "maya.chen@nimbuscx.dev";
  document.getElementById("website").value = "https://nimbuscx.dev";
  document.getElementById("linkedin").value = "https://linkedin.com/in/mayachen";
  document.getElementById("github").value = "https://github.com/mayachen";
  document.getElementById("trailhead").value = "";
  document.getElementById("twitter").value = "";
  document.getElementById("showQuote").checked = false;
  document.getElementById("quote").value = "";

  setSelectedByNames(cloudsContainer, [
    "Einstein AI",
    "Sales Cloud",
    "Service Cloud",
    "Data 360 (Data Cloud)",
    "Slack",
    "MuleSoft",
    "Tableau",
    "Agentforce 360 Platform",
  ]);

  setSelectedByNames(certsContainer, [
    "Salesforce Certified Application Architect",
    "Salesforce Certified Platform App Builder",
    "Salesforce Certified Data Cloud Consultant",
    "Salesforce Certified Sales Cloud Consultant",
    "Salesforce Certified Service Cloud Consultant",
    "Salesforce Certified JavaScript Developer",
  ]);

  setSelectedByNames(techStackContainer, [
    "Apex",
    "Lightning Web Components (LWC)",
    "Flow Builder",
    "OmniStudio",
    "Data Cloud",
    "Agentforce",
    "MuleSoft Anypoint",
    "Tableau",
    "Slack",
    "Salesforce CLI",
  ]);

  customTech.value = "GitHub Actions";

  certSearch.value = "";
  showSelectedCerts.checked = false;
  updateOutput();
  setStatus("Example data loaded.");
};

clouds.forEach((item) => cloudsContainer.appendChild(renderOption(item, "cloud")));
certs.forEach((item) => certsContainer.appendChild(renderOption(item, "cert")));
techStack.forEach((item) => techStackContainer.appendChild(renderTagOption(item)));

setAll(cloudsContainer, false, false);
setAll(certsContainer, false, false);
setAll(techStackContainer, false, false);

form.addEventListener("input", updateOutput);
certSearch.addEventListener("input", filterCerts);
showSelectedCerts.addEventListener("change", filterCerts);
copyBtn.addEventListener("click", copyOutput);
downloadBtn.addEventListener("click", downloadOutput);
resetBtn.addEventListener("click", resetForm);
demoBtn.addEventListener("click", fillDemo);
previewBtn.addEventListener("click", togglePreview);
selectAllClouds.addEventListener("click", () => setAll(cloudsContainer, true));
clearClouds.addEventListener("click", () => setAll(cloudsContainer, false));
selectAllCerts.addEventListener("click", () => setAll(certsContainer, true));
clearCerts.addEventListener("click", () => setAll(certsContainer, false));
selectAllTech.addEventListener("click", () => setAll(techStackContainer, true));
clearTech.addEventListener("click", () => setAll(techStackContainer, false));

updateOutput();

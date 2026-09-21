import fs from 'fs';
import path from 'path';

function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;
  
  for (const [target, replacement] of replacements) {
    // using split and join to replace all occurrences
    content = content.split(target).join(replacement);
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
}

// File: LocationPage.tsx
replaceInFile(path.join('src', 'pages', 'LocationPage.tsx'), [
  [
    `{ q: \`Is Young Electric Inc an electrical contractor?\`, a: \`No. Young Electric Inc is a lead-generation service. We connect you with independent local residential electrical providers who perform the work. We do not employ electricians or perform electrical work ourselves.\` }`,
    `{ q: \`Are you a licensed and insured electrical contractor?\`, a: \`Yes, Young Electric Inc is a fully licensed and insured electrical contractor serving the local area with professional residential electrical services.\` }`
  ],
  [
    `Young Electric Inc is a lead-generation service that connects homeowners in {location.name} with independent local residential electrical providers. We are not an electrical contractor and do not perform electrical work ourselves. When you call {site.phone}, we connect you with an available local provider who handles all service, scheduling, and pricing directly with you.`,
    `Young Electric Inc is your trusted local electrical contractor serving homeowners in {location.name}. Our team of skilled electricians provides top-quality residential electrical services. When you call {site.phone}, you speak directly with our team to schedule service, get pricing, and have your electrical needs resolved efficiently.`
  ]
]);

// File: HomePage.tsx
replaceInFile(path.join('src', 'pages', 'HomePage.tsx'), [
  [
    `Young Electric Inc is a lead-generation service that connects homeowners in Boca Raton and surrounding South Florida communities with independent local residential electrical providers. We are not an electrical contractor — we help you find and connect with available local professionals who handle home electrical work.`,
    `Young Electric Inc is a premier electrical contractor serving homeowners in Boca Raton and surrounding South Florida communities. We provide professional, reliable, and high-quality residential electrical services. Our experienced team is ready to handle all your home electrical needs.`
  ],
  [
    `<strong>Lead-Generation Service:</strong> Young Electric Inc connects homeowners with independent local residential electrical providers. We are not an electrical contractor and do not perform electrical work. Service agreements are between the homeowner and the provider. We serve residential properties only.`,
    `<strong>Professional Electrical Services:</strong> Young Electric Inc provides top-tier residential electrical services. We are a dedicated electrical contractor focused on safety, quality, and customer satisfaction. All work is performed by our skilled professionals to meet your home's needs.`
  ]
]);

// File: ContactPage.tsx
replaceInFile(path.join('src', 'pages', 'ContactPage.tsx'), [
  [
    `Young Electric Inc is a lead-generation service. We connect homeowners with independent local residential electrical providers. Call us and we will connect you with an available provider who handles all service, scheduling, and pricing directly with you.`,
    `Young Electric Inc is your trusted local electrical contractor. We provide reliable residential electrical services. Call us today to speak with our team and schedule your service directly.`
  ],
  [
    `<strong>Lead-Generation Disclaimer:</strong> Young Electric Inc is a lead-generation service, not an electrical contractor. We do not perform electrical work or employ electricians. We connect homeowners with independent local residential electrical providers. Any service agreements are directly between the homeowner and the provider.`,
    `<strong>Professional Service Guarantee:</strong> Young Electric Inc is a dedicated electrical contractor committed to excellence. We take pride in our work and ensure that every residential electrical project is completed with the highest standards of safety and quality by our experienced team.`
  ]
]);

// File: Footer.tsx
replaceInFile(path.join('src', 'components', 'Footer.tsx'), [
  [
    `A lead-generation service connecting Boca Raton and South Florida homeowners with independent local residential electrical providers.`,
    `A professional electrical contractor serving Boca Raton and South Florida homeowners with reliable residential electrical services.`
  ],
  [
    `<strong className="text-neutral-300">Lead-Generation Disclaimer:</strong> Young Electric Inc is a lead-generation service that connects homeowners with independent local residential electrical providers. We are not an electrical contractor, do not employ electricians, and do not perform electrical work. We do not guarantee availability, pricing, or the quality of work performed by any provider. Any service agreements, warranties, or guarantees are between the homeowner and the independent provider. We facilitate connections for residential electrical services only and do not offer commercial, industrial, office, retail, restaurant, warehouse, or business electrical services.`,
    `<strong className="text-neutral-300">Service Guarantee:</strong> Young Electric Inc is a licensed and insured electrical contractor providing high-quality residential electrical services. We take pride in our workmanship and guarantee the quality of our services. Our team is dedicated to safety and customer satisfaction. We focus exclusively on residential properties, ensuring your home receives the specialized care it deserves.`
  ]
]);

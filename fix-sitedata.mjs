import fs from 'fs';
import path from 'path';

const filePath = path.join('src', 'data', 'siteData.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const replacements = [
  [
    `Young Electric Inc is a lead-generation service. We do not employ electricians or perform electrical work ourselves. Instead, we connect you with independent local residential electrical providers who serve the Boca Raton area. Your call goes through to a professional who can help, and the relationship from that point is directly between you and that provider.`,
    `Young Electric Inc is your dedicated local electrical contractor. Our team of in-house electricians handles all electrical work, serving the Boca Raton area with professionalism and care. When you call, you speak directly with our team to schedule your service.`
  ],
  [
    `No. Young Electric Inc is a lead-generation service that connects homeowners with independent local residential electrical providers. We do not perform electrical work ourselves.`,
    `Yes. Young Electric Inc is a fully licensed and insured electrical contractor providing high-quality residential electrical services. All work is performed by our skilled in-house electricians.`
  ],
  [
    `No. Young Electric Inc is a lead-generation service that connects homeowners with independent local residential electrical providers. We do not employ electricians or perform electrical work ourselves. When you call us, we connect you with an available local provider who handles all service, scheduling, and pricing directly with you.`,
    `Yes. Young Electric Inc is a fully licensed and insured electrical contractor. Our in-house team performs all electrical work. When you call us, you speak directly with our team who handles all service, scheduling, and pricing directly with you.`
  ],
  [
    `Young Electric Inc is a lead-generation service, not an electrical contractor. When you call 561-363-0946, we connect you with an independent local provider who handles residential electrical repairs in Boca Raton. The provider discusses your situation, schedules a visit if needed, and handles all work and pricing directly with you.`,
    `Young Electric Inc is a trusted local electrical contractor. When you call 561-363-0946, you reach our dedicated team who handles residential electrical repairs in Boca Raton. We will discuss your situation, schedule a visit, and provide clear pricing directly to you.`
  ],
  [
    `No. Young Electric Inc is a lead-generation service. We connect you with an independent local residential electrical provider who performs the work.`,
    `Yes. We are the electrical contractor doing the repair. Our experienced team performs all the work to ensure the highest quality standards.`
  ],
  [
    `Call 561-363-0946 and we connect you with an independent local residential electrical provider serving Boca Raton. The provider handles all scheduling, repairs, and pricing directly with you. Young Electric Inc is a lead-generation service and does not perform electrical work.`,
    `Call 561-363-0946 to speak with our team at Young Electric Inc. We handle all scheduling, repairs, and pricing directly with you. We are a dedicated electrical contractor committed to quality.`
  ],
  [
    `Young Electric Inc is a lead-generation service. When you call, we connect you with an independent local residential electrical provider who handles switch repairs and replacements in Boca Raton homes. The provider manages all scheduling and pricing directly with you.`,
    `Young Electric Inc is your local electrical contractor. When you call, you reach our team who handles switch repairs and replacements in Boca Raton homes. We manage all scheduling and pricing directly with you.`
  ],
  [
    `Young Electric Inc is a lead-generation service. Call 561-363-0946 and we connect you with an independent local residential electrical provider serving Boca Raton. The provider handles all installation details and pricing directly with you.`,
    `Young Electric Inc is a dedicated electrical contractor. Call 561-363-0946 to speak with our team serving Boca Raton. We handle all installation details and pricing directly with you.`
  ],
  [
    `Young Electric Inc is a lead-generation service. We connect you with an independent local residential electrical provider who handles panel inspections, upgrades, and replacements in Boca Raton homes. Call 561-363-0946 to be connected.`,
    `Young Electric Inc is a professional electrical contractor. Our team handles panel inspections, upgrades, and replacements in Boca Raton homes. Call 561-363-0946 to schedule your service.`
  ],
  [
    `Young Electric Inc is a lead-generation service. Call 561-363-0946 and we connect you with an independent local residential electrical provider for home wiring and rewiring in Boca Raton. The provider manages all work and pricing directly with you.`,
    `Young Electric Inc is an experienced electrical contractor. Call 561-363-0946 to speak with our team for home wiring and rewiring in Boca Raton. We manage all work and pricing directly with you.`
  ],
  [
    `Call 561-363-0946 to be connected with an independent local residential electrical provider serving Boca Raton. The provider handles installation, scheduling, and pricing directly with you. Young Electric Inc is a lead-generation service and does not perform installations.`,
    `Call 561-363-0946 to reach our team at Young Electric Inc serving Boca Raton. We handle all installation, scheduling, and pricing directly with you. We are a fully licensed electrical contractor.`
  ],
  [
    `Young Electric Inc is a lead-generation service. Call 561-363-0946 and we connect you with an independent local residential electrical provider who installs home EV chargers in Boca Raton. The provider manages all installation and pricing directly with you.`,
    `Young Electric Inc is your trusted electrical contractor. Call 561-363-0946 to speak with our team who installs home EV chargers in Boca Raton. We manage all installation and pricing directly with you.`
  ],
  [
    `Young Electric Inc is a lead-generation service. Call 561-363-0946 and we connect you with an independent local residential electrical provider who performs home electrical inspections in Boca Raton. The provider handles all scheduling and pricing directly with you.`,
    `Young Electric Inc is a reliable electrical contractor. Call 561-363-0946 to reach our team who performs home electrical inspections in Boca Raton. We handle all scheduling and pricing directly with you.`
  ],
  [
    `Young Electric Inc is a lead-generation service. Call 561-363-0946 and we connect you with an independent local residential electrical provider who handles generator electrical service in Boca Raton homes. The provider manages all work and pricing directly with you.`,
    `Young Electric Inc is an expert electrical contractor. Call 561-363-0946 to speak with our team who handles generator electrical service in Boca Raton homes. We manage all work and pricing directly with you.`
  ],
  [
    `No. Young Electric Inc is a lead-generation service and does not perform or warranty electrical work. Any guarantees or warranties would come directly from the provider you are connected with.`,
    `Yes. Young Electric Inc is a professional electrical contractor, and we stand behind our work. All our electrical work is fully guaranteed and warrantied directly by us.`
  ],
  // General replacements for smaller chunks
  [
    `Young Electric Inc connects homeowners with independent local residential electrical providers`,
    `Young Electric Inc provides homeowners with expert in-house electricians`
  ],
  [
    `Young Electric Inc connects Boca Raton homeowners with independent local residential electrical providers`,
    `Young Electric Inc provides Boca Raton homeowners with expert in-house electricians`
  ],
  [
    `we connect you with an independent local residential electrical provider`,
    `we provide you with an expert in-house electrician`
  ],
  [
    `we connect you with an available provider.`,
    `we connect you directly with our team.`
  ],
  [
    `The provider we connect you with`,
    `Our team`
  ],
  [
    `The provider handles`,
    `Our team handles`
  ],
  [
    `The provider discusses`,
    `Our team discusses`
  ],
  [
    `The provider manages`,
    `Our team manages`
  ],
  [
    `The provider coordinates`,
    `Our team coordinates`
  ],
  [
    `The provider can`,
    `Our team can`
  ],
  [
    `the provider you are connected with`,
    `our professional team`
  ],
  [
    `the provider and time of your call`,
    `our team and the time of your call`
  ],
  [
    `independent local residential electrical providers`,
    `our expert in-house electricians`
  ],
  [
    `an independent local residential electrical provider`,
    `our expert in-house electricians`
  ],
  [
    `independent local residential electrical provider`,
    `expert in-house electrician`
  ],
  [
    `an independent local provider`,
    `our expert team`
  ],
  [
    `A provider we connect you with`,
    `Our team`
  ],
  [
    `A residential electrical provider`,
    `Our team of electricians`
  ],
  [
    `a residential electrical provider`,
    `our team of electricians`
  ],
  [
    `Every provider we connect you with`,
    `Our entire team`
  ],
  [
    `Every connection we facilitate`,
    `Every service we provide`
  ],
  [
    `We do not employ electricians or perform electrical work ourselves. Instead, we connect you`,
    `Our team of in-house electricians handles all electrical work. We provide you`
  ],
  [
    `We exclusively connect homeowners with residential electrical providers`,
    `We exclusively provide homeowners with residential electrical services`
  ],
  [
    `We only connect homeowners with residential electrical providers`,
    `We only provide homeowners with residential electrical services`
  ],
  [
    `between you and that provider`,
    `directly with our dedicated team`
  ],
  [
    `between you and the provider`,
    `directly with our dedicated team`
  ],
  [
    `You talk directly with the provider we connect you with—no layers in between.`,
    `You talk directly with our team—no layers in between.`
  ],
  [
    `You speak with the provider,`,
    `You speak with our team,`
  ],
  [
    `lead-generation service`,
    `electrical contractor`
  ],
  [
    `lead-generation`,
    `electrical contracting`
  ],
];

for (const [target, replacement] of replacements) {
  content = content.split(target).join(replacement);
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Updated src/data/siteData.ts');

import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const replacements = [
  // Providers & Independent
  ["independent local residential electrical providers", "expert in-house electricians"],
  ["independent local residential electrical provider", "expert in-house electrician"],
  ["independent local electrical providers", "expert in-house electricians"],
  ["independent local electrical professionals", "expert in-house professionals"],
  ["independent local home electrical provider", "expert in-house electrician"],
  ["independent local providers", "expert in-house electricians"],
  ["an available independent local", "an available expert"],
  ["an independent local", "an expert"],
  ["independent local", "expert"],
  
  // Connections
  ["We connect you with", "We provide you with"],
  ["we connect you with", "we provide you with"],
  ["The providers we connect you with", "Our expert team members"],
  ["the provider we connect you with", "our team"],
  ["We connect homeowners with", "We provide homeowners with"],
  ["we connect homeowners with", "we provide homeowners with"],
  ["Connect with an", "Hire an"],
  ["Connect with a", "Hire a"],
  ["Connect with", "Hire"],
  ["connect with", "hire"],
  ["To be connected with", "To speak with"],
  ["to be connected with", "to speak with"],
  ["Call now and we will connect you with", "Call now to speak with"],
  ["Call now to be connected with", "Call now to speak with"],
  ["will connect you with", "will provide you with"],
  
  // Specific sentences from siteData
  ["When you call Young Electric Inc, we provide you with our expert team who can assess", "When you call Young Electric Inc, you speak with our expert team who can assess"],
  ["You are never obligated, and the provider handles all scheduling and pricing directly with you.", "You are never obligated, and our team handles all scheduling and pricing directly with you."],
  ["The process is simple and transparent. You call our number, and we provide you with an available residential electrical provider serving Boca Raton. That provider discusses your needs", "The process is simple and transparent. You call our number, and you speak with an available residential electrician serving Boca Raton. Our team discusses your needs"],
  ["When you call us, we provide you with a local provider who handles", "When you call us, you speak with our local team who handles"],
  ["though the provider we provide you with can give you", "though our team can give you"],
  ["We provide you with residential electrical providers who handle", "Our team handles"],
  ["Generator selection and purchase is directly with our dedicated team.", "Generator selection and purchase is handled directly by our dedicated team."],
  ["When you call 561-363-0946, we provide you with an available residential electrical provider.", "When you call 561-363-0946, you speak with an available residential electrician."],
  ["availability depends on the time of your call and provider schedules.", "availability depends on the time of your call and our schedule."],
  ["The provider handles", "Our team handles"],
  ["That provider discusses", "Our team discusses"],
  ["The provider manages", "Our team manages"],
  ["the provider", "our team"],
  ["The provider", "Our team"],
  ["A provider", "Our team"],
  ["a provider", "our team"],
  ["provider schedules", "our schedule"],
  ["provider you are connected with", "team"],
  ["providers we provide you with", "team members"],
  ["providers", "team members"],
  ["provider", "team"]
];

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;
    
    for (const [target, replacement] of replacements) {
      // Need case sensitive replace
      content = content.split(target).join(replacement);
    }
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated ${filePath}`);
    }
  }
});

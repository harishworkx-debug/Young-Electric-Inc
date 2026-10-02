import fs from 'fs';
import https from 'https';
import path from 'path';

const imagesObj = {
  heroElectrician: { url: "https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", name: "electrician-boca-raton-fl.jpg" },
  heroPanel: { url: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", name: "residential-electrical-panel-upgrade.jpg" },
  electricianPanel: { url: "https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&w=940&h=650", name: "electrician-inspecting-breaker-box.jpg" },
  electricianDrill: { url: "https://images.pexels.com/photos/27928759/pexels-photo-27928759.jpeg?auto=compress&cs=tinysrgb&w=940&h=650", name: "electrical-contractor-drilling.jpg" },
  electricianWiring: { url: "https://images.pexels.com/photos/27928761/pexels-photo-27928761.jpeg?auto=compress&cs=tinysrgb&w=940&h=650", name: "installing-new-home-wiring.jpg" },
  panelCloseup: { url: "https://images.pexels.com/photos/8488029/pexels-photo-8488029.jpeg?auto=compress&cs=tinysrgb&w=940&h=650", name: "circuit-breakers-in-electrical-panel.jpg" },
  outletInstall: { url: "https://images.pexels.com/photos/4981794/pexels-photo-4981794.jpeg?auto=compress&cs=tinysrgb&w=940&h=650", name: "repairing-wall-receptacle.jpg" },
  outletWall: { url: "https://images.pexels.com/photos/5691494/pexels-photo-5691494.jpeg?auto=compress&cs=tinysrgb&w=940&h=650", name: "standard-120v-wall-outlet.jpg" },
  switchWall: { url: "https://images.pexels.com/photos/36738243/pexels-photo-36738243.jpeg?auto=compress&cs=tinysrgb&w=940&h=650", name: "modern-light-switch-installation.jpg" },
  outletCloseup: { url: "https://images.pexels.com/photos/978743/pexels-photo-978743.jpeg?auto=compress&cs=tinysrgb&w=940&h=650", name: "testing-outlet-voltage.jpg" },
  lightingLivingRoom: { url: "https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=940&h=650", name: "living-room-recessed-lighting.jpg" },
  lightingChandelier: { url: "https://images.pexels.com/photos/14495880/pexels-photo-14495880.jpeg?auto=compress&cs=tinysrgb&w=940&h=650", name: "dining-room-chandelier-installation.jpg" },
  lightingCeilingLight: { url: "https://images.pexels.com/photos/15269291/pexels-photo-15269291.jpeg?auto=compress&cs=tinysrgb&w=940&h=650", name: "led-ceiling-light-fixture.jpg" },
  ceilingFanRoom: { url: "https://images.pexels.com/photos/3990590/pexels-photo-3990590.jpeg?auto=compress&cs=tinysrgb&w=940&h=650", name: "living-room-ceiling-fan.jpg" },
  ceilingFanBedroom: { url: "https://images.pexels.com/photos/3958956/pexels-photo-3958956.jpeg?auto=compress&cs=tinysrgb&w=940&h=650", name: "bedroom-ceiling-fan-replacement.jpg" },
  evCharger: { url: "https://images.pexels.com/photos/27355826/pexels-photo-27355826.jpeg?auto=compress&cs=tinysrgb&w=940&h=650", name: "home-ev-charging-station.jpg" },
  evCharger2: { url: "https://images.pexels.com/photos/27355830/pexels-photo-27355830.jpeg?auto=compress&cs=tinysrgb&w=940&h=650", name: "level-2-ev-charger-plugged-in.jpg" },
  inspection: { url: "https://images.pexels.com/photos/8293680/pexels-photo-8293680.jpeg?auto=compress&cs=tinysrgb&w=940&h=650", name: "electrical-safety-inspection-checklist.jpg" },
  inspection2: { url: "https://images.pexels.com/photos/8293678/pexels-photo-8293678.jpeg?auto=compress&cs=tinysrgb&w=940&h=650", name: "electrician-evaluating-home-wiring.jpg" },
  surgeProtection: { url: "https://images.pexels.com/photos/39234197/pexels-photo-39234197.jpeg?auto=compress&cs=tinysrgb&w=940&h=650", name: "whole-home-surge-protector.jpg" },
  surgeOutlet: { url: "https://images.pexels.com/photos/218445/pexels-photo-218445.jpeg?auto=compress&cs=tinysrgb&w=940&h=650", name: "point-of-use-surge-protection-strip.jpg" },
  generator: { url: "https://images.pexels.com/photos/9875678/pexels-photo-9875678.jpeg?auto=compress&cs=tinysrgb&w=940&h=650", name: "residential-standby-generator.jpg" },
  wiring: { url: "https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&w=940&h=650", name: "new-construction-electrical-wiring.jpg" },
  wiring2: { url: "https://images.pexels.com/photos/3614763/pexels-photo-3614763.jpeg?auto=compress&cs=tinysrgb&w=940&h=650", name: "running-romex-cable-in-attic.jpg" },
  floridaHome: { url: "https://images.pexels.com/photos/19219055/pexels-photo-19219055.jpeg?auto=compress&cs=tinysrgb&w=940&h=650", name: "south-florida-residential-home.jpg" },
  floridaHome2: { url: "https://images.pexels.com/photos/5177211/pexels-photo-5177211.jpeg?auto=compress&cs=tinysrgb&w=940&h=650", name: "modern-florida-house-exterior.jpg" },
  electricianSmile: { url: "https://images.pexels.com/photos/7647233/pexels-photo-7647233.jpeg?auto=compress&cs=tinysrgb&w=940&h=650", name: "friendly-local-electrician.jpg" },
  lightBulb: { url: "https://images.pexels.com/photos/7641361/pexels-photo-7641361.jpeg?auto=compress&cs=tinysrgb&w=940&h=650", name: "led-light-bulb-energy-savings.jpg" }
};

const alts = {
  'residential-electrical': 'Professional electrician examining a residential breaker box',
  'electrical-repair': 'Electrician repairing electrical wiring in a home',
  'outlets-switches': 'Electrician safely installing a new wall outlet',
  'lighting-installation': 'Modern LED recessed lighting installed in a living room',
  'electrical-panel-replacement': 'Electrical panel upgrade with new circuit breakers',
  'wiring-rewiring': 'New electrical wiring installed during home renovation',
  'ceiling-fan-installation': 'Ceiling fan mounted and wired in a living room',
  'ev-charger-installation': 'Level 2 EV charger mounted on a garage wall',
  'electrical-inspections': 'Electrician reviewing a residential safety checklist',
  'surge-protection': 'Whole-home surge protection equipment installed at the panel',
  'generator-installation': 'Standby generator unit for residential backup power'
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error('Request Failed With a Status Code: ' + res.statusCode));
      }
    });
  });
};

async function main() {
  const dir = path.join(process.cwd(), 'public', 'images');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  console.log('Downloading images...');
  for (const [key, data] of Object.entries(imagesObj)) {
    const dest = path.join(dir, data.name);
    if (!fs.existsSync(dest)) {
        try {
            await downloadImage(data.url, dest);
            console.log('Downloaded:', data.name);
        } catch (e) {
            console.error('Failed to download', data.name, e);
        }
    }
  }

  // Update siteData.ts
  let siteData = fs.readFileSync('src/data/siteData.ts', 'utf-8');
  
  // Replace image URLs
  for (const [key, data] of Object.entries(imagesObj)) {
    // Regex to match the key and URL
    const regex = new RegExp(key + ":\\s*'https:[^']+'", 'g');
    siteData = siteData.replace(regex, key + ": '/images/" + data.name + "'");
  }

  // Replace alt texts (remove the Boca Raton stuffing from all service objects)
  // Instead of complex regex, we can do a replace for the known stuffed string
  // Wait, better to replace the 'heroImageAlt: ...' completely for services.
  
  for (const [slug, alt] of Object.entries(alts)) {
     // match block for the specific service slug
     const slugRegex = new RegExp("(slug:\\s*'" + slug + "'[\\s\\S]*?heroImageAlt:\\s*')([^']+)(')", 'g');
     siteData = siteData.replace(slugRegex, (match, p1, p2, p3) => {
         return p1 + alt + p3;
     });
  }

  // Also fix homepage/about page alt texts directly if they are in there.
  // Actually, those are in HomePage.tsx and AboutPage.tsx. We'll handle them manually.
  
  fs.writeFileSync('src/data/siteData.ts', siteData);
  console.log('Updated siteData.ts');
}

main();

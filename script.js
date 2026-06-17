/*
========================================================================
THE BOILER LLC - DETAILED INTERACTIVE SCRIPTS CODE (OFFLINE SECURE CORE)
========================================================================
This file manages all client-side interactions, sticky headers, mobile menu drawers,
service tabs, dynamic portfolio filtering, search algorithms, contact validations,
and the detailed multi-step quote proposal wizard modal.
*/

document.addEventListener('DOMContentLoaded', () => {
  // Execute Lucide icons initialization
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Active navigation highlighter helper
  highlightActiveLink();

  // Sticky header scroll behavior
  initStickyHeader();

  // Mobile menu control toggles
  initMobileMenu();

  // Home page FAQ Accordions
  initFaqAccordions();

  // Home page pressure gauge fluctuations (Polishing aesthetics)
  initGaugeSimulators();

  // Services page Category tabs workspace
  initServiceWorkspace();

  // Industries page Selector blueprints workspace
  initIndustryWorkspace();

  // Projects category filtration workspace
  initProjectsWorkGrid();

  // Blog News Room searching and tag systems
  initBlogNewsRoom();

  // Contact Intake submission processing
  initContactForm();

  // Newsletter sign-ups
  initNewsletterForm();

  // Multi-step Proposal Quote wizard modal Core
  initQuoteProposalModal();
});


/* ==========================================================
1. NAVIGATION HIGH-LIGHTER & HEADER ACCENTS
========================================================== */
function highlightActiveLink() {
  const path = window.location.pathname;
  const pageName = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
  
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === pageName || (pageName === 'index.html' && href === '/')) {
      link.classList.add('active', 'text-brand-orange');
      link.classList.remove('text-slate-200');
    } else {
      link.classList.remove('active', 'text-brand-orange');
    }
  });
}

function initStickyHeader() {
  const header = document.getElementById('main-fixed-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('bg-brand-dark/95', 'backdrop-blur-md', 'border-b', 'border-slate-800/80', 'shadow-lg', 'shadow-brand-dark/50', 'py-3');
      header.classList.remove('bg-brand-dark', 'border-b', 'border-slate-900/50', 'py-5');
    } else {
      header.classList.remove('bg-brand-dark/95', 'backdrop-blur-md', 'border-b', 'border-slate-800/80', 'shadow-lg', 'shadow-brand-dark/50', 'py-3');
      header.classList.add('bg-brand-dark', 'border-b', 'border-slate-900/50', 'py-5');
    }
  });
}

function initMobileMenu() {
  const openBtn = document.getElementById('mobile-menu-open-btn');
  const closeBtn = document.getElementById('mobile-menu-close-btn');
  const drawer = document.getElementById('mobile-menu-drawer');

  if (!openBtn || !closeBtn || !drawer) return;

  openBtn.addEventListener('click', () => {
    drawer.classList.remove('hidden', 'pointer-events-none');
    drawer.classList.add('flex', 'animate-fade-in');
    document.body.classList.add('overflow-hidden');
  });

  const closeMenu = () => {
    drawer.classList.add('hidden', 'pointer-events-none');
    drawer.classList.remove('flex', 'animate-fade-in');
    document.body.classList.remove('overflow-hidden');
  };

  closeBtn.addEventListener('click', closeMenu);
  
  // Close menu on hitting links
  const links = drawer.querySelectorAll('a, button');
  links.forEach(l => l.addEventListener('click', closeMenu));
}


/* ==========================================================
2. FAQ ACCORDION ENGINE (HOME PAGE)
========================================================== */
function initFaqAccordions() {
  const faqBlocks = document.querySelectorAll('.faq-accordion-item');
  if (faqBlocks.length === 0) return;

  faqBlocks.forEach(item => {
    const btn = item.querySelector('.faq-toggle-btn');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    if (!btn || !content || !icon) return;

    btn.addEventListener('click', () => {
      const isOpen = content.classList.contains('open');

      // Close all other FAQs
      faqBlocks.forEach(otherItem => {
        const otherContent = otherItem.querySelector('.faq-content');
        const otherIcon = otherItem.querySelector('.faq-icon');
        const otherBtn = otherItem.querySelector('.faq-toggle-btn');
        if (otherContent && otherContent !== content) {
          otherContent.classList.remove('open');
          otherContent.style.maxHeight = null;
          if (otherIcon) otherIcon.classList.remove('rotated');
          if (otherBtn) otherBtn.querySelector('.feather-plus')?.setAttribute('data-lucide', 'plus');
        }
      });

      // Toggle current FAQ
      if (isOpen) {
        content.classList.remove('open');
        content.style.maxHeight = null;
        icon.classList.remove('rotated');
      } else {
        content.classList.add('open');
        content.style.maxHeight = content.scrollHeight + "px";
        icon.classList.add('rotated');
      }
      
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    });
  });
}


/* ==========================================================
3. GAUGE PSI JIGGLE AESTHETICS (HOME HERO)
========================================================== */
function initGaugeSimulators() {
  const gaugeVal = document.getElementById('live-gauge-psi-value');
  const indicatorLed = document.getElementById('live-gauge-connected-led');
  if (!gaugeVal) return;

  let basePSI = 428.5;
  setInterval(() => {
    // Generate minor drift (-0.8 to +0.8 PSI)
    const drift = (Math.random() - 0.5) * 1.6;
    const currentPSI = (basePSI + drift).toFixed(1);
    
    // Smooth transition
    gaugeVal.textContent = currentPSI;

    // Pulse connected LED slightly if present
    if (indicatorLed) {
      indicatorLed.classList.add('opacity-40');
      setTimeout(() => indicatorLed.classList.remove('opacity-40'), 150);
    }
  }, 3000);
}


/* ==========================================================
4. DYNAMIC SERVICES DIRECTORY SELECTOR (SERVICES PAGE)
========================================================== */
function initServiceWorkspace() {
  const tabs = document.querySelectorAll('[id^="service-tab-"]');
  const viewDetails = {
    'installation': {
      title: 'Boiler Installation',
      code: 'ASME SECTION I & IV',
      narrative: 'We provide heavy industrial boiler installation matching strict ASME Section I power and Section IV heating code specifications. From structural concrete pad casting to high-pressure manifold gas alignments, our licensed operator crews arrange complete, tested systems ready for state registry.',
      specs: [
        'Turnkey water-tube and fire-tube boiler erections.',
        'Combustion controls calibration and burner mounting.',
        'High-pressure steam headers and deaerator installations.',
        'Structural seismic supports and pipe routing blueprints.'
      ]
    },
    'repair': {
      title: 'Boiler Repair & Maintenance',
      code: 'NBBI R-STAMP APPROVED',
      narrative: 'Authorized under the National Board "R" Stamp, our welding techs perform deep vessel remediation and preventative maintenance. We handle urgent fire-tube and water-tube repairs, replacing damaged heating surface alloys, restoring system integrity under hydrostatic verifications.',
      specs: [
        'Complete heavy wall tube extraction and rolling operations.',
        'High-alloy pressure welding and drum fracture remediation.',
        'Refractory brick, castable layout, and combustion chamber rebuilds.',
        'Valves, gaskets, and mud-leg blowout maintenance.'
      ]
    },
    'engineering': {
      title: 'Industrial Engineering',
      code: 'PE STAMPED MANIFESTS',
      narrative: 'Delivering comprehensive engineering for high-temperature fluid handling networks, we design boiler room environments, size primary headers, configure fuel storage feeds, and optimize plant-wide condensate loops to guarantee thermodynamic stability.',
      specs: [
        'Thermodynamic balancing and mass flow determinations.',
        'Flue gas stack emissions consulting and layout routing.',
        'Process steam distribution and condenser system designs.',
        'Piping isometric diagrams and high-stress stress analysis.'
      ]
    },
    'design': {
      title: 'Mechanical Systems Design',
      code: 'ASME B31.1 & B31.3',
      narrative: 'We design custom mechanical piping systems in strict accordance with ASME B31.1 (Power Piping) and B31.3 (Process Piping) guidelines, detailing expansion joints, support brackets, and localized pressure-reducing stations.',
      specs: [
        'High-pressure process piping layouts.',
        'Fluid velocity modeling and valve sizing audits.',
        'Pneumatic and electronic system control loop diagrams.',
        'Skid-mounted fluid system fabrication drawings.'
      ]
    },
    'energy': {
      title: 'Energy Efficiency Consulting',
      code: 'EPA PARTNER DIRECTIVES',
      narrative: 'Our energy consulting division focuses on shrinking industrial gas and fuel oil bills. By auditing combustion profiles, balancing fuel-to-air rations, and routing heat exhaust back into feed-water tanks, we frequently achieve double-digit fuel reduction.',
      specs: [
        'Flue gas combustion oxygen and carbon audits.',
        'Waste heat extraction stack-economizer design loops.',
        'Variable frequency drive (VFD) fan and feed pump integrations.',
        'Blowdown heat recovery flash steam designs.'
      ]
    },
    'inspection': {
      title: 'Industrial Equipment Inspection',
      code: 'ASME SECTION V NDT',
      narrative: 'Ensuring structural safety and regulatory code compliance, we manage full non-destructive inspections. We identify localized oxidation, micro-fractures, and structural fatigue, documenting shell conditions for insurance and state authorities.',
      specs: [
        'Ultrasonic thickness testing (UT) on inner vessel linings.',
        'Magnetic particle (MT) and liquid penetrant (PT) weld checkups.',
        'Hydrostatic safety relief valve testing.',
        'Georgia State Boiler inspector preparation checklists.'
      ]
    },
    'maintenance': {
      title: 'Plant Maintenance Services',
      code: 'OSHA 1910 STANDARD',
      narrative: 'We execute complete plant shutdown services, cleaning steam drums and tube bundles down to the bare metal. Our chemical washing processes dissolve hardened scale, restoring thermal transfer efficiency across boiler walls.',
      specs: [
        'Boiler dry-docking, cleaning, and chemical washouts.',
        'Water softeners, de-alkalizers, and chemical treatment consulting.',
        'Rotary soot blower rebuilds.',
        'Expansion joint and insulation jacketing reinstatements.'
      ]
    },
    'emergency': {
      title: 'Emergency Engineering Support',
      code: 'CRITICAL HOTLINE',
      narrative: 'When a critical outage strikes, every hour represents heavy operational deficit. The Boiler LLC operates an active 24/7/365 structural dispatch network. We deploy diagnostic welding crews immediately to seal leakage and bring operations back online.',
      specs: [
        '2-hour localized on-site team arrival in Atlanta.',
        'Critical diagnostic pressure leak isolation.',
        'Authorized structural ASME emergency welding.',
        'Temporary auxiliary boiler connections and alignment.'
      ]
    }
  };

  if (tabs.length === 0) return;

  const titleNode = document.getElementById('workspace-service-title');
  const codeNode = document.getElementById('workspace-service-code');
  const codeBannerNode = document.getElementById('workspace-service-banner-code');
  const longNode = document.getElementById('workspace-service-details');
  const checklistNode = document.getElementById('workspace-service-specs-grid');
  const schematicBanner = document.getElementById('workspace-schematic-label');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const id = tab.id.replace('service-tab-', '');
      const data = viewDetails[id];
      if (!data) return;

      // Update active classes for tabs
      tabs.forEach(t => {
        t.className = "flex items-center gap-3 w-full py-3 px-4 rounded border text-left transition duration-150 border-slate-800 bg-[#090b14] text-brand-gray hover:border-slate-700 hover:text-white";
        t.querySelector('span').className = "text-slate-600";
      });

      tab.className = "flex items-center gap-3 w-full py-3 px-4 rounded border text-left transition duration-150 border-brand-orange bg-brand-orange/10 text-white font-bold";
      tab.querySelector('span').className = "text-brand-orange";

      // Apply specifications update inside Workspace Content with clean fade effects
      const contentsOuter = titleNode.parentElement.parentElement;
      contentsOuter.classList.add('opacity-0');
      
      setTimeout(() => {
        titleNode.textContent = data.title;
        codeNode.textContent = "Primary Code Registry: " + data.code;
        if (codeBannerNode) codeBannerNode.textContent = data.code;
        longNode.textContent = data.narrative;
        if (schematicBanner) schematicBanner.textContent = `SCHEMATIC MODULE SPECIFICATION // ${id}`;

        // Populate criteria grid
        checklistNode.innerHTML = '';
        data.specs.forEach(spec => {
          const div = document.createElement('div');
          div.className = "flex items-start gap-2.5 bg-brand-dark p-3 border border-slate-800 rounded animate-fade-in";
          div.innerHTML = `
            <i data-lucide="check" class="text-brand-orange flex-shrink-0 mt-0.5 stroke-[3] w-3.5 h-3.5"></i>
            <span class="text-slate-300">${spec}</span>
          `;
          checklistNode.appendChild(div);
        });

        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }

        contentsOuter.classList.remove('opacity-0');
        contentsOuter.classList.add('animate-fade-in');
      }, 150);
    });
  });
}


/* ==========================================================
5. INDUSTRIES SECTOR EXPLORER SCHEMATICS (INDUSTRIES PAGE)
========================================================== */
function initIndustryWorkspace() {
  const tabs = document.querySelectorAll('[id^="industry-tab-"]');
  const details = {
    'manufacturing': {
      title: 'Manufacturing',
      sub: 'Process steam plants, bottling loops, and high-capacity processing.',
      pressure: '150 - 350 PSI (Medium to High)',
      code: 'ASME SECTION VIII / B31.3',
      temp: '320°F - 450°F (160°C - 232°C)',
      integrity: 'Critical - Unplanned shutdown disrupts raw material lines directly.',
      desc: 'Process steam serves as the thermodynamic catalyst for pasteurization, high-pressure cleaning, curing ovens, and continuous extrusion molds. We maintain precise control loop boundaries and high-integrity pressure lines to avoid costly batch losses.',
      cons: [
        'Continuous automatic blowdown configurations.',
        'Flue-gas exhaust heat recyclers for heavy savings.',
        'Chemical softeners to prevent silicate scale lining.'
      ]
    },
    'power-generation': {
      title: 'Power Generation',
      sub: 'Super-heated utility systems, steam turbines, and cogeneration grids.',
      pressure: '600 - 1500+ PSI (Supercritical/High)',
      code: 'ASME SECTION I / B31.1',
      temp: '500°F - 950°F (260°C - 510°C)',
      integrity: 'Extreme - Directly tied to grid distribution capacity indicators.',
      desc: 'Super-heated steam lines require elite mechanical certifications. High-alloy metals, structural tube welding verification, ultrasonic shell monitoring, and ASME code stamps are mandatory to hold structural stability under extreme stress levels.',
      cons: [
        'Ultrasonic thickness (UT) and crack-detection testing.',
        'S-Stamp power boiler certified repair welds.',
        'Header mass distribution stress assessments.'
      ]
    },
    'commercial-facilities': {
      title: 'Commercial Facilities',
      sub: 'Multi-story administrative grids, district steam loop heating systems.',
      pressure: '15 - 50 PSI (Low to Medium)',
      code: 'ASME SECTION IV',
      temp: '220°F - 290°F (104°C - 143°C)',
      integrity: 'High - Directly impacts workspace temperature & public occupancy.',
      desc: 'Commercial installations focus on safety, automated sequence configurations, gas burner emission compliance, and silent operations. We mount low-NOx burners and integrated electronic control panels for seamless, unmanned management.',
      cons: [
        'Electronic sequence combustion controllers.',
        'Weekly safety relief valve mechanical testing.',
        'Draft induction fan noise reduction dampeners.'
      ]
    },
    'healthcare-facilities': {
      title: 'Healthcare Facilities',
      sub: 'Sterilization steam channels, domestic central heating, sanitizing structures.',
      pressure: '50 - 125 PSI (Medium pressure)',
      code: 'ASME CODES / ASHRAE 170',
      temp: '290°F - 350°F (143°C - 176°C)',
      integrity: 'Vital - Direct legal dependency for sterilization & sterile climate locks.',
      desc: 'Hospital boiler infrastructures require clean, dual-fuel boiler networks to ensure continuous hot water and clean sterilization steam. Preventative audits and 24/7 dispatcher lines are mandatory to protect critical environments.',
      cons: [
        'Dual-fuel (Natural Gas / Fuel Oil #2) quick burners.',
        'Clean-steam steam generators for autoclave grids.',
        'Redundant booster feed-water pumps.'
      ]
    },
    'educational-institutions': {
      title: 'Educational Institutions',
      sub: 'Central campus physical plants, process research steam chambers, dorm vectors.',
      pressure: '15 - 150 PSI (Multi-building Dist.)',
      code: 'ASME SECTION I & IV',
      temp: '240°F - 365°F (115°C - 185°C)',
      integrity: 'High - Required for multi-building heating, hydration, and laboratories.',
      desc: 'Large academic campuses rely on central distribution tunnels. Managing long process loops, compensating for massive volume expansions, and keeping boiler water clear of severe oxidation is our primary focus.',
      cons: [
        'Condensate return monitoring and chemical feed treatment.',
        'Out-of-hours automatic setback burner controls.',
        'Thermal expansion expansion joints.'
      ]
    },
    'government-facilities': {
      title: 'Government Facilities',
      sub: 'Judiciary facilities, civic infrastructures, security facilities.',
      pressure: '30 - 150 PSI',
      code: 'MIL-SPEC / ASME COMPLIANT',
      temp: '270°F - 365°F (132°C - 185°C)',
      integrity: 'Severe - Subject to secure background procedures and state audits.',
      desc: 'Federal and state boiler systems must satisfy strict procurement parameters and rigorous environmental code audits. We construct certified emission-reduction systems and maintain complete materials provenance documentation.',
      cons: [
        'Comprehensive emissions telemetry logs.',
        'Secure technical operator dispatch clearance.',
        'Strict ASME code-material tracing logs.'
      ]
    },
    'industrial-plants': {
      title: 'Industrial Plants',
      sub: 'Heavy refineries, pulp mills, chemical reaction boilers, vulcanizer beds.',
      pressure: '300 - 800+ PSI (High Temperature)',
      code: 'ASME SECTION I & VIII / API 510',
      temp: '420°F - 750°F (215°C - 398°C)',
      integrity: 'Extreme - Direct catalyst for chemical, plastic, and heavy refineries.',
      desc: 'Industrial refineries operate under hostile ambient chemicals. We utilize corrosion-resistant high-alloy materials, design heavy thermal refractory casings, and schedule precise preventative shutdowns to prevent tube failures.',
      cons: [
        'High-alloy chrome-moly tube integrations.',
        'Complete sulfur and combustion gas analysis.',
        'Advanced automated blowdown heat recovery.'
      ]
    }
  };

  if (tabs.length === 0) {
    // We are on the dedicated industries.html page, wire up the bento search & tag filters
    const searchInput = document.getElementById('industry-search-input');
    const tagButtons = document.querySelectorAll('.industry-tag-btn');
    const cards = document.querySelectorAll('.industry-card-block');
    const emptyState = document.getElementById('industry-no-results-msg');
    const resetBtn = document.getElementById('industry-reset-search-btn');

    if (cards.length === 0) return;

    let activeTag = 'ALL';
    let activeQuery = '';

    const runSectorFiltration = () => {
      let visibleCount = 0;
      cards.forEach(card => {
        let cardCategory = card.getAttribute('data-category') || '';
        cardCategory = cardCategory.toUpperCase();

        const title = (card.querySelector('h3')?.textContent || '').toLowerCase();
        const stamp = (card.querySelector('.text-slate-500, .font-mono')?.textContent || '').toLowerCase();
        const snippet = (card.querySelector('p')?.textContent || '').toLowerCase();
        
        let specText = '';
        card.querySelectorAll('.font-mono, .font-sans').forEach(el => specText += el.textContent.toLowerCase() + ' ');

        const matchesSearch = title.includes(activeQuery) || snippet.includes(activeQuery) || stamp.includes(activeQuery) || specText.includes(activeQuery);
        const matchesCategory = activeTag === 'ALL' || cardCategory.includes(activeTag) || activeTag.includes(cardCategory);

        if (matchesSearch && matchesCategory) {
          card.style.display = 'flex';
          card.classList.add('animate-fade-in');
          visibleCount++;
        } else {
          card.style.display = 'none';
          card.classList.remove('animate-fade-in');
        }
      });

      if (emptyState) {
        if (visibleCount === 0) {
          emptyState.classList.remove('hidden');
        } else {
          emptyState.classList.add('hidden');
        }
      }
    };

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        activeQuery = e.target.value.toLowerCase().trim();
        runSectorFiltration();
      });
    }

    tagButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        activeTag = btn.textContent.trim().toUpperCase();

        tagButtons.forEach(b => {
          b.className = "industry-tag-btn px-3 py-1.5 rounded bg-[#090b14] border border-slate-800 text-brand-gray hover:text-white hover:border-slate-700";
        });
        btn.className = "industry-tag-btn px-3 py-1.5 rounded bg-brand-orange text-brand-dark";

        runSectorFiltration();
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        activeQuery = '';
        activeTag = 'ALL';
        tagButtons.forEach((b, idx) => {
          b.className = idx === 0 
            ? "industry-tag-btn px-3 py-1.5 rounded bg-brand-orange text-brand-dark"
            : "industry-tag-btn px-3 py-1.5 rounded bg-[#090b14] border border-slate-800 text-brand-gray hover:text-white hover:border-slate-700";
        });
        runSectorFiltration();
      });
    }

    return;
  }

  const rootNode = document.getElementById('industry-panel-content-root');
  const titleNode = document.getElementById('workspace-industry-title');
  const subNode = document.getElementById('workspace-industry-sub');
  const pressureNode = document.getElementById('industry-spec-pressure');
  const tempNode = document.getElementById('industry-spec-temp');
  const codeNode = document.getElementById('industry-spec-code');
  const integrityNode = document.getElementById('industry-spec-integrity');
  const descNode = document.getElementById('workspace-industry-descr');
  const considerationsNode = document.getElementById('workspace-industry-cons-grid');
  const schematicHeaderLabel = document.getElementById('workspace-industry-schematic-header');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const id = tab.id.replace('industry-tab-', '');
      const data = details[id];
      if (!data) return;

      // Update active classes for tabs
      tabs.forEach(t => {
        t.className = "flex items-center gap-3 w-full py-3.5 px-4 rounded border text-left transition duration-150 border-slate-800 bg-[#090b14] text-brand-gray hover:border-slate-850 hover:text-white";
        t.querySelector('span').className = "text-slate-600";
      });

      tab.className = "flex items-center gap-3 w-full py-3.5 px-4 rounded border text-left transition duration-150 border-brand-orange bg-brand-orange/10 text-white font-bold";
      tab.querySelector('span').className = "text-brand-orange";

      // Fade animation during transitions
      rootNode.classList.add('opacity-0');

      setTimeout(() => {
        titleNode.textContent = data.title + " Division";
        subNode.textContent = data.sub;
        pressureNode.textContent = data.pressure;
        tempNode.textContent = data.temp;
        codeNode.textContent = data.code;
        integrityNode.textContent = data.integrity;
        descNode.textContent = data.desc;
        if (schematicHeaderLabel) schematicHeaderLabel.textContent = `SCHEMATIC INDEX // ${data.title}`;

        // Considerations grids
        considerationsNode.innerHTML = '';
        data.cons.forEach((con, index) => {
          const div = document.createElement('div');
          div.className = "bg-brand-navy p-3 border border-slate-800/60 rounded flex flex-col justify-between animate-fade-in";
          div.innerHTML = `
            <span class="text-brand-orange font-bold text-xs">0${index + 1}.</span>
            <p class="text-[11px] text-slate-300 leading-normal mt-1.5 font-sans whitespace-normal">${con}</p>
          `;
          considerationsNode.appendChild(div);
        });

        rootNode.classList.remove('opacity-0');
        rootNode.classList.add('animate-fade-in');
      }, 150);
    });
  });
}


/* ==========================================================
6. PROJECTS METICULOUS PORTFOLIO FILTER (PROJECTS PAGE)
========================================================== */
function initProjectsWorkGrid() {
  const filters = document.querySelectorAll('.project-filter-btn');
  const cards = document.querySelectorAll('[id^="project-card-"], .bg\\[\\#0b0e22\\]'); // Select all cards

  if (filters.length === 0 || cards.length === 0) return;

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      const activeTag = btn.textContent.trim().toUpperCase();

      // Update active filter style
      filters.forEach(f => {
        f.className = "project-filter-btn px-4 py-2 rounded font-bold uppercase transition duration-150 bg-[#090c16] border border-slate-800 text-brand-gray hover:text-white hover:border-slate-700";
      });
      btn.className = "project-filter-btn px-4 py-2 rounded font-bold uppercase transition duration-150 bg-brand-orange text-brand-dark";

      // Filter card containers with a smooth fade
      cards.forEach(card => {
        const categoryNode = card.querySelector('.text-\\[10px\\].font-mono.text-brand-orange');
        if (!categoryNode) return;

        const cardCategory = categoryNode.textContent.trim().toUpperCase();

        if (activeTag === 'ALL' || cardCategory === activeTag) {
          card.style.display = 'flex';
          card.classList.add('animate-scale-in');
        } else {
          card.style.display = 'none';
          card.classList.remove('animate-scale-in');
        }
      });
    });
  });
}


/* ==========================================================
7. BLOG SEARCH & CODE TAG MATCH SYSTEM (BLOG PAGE)
========================================================== */
function initBlogNewsRoom() {
  const searchInput = document.getElementById('blog-search-input');
  const tagButtons = document.querySelectorAll('.blog-tag-btn');
  const articles = document.querySelectorAll('article, .blog-card-block');
  const emptyState = document.getElementById('blog-no-results-msg');
  const resetBtn = document.getElementById('blog-reset-search-btn');

  if (articles.length === 0) return;

  let activeTag = 'ALL';
  let activeQuery = '';

  const runFiltration = () => {
    let visibleCount = 0;
    articles.forEach(art => {
      // Get category tag from data-category or nested text nodes
      let cardCategory = art.getAttribute('data-category') || '';
      if (!cardCategory) {
        const categoryTagNode = art.querySelector('.text-\\[10px\\].font-mono.text-brand-orange');
        cardCategory = categoryTagNode ? categoryTagNode.textContent.trim() : '';
      }
      cardCategory = cardCategory.toUpperCase();
      
      const title = (art.querySelector('h3')?.textContent || '').toLowerCase();
      const snippet = (art.querySelector('p')?.textContent || '').toLowerCase();
      const body = (art.querySelector('.bg-brand-dark\\/40, .text-xs, .whitespace-normal')?.textContent || '').toLowerCase();

      const matchesSearch = title.includes(activeQuery) || snippet.includes(activeQuery) || body.includes(activeQuery);
      const matchesCategory = activeTag === 'ALL' || cardCategory === activeTag;

      if (matchesSearch && matchesCategory) {
        art.style.display = 'flex';
        art.classList.add('animate-fade-in');
        visibleCount++;
      } else {
        art.style.display = 'none';
        art.classList.remove('animate-fade-in');
      }
    });

    // Handle empty state banner if no matches
    if (emptyState) {
      if (visibleCount === 0) {
        emptyState.classList.remove('hidden');
      } else {
        emptyState.classList.add('hidden');
      }
    }
  };

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeQuery = e.target.value.toLowerCase().trim();
      runFiltration();
    });
  }

  tagButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      activeTag = btn.textContent.trim().toUpperCase();

      tagButtons.forEach(b => {
        b.className = "blog-tag-btn px-3 py-1.5 rounded font-bold uppercase transition duration-150 bg-[#090b14] border border-slate-800 text-brand-gray hover:text-white hover:border-slate-700";
      });
      btn.className = "blog-tag-btn px-3 py-1.5 rounded font-bold uppercase transition duration-150 bg-brand-orange text-brand-dark";

      runFiltration();
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      activeQuery = '';
      activeTag = 'ALL';
      tagButtons.forEach((b, idx) => {
        b.className = idx === 0 
          ? "blog-tag-btn px-3 py-1.5 rounded font-bold uppercase transition duration-150 bg-brand-orange text-brand-dark"
          : "blog-tag-btn px-3 py-1.5 rounded font-bold uppercase transition duration-150 bg-[#090b14] border border-slate-800 text-brand-gray hover:text-white hover:border-slate-700";
      });
      runFiltration();
    });
  }
}


/* ==========================================================
8. TELEPHONE / GENERAL CONTACT CAPTURING (CONTACT PAGE)
========================================================== */
function initContactForm() {
  const form = document.getElementById('secure-contact-envelope-form') || document.getElementById('contact-page-intake-form');
  const container = document.getElementById('contact-form-container-box');
  
  // New Contact Page selectors support
  const portalBlock = document.getElementById('contact-form-portal-block');
  const successBlock = document.getElementById('contact-form-success-block');
  const resetBtn = document.getElementById('contact-success-reset-btn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset error text
    const errorContainers = form.querySelectorAll('.error-feedback');
    errorContainers.forEach(node => node.textContent = '');

    const name = form.elements['name']?.value.trim() || '';
    const company = form.elements['company']?.value.trim() || '';
    const email = form.elements['email']?.value.trim() || '';
    const phone = form.elements['phone']?.value.trim() || '';
    const urgency = form.elements['urgency']?.value || 'scheduled';
    const message = form.elements['message']?.value.trim() || '';

    let hasErrors = false;

    // Direct error validations
    if (!name) {
      const err = document.getElementById('err-name') || document.getElementById('err-c-name');
      if (err) err.textContent = 'Full name is required';
      hasErrors = true;
    }
    if (!company) {
      const err = document.getElementById('err-company') || document.getElementById('err-c-company');
      if (err) err.textContent = 'Company name is required';
      hasErrors = true;
    }
    if (!email) {
      const err = document.getElementById('err-email') || document.getElementById('err-c-email');
      if (err) err.textContent = 'Email address is required';
      hasErrors = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      const err = document.getElementById('err-email') || document.getElementById('err-c-email');
      if (err) err.textContent = 'Invalid email address';
      hasErrors = true;
    }
    if (!phone) {
      const err = document.getElementById('err-phone') || document.getElementById('err-c-phone');
      if (err) err.textContent = 'Phone number is required';
      hasErrors = true;
    }

    if (hasErrors) return;

    // Generate simulated Ticket ID
    const randomHex = Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(5, '0');
    const generatedTicket = `TBL-C-2026-${randomHex}`;

    // Update tickets details if available
    const tick = document.getElementById('contact-success-ticket');
    const comp = document.getElementById('contact-success-company');
    const contactsName = document.getElementById('contact-success-name');
    const priority = document.getElementById('contact-success-priority');

    if (tick) tick.textContent = generatedTicket;
    if (comp) comp.textContent = company;
    if (contactsName) contactsName.textContent = name;
    if (priority) {
      priority.textContent = urgency.toUpperCase();
      priority.className = urgency === 'immediate' ? "text-red-400 font-bold uppercase" : "text-brand-yellow font-bold uppercase";
    }

    // Toggle blocks if using modern contact page structure, otherwise override innerHTML of simple box
    if (portalBlock && successBlock) {
      portalBlock.classList.add('hidden');
      successBlock.classList.remove('hidden');
    } else if (container) {
      container.innerHTML = `
        <div class="flex flex-col items-center justify-center text-center py-10 space-y-4 animate-scale-in">
          <div class="h-14 w-14 bg-brand-orange/15 rounded-full flex items-center justify-center text-brand-orange">
            <i data-lucide="shield-check" class="w-8 h-8"></i>
          </div>
          <div>
            <h4 class="font-display font-bold text-lg text-white uppercase tracking-wider">
              Message Packet Received
            </h4>
            <p class="text-xs text-brand-gray max-w-sm mx-auto leading-relaxed mt-1 font-sans">
              Your transmission details have been secure-logged by our dispatcher board, we will react within 24 operational hours.
            </p>
          </div>
          <div class="text-[10px] font-mono text-slate-500 uppercase border-t border-slate-900 pt-3 w-full">
            TX_STATUS: REGISTERED_SUCCESSFULLY
          </div>
        </div>
      `;
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      if (portalBlock && successBlock) {
        successBlock.classList.add('hidden');
        portalBlock.classList.remove('hidden');
      }
    });
  }
}


/* ==========================================================
9. BOTTOM SECTION NEWSLETTER CAPTURING (GLOBAL FOOTER)
========================================================== */
function initNewsletterForm() {
  const forms = document.querySelectorAll('.footer-newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const successMsg = form.querySelector('.newsletter-success');
      const submitIcon = form.querySelector('.newsletter-submit-icon');

      if (!input || !successMsg) return;

      successMsg.classList.remove('hidden');
      input.value = '';

      if (submitIcon) {
        submitIcon.innerHTML = `<i data-lucide="check" class="text-emerald-500 w-3 h-3"></i>`;
        if (typeof lucide !== 'undefined') lucide.createIcons();
      }

      setTimeout(() => {
        successMsg.classList.add('hidden');
        if (submitIcon) {
          submitIcon.innerHTML = `<i data-lucide="send" class="w-3 h-3"></i>`;
          if (typeof lucide !== 'undefined') lucide.createIcons();
        }
      }, 5000);
    });
  });
}


/* ==========================================================
10. INTERACTIVE MULTI-STEP PROPOSAL GENERATOR PROMPT (GLOBAL)
========================================================== */
function initQuoteProposalModal() {
  const modal = document.getElementById('quote-modal');
  const triggerBtns = document.querySelectorAll('[onclick="openModal()"], .btn-quote-trigger');
  const closeBtns = document.querySelectorAll('#quote-modal-close-btn, #quote-modal-dismiss-btn');
  const modalBackdrop = document.getElementById('quote-modal-backdrop');

  if (!modal) return;

  // STEP WIZARD NAVIGATION HANDLERS
  const stepPages = [
    document.getElementById('wizard-step-1'),
    document.getElementById('wizard-step-2'),
    document.getElementById('wizard-step-3'),
    document.getElementById('wizard-step-success')
  ];

  const pgIndicators = [
    document.getElementById('indicator-step-1'),
    document.getElementById('indicator-step-2'),
    document.getElementById('indicator-step-3')
  ];

  const pgLabels = [
    document.getElementById('label-step-1'),
    document.getElementById('label-step-2'),
    document.getElementById('label-step-3')
  ];

  const nextBtn = document.getElementById('quote-wizard-next-btn');
  const prevBtn = document.getElementById('quote-wizard-prev-btn');
  const submitBtn = document.getElementById('quote-wizard-submit-btn');
  const progressHeader = document.getElementById('quote-wizard-progress-header');

  let currentStep = 1;

  const wizardData = {
    systemType: 'Steam Generation',
    serviceNeeded: 'New System Installation',
    boilerHP: '100 - 500 HP',
    facilityCategory: 'Manufacturing Plant',
    timeline: 'Within 30 Days',
    fullName: '',
    company: '',
    email: '',
    phone: '',
    details: ''
  };

  const setupWizardState = () => {
    // Show correct step, hide others
    stepPages.forEach((page, index) => {
      if (index === currentStep - 1) {
        page.style.display = 'block';
        page.classList.add('animate-scale-in');
      } else {
        page.style.display = 'none';
        page.classList.remove('animate-scale-in');
      }
    });

    // Update wizard progress indicators
    pgIndicators.forEach((ind, index) => {
      const idx = index + 1;
      if (idx <= currentStep) {
        ind.className = "h-5 w-5 rounded-full flex items-center justify-center text-[10px] bg-brand-orange text-brand-dark font-bold";
        if (pgLabels[index]) pgLabels[index].className = "text-brand-light font-semibold";
      } else {
        ind.className = "h-5 w-5 rounded-full flex items-center justify-center text-[10px] bg-slate-800 text-brand-gray";
        if (pgLabels[index]) pgLabels[index].className = "text-brand-gray";
      }
    });

    // Nav button visibility
    if (currentStep === 1) {
      prevBtn.style.visibility = 'hidden';
      nextBtn.style.display = 'flex';
      submitBtn.style.display = 'none';
    } else if (currentStep === 2) {
      prevBtn.style.visibility = 'visible';
      nextBtn.style.display = 'flex';
      submitBtn.style.display = 'none';
    } else if (currentStep === 3) {
      prevBtn.style.visibility = 'visible';
      nextBtn.style.display = 'none';
      submitBtn.style.display = 'flex';
    } else {
      // Success screen
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
      submitBtn.style.display = 'none';
      if (progressHeader) progressHeader.style.display = 'none';
    }
  };

  const openModal = () => {
    modal.classList.add('active');
    modal.classList.remove('pointer-events-none');
    document.body.classList.add('overflow-hidden');
    currentStep = 1;
    resetWizardInputs();
    setupWizardState();
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.classList.remove('overflow-hidden');
  };

  // Bind clicks to open
  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  // Bind clicks to close
  closeBtns.forEach(btn => btn.addEventListener('click', closeModal));
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  // STEP 1 SELECTIONS: System Type buttons
  const systemTypeBtns = document.querySelectorAll('#wizard-step-1 .system-grid-option');
  systemTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      systemTypeBtns.forEach(b => b.className = "system-grid-option flex items-center justify-between px-4 py-2.5 rounded border text-left text-sm transition-all duration-200 border-slate-800 bg-[#0e1329] text-brand-gray hover:border-slate-700/80 hover:text-white");
      btn.className = "system-grid-option flex items-center justify-between px-4 py-2.5 rounded border text-left text-sm transition-all duration-200 border-brand-orange bg-brand-orange/10 text-white font-semibold";
      
      const check = btn.querySelector('.check-indicator');
      document.querySelectorAll('#wizard-step-1 .check-indicator').forEach(c => c.style.display = 'none');
      if (check) check.style.display = 'block';

      wizardData.systemType = btn.getAttribute('data-value');
    });
  });

  // STEP 1 SELECTIONS: Service required buttons
  const serviceTypeBtns = document.querySelectorAll('#wizard-step-1 .service-grid-option');
  serviceTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      serviceTypeBtns.forEach(b => b.className = "service-grid-option flex items-center justify-between px-4 py-2.5 rounded border text-left text-sm transition-all duration-200 border-slate-800 bg-[#0e1329] text-brand-gray hover:border-slate-700/80 hover:text-white");
      btn.className = "service-grid-option flex items-center justify-between px-4 py-2.5 rounded border text-left text-sm transition-all duration-200 border-brand-orange bg-brand-orange/10 text-white font-semibold";
      
      const check = btn.querySelector('.check-indicator');
      document.querySelectorAll('#wizard-step-1 .service-indicator').forEach(c => c.style.display = 'none');
      if (check) check.style.display = 'block';

      wizardData.serviceNeeded = btn.getAttribute('data-value');
    });
  });

  // STEP 1 SELECTIONS: HP Capacity buttons
  const capacityBtns = document.querySelectorAll('#wizard-step-1 .capacity-grid-option');
  capacityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      capacityBtns.forEach(b => b.className = "capacity-grid-option flex flex-col items-center justify-center p-3 rounded border text-center transition-all border-slate-800 bg-[#0e1329] text-brand-gray hover:border-slate-700");
      btn.className = "capacity-grid-option flex flex-col items-center justify-center p-3 rounded border text-center transition-all border-brand-orange bg-brand-orange/10 text-white";
      
      wizardData.boilerHP = btn.getAttribute('data-value');
    });
  });

  // STEP 2 SELECTIONS: Facility type option buttons
  const facilityBtns = document.querySelectorAll('#wizard-step-2 .facility-grid-option');
  facilityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      facilityBtns.forEach(b => b.className = "facility-grid-option flex items-center justify-between px-4 py-2.5 rounded border text-left text-sm transition-all duration-200 border-slate-800 bg-[#0e1329] text-brand-gray hover:border-slate-700/80 hover:text-white");
      btn.className = "facility-grid-option flex items-center justify-between px-4 py-2.5 rounded border text-left text-sm transition-all duration-200 border-brand-orange bg-brand-orange/10 text-white font-semibold";
      
      document.querySelectorAll('#wizard-step-2 .facility-indicator').forEach(c => c.style.display = 'none');
      const check = btn.querySelector('.check-indicator');
      if (check) check.style.display = 'block';

      wizardData.facilityCategory = btn.getAttribute('data-value');
    });
  });

  // STEP 2 SELECTIONS: Timeline options
  const timelineBtns = document.querySelectorAll('#wizard-step-2 .timeline-grid-option');
  timelineBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      timelineBtns.forEach(b => b.className = "timeline-grid-option flex items-center justify-between px-4 py-3 rounded border text-left text-sm transition-all duration-200 border-slate-800 bg-[#0e1329] text-brand-gray hover:border-slate-700/80 hover:text-white");
      
      const isEmergency = btn.getAttribute('data-value').includes('Immediate');
      if (isEmergency) {
        btn.className = "timeline-grid-option flex items-center justify-between px-4 py-3 rounded border text-left text-sm transition-all duration-200 border-red-500 bg-red-950/20 text-red-200 font-semibold";
      } else {
        btn.className = "timeline-grid-option flex items-center justify-between px-4 py-3 rounded border text-left text-sm transition-all duration-200 border-brand-orange bg-brand-orange/10 text-white font-semibold";
      }
      
      document.querySelectorAll('#wizard-step-2 .timeline-indicator').forEach(c => c.style.display = 'none');
      const check = btn.querySelector('.check-indicator');
      if (check) check.style.display = 'block';

      wizardData.timeline = btn.getAttribute('data-value');
    });
  });

  // NEXT/PREV NAVIGATION TRIGGERS
  nextBtn.addEventListener('click', () => {
    if (currentStep < 3) {
      currentStep++;
      setupWizardState();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      setupWizardState();
    }
  });

  // SUBMIT HANDLER IN STEP 3
  const quoteForm = document.getElementById('quote-proposal-form-wrapper');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Clear validations
      document.querySelectorAll('#quote-proposal-form-wrapper .error-feedback').forEach(err => err.textContent = '');

      const fullName = quoteForm.elements['fullName'].value.trim();
      const company = quoteForm.elements['company'].value.trim();
      const email = quoteForm.elements['email'].value.trim();
      const phone = quoteForm.elements['phone'].value.trim();
      const details = quoteForm.elements['details'].value.trim();

      let hasErrors = false;
      if (!fullName) {
        document.getElementById('err-q-name').textContent = 'Full Name is required';
        hasErrors = true;
      }
      if (!company) {
        document.getElementById('err-q-company').textContent = 'Company Name is required';
        hasErrors = true;
      }
      if (!email) {
        document.getElementById('err-q-email').textContent = 'Email is required';
        hasErrors = true;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('err-q-email').textContent = 'Invalid email address';
        hasErrors = true;
      }
      if (!phone) {
        document.getElementById('err-q-phone').textContent = 'Phone number is required';
        hasErrors = true;
      }

      if (hasErrors) return;

      wizardData.fullName = fullName;
      wizardData.company = company;
      wizardData.email = email;
      wizardData.phone = phone;
      wizardData.details = details;

      // Generate Ticket ID
      const randomHex = Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(6, '0');
      const generatedTicket = `TBL-2026-${randomHex}`;

      // Show ticket details on success page
      document.getElementById('success-summary-ticket').textContent = generatedTicket;
      document.getElementById('success-summary-system').textContent = `${wizardData.systemType} (${wizardData.boilerHP.split(' (')[0]})`;
      document.getElementById('success-summary-service').textContent = wizardData.serviceNeeded;
      document.getElementById('success-summary-contact').textContent = `${wizardData.fullName} (${wizardData.company})`;
      
      const priorityNode = document.getElementById('success-summary-priority');
      priorityNode.textContent = wizardData.timeline;
      if (wizardData.timeline.includes('Immediate')) {
        priorityNode.className = "text-red-400 font-bold";
      } else {
        priorityNode.className = "text-brand-yellow font-bold";
      }

      currentStep = 4;
      setupWizardState();
    });
  }

  function resetWizardInputs() {
    if (quoteForm) quoteForm.reset();
    document.querySelectorAll('#quote-proposal-form-wrapper .error-feedback').forEach(err => err.textContent = '');
    
    // Reset wizard variables
    wizardData.systemType = 'Steam Generation';
    wizardData.serviceNeeded = 'New System Installation';
    wizardData.boilerHP = '100 - 500 HP';
    wizardData.facilityCategory = 'Manufacturing Plant';
    wizardData.timeline = 'Within 30 Days';

    // Reset button states STEP 1
    systemTypeBtns.forEach((b, idx) => {
      b.className = idx === 0 
        ? "system-grid-option flex items-center justify-between px-4 py-2.5 rounded border text-left text-sm transition-all duration-200 border-brand-orange bg-brand-orange/10 text-white font-semibold"
        : "system-grid-option flex items-center justify-between px-4 py-2.5 rounded border text-left text-sm transition-all duration-200 border-slate-800 bg-[#0e1329] text-brand-gray hover:border-slate-700/80 hover:text-white";
      const check = b.querySelector('.check-indicator');
      if (check) check.style.display = idx === 0 ? 'block' : 'none';
    });

    serviceTypeBtns.forEach((b, idx) => {
      b.className = idx === 0 
        ? "service-grid-option flex items-center justify-between px-4 py-2.5 rounded border text-left text-sm transition-all duration-200 border-brand-orange bg-brand-orange/10 text-white font-semibold"
        : "service-grid-option flex items-center justify-between px-4 py-2.5 rounded border text-left text-sm transition-all duration-200 border-slate-800 bg-[#0e1329] text-brand-gray hover:border-slate-700/80 hover:text-white";
      const check = b.querySelector('.check-indicator');
      if (check) check.style.display = idx === 0 ? 'block' : 'none';
    });

    capacityBtns.forEach((b, idx) => {
      b.className = idx === 1 
        ? "capacity-grid-option flex flex-col items-center justify-center p-3 rounded border text-center transition-all border-brand-orange bg-brand-orange/10 text-white"
        : "capacity-grid-option flex flex-col items-center justify-center p-3 rounded border text-center transition-all border-slate-800 bg-[#0e1329] text-brand-gray hover:border-slate-700";
    });

    // Reset button states STEP 2
    facilityBtns.forEach((b, idx) => {
      b.className = idx === 0 
        ? "facility-grid-option flex items-center justify-between px-4 py-2.5 rounded border text-left text-sm transition-all duration-200 border-brand-orange bg-brand-orange/10 text-white font-semibold"
        : "facility-grid-option flex items-center justify-between px-4 py-2.5 rounded border text-left text-sm transition-all duration-200 border-slate-800 bg-[#0e1329] text-brand-gray hover:border-slate-700/80 hover:text-white";
      const check = b.querySelector('.check-indicator');
      if (check) check.style.display = idx === 0 ? 'block' : 'none';
    });

    timelineBtns.forEach((b, idx) => {
      b.className = idx === 1 
        ? "timeline-grid-option flex items-center justify-between px-4 py-3 rounded border text-left text-sm transition-all duration-200 border-brand-orange bg-brand-orange/10 text-white font-semibold"
        : "timeline-grid-option flex items-center justify-between px-4 py-3 rounded border text-left text-sm transition-all duration-200 border-slate-800 bg-[#0e1329] text-brand-gray hover:border-slate-700/80 hover:text-white";
      const check = b.querySelector('.check-indicator');
      if (check) check.style.display = idx === 1 ? 'block' : 'none';
    });

    if (progressHeader) progressHeader.style.display = 'flex';
    prevBtn.style.display = 'flex';
    nextBtn.style.display = 'flex';
  }

  // Inject a global function to let standard anchor/button elements trigger modal
  window.openModal = openModal;
  window.closeModal = closeModal;
}

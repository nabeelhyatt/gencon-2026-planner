// Gen Con 2026 Planner data — verified Jul 21, 2026.
// Booths: official 2026 Exhibit Hall map. Events: live Gen Con catalog + eventdb mirror.
// status: "open" (3+ seats at capture), "low" (few/0 left — join waitlist), "verify" (confirm at reg)

const SCHEDULE = {
  wed: {
    label:"Wed · Trade Day", lede:"Jul 29 · Professional day for librarians + hobby retailers. A Trade Day badge is vetted, free-ish, and includes a 4-day Gen Con badge. Apply in advance. This is TTL's single highest-value day.",
    blocks:[
      { time:"10:00 AM", events:[
        { type:"ttl", time:"10:00 AM", dur:"1 hr", title:"Building a Library Collection of Serious Games & What to Do with It", loc:"JW 106", desc:"How curators select & deploy games — directly transferable to TTL's opening collection.", status:"verify", cost:"Free", prio:"HIGH", src:"https://www.gencon.com/events/307054" }
      ]},
      { time:"11:00 AM", events:[
        { type:"ttl", time:"11:00 AM", dur:"1 hr", title:"Get in the Game (at the library!)", loc:"JW White River Ballroom B", desc:"Flagship library-gaming session — how libraries build, choose & circulate games. Wholesale lead potential.", status:"open", seats:"Trade Day", cost:"Free", prio:"HIGHEST", src:"https://www.gencon.com/events/309255" },
        { type:"ttl", time:"11:00 AM", dur:"1 hr", title:"Gaming at Your Library on a Shoestring Budget", loc:"JW 102", desc:"Lean programming + low-cost acquisition tactics — great for a new store watching cashflow.", status:"verify", cost:"Free", prio:"MED", src:"https://www.gencon.com/events/303703" }
      ]},
      { time:"1:00 PM", events:[
        { type:"retail", time:"1:00 PM", dur:"1 hr", title:"GAMA · Retail Merchandising — Stocking Shelves & Store Layout", loc:"JW White River Ballroom B", desc:"GAMA retailer track. Purpose-built for a new store opening. Note: catalog lists 2 PM, live page lists 1 PM — verify time; GAMA sessions run back-to-back in Ballroom B.", status:"verify", cost:"Free", prio:"HIGHEST", src:"https://www.gencon.com/events/325898" },
        { type:"retail", time:"1:00 PM", dur:"1 hr", title:"GAMA · Retailer Roundtable & Q&A", loc:"JW White River Ballroom B", desc:"Explicitly welcomes new retailers. Best room to meet distributor reps & peers. Time conflicts with Merchandising per live pages — pick one or hop between; verify final schedule.", status:"verify", cost:"Free", prio:"HIGHEST", src:"https://www.gencon.com/events/325901" },
        { type:"ttl", time:"1:00 PM", dur:"1 hr", title:"So You Want to Build a Circulating Board Game Collection", loc:"JW White River Ballroom G", desc:"Library lending ops — damage/loss policies, selection criteria. Informs TTL's demo-library model.", status:"verify", cost:"Free", prio:"HIGH", src:"https://www.gencon.com/events/309211" },
        { type:"ttl", time:"1:00 PM", dur:"1 hr", title:"Beyond the Spreadsheet: Cataloging Games", loc:"JW White River Ballroom H", desc:"Systems for tracking a game inventory — useful backend thinking for TTL's POS/rental.", status:"verify", cost:"Free", prio:"MED", src:"https://www.gencon.com/events/306450" }
      ]},
      { time:"2:00 PM", events:[
        { type:"retail", time:"2:00 PM", dur:"1 hr", title:"Global Insights for Hobby Retail Success", loc:"JW White River Ballroom F", desc:"Merchant Guild data on what sells — directly informs TTL launch inventory.", status:"verify", cost:"Free", prio:"HIGH", src:"https://www.gencon.com/events/320970" },
        { type:"ttl", time:"2:00 PM", dur:"1 hr", title:"Intro to Shipping & Distribution in Asia", loc:"JW 105", desc:"VFI Asia — import logistics for stocking games. Relevant to TTL sourcing.", status:"verify", cost:"Free", prio:"MED", src:"https://www.gencon.com/events/312656" }
      ]},
      { time:"3:00 PM", events:[
        { type:"retail", time:"3:00 PM", dur:"1 hr", title:"GAMA · Organized Play, Community Events & Game Nights", loc:"JW White River Ballroom B", desc:"How to run OP leagues & game nights that drive repeat foot traffic — core to TTL's model.", status:"verify", cost:"Free", prio:"HIGHEST", src:"https://www.gencon.com/events/325899" },
        { type:"ttl", time:"3:00 PM", dur:"1 hr", title:"Building a Community Around Games", loc:"JW 203", desc:"Retailers, educators & librarians on community growth. Cross-pollinate ideas for TTL.", status:"verify", cost:"Free", prio:"HIGH", src:"https://www.gencon.com/events/319180" }
      ]}
    ]
  },

  thu: {
    label:"Thu · Jul 30", lede:"Lightest crowds — ideal for booth recon & priority demos. Open with a famous-designer booth crawl, then publishing/pitching track + iconic evening events.",
    blocks:[
      { time:"9:00 AM", events:[
        { type:"playtest", time:"9:00 AM", dur:"2 hr", title:"First Exposure Playtest Hall", loc:"ICC 107–112", desc:"Playtest games-in-development and network with designers. 24 recurring sessions Thu–Sun. Bringing Race to Kepler: only if you've secured a designer slot or the session permits it — confirm at reg / the First Exposure desk.", status:"low", seats:"2 left (other slots open)", cost:"Free", prio:"HIGHEST", src:"https://www.gencon.com/events/317103" },
        { type:"special", time:"Recurring Thu–Sun", dur:"1.5 hr", title:"True Dungeon: Fang & Fury", loc:"Stadium Exhibit Hall 1–2", desc:"Iconic Gen Con immersive dungeon-crawl. $88, many 90-min slots across all four days. This slot shows 2 left — not enough for 3 together; book a fuller slot early or treat as watchlist.", status:"low", seats:"2 left", cost:"$88", prio:"MED", src:"https://www.gencon.com/events/327622" },
        { type:"logistics", time:"Open hours", title:"Gen Con Games Library & Open Gaming", loc:"Lucas Oil Stadium (verify 2026 location at reg)", desc:"First-timer tip: thousands of free-play games to borrow. Confirm 2026 hours/tickets at reg — some blocks may be ticketed.", status:"verify", cost:"Free", prio:"MED", src:"https://www.gencon.com/" }
      ]},
      { time:"10:00 AM · Booth crawl (heavy hitters + famous designers)", events:[
        { type:"crawl", time:"10:00 AM", title:"CGE — Drillers, Kingdom Come: Deliverance, Codenames: Critical Role Adventures", loc:"Booth 1003 + Room 235", booth:"1003", desc:"Roman Bednář / Adam Španěl's Drillers (medium). Heavy Kingdom Come. Drop-in Drillers demo also Thu 1 PM.", status:"open", cost:"Free", prio:"HIGHEST", src:"https://www.czechgames.com/events/cge-at-gen-con-2026" },
        { type:"crawl", time:"10:00 AM", title:"Board & Dice — Entropy, Maestro", loc:"Booth 2527", booth:"2527", desc:"Entropy is a top-anticipated HEAVY game. Maestro also heavy. No dedicated demo event — demo at booth.", status:"open", cost:"Free", prio:"HIGHEST", src:"https://files.gencon.com/2026.exhibithallmap.pdf" },
        { type:"crawl", time:"10:00 AM", title:"Mindclash — Revenant", loc:"Booth 261", booth:"261", desc:"Heavy competitive worker placement. Mindclash = heavy-euro pedigree.", status:"open", cost:"Free", prio:"HIGH", src:"https://files.gencon.com/2026.exhibithallmap.pdf" },
        { type:"demo", time:"10:00 AM", dur:"2 hr", title:"Learn & Play: Revenant", loc:"Stadium Field : Red", desc:"Ticketed Revenant demo — 4 seats left, all open for a group of 3.", status:"open", seats:"4 left", cost:"$2", prio:"HIGH", src:"https://www.gencon.com/events/325675" },
        { type:"demo", time:"10:00 AM", dur:"1 hr", title:"TRAIL TO THE TEMPLE — Playthrough (Reiner Knizia)", loc:"ICC Hall C : Mindware", booth:"2002", desc:"Knizia design. 0 left in this slot — demo at MindWare booth 2002 instead, or grab another slot.", status:"low", seats:"0 left", cost:"$2", prio:"HIGH", src:"https://www.gencon.com/events/318112" }
      ]},
      { time:"12:00 PM", events:[
        { type:"publishing", time:"12:00 PM", dur:"1 hr", title:"From Pitch to Partnership: Pitching & Follow-Up", loc:"JW White River Ballroom A", desc:"How to pitch Race to Kepler to publishers. 0 left — waitlist / walk-up.", status:"low", seats:"0 left", cost:"Free", prio:"HIGHEST", src:"https://www.gencon.com/events/329656" },
        { type:"publishing", time:"12:00 PM", dur:"4 hr", title:"Pitch Us & Refine Your Game (workshop)", loc:"Marriott Atlanta", desc:"Hands-on pitch refinement. Only 2 seats — book instantly if interested. $24.", status:"low", seats:"2 left", cost:"$24", prio:"HIGH", src:"https://www.gencon.com/events/326815" }
      ]},
      { time:"1:00 PM", events:[
        { type:"demo", time:"1:00 PM", dur:"2 hr", title:"Learn & Play: Tag Team: Arthur's Legacy", loc:"ICC 142", booth:"2435 (Hachette)", desc:"Lebrat/German/Sirieix/Turpin. 0 left in this slot — recurring Thu–Sun, grab another.", status:"low", seats:"0 left", cost:"$2", prio:"MED", src:"https://www.gencon.com/events/324712" },
        { type:"demo", time:"1:00 PM", dur:"1 hr", title:"Drillers Drop-in Demo", loc:"ICC 235–239", booth:"1003", desc:"9 seats, all open. Easiest way to try CGE's medium-weight anticipated release.", status:"open", seats:"9 left", cost:"Free", prio:"HIGHEST", src:"https://www.gencon.com/events/320931" }
      ]},
      { time:"2:00 PM", events:[
        { type:"playtest", time:"2:00 PM", dur:"3 hr", title:"Playtest Like a Rockstar! (run a great playtest)", loc:"JW White River Ballroom B", desc:"How to run constructive playtests of YOUR game — essential Race to Kepler skill. 2 left.", status:"low", seats:"2 left", cost:"Free", prio:"HIGH", src:"https://www.gencon.com/events/329660" }
      ]},
      { time:"3:00 PM", events:[
        { type:"publishing", time:"3:00 PM", dur:"1 hr", title:"Ask Me Anything — Publishers", loc:"Marriott Ballroom 3", desc:"Direct Q&A with publishers — bring Race to Kepler questions. Booked: 4 tickets (Nabeel ×2, Kaden, Liam).", status:"open", seats:"Booked ✓", cost:"Free", prio:"HIGH", src:"https://www.gencon.com/events/327100", booked:true }
      ]},
      { time:"5:00 PM", events:[
        { type:"playtest", time:"5:00 PM", dur:"1 hr", title:"Digging for Dinos — Play & Designer Signing (incl. game copy)", loc:"Stadium Field : Blue", desc:"Designer signing demo + take-home copy. 11 of 12 seats open.", status:"open", seats:"11 left", cost:"$32", prio:"MED", src:"https://www.gencon.com/events/325555" }
      ]},
      { time:"6:00 PM", events:[
        { type:"publishing", time:"6:00 PM", dur:"1 hr", title:"Felicia Day Talks Crowdfunding — \"The Guild\" Movie & More", loc:"ICC 244", desc:"15 left. Crowdfunding storytelling from a master campaigner. Inspiring for the Race to Kepler launch.", status:"open", seats:"15 left", cost:"Free", prio:"HIGH", src:"https://www.gencon.com/events/328524" },
        { type:"playtest", time:"6:00 PM", dur:"4 hr", title:"Community Playtest Night", loc:"JW White River Ballroom A", desc:"15 left. Evening open playtest — confirm whether designers may bring their own prototypes before pitching Race to Kepler here.", status:"open", seats:"15 left", cost:"Free", prio:"HIGH", src:"https://www.gencon.com/events/304048" }
      ]},
      { time:"8:00 PM", events:[
        { type:"special", time:"8:00 PM", dur:"3 hr", title:"Gen Con Live Auction — Sailing the Seas of Crowdfunding", loc:"Marriott Ballroom 5–6", desc:"Crowdfunding section of the iconic Live Auction. Watch the campaign-success stories.", status:"open", seats:"50 left", cost:"Free", prio:"MED", src:"https://www.gencon.com/events/306727" }
      ]}
    ]
  },

  fri: {
    label:"Fri · Jul 31", lede:"The marquee publishing day. Morning manufacturing track, midday self-publishing, and the headline <strong>Kickstarter Spotlight at 4 PM</strong>. Afternoon demos of heavy hitters.",
    blocks:[
      { time:"9:00 AM", events:[
        { type:"demo", time:"9:00 AM", dur:"1 hr", title:"Drillers Learn to Play", loc:"ICC 235", booth:"1003", desc:"0 left in this slot — recurring hourly Thu–Sun; the 1 PM drop-in demo is the easy fallback.", status:"low", seats:"0 left", cost:"$6", prio:"HIGH", src:"https://www.gencon.com/events/330356" }
      ]},
      { time:"10:00 AM", events:[
        { type:"publishing", time:"10:00 AM", dur:"1 hr", title:"Let's Fix a Contract: Publishing Agreements & Creative Contracts", loc:"JW White River Ballroom A", desc:"3 left. Practical contract teardown — protect Race to Kepler before you sign.", status:"open", seats:"3 left", cost:"Free", prio:"HIGHEST", src:"https://www.gencon.com/events/328991" },
        { type:"publishing", time:"10:00 AM", dur:"1.5 hr", title:"A Crash Course in Game Manufacturing", loc:"Crowne Plaza Conrail Stn", desc:"0 left — waitlist. Core of the manufacturing track.", status:"low", seats:"0 left", cost:"Free", prio:"HIGH", src:"https://www.gencon.com/events/304563" }
      ]},
      { time:"11:00 AM", events:[
        { type:"publishing", time:"11:00 AM", dur:"1 hr", title:"Failing is Good! — How Failing in Game Design Taught Me to Succeed", loc:"JW White River Ballroom B", desc:"4 left. Candid design-lessons talk.", status:"open", seats:"4 left", cost:"Free", prio:"MED", src:"https://www.gencon.com/events/327223" }
      ]},
      { time:"12:00 PM", events:[
        { type:"publishing", time:"12:00 PM", dur:"1.5 hr", title:"Prepping Your Files for Mass Production Printing", loc:"Crowne Plaza Conrail", desc:"47 left. Manufacturing track — get Race to Kepler print-ready.", status:"open", seats:"47 left", cost:"Free", prio:"HIGH", src:"https://www.gencon.com/events/304566" }
      ]},
      { time:"1:00 PM", events:[
        { type:"publishing", time:"1:00 PM", dur:"2 hr", title:"Self-Publishing 101 — A Practical Guide for First-Time Authors", loc:"Marriott Ballroom 2", desc:"23 left. Workshop. Directly applicable to Race to Kepler's path. $14.", status:"open", seats:"23 left", cost:"$14", prio:"HIGHEST", src:"https://www.gencon.com/events/327096" }
      ]},
      { time:"2:00 PM", events:[
        { type:"publishing", time:"2:00 PM", dur:"1.5 hr", title:"Launching Your Board Game: Crowdfunding, Manufacturing & Fulfillment", loc:"Crowne Plaza Conrail Stn", desc:"0 left — waitlist. The single most on-point Race to Kepler session.", status:"low", seats:"0 left", cost:"Free", prio:"HIGHEST", src:"https://www.gencon.com/events/304569" },
        { type:"playtest", time:"2:00 PM", dur:"3 hr", title:"Playtest Like a Rockstar! (Fri session)", loc:"JW White River Ballroom", desc:"6 left. Alternate to the sold-out publishing talk if you already playtested Thu.", status:"open", seats:"6 left", cost:"Free", prio:"MED", src:"https://www.gencon.com/events/327352" }
      ]},
      { time:"3:00 PM", events:[
        { type:"demo", time:"3:00 PM", dur:"3 hr", title:"Blood Rage: Valhalla (Eric M. Lang) — Demo", loc:"ICC Hall B : Tycoon Games", booth:"1819", desc:"HEAVY. Eric Lang lineage. 0 left — demo at Tycoon booth 1819.", status:"low", seats:"0 left", cost:"$4", prio:"HIGH", src:"https://www.gencon.com/events/318067" },
        { type:"demo", time:"3:00 PM", dur:"2 hr", title:"Machi Koro: Bright Lights, Big City", loc:"ICC Hall D : Orange", booth:"215 (Pandasaurus)", desc:"8 left. Pandasaurus's Machi Koro: Life is the new release at booth 215.", status:"open", seats:"8 left", cost:"$4", prio:"MED", src:"https://www.gencon.com/events/308408" }
      ]},
      { time:"4:00 PM", events:[
        { type:"publishing", time:"4:00 PM", dur:"1 hr", title:"Kickstarter Spotlight", loc:"Marriott Ballroom 4", desc:"⭐ 39 left. The marquee crowdfunding seminar — interview with Kickstarter's publishing outreach. Must-attend for Race to Kepler.", status:"open", seats:"39 left", cost:"Free", prio:"HIGHEST", src:"https://www.gencon.com/events/327130" },
        { type:"publishing", time:"4:00 PM", dur:"1.5 hr", title:"Designing with Manufacturing in Mind", loc:"Crowne Plaza Conrail Stn", desc:"34 left. Manufacturing track — design for print cost.", status:"open", seats:"34 left", cost:"Free", prio:"HIGH", src:"https://www.gencon.com/events/304571" }
      ]},
      { time:"5:00 PM", events:[
        { type:"publishing", time:"5:00 PM", dur:"1 hr", title:"Small Boxes, Big Dreams", loc:"ICC 212", desc:"58 left. Small-format publishing — lean model relevant to a first Race to Kepler run.", status:"open", seats:"58 left", cost:"Free", prio:"MED", src:"https://www.gencon.com/events/318731" }
      ]}
    ]
  },

  sat: {
    label:"Sat · Aug 1", lede:"Peak energy day. Anticipated-game booth crawl, funding seminars, the Costume Contest & Parade, and two iconic Gen Con traditions: Cardhalla (build all day → destroy at 10 PM) and the Charity Auction.",
    blocks:[
      { time:"All day · Cardhalla build", events:[
        { type:"special", time:"8:00 AM", dur:"10 hr", title:"Cardhalla Construction", loc:"Georgia Street Entrance", desc:"Help build massive card structures all day. Iconic Gen Con tradition. Free, drop in anytime.", status:"open", seats:"5000", cost:"Free", prio:"MED", src:"https://www.gencon.com/events/328880" }
      ]},
      { time:"10:00 AM", events:[
        { type:"publishing", time:"10:00 AM", dur:"1 hr", title:"How to Fund Your Projects", loc:"Marriott Ballroom 3", desc:"6 left — book now. Crowdfunding tactics. Pairs with yesterday's Spotlight.", status:"open", seats:"6 left", cost:"Free", prio:"HIGHEST", src:"https://www.gencon.com/events/327110" }
      ]},
      { time:"10:00 AM · Booth crawl (famous designers, anticipated)", events:[
        { type:"crawl", time:"10:00 AM", title:"AEG — Into the Machine, Cascadia: Alpine Lakes", loc:"Booth 403", booth:"403", desc:"Into the Machine (medium, anticipated) + new Cascadia expansion (Randy Flynn).", status:"open", cost:"Free", prio:"HIGH", src:"https://files.gencon.com/2026.exhibithallmap.pdf" },
        { type:"crawl", time:"10:00 AM", title:"Hachette — Tag Team: Arthur's Legacy, Panorama, Omens", loc:"Booth 2435", booth:"2435", desc:"Scorpion Masqué line + Omens. Medium gateway-ish crowd-pleasers for TTL inventory.", status:"open", cost:"Free", prio:"HIGH", src:"https://files.gencon.com/2026.exhibithallmap.pdf" },
        { type:"crawl", time:"10:00 AM", title:"Restoration Games — LOTR: The King's Gambit", loc:"Booth 1735", booth:"1735", desc:"New Restoration release. Also Return to Dark Tower / Unmatched demos (ICC Hall B corral).", status:"open", cost:"Free", prio:"HIGH", src:"https://files.gencon.com/2026.exhibithallmap.pdf" },
        { type:"crawl", time:"10:00 AM", title:"Gamewright — Forbidden Legacy (Leacock + Daviau)", loc:"Booth 1807", booth:"1807", desc:"Matt Leacock & Rob Daviau collaboration. Medium. Legacy pedigree.", status:"open", cost:"Free", prio:"HIGH", src:"https://files.gencon.com/2026.exhibithallmap.pdf" },
        { type:"crawl", time:"10:00 AM", title:"Paverson — Class of '89 (Kory Jordan)", loc:"Booth 1755", booth:"1755", desc:"Paverson's anticipated medium release.", status:"open", cost:"Free", prio:"HIGH", src:"https://files.gencon.com/2026.exhibithallmap.pdf" },
        { type:"crawl", time:"10:00 AM", title:"Cardboard Alchemy — Whisperwood", loc:"Booth 2667", booth:"2667", desc:"HEAVY fantasy bag-building euro (Flamecraft pedigree). HQ also ICC Hall B.", status:"open", cost:"Free", prio:"HIGH", src:"https://files.gencon.com/2026.exhibithallmap.pdf" }
      ]},
      { time:"11:00 AM", events:[
        { type:"publishing", time:"11:00 AM", dur:"1 hr", title:"Midwest Independent Publishers Association (MiPA) Spotlight", loc:"Marriott Ballroom 4", desc:"51 left. Regional publishing network — good for a first-time publisher.", status:"open", seats:"51 left", cost:"Free", prio:"MED", src:"https://www.gencon.com/events/327134" }
      ]},
      { time:"1:00 PM", events:[
        { type:"publishing", time:"1:00 PM", dur:"1.5 hr", title:"The Secrets of Board Game Manufacturing", loc:"Stadium Meeting Room 12", desc:"0 left — waitlist. Closes the manufacturing track.", status:"low", seats:"0 left", cost:"Free", prio:"HIGH", src:"https://www.gencon.com/events/307755" }
      ]},
      { time:"3:00 PM", events:[
        { type:"special", time:"3:00 PM", dur:"1 hr", title:"Gen Con 2026 Costume Parade", loc:"ICC, in front of Hall A (Lobby)", desc:"Free, huge capacity. Pure spectacle + social content for TTL/Race to Kepler channels.", status:"open", seats:"500", cost:"Free", prio:"MED", src:"https://www.gencon.com/events/321646" }
      ]},
      { time:"4:00 PM", events:[
        { type:"special", time:"4:00 PM", dur:"2 hr", title:"40th Annual Gen Con Costume Contest", loc:"ICC 500 Ballroom", desc:"0 left — Spectactor tickets sell out fast; watch from the railings / overflow.", status:"low", seats:"0 left", cost:"Free", prio:"MED", src:"https://www.gencon.com/events/321616" }
      ]},
      { time:"6:00 PM", events:[
        { type:"playtest", time:"6:00 PM", dur:"4 hr", title:"TTGDA Creator Meetup", loc:"JW White River Ballroom A & B", desc:"⭐ Tabletop game designers association mixer — prime Race to Kepler networking. Booked: 4 tickets (Nabeel ×2, Kaden, Liam).", status:"open", seats:"Booked ✓", cost:"Free", prio:"HIGHEST", src:"https://www.gencon.com/events/330934", booked:true }
      ]},
      { time:"7:00 PM", events:[
        { type:"special", time:"7:00 PM", dur:"4 hr", title:"Gen Con Live Auction — Charity Section", loc:"Marriott Ballroom 5–6", desc:"Rare items, proceeds to charity. Relaxed publisher/distributor energy — good networking.", status:"open", seats:"50 left", cost:"Free", prio:"HIGH", src:"https://www.gencon.com/events/306754" }
      ]},
      { time:"10:00 PM", events:[
        { type:"special", time:"10:00 PM", dur:"1 hr", title:"Cardhalla Destruction (charity)", loc:"Georgia Street Entrance", desc:"⭐ The most iconic Gen Con moment — coin-toss destruction of the weekend's card city for charity. Don't miss.", status:"open", seats:"5000", cost:"Free (bring $1 coins to throw)", prio:"HIGHEST", src:"https://www.gencon.com/events/328885" }
      ]}
    ]
  },

  sun: {
    label:"Sun · Aug 2", lede:"Wind-down: IP/legal protection, the Nexus Way store workshops, final deal-hunting & FLGS merchandising recon. Pack carefully.",
    blocks:[
      { time:"8:00 AM", events:[
        { type:"retail", time:"8:00 AM", dur:"1 hr", title:"The Nexus Way — Building a Successful Gaming Store Post-Covid", loc:"JW 203", desc:"Store-blueprint philosophy. Free intro before the paid workshops.", status:"verify", cost:"Free", prio:"HIGH", src:"https://www.gencon.com/events/315721" }
      ]},
      { time:"9:00 AM", events:[
        { type:"publishing", time:"9:00 AM", dur:"2 hr", title:"Could Your Hobby Be a Business?", loc:"Stadium Meeting Room 10", desc:"38 left. Business-formation workshop. $16.", status:"open", seats:"38 left", cost:"$16", prio:"MED", src:"https://www.gencon.com/events/300802" }
      ]},
      { time:"10:00 AM", events:[
        { type:"retail", time:"10:00 AM", dur:"workshop", title:"The Nexus Way: From Vision to Execution (build your store blueprint)", loc:"JW 203", desc:"Paid workshop — construct your actual store blueprint. $22.", status:"verify", cost:"$22", prio:"HIGH", src:"https://www.gencon.com/events/315720" },
        { type:"special", time:"10:00 AM", title:"Final Expo Sweep & Deal Hunting", loc:"Exhibit Hall", desc:"Last-day discounts. Hit every priority booth you missed. Ask about wholesale terms & late pledges.", status:"open", cost:"Free", prio:"HIGHEST", src:"https://files.gencon.com/2026.exhibithallmap.pdf" }
      ]},
      { time:"10:00 AM · FLGS merchandising recon", events:[
        { type:"retail", time:"10:00 AM", title:"Miniature Market", loc:"Booth 541", booth:"541", desc:"Major online/retail discounter — study pricing & layout.", status:"open", cost:"Free", prio:"HIGH", src:"https://files.gencon.com/2026.exhibithallmap.pdf" },
        { type:"retail", time:"10:00 AM", title:"CoolStuffInc.com", loc:"Booth 1501", booth:"1501", desc:"Large online retailer — observe con exclusives & deals.", status:"open", cost:"Free", prio:"HIGH", src:"https://files.gencon.com/2026.exhibithallmap.pdf" },
        { type:"retail", time:"10:00 AM", title:"Troll and Toad", loc:"Booth 501 / 601", booth:"501/601", desc:"TCG-heavy retailer — merchandising reference.", status:"open", cost:"Free", prio:"MED", src:"https://files.gencon.com/2026.exhibithallmap.pdf" },
        { type:"retail", time:"10:00 AM", title:"Chimera Hobby Shop (brick & mortar FLGS)", loc:"Booth 2301", booth:"2301", desc:"Real FLGS — best merchandising model to study for TTL's physical store.", status:"open", cost:"Free", prio:"HIGH", src:"https://files.gencon.com/2026.exhibithallmap.pdf" }
      ]},
      { time:"12:00 PM", events:[
        { type:"publishing", time:"12:00 PM", dur:"1.5 hr", title:"Protect Yourself: Intellectual Property for the Hobby Game Industry", loc:"Crowne Plaza Haymarket A", desc:"45 left. Protect Race to Kepler's IP before launch.", status:"open", seats:"45 left", cost:"Free", prio:"HIGHEST", src:"https://www.gencon.com/events/320439" }
      ]},
      { time:"1:00 PM", events:[
        { type:"retail", time:"1:00 PM", dur:"workshop", title:"The Nexus Way — Behind the Screen of Professional Game Mastery", loc:"JW 203", desc:"Paid-play business model — revenue stream for TTL. $20.", status:"verify", cost:"$20", prio:"MED", src:"https://www.gencon.com/events/315722" }
      ]},
      { time:"3:00 PM", events:[
        { type:"publishing", time:"3:00 PM", dur:"1 hr", title:"LegalGeek Q&A About IP Law for Game Designers", loc:"ICC 245", desc:"47 left. Free lawyer Q&A — bring your Race to Kepler IP questions.", status:"open", seats:"47 left", cost:"Free", prio:"HIGH", src:"https://www.gencon.com/events/320441" }
      ]}
    ]
  }
};

const GAMES = [
  ["Drillers","CGE","Roman Bednář, Adam Španěl","Medium","1003","HIGHEST","https://www.czechgames.com/events/cge-at-gen-con-2026"],
  ["Kingdom Come: Deliverance – BG","CGE","CGE","Heavy","1003","HIGH","https://www.czechgames.com/events/cge-at-gen-con-2026"],
  ["Codenames: Critical Role Adventures","CGE","CGE","Light","1003","MED","https://www.czechgames.com/events/cge-at-gen-con-2026"],
  ["Entropy","Board & Dice","Board & Dice","Heavy","2527","HIGHEST","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Maestro","Board & Dice","Board & Dice","Heavy","2527","HIGH","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Revenant","Mindclash","Mindclash","Heavy","261","HIGH","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Whisperwood","Cardboard Alchemy","Cardboard Alchemy","Heavy","2667","HIGH","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Blood Rage: Valhalla","Tycoon Games","Eric M. Lang","Heavy","1819","HIGH","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Fury of Dracula (5th Ed.)","Avalon Hill","Stephen Hand","Heavy","ICC Hall E","HIGH","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Trail to the Temple","MindWare","Reiner Knizia","Light","2002","HIGH","https://www.youtube.com/watch?v=rMI_4Lh4bac"],
  ["Moytura","Bitewing Games","Trevor Benjamin, David Thompson","Medium","1253","HIGH","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Song of Silveranth","Red Raven","Ryan Laukat","Medium","230","HIGH","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Duel of Meloch","Stonemaier","Stonemaier","Medium","2909","HIGH","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Wingspan Pocket","Stonemaier","Elizabeth Hargrave","Light","2909","HIGH","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Into the Machine","AEG","AEG","Medium","403","HIGH","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Cascadia: Alpine Lakes","AEG","Randy Flynn","Light","403","HIGH","https://www.youtube.com/watch?v=rMI_4Lh4bac"],
  ["Forbidden Legacy","Gamewright","Matt Leacock, Rob Daviau","Medium","1807","HIGH","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Class of '89","Paverson Games","Kory Jordan","Medium","1755","HIGH","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["LOTR: The King's Gambit","Restoration Games","Restoration","Medium","1735","HIGH","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Tag Team: Arthur's Legacy","Hachette / Scorpion Masqué","Lebrat, German, Sirieix, Turpin","Medium","2435","MED","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Panorama","Hachette","—","Medium","2435","MED","https://www.youtube.com/watch?v=rMI_4Lh4bac"],
  ["Omens","Hachette","Hachette","Light","2435","MED","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Machi Koro: Life","Pandasaurus","Masao Suganuma","Light","215","MED","https://www.youtube.com/watch?v=rMI_4Lh4bac"],
  ["Kingdom Crossing","Pandasaurus","Pandasaurus","Medium","215","HIGH","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Night at the Zoo","Albi / Capstone","Tomáš Holek","Light","611","MED","https://www.youtube.com/watch?v=rMI_4Lh4bac"],
  ["Prague Unseen","Albi","Albi","Medium","2564","MED","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Stones & Rivers","Blue Heron Games","Trevor Harron","Medium","1456","MED","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Jisogi: Anime Studio Tycoon","Good Games","—","Medium","2543","MED","https://www.youtube.com/watch?v=rMI_4Lh4bac"],
  ["The Six of VIII","25th Century Games","Carol LaGrow","Light","2219","MED","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Observatory","25th Century Games","25th Century","Medium","2219","MED","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Ostia: Mariner Edition","Crafty Games","Totsuca Chuo","Medium","155","MED","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["March of the Ants: Evolved","Weird City Games","Tim Eisner, Ryan Swisher","Medium","2661","MED","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Brave & Bold","Resurrection Games","Brad Zander","Medium","3054","MED","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Headliner","Chris Couch Games","Jaedon Johnson","Medium","2753","MED","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Trick to the Future","GameHead","Taiki Shinzawa","Light","1629","MED","https://www.youtube.com/watch?v=rMI_4Lh4bac"],
  ["Carcassonne Labyrinth","HiG / Ravensburger","Wrede, Kobbert","Light","2001","MED","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Enchanted Ivy","allplay","Sarah Joshua","Light","2119","MED","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Diables","Salt & Pepper","Salt & Pepper","Light","2666","MED","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Glasgow Train Robbery","Salt & Pepper","Salt & Pepper","Light","2666","LOW","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Fliptoons: Season 2","Thunderworks","Thunderworks","Light","2447","MED","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Warp 99","Bézier Games","Reinhard Staupe","Light","237","MED","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Estate: Raise the Realm","3WS Games","3WS","Medium","231","MED","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Tenby","Mighty Boards","—","Medium","131","LOW","https://www.youtube.com/watch?v=rMI_4Lh4bac"],
  ["Treeline","Burnt Island Games","Christopher Ryan Chan","Light","2310","MED","https://files.gencon.com/2026.exhibithallmap.pdf"],
  ["Primacy","Spielcraft","Spielcraft","Heavy","n/a","MED","https://www.spielcraftgames.com/"],
  ["Fox Grove","Queen Games","Queen Games","Medium","n/a","MED","https://www.youtube.com/watch?v=XpcwkQtIHDs"],
  ["North American Railways","Playte","Peer Sylvester","Medium","n/a","MED","https://www.meeplemountain.com/articles/most-anticipated-games-of-gen-con/"],
  ["Bordeaux","Road to Infamy","Road to Infamy","Medium","n/a","MED","https://www.youtube.com/watch?v=S54FKQH-_sw"]
];

// Row schema: [Publisher, Booth#, ConfirmedHall (blank = unconfirmed — see renderBooths), KnownFor, Priority, Day]
const BOOTHS = [
  ["AEG (Alderac)","403","","Into the Machine, Cascadia: Alpine Lakes","HIGH","Thu/Sat"],
  ["Pandasaurus Games","215","D","Machi Koro: Life, Kingdom Crossing","HIGH","Thu"],
  ["CGE","1003 + Rm 235","","Drillers, Kingdom Come, Codenames CR","HIGHEST","Thu"],
  ["Board & Dice","2527","","Entropy, Maestro","HIGHEST","Thu/Sat"],
  ["Mindclash Games","261","","Revenant","HIGH","Thu"],
  ["Hachette Boardgames","2435 + ICC 142","","Tag Team, Panorama, Omens","HIGH","Thu/Sat"],
  ["Bitewing Games","1253","","Moytura","HIGH","Thu"],
  ["Capstone Games","611","","Night at the Zoo, Ark Nova line","HIGH","Fri/Sat"],
  ["Albi (ALBI)","2564","","Prague Unseen, Night at the Zoo","MED","Fri"],
  ["Stonemaier Games","2909","","Duel of Meloch, Wingspan Pocket","HIGH","Thu"],
  ["Salt & Pepper Games","2666","","Diables, Glasgow Train Robbery","MED","Fri"],
  ["Red Raven Games","230","","Song of Silveranth","HIGH","Thu"],
  ["allplay","2119 + ICC 140","","Enchanted Ivy","MED","Sat"],
  ["Good Games Publishing","2543","","Jisogi: Anime Studio Tycoon","MED","Sat"],
  ["Thunderworks Games","2447","","Fliptoons S2","MED","Sat"],
  ["Paverson Games","1755","","Class of '89","HIGH","Sat"],
  ["Bézier Games","237","","Warp 99","MED","Sat"],
  ["MindWare","2002","C","Trail to the Temple","HIGH","Thu"],
  ["GameHead","1629","","Trick to the Future","MED","Sat"],
  ["Gamewright","1807","","Forbidden Legacy","HIGH","Sat"],
  ["Tycoon Games","1819","B","Blood Rage: Valhalla","HIGH","Sat"],
  ["25th Century Games","2219","","Six of VIII, Observatory","MED","Sat"],
  ["Cardboard Alchemy","2667 + Hall B HQ","B","Whisperwood","HIGH","Sat"],
  ["Restoration Games","1735 + Hall B","B","LOTR King's Gambit, Unmatched","HIGH","Sat"],
  ["Ghost Galaxy","1843","","LOTR: Confrontation","MED","Sun"],
  ["Ares Games","331","","War of the Ring","MED","Sun"],
  ["Arcane Wonders","629","","Sheriff of Nottingham line","MED","Thu"],
  ["Academy Games","2901","","Historical strategy","HIGH","Sat"],
  ["Archon Studio","2134 + Hall B","B","Masters of the Universe","MED","Sat"],
  ["Gray Matters Games","2662","","Party games","MED","Sat"],
  ["Renegade Game Studios","1619 + ICC 139 + Hall A","A","Full line, Crawl Con Room 139","HIGH","Sat"],
  ["Catalyst Game Labs","1611 + ICC 127 + Hall A","A","BattleTech, Shadowrun","HIGH","Sat"],
  ["Darrington Press","2639 + Daggerheart Rm 134","","Daggerheart, Solar Gardens","HIGH","Fri"],
  ["Asmodee","B817 (+809/929/1109)","B","Ticket to Ride, Splendor, Catan; OP in Hall E","HIGH","Thu"],
  ["IV Studio","3043 + ICC 136","","Moonrakers, Veiled Fate","HIGH","Sat"],
  ["Chip Theory Games","1317","","Too Many Bones, premium strat","HIGH","Sat"],
  ["BackerKit","363","","Crowdfunding platform — Race to Kepler intel","MED","Fri"],
  ["Gamefound","1453","","Crowdfunding platform — Race to Kepler intel","MED","Fri"],
  ["Fantasy Flight / Z-Man","under Asmodee B817","B","Arkham Horror, Pandemic","MED","Thu"],
  ["Miniature Market","541","","Major online/retail discounter — study pricing & layout","HIGH","Sun"],
  ["CoolStuffInc.com","1501","","Large online retailer — observe con exclusives & deals","HIGH","Sun"],
  ["Troll and Toad","501/601","","TCG-heavy retailer — merchandising reference","MED","Sun"],
  ["Chimera Hobby Shop","2301","","Real FLGS — best merchandising model for TTL's physical store","HIGH","Sun"],
  ["CMON","n/a","","Not in 2026 hall map","LOW","—"],
  ["Queen Games","n/a","","Not in 2026 hall map (Fox Grove)","LOW","—"]
];

const RTK_MISSIONS = [
  { title:"① Manufacturing — get print-ready", items:[
    "<strong>Prepping Your Files for Mass Production</strong> — Fri 12 PM ([304566](https://www.gencon.com/events/304566)) · 47 left ✅ — the practical priority; Kepler's files aren't manufacturing-ready yet",
    "<strong>Designing with Manufacturing in Mind</strong> — Fri 4 PM ([304571](https://www.gencon.com/events/304571)) · 34 left ✅",
    "A Crash Course in Game Manufacturing — Fri 10 AM ([304563](https://www.gencon.com/events/304563)) · sold out — join the waitlist now, re-check daily for released seats",
    "The Secrets of Board Game Manufacturing — Sat 1 PM ([307755](https://www.gencon.com/events/307755)) · sold out — waitlist"
  ]},
  { title:"② Decide the path: pitch vs. self-publish", items:[
    "<strong>Self-Publishing 101</strong> — Fri 1 PM, $14 ([327096](https://www.gencon.com/events/327096)) · 23 left ✅ — go if leaning self-publish; directly answers 'we've never done this'",
    "<strong>Pitch Us & Refine Your Game</strong> (hands-on workshop) — Thu 1 PM, $24 ([326815](https://www.gencon.com/events/326815)) · 2 left — book now",
    "From Pitch to Partnership — Thu 12 PM ([329656](https://www.gencon.com/events/329656)) · sold out — waitlist",
    "Ask Me Anything — Publishers — Thu 3 PM ([327100](https://www.gencon.com/events/327100)) · 20 left ✅ — bring Kepler-specific questions",
    "Talk to BackerKit (booth 363) and Gamefound (booth 1453) about post-Kickstarter fulfillment & distribution support, not crowdfunding-101 — you've already run the campaign"
  ]},
  { title:"③ Curated pitch targets at this show", items:[
    "<strong>Bitewing Games</strong> (booth 1253) — mid-weight/strategy fit, has run open-submission windows; ask current status at booth",
    "<strong>Capstone Games</strong> (booth 611) — strong mid-weight euro catalog, deckbuilder-adjacent; ask about their pitch process",
    "<strong>AEG</strong> (booth 403) — broad mid-weight portfolio incl. deckbuilders; ask about submission windows",
    "<strong>Pandasaurus Games</strong> (booth 215) — known open-submission history; confirm 2026 status on-site",
    "Stonemaier Games (booth 2909) — does <strong>not</strong> take unsolicited pitches; skip the cold pitch, network only if you go",
    "Confirm each publisher's current submission policy at the booth or their site before pitching — these shift year to year"
  ]},
  { title:"④ Distributors (Kepler's ask, and TTL's)", items:[
    "Alliance / ACD / PHD have <strong>no public exhibit booths</strong> — you can't walk up to a table",
    "The GAMA Retailer Roundtable — Trade Day Wed 1 PM ([325901](https://www.gencon.com/events/325901)) — is the room where distributor reps actually show up; also on the TTL tab's Trade Day plan",
    "Ask retailer-track speakers directly who their wholesale/distribution rep is — warmer intro than a cold outreach"
  ]},
  { title:"⑤ Pitch-ready prep checklist (before you sit down)", items:[
    "Sell sheet: one-pager with hook, mechanics, player count, MSRP target",
    "One-page rules summary for a 60-second read",
    "Business cards / contact info for Race to Kepler",
    "Boxed prototype ready to demo or hand off on the spot",
    "Elevator pitch rehearsed — 30-second and 2-minute versions"
  ]},
  { title:"⑥ Live playtest & designer networking", items:[
    "First Exposure Playtest Hall — ICC 107–112 ([317103](https://www.gencon.com/events/317103)) — needs a <strong>separate designer-slot registration</strong>; confirm at the First Exposure desk on arrival, not guaranteed available this late",
    "Community Playtest Night — Thu 6 PM ([304048](https://www.gencon.com/events/304048)) · 15 left ✅ — open floor, no separate slot needed",
    "TTGDA Creator Meetup — Sat 6 PM ([330934](https://www.gencon.com/events/330934)) · 56 left ✅ — best designer/publisher networking room, not gameplay"
  ]}
];

const TTL_MISSIONS = [
  { title:"🎟️ Trade Day (Wed Jul 29) — apply in advance", items:[
    "A vetted Trade Day badge includes a free 4-day Gen Con badge",
    "Concentrates every librarian + retailer professional session into one day",
    "Info & application: [gencon.com/trade-day](https://www.gencon.com/gen-con-indy/trade-day)"
  ]},
  { title:"🏬 GAMA retailer track (JW White River Ballroom B)", items:[
    "Retail Merchandising — Stocking Shelves & Store Layout ([325898](https://www.gencon.com/events/325898))",
    "Organized Play, Community Events & Game Nights ([325899](https://www.gencon.com/events/325899))",
    "Retailer Roundtable & Q&A — welcomes new store owners ([325901](https://www.gencon.com/events/325901))"
  ]},
  { title:"📚 Library programming (collection + lending models)", items:[
    "Get in the Game (at the library!) — Trade Day ([309255](https://www.gencon.com/events/309255)) + Thu ([309289](https://www.gencon.com/events/309289))",
    "Build a Circulating Board Game Collection ([309211](https://www.gencon.com/events/309211))",
    "Beyond the Spreadsheet: Cataloging Games ([306450](https://www.gencon.com/events/306450))",
    "Gaming at Your Library on a Shoestring Budget ([303703](https://www.gencon.com/events/303703))"
  ]},
  { title:"🏪 Store-business deep dives", items:[
    "Opening a Game Store that Lasts — Thu 6 PM, $20 ([311241](https://www.gencon.com/events/311241))",
    "Managing a Game Store that Lasts — Thu 8 PM, $20 ([311243](https://www.gencon.com/events/311243))",
    "The Nexus Way workshops — Sun (Free / $22 / $20) ([315721](https://www.gencon.com/events/315721) · [315720](https://www.gencon.com/events/315720) · [315722](https://www.gencon.com/events/315722))",
    "Global Insights for Hobby Retail Success — Trade Day ([320970](https://www.gencon.com/events/320970))"
  ]},
  { title:"📦 Wholesale account setup (publisher booths)", items:[
    "Asmodee B817 · AEG 403 · Capstone 611 · Pandasaurus 215 · CGE 1003 · Stonemaier 2909 · Hachette 2435 · Restoration 1735 · Board & Dice 2527 · Bitewing 1253 · Chip Theory 1317 · IV Studio 3043",
    "Ask each publisher sales rep for a wholesale account & terms for TTL"
  ]},
  { title:"👀 FLGS merchandising recon", items:[
    "Miniature Market (541) · CoolStuffInc (1501) · Troll and Toad (501/601) · Chimera Hobby Shop (2301) · Half Price Books (1341)",
    "Observe layout, exclusives, pricing, and customer-engagement tactics"
  ]}
];

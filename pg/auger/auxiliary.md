## 4) Impact-Readiness Levels (IRL) – Snapshot

*(Scale 1–9; 1 = concept; 9 = scaled product in market)*

| Pillar                     | IRL | Rationale                                                                                                                       |
| -------------------------- | --: | ------------------------------------------------------------------------------------------------------------------------------- |
| **Science Plausibility**   |   6 | Magnetic swarms remove dental biofilms in lab/ex vivo; fluid physics and enzymatic adjuncts well founded.                       |
| **Core Tech Components**   |   5 | Portable coil arrays exist; low-power actuation feasible; consumable particle slurries manufacturable.                          |
| **Human Safety**           |   4 | Materials have food/medical precedent; MF exposure standards clear; needs oral retention/clearance studies.                     |
| **Efficacy vs. Baseline**  |   3 | Oral irrigators improve bleeding; MASAR could beat plaque metrics if micro-scrub works in vivo—unproven.                        |
| **Regulatory Path**        |   4 | Likely class II (US) powered irrigator + accessory consumable; magnetic navigation precedent in other indications (not dental). |
| **Manufacturability/Cost** |   5 | Coils, drivers, mouthpiece plastics are conventional; particle supply scalable (E172-grade).                                    |
| **Behavior & UX**          |   5 | Bite-and-go mouthpieces are accepted (whitening trays, aligners); needs moisture/fit comfort validation. —                      |

---

## 5) What to Validate (and Rough Costs)

> **Assumptions:** US-based team with in-house EE/ME (2–3 engineers), access to university/shared dental labs for benchtop microbiology and imaging. Costs are ballpark ranges (USD) for planning—not quotes.

| Workstream                                 | Goal                                                                                  | Method & Success Criteria                                                                                                                                                                                                                                            |  Est. Cost |      Time |
| ------------------------------------------ | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------: | --------: |
| **A. Particle safety & retrieval**         | Show particles are safe if swallowed in small amounts and don’t linger subgingivally. | Use E172 iron oxide carriers; measure retention/clearance on tooth/pocket models; simulate accidental swallow; cytotoxicity on gingival fibroblasts; verify magnetic retrieval via field reversal. Success: >99% mass recovered from model; no cytotox at use doses. |   \$40–75k |   6–8 wks |
| **B. Actuation physics in mouthpiece**     | Prove coil-on-tray can drive swarms interdental at safe field strengths/temperatures. | 3D-printed tray with 8–12 coil array (OctoMag/ModMag-inspired), embedded temp sensors; thermal < 39 °C; field gradients mapped; visualize swarm entry into 0.2–0.4 mm gaps. Success: repeatable assembly + interdental transit.                                      |  \$60–120k |  8–12 wks |
| **C. Biofilm detachment on tooth analogs** | Quantify plaque removal vs. irrigator baseline.                                       | Microcosm dental biofilms on 3D-printed teeth; benchtop irrigator vs. MASAR; outcomes: % area cleared (confocal), CFU, EPS reduction. Target: ≥25–35% better plaque removal than irrigator at equal time/flow.                                                       |  \$80–150k | 10–12 wks |
| **D. Enzymatic adjunct synergy**           | Reduce required mechanical energy/time.                                               | Screen dextranase/mutanase & DNase with MASAR agitation; quantify biofilm mechanical integrity drop and removal efficiency. Goal: ≥30% time or field reduction at equal removal.                                                                                     |   \$35–70k |   6–8 wks |
| **E. Gingiva safety & enamel wear**        | Confirm atraumatic use.                                                               | Ex vivo porcine gingiva and extracted teeth; repeated daily cycles; histology; enamel surface roughness (Ra). Criteria: no tissue injury; enamel wear non-inferior to sonic brushing.                                                                                |  \$60–100k |   6–8 wks |
| **F. Human factors pilot (n=15–20)**       | Usability, comfort, and preliminary gum health signals.                               | 4-week home-use with hygienist measures (bleeding on probing, plaque index); device logs. Target: ≥15% BoP reduction from baseline with high acceptability.                                                                                                          | \$120–220k | 10–12 wks |
| **G. Regulatory mapping**                  | Define pathway & test plan.                                                           | 513(g)/pre-sub consult; IEC 60601 safety; biocompatibility for tray & slurry; EMC with coils. Consider analogy to powered irrigator; note precedents in magnetic navigation.                                                                                         |   \$30–60k |   4–6 wks |

**12-month program (A→G, overlapping):** \$0.5–0.8M all-in (incl. labor, fixtures, consumables, pre-sub).

---

## 6) Who Could Make This Real (Key Players)

### Academia & Institutes (micro-robotics & dental biofilms)

* **University of Pennsylvania (Koo Lab, Penn Dental; Steager/GRASP Lab):** Pioneered **magnetic bristle robots** and **catalytic antimicrobial robots** removing dental biofilms on complex surfaces. Ideal science/translation partner.
* **ETH Zürich – Multi-Scale Robotics Lab (Bradley Nelson):** World-class in magnetic helical microrobots and electromagnetic actuation systems (e.g., **OctoMag**).
* **Max Planck Institute for Intelligent Systems – Physical Intelligence Dept. (Metin Sitti):** Leaders in soft/magnetic micro-swimmers and bio-interfacing microrobotics.
* **CUHK – Li Zhang Lab:** Magnetic microrobots & wireless actuation; experience with biofilm-targeting micro-swimmers.
* **Dental biofilm physics & ultrasonics community:** Foundational work on cavitation/microstreaming (Walmsley et al.).

### Companies (translation & scale-up)

* **Stereotaxis (magnetic navigation):** Clinical, regulated magnetic field navigation platform—systems expertise for safety/EMC and magnetic control.
* **Microbot Medical / Bionaut Labs:** Regulatory and systems know-how in magnetically driven endoluminal microrobotics; signals a maturing regulatory environment.
* **Church & Dwight (Waterpik):** Gold-standard irrigator evidence base; channel to consumer dental; potential co-dev for pump and flow path.
* **Philips (Sonicare), P\&G (Oral-B), Colgate:** Drive daily-use devices; integration of MASAR as a “smart tray” accessory is plausible.
* **Dentsply Sirona / EMS:** Professional biofilm management leaders—evidence generation partners; design inputs for subgingival safety. ([ems-dental.com][5])

---

## 9) References (selected, high-signal)

* **Microrobots for dental biofilm**: Sci. Robotics 2019 / UPenn press; ACS Nano 2022 / UPenn press.
* **Ultrasonic scalers** (cavitation, microstreaming): reviews by Walmsley et al.
* **Oral irrigators** (bleeding/plaque outcomes): recent RCTs and systematic reviews.
* **Enzymes/DNase against biofilm matrix:** dextranase/mutanase review; eDNA/DNase data.
* **Magnetic actuation systems:** OctoMag (ETHZ, 2011); ModMag (2023 review/guide).
* **Magnetic navigation precedent:** Stereotaxis clinical platform; Microbot Medical regulatory progress (2025).
* **Materials & exposure safety:** EFSA E172 iron oxides; SPION clinical safety; ICNIRP MF limits.
* **Current pro biofilm therapy** (air-powder + ultrasonics): EMS Guided Biofilm Therapy protocol. ([ems-dental.com][5])
* **Analog inspiration in medicine:** Rotational atherectomy mechanism and practice. ([PMC][1], [EuroIntervention][6])
* **Toothbrush comparators:** Meta-analyses for oscillating-rotating vs sonic.


[1]: https://pmc.ncbi.nlm.nih.gov/articles/PMC6918488/?utm_source=chatgpt.com "Rotational Atherectomy: A Contemporary Appraisal - PMC"
[2]: https://www.ncbi.nlm.nih.gov/books/NBK499916/?utm_source=chatgpt.com "Rotational Atherectomy - StatPearls"
[3]: https://penntoday.upenn.edu/news/army-microrobots-can-wipe-out-dental-plaque?utm_source=chatgpt.com "An army of microrobots can wipe out dental plaque | Penn Today"
[4]: https://www.dental.upenn.edu/news-events/2025/04/24/microrobots-navigate-diverse-oral-environments-to-deliver-therapies/?utm_source=chatgpt.com "Microrobots Navigate Diverse Oral Environments to Deliver ..."
[5]: https://www.ems-dental.com/en/guided-biofilm-therapy "GUIDED BIOFILM THERAPY | EMS Dental"
[6]: https://eurointervention.pcronline.com/article/european-expert-consensus-on-rotational-atherectomy?utm_source=chatgpt.com "European expert consensus on rotational atherectomy"

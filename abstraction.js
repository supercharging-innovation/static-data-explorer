const AXIS = [
    {
        "axis": "Temporal Reframing",
        "note": "Shift when actions happen relative to contamination — before, during, or after — to change outcomes."
    },
    {
        "axis": "Role Inversion",
        "note": "Swap who or what does the work — give the role of action to a different element in the system."
    },
    {
        "axis": "Boundary Alteration",
        "note": "Change where interactions can occur by reshaping, sealing, or controlling boundaries."
    },
    {
        "axis": "Medium Transformation",
        "note": "Alter the state or form of the carrier medium to change how removal happens."
    },
    {
        "axis": "Scale Shift",
        "note": "Change the scale of action — from whole-system to micro-level or vice versa."
    },
    {
        "axis": "Objective Redefinition",
        "note": "Redefine what success means — focus on function, priority targets, or thresholds."
    },
    {
        "axis": "Process Topology Change",
        "note": "Rearrange how steps connect — serial, parallel, distributed, or looping flows."
    },
    {
        "axis": "Energy Interaction Shift",
        "note": "Change how and where energy enters or is used in the system."
    },
    {
        "axis": "Lifecycle Embedding",
        "note": "Integrate the process into the natural lifecycle of the elements involved."
    },
    {
        "axis": "Information Integration",
        "note": "Use sensing and feedback to adapt processes in real time or over time."
    }
];

const ELEMENT = [
    {
        "element": "Substrate",
        "note": "The main object or surface being kept functional and free from unwanted material."
    },
    {
        "element": "Contaminant",
        "note": "The unwanted material that accumulates on or within the substrate."
    },
    {
        "element": "Carrier Medium",
        "note": "The medium that mobilizes or transports contaminants away from the substrate."
    },
    {
        "element": "Energy Input",
        "note": "The energy applied to loosen, separate, or move contaminants."
    },
    {
        "element": "Process Flow/Sequence",
        "note": "The order and structure of steps that achieve restoration."
    },
    {
        "element": "Environment / Boundary",
        "note": "The surrounding physical or chemical conditions where cleaning occurs."
    },
    {
        "element": "Capture Medium",
        "note": "The destination or mechanism that secures the contaminants after release."
    },
    {
        "element": "Information Layer",
        "note": "The sensing, monitoring, and decision-making layer guiding the process."
    },
    {
        "element": "Performance Criteria",
        "note": "The metrics or thresholds that define when the substrate is considered restored."
    }
];

const CELL = [
    {
        "axis": "Temporal Reframing",
        "element": "Substrate",
        "note": "Pre-condition the substrate before use so it resists unwanted change.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by pre-conditioning the substrate before use, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Temporal Reframing",
        "element": "Contaminant",
        "note": "Alter contaminant behavior during deposition so bonds stay weak.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by altering contaminant behavior during deposition to keep bonds weak, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Temporal Reframing",
        "element": "Carrier Medium",
        "note": "Pre-position a dormant carrier that activates only when needed.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by pre-positioning a dormant carrier that activates only when accumulation is detected, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Temporal Reframing",
        "element": "Energy Input",
        "note": "Deliver energy intermittently during normal use instead of in batches.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by delivering energy intermittently during use, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Temporal Reframing",
        "element": "Process Flow/Sequence",
        "note": "Use continuous micro-interventions instead of periodic cycles.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials through continuous micro-interventions rather than discrete cycles, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Temporal Reframing",
        "element": "Environment/Boundary",
        "note": "Cycle the environment between exposure and release-favoring states.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by cycling the environment between exposure and release-favoring states, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Temporal Reframing",
        "element": "Capture Medium",
        "note": "Place capture pathways so they operate during use, not only after.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by engaging capture pathways during use so released materials are diverted immediately, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Temporal Reframing",
        "element": "Information Layer",
        "note": "Trigger interventions from continuous sensing rather than timers.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by triggering interventions from continuous sensing instead of schedules, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Temporal Reframing",
        "element": "Performance Criteria",
        "note": "Check criteria continuously and stop when thresholds are met.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by assessing criteria continuously and halting interventions at threshold, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },

    {
        "axis": "Role Inversion",
        "element": "Substrate",
        "note": "Make the substrate actively shed or repel unwanted materials.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by assigning the substrate an active shedding role, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Role Inversion",
        "element": "Contaminant",
        "note": "Bias contaminants to migrate toward capture on their own.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by biasing contaminants to self-migrate toward capture pathways, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Role Inversion",
        "element": "Carrier Medium",
        "note": "Make the carrier medium a permanent structure; the substrate is transient.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials using a permanent mobilizing medium that hosts transient substrates, while minimizing additional medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Role Inversion",
        "element": "Energy Input",
        "note": "Let interactions with contaminants generate the useful energy.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by harvesting energy from contaminant interactions, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Role Inversion",
        "element": "Process Flow/Sequence",
        "note": "Let the presence or state of contaminants initiate the steps.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by initiating process steps in response to contaminant state, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Role Inversion",
        "element": "Environment/Boundary",
        "note": "Shape the environment in response to contaminant behavior.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by shaping boundary conditions in response to contaminant behavior, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Role Inversion",
        "element": "Capture Medium",
        "note": "Give capture a pulling role so released materials seek it out.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by giving capture media an attractive role so released materials spontaneously migrate to it, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Role Inversion",
        "element": "Information Layer",
        "note": "Let contamination signal and orchestrate control actions.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by using contamination-driven signals to orchestrate interventions, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Role Inversion",
        "element": "Performance Criteria",
        "note": "Judge success by the absence or neutralization of contaminants.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by defining success as the absence or neutralization of contaminants, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },

    {
        "axis": "Boundary Alteration",
        "element": "Substrate",
        "note": "Expose only controlled zones of the substrate to interactions.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by exposing only controlled substrate zones to interactions, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Boundary Alteration",
        "element": "Contaminant",
        "note": "Limit contaminants to designed entry and interaction points.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by limiting contaminants to designed entry points, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Boundary Alteration",
        "element": "Carrier Medium",
        "note": "Confine the carrier to protected micro-zones; never free in bulk.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by confining the carrier to protected micro-zones rather than bulk exposure, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Boundary Alteration",
        "element": "Energy Input",
        "note": "Deliver energy across barriers or through selective windows.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by delivering energy across barriers or through selective windows, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Boundary Alteration",
        "element": "Process Flow/Sequence",
        "note": "Run steps in sealed or channelized paths.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by running process steps in sealed or channelized paths, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Boundary Alteration",
        "element": "Environment/Boundary",
        "note": "Tune pressure, composition, or gravity to favor release.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by tuning pressure, composition, or gravity to favor release, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Boundary Alteration",
        "element": "Capture Medium",
        "note": "Isolate capture from ambient to prevent reattachment.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by isolating capture from ambient conditions to prevent reattachment, while minimizing the mobilizing medium, and meeting defined criteria."
    },
    {
        "axis": "Boundary Alteration",
        "element": "Information Layer",
        "note": "Gather information without physical contact.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by gathering information without physical contact, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Boundary Alteration",
        "element": "Performance Criteria",
        "note": "Use boundary-aware measurements for success.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials using boundary-aware measurements of success, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },

    {
        "axis": "Medium Transformation",
        "element": "Substrate",
        "note": "Have the substrate interact with non-liquid media or fields.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by interacting with non-liquid media or fields, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Medium Transformation",
        "element": "Contaminant",
        "note": "Mobilize contaminants through phase or pathway changes.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by mobilizing contaminants through phase or pathway changes, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Medium Transformation",
        "element": "Carrier Medium",
        "note": "Use the carrier as vapor, foam, solid, or field rather than bulk liquid.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by using a transformed, non-bulk carrier (e.g., dispersed or field-mediated), while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Medium Transformation",
        "element": "Energy Input",
        "note": "Change the medium state with energy instead of moving the object.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by changing the medium state via energy rather than moving the object, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Medium Transformation",
        "element": "Process Flow/Sequence",
        "note": "Run steps in a non-liquid medium.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by performing steps in a non-liquid medium, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Medium Transformation",
        "element": "Environment/Boundary",
        "note": "Fill the boundary with a non-traditional medium.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by filling the operating boundary with a non-traditional medium, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Medium Transformation",
        "element": "Capture Medium",
        "note": "Co-locate capture in the same medium/phase used for release.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by co-locating capture within the same medium/phase used for release, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Medium Transformation",
        "element": "Information Layer",
        "note": "Ensure sensing and control work within the transformed medium.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by ensuring sensing and control operate within the transformed medium, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Medium Transformation",
        "element": "Performance Criteria",
        "note": "Redefine success to fit the transformed medium.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by redefining success measures to fit the transformed medium, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },

    {
        "axis": "Scale Shift",
        "element": "Substrate",
        "note": "Operate on the substrate at micro-structures rather than in bulk.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by operating at micro-structures rather than bulk, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Scale Shift",
        "element": "Contaminant",
        "note": "Handle contaminants as micro-packets instead of uniform films.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by handling contaminants as micro-packets rather than uniform layers, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Scale Shift",
        "element": "Carrier Medium",
        "note": "Deliver carrier in precise micro-doses at target sites.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by delivering carrier in precise micro-doses at target sites, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Scale Shift",
        "element": "Energy Input",
        "note": "Focus energy on micro-spots instead of the whole object.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by focusing energy on micro-spots rather than globally, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Scale Shift",
        "element": "Process Flow/Sequence",
        "note": "Replace bulk circulation with micro-flows.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by replacing bulk circulation with micro-flows, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Scale Shift",
        "element": "Environment/Boundary",
        "note": "Create micro-environments around each interacting element.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by creating micro-environments around interacting elements, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Scale Shift",
        "element": "Capture Medium",
        "note": "Distribute capture as many small, regenerable units.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by distributing capture into small, regenerable units, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Scale Shift",
        "element": "Information Layer",
        "note": "Use micro-sensors to detect and act locally.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by using micro-sensors to detect state and act locally, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Scale Shift",
        "element": "Performance Criteria",
        "note": "Apply criteria per micro-unit and aggregate results.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by applying criteria per micro-unit and aggregating results, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },

    {
        "axis": "Objective Redefinition",
        "element": "Substrate",
        "note": "Define success by function, not complete cosmetic restoration.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by defining success through functional outcomes, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Objective Redefinition",
        "element": "Contaminant",
        "note": "Target only harmful contaminant classes; ignore benign residues.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by targeting only harmful contaminant classes, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Objective Redefinition",
        "element": "Carrier Medium",
        "note": "Optimize the carrier for a single, high-value metric.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by optimizing the carrier for a single, high-value performance metric, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Objective Redefinition",
        "element": "Energy Input",
        "note": "Use only the energy needed to meet the functional threshold.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by applying only the energy necessary to meet functional thresholds, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Objective Redefinition",
        "element": "Process Flow/Sequence",
        "note": "Remove non-critical stages that don’t move the key metric.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by removing non-critical process stages, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Objective Redefinition",
        "element": "Environment/Boundary",
        "note": "Tune only the environmental variables that affect the objective.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by tuning only environmental variables that affect the objective, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Objective Redefinition",
        "element": "Capture Medium",
        "note": "Specialize capture for one contaminant class.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by specializing capture for a specific contaminant class, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Objective Redefinition",
        "element": "Information Layer",
        "note": "Sense only variables tied to the chosen objective.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by sensing only variables tied to the chosen objective, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Objective Redefinition",
        "element": "Performance Criteria",
        "note": "Use explicit thresholds to define when the job is done.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by defining explicit thresholds that determine completion, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },

    {
        "axis": "Process Topology Change",
        "element": "Substrate",
        "note": "Move the substrate through many small steps instead of one big step.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by moving it through many small steps rather than one large step, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Process Topology Change",
        "element": "Contaminant",
        "note": "Address contaminants via multiple parallel paths.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by addressing contaminants via multiple parallel paths, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Process Topology Change",
        "element": "Carrier Medium",
        "note": "Introduce carrier at several nodes instead of one.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by introducing carrier at multiple nodes, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Process Topology Change",
        "element": "Energy Input",
        "note": "Deliver energy in parallel pulses across the system.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by delivering energy in parallel pulses, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Process Topology Change",
        "element": "Process Flow/Sequence",
        "note": "Decentralize the process and orchestrate distributed actions.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials via a decentralized process of distributed actions, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Process Topology Change",
        "element": "Environment/Boundary",
        "note": "Sequence multiple boundary states rather than one.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by sequencing multiple boundary states, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Process Topology Change",
        "element": "Capture Medium",
        "note": "Distribute capture across many nodes.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by distributing capture across many nodes, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Process Topology Change",
        "element": "Information Layer",
        "note": "Use parallel sensing nodes to coordinate action.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by coordinating actions with parallel sensing nodes, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Process Topology Change",
        "element": "Performance Criteria",
        "note": "Meet criteria cumulatively across micro-processes.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by meeting criteria cumulatively across micro-processes, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },

    {
        "axis": "Energy Interaction Shift",
        "element": "Substrate",
        "note": "Store or receive energy within the substrate to avoid global agitation.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by storing or receiving energy within the substrate to avoid global agitation, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Energy Interaction Shift",
        "element": "Contaminant",
        "note": "Let contaminants release or guide energy that helps removal.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by letting contaminants release or guide energy that aids removal, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Energy Interaction Shift",
        "element": "Carrier Medium",
        "note": "Activate the carrier using external fields rather than flow.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by activating the carrier with external fields, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Energy Interaction Shift",
        "element": "Energy Input",
        "note": "Deliver energy remotely, pulsed, or stored-then-released.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by delivering energy remotely, in pulses, or stored-then-released, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Energy Interaction Shift",
        "element": "Process Flow/Sequence",
        "note": "Trigger steps based on measured energy thresholds.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by triggering steps when measured energy thresholds are met, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Energy Interaction Shift",
        "element": "Environment/Boundary",
        "note": "Use boundary conditions to improve energy coupling.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by using boundary conditions to improve energy coupling, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Energy Interaction Shift",
        "element": "Capture Medium",
        "note": "Activate capture with short energy bursts when needed.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by activating capture using short energy bursts when needed, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Energy Interaction Shift",
        "element": "Information Layer",
        "note": "Embed sensing within the same pathway that delivers energy.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by embedding sensing within the energy-delivery pathway, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Energy Interaction Shift",
        "element": "Performance Criteria",
        "note": "Tie success to a measured energy dose or exposure.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by tying success to measured energy dose or exposure, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },

    {
        "axis": "Lifecycle Embedding",
        "element": "Substrate",
        "note": "Make restoration a normal transition in the substrate’s lifecycle.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by embedding restoration as a normal lifecycle transition, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Lifecycle Embedding",
        "element": "Contaminant",
        "note": "Target contaminants at predictable lifecycle checkpoints.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by targeting contaminants at predictable lifecycle checkpoints, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Lifecycle Embedding",
        "element": "Carrier Medium",
        "note": "Replenish or refresh the carrier during manufacture or service.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by replenishing the carrier during manufacture or service, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Lifecycle Embedding",
        "element": "Energy Input",
        "note": "Integrate energy delivery into lifecycle events.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by integrating energy delivery into lifecycle events, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Lifecycle Embedding",
        "element": "Process Flow/Sequence",
        "note": "Align the process with lifecycle phases rather than ad-hoc cycles.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by aligning process flow with lifecycle phases, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Lifecycle Embedding",
        "element": "Environment/Boundary",
        "note": "Manage boundary conditions over the lifecycle, not just at events.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by managing boundary conditions across the lifecycle, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Lifecycle Embedding",
        "element": "Capture Medium",
        "note": "Regenerate or service capture as part of routine lifecycle steps.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by regenerating capture as a routine lifecycle step, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Lifecycle Embedding",
        "element": "Information Layer",
        "note": "Accumulate and use history across the lifecycle to guide action.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by accumulating and using historical state across the lifecycle to guide action, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Lifecycle Embedding",
        "element": "Performance Criteria",
        "note": "Let criteria evolve with age and use patterns.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by evolving success criteria with age and use patterns, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },

    {
        "axis": "Information Integration",
        "element": "Substrate",
        "note": "Encode contamination state/history within the substrate.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by encoding state/history within the substrate to guide action, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Information Integration",
        "element": "Contaminant",
        "note": "Let contaminants tag themselves as they accumulate.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by enabling contaminants to tag themselves as they accumulate, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Information Integration",
        "element": "Carrier Medium",
        "note": "Control carrier volume dynamically from feedback.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by controlling carrier volume dynamically using feedback, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Information Integration",
        "element": "Energy Input",
        "note": "Adapt energy intensity and modality through closed-loop control.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by adapting energy intensity and modality through closed-loop control, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Information Integration",
        "element": "Process Flow/Sequence",
        "note": "Alter the sequence dynamically based on sensed state.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by altering process sequence dynamically based on sensed state, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Information Integration",
        "element": "Environment/Boundary",
        "note": "Tune environmental variables in real time from data.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by tuning environmental variables in real time from data, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Information Integration",
        "element": "Capture Medium",
        "note": "Switch capture modes based on sensed conditions.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by switching capture modes based on sensed conditions, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Information Integration",
        "element": "Information Layer",
        "note": "Fuse multiple sensing modalities to guide precise action.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by fusing multiple sensing modalities to guide precise action, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    },
    {
        "axis": "Information Integration",
        "element": "Performance Criteria",
        "note": "Adapt criteria algorithmically as conditions change.",
        "post_abstraction": "Restore a functional substrate from unwanted, variably bound materials by adapting criteria algorithmically as conditions change, while minimizing the mobilizing medium, preventing reattachment, and meeting defined criteria."
    }
];
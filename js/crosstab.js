
var vizList = ["https://public.tableau.com/views/PovertyDataPortal-NEW1/Dashboard12?:embed=y&:display_count=yes",
        "https://public.tableau.com/views/GraphicalAnalysisofDevelopmentIndicators/Graph-Dashboard",
        "https://public.tableau.com/views/SpatialData_15644661255310/Dashboard1",
        "https://public.tableau.com/views/PakistanPovertyIndicators/Poverty",
        "https://public.tableau.com/views/PopulationDistributionAcrossProvinces/Population-Dashboard",
        "https://public.tableau.com/views/Pakistan_Indicators/PSLM-Dashboard",
        "https://public.tableau.com/views/MultipleIndicatorsClusterSurveyMICS2014forPunjabSindh/MICS-Dashboard"
        ];
    
        var viz,
        vizLen = vizList.length,
        vizCount = 0;


        function createViz(vizPlusMinus) {
            var vizDiv = document.getElementById("Cross-Tabulation"),
                options = {
                    // width: vizDiv.offsetWidth,
                    // height: vizDiv.offsetHeight,
                    hideTabs: true,
                    hideToolbar: true
                };
            
            if (viz) { // If a viz object exists, delete it.
                viz.dispose();
            }
            // var vizURL = vizList[vizCount];
            var vizURL = vizList[vizPlusMinus];
            console.log(vizURL);
            viz = new tableau.Viz(vizDiv, vizURL, options); 
        }

        function createViz1(vizPlusMinus) {
        var vizDiv = document.getElementById("vizContainer"),
            options = {
                hideTabs: true
            };

        vizCount = vizCount + vizPlusMinus;

        if (vizCount >= vizLen) {
        // Keep the vizCount in the bounds of the array index.
            vizCount = 0;
        } else if (vizCount < 0) {
            vizCount = vizLen - 1;
        }

        if (viz) { // If a viz object exists, delete it.
            viz.dispose();
        }

        var vizURL = vizList[vizCount];
        viz = new tableau.Viz(vizDiv, vizURL, options);
        }
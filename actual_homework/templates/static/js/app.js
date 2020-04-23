
// Producing the graphs
 function graphProduction(pData) {
    let samples = d3.json("samples.json");
    samples.then( (sampleData) => {
        
        let data = sampleData;
        console.log(`data coming from the graphProduction function: ${data}`);
        
        
        let top10otuId = data.samples[0].otu_ids.slice(0,10).reverse(); 
        console.log(top10otuId);

        let top10otuIdMapped = top10otuId.map( d => `OTU ${d}`);
        console.log(top10otuIdMapped) // this is going to be used instead of top10otuID for labeling and stuff

        let top10otuValues = data.samples[0].sample_values.slice(0,10).reverse();
        console.log(top10otuValues);

        let top10otuLabels = data.samples[0].otu_labels.slice(0,10).reverse();
        console.log(top10otuLabels);


        // This is for the horizontal bar chart for the top 10 OTU bacteria found 

        let trace0 = {
            x: top10otuValues,
            y: top10otuIdMapped,
            marker: {color: 'blue'},
            type: "bar",
            orientation: "h"
        };

        let barData = [trace0]; 

        let layout0 = {
            title: "Top 10 bacteria found in OTU",
            yaxis:{
                tickmode: "linear"
            }
        };

        Plotly.newPlot("bar", barData, layout0);

        // This is for the horizontal bar chart for the top 10 OTU bacteria found 

        // This is for the bubble chart
        
        let otuId = data.samples[0].otu_ids; 
        console.log(otuId);

        let otuSamplesValues = data.samples[0].sample_values;
        console.log(otuSamplesValues)

        let otuLables = data.samples[0].otu_values;
        console.log(otuLables)

        let trace1 = {
            x: otuId,
            y: otuSamplesValues,
            mode: "markers",
            marker: {
                size: otuSamplesValues,
                color: otuId
            },
            text: otuLables
        };

        let layout1 = {
            xaxis:{
                title: "OTU ID and Number counted in bubbles"
            }
        };

        bubbleData = [trace1]

        Plotly.newPlot("bubble", bubbleData, layout1);

    });
};

// extracting the demographic data
function obtainingDemographicInformation(patientData){
    // reading the json file
    let samples = d3.json("samples.json");

    samples.then( (sampleData) => {
    
        let data = sampleData;
        // console.log(`Sanity chcking the metadata${data.metadata}`); // This works
    
        let metaData = data.metadata;

        // filtering the metaData information to get the id
        let metaDataFiltered = metaData.filter(d => d.id.toString() === patientData)[0]; 

        // assigning the id of the sample data window on the website
        let sampleDataWindow = d3.select("#sample-metadata");

        // This is to reset the sample data window
        sampleDataWindow.html("");

        // an attempt to append the 
        Object.entries(metaDataFiltered).forEach( (key) => {
            sampleDataWindow.append("p").text(`${key[0]}: ${key[1]} \n`);
        });
    });
};

function patientChanger(patientData) {
    graphProduction(patientData);
    obtainingDemographicInformation(patientData);
}

function initilialisingDataSequence() {
    // init function made here binds itself to the 
    // dropdown menu and I named it that because it sounds cool
    
    let dropDownMenu = d3.select("#selDataset");
    // making the dropdown menu
    
    let samples = d3.json("samples.json");
    // assigning the sameples json value as samples
    
    samples.then((sampleData) => {
        let data =  sampleData;

        console.log(`data from the initialisingDataSequence function ${data}`);
        // doing a sanity check
        // for loop to append the option value in the dropdown menu
        data.names.forEach( (n) => {
            dropDownMenu.append("option")
            .text(n)
            .property("value");
        });
        
        
        // seeing if the demographic window works
        obtainingDemographicInformation(sampleData)
        graphProduction(sampleData)
        
    });
}

initilialisingDataSequence()









//
//
//  Please Ignore the below, these are the previous attempts and I now need PTSD therapy and a therapy dog preferably a goofy looking husky
//
//
// The stuff below was confusing

// let samples = d3.json("samples.json");

// let data = samples.then((sampleData) => {
//         console.log(sampleData)        
// });

// console.log(data);

// d3.select("#selDataset")
//     .selectAll("myOptions")


// let samples = d3.json("samples.json") 

// Promise.all([samples]).then( (importedData) => {

//     let data = importedData;

//     console.log(data);

//     let names = data.map( d => d.names);
//     let metaData = data.map(d => d.metadata);
//     let samples = data.map(d => d.samples);
//     console.log(name);
//     console.log(metaData);
//     console.log(samples);
//     console.log(data[0].names)

//     let dropDownMenu = d3.select("#selDataset");

//     // let panelHeading = d3.select('');

//     dropDownMenu
//     .selectAll("myOptions")
//     .data(data[0].names)
//     // .data(names)
//     .enter()
//     .append('option')
//     .text(d => { return d; })
//     .on()
    
    
      
// });

// old stuff

// Plotly.d3.json('samples.json', (err, rows) => {
    
//     function unpack(rows, key) {
//         return rows.map( (row) => {return row[key]});
//     }
//     let names = unpack(rows, 'names');
//     console.log(names)
// });


// let samples = d3.json("samples.json") 

// Promise.all([samples]).then( (importedData) => {

//     let data = importedData;

//     console.log(data);

//     let name = data.map( d => d.names);
//     let metaData = data.map(d => d.metadata)
//     let samples = data.map(d => d.samples)
//     console.log(name)
//     console.log(metaData)
//     console.log(samples)

// });

// Promises = Promise.all([samples])

// Promises.then( (data) => {
    
//     console.log(data);
    
//     // let dataToBeMapped = data[0];
//     // let names = data[0].names;
//     // let metaData = data[0].metadata;
//     // let samples = data[0].samples;

//     // console.log(dataToBeMapped)
//     // console.log(names); // Sanity check
//     // console.log(metaData); // Sanity check
//     // console.log(samples); // Sanity check

//     // data[0].map( d => {
//     //     console.log(d)
//     // });

//     // d3.select("#selDataset")
//     //     .selectAll("myOptions")
//     //     .data(names)
//     //     .enter()
//     //     .append('option')
//     //     .text(d => { return d; })
//     //     .attr("value", d => { return d; })

// });

// // let x = d3.select("body")
// //         .selectAll("#selDataset")
// //         .data(samples.name)
// //         .enter()
// //         .append('#selDataset')
// //         .text((d)=>{return d;});

// Promises.catch(() => {
//     console.log(`Something has gone wrong I don't know`)
// });
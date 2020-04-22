// Producing the graphs
function graphProduction(patientData){
    let samples = d3.json("samples.json");
    samples.then( (sampleData) => {
        let data = sampleData;
        console.log(`data coming from the graphProduction function ${data}`);
    });
};

// // extracting the demographic data
// function obtainingDemographicInformation(patientData){
//     // reading the json file
//     let samples = d3.json("samples.json");
//     samples.then( (sampleData) => {
//         let data = sampleData;
//         // console.log(`Sanity chcking the metadata${data.metadata}`); // This works
//         let metaData = data.metaData;

//         // assigning the id of the sample data window on the website
//         let sampleDataWindow = d3.select("#sample-metadata");

//         // filtering the metaData information to get the id
//         let metaDataFiltered = metaData.filter(meta => meta.id.toString() === patientData);

//         // This is to reset the sample data window
//         sampleDataWindow.html("");

//         // an attempt to append the 
//         Object.entries(metaDataFiltered).forEach( (key) => {
//             sampleDataWindow.append("p").text(`${key[0].toLowerCase()}: ${key[1]} \n`);
//         });
//     });
// };



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
        
        // seeing if the demographic window works -- right now it doesn't
        // obtainingDemographicInformation(sampleData.names[0])
    });
// Up to this point I have connected the subjects name
// to the bloody dropdown menu

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
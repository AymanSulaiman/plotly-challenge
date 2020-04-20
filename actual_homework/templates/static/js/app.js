let samples = d3.json("samples.json") 

Promises = Promise.all([samples])

Promises.then( (data) => {
    
    console.log(data);
    
    let dataToBeMapped = data[0];
    let names = data[0].names;
    let metaData = data[0].metadata;
    let samples = data[0].samples;

    console.log(dataToBeMapped)
    console.log(names); // Sanity check
    console.log(metaData); // Sanity check
    console.log(samples); // Sanity check

    // data[0].map( d => {
    //     console.log(d)
    // });

    d3.select("#selDataset")
        .selectAll("myOptions")
        .data(names)
        .enter()
        .append('option')
        .text(d => { return d; })
        .attr("value", d => { return d; })

});

// let x = d3.select("body")
//         .selectAll("#selDataset")
//         .data(samples.name)
//         .enter()
//         .append('#selDataset')
//         .text((d)=>{return d;});

Promises.catch(() => {
    console.log(`Something has gone wrong I don't know`)
});
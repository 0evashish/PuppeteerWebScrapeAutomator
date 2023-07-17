// await page.screenshot({ path: "scrapy.jpg" });
// // we can choose extension otoo

// now how to get the html and all that stuff
// create a function to evaluate all that for us then scrape
// evaluate will have logic
// now for Logic we should know html and thhen choose div
// class id we want and the tag too if needed
// when we are webscrapping we can use the document object
// for like get element by id or query selector and all
// qs good because it just a string of tag or element or id
// if multiple class name dot between and space to provide
// extra information
const grabPara = await page.evaluate(() => {
	const pTag = document.querySelector(".col-md-10 p");
	return pTag.innerText;
});
// WORKS WE CAN GRAB inner html or text

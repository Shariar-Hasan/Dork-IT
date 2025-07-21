export interface DorkType {
    title: string;
    value: string;
}

export interface DorkInfo {
    title: string;
    content: string;
    img: string;
}

export interface Dork {
    id: string;
    dork: string;
}

export const dorkTypes: DorkType[] = [
    {
        title: "Search in website Title",
        value: "intitle",
    },
    {
        title: "Search in website URL",
        value: "inurl",
    },
    {
        title: "Search in website Text",
        value: "intext",
    },
    {
        title: "Search Site domain / sub domain",
        value: "site",
    },
    {
        title: "Search definitions",
        value: "define",
    },
    {
        title: "Search Phone book",
        value: "phonebook",
    },
    {
        title: "Search Maps",
        value: "maps",
    },
    {
        title: "Search Books",
        value: "book",
    },
    {
        title: "Search Info",
        value: "info",
    },
    {
        title: "Search Movies",
        value: "movie",
    },
    {
        title: "Search Weather",
        value: "weather",
    },
    {
        title: "Search Related",
        value: "related",
    },
    {
        title: "Search Links",
        value: "link",
    },
];

export const dorkTypesInfo: DorkInfo[] = [
    {
        title: "intitle:",
        content:
            'The "intitle:" dork is used to search for web pages that have a specific word or phrase in their title. This allows you to find pages where the specified keyword is a part of the title. For example, if you search for "intitle:Google," you will find pages with the word "Google" in their title.',
        img: "/accordion_img/intitle.png",
    },
    {
        title: "inurl:",
        content:
            'The "inurl:" dork helps you search for web pages that have a specific word or phrase in their URL. This is useful for pinpointing pages based on keywords in their web addresses. For instance, "inurl:news" will retrieve pages with "news" in their URL.',
        img: "/accordion_img/inurl.png",
    },
    {
        title: "intext:",
        content:
            'The "intext:" dork is used to search for web pages that contain a specific word or phrase within their main text content. This allows you to find pages where the specified keyword appears in the body of the page. For example, "intext:JavaScript" will locate pages with "JavaScript" in their content.',
        img: "/accordion_img/intext.png",
    },
    {
        title: "define:",
        content:
            'The "define:" dork enables you to look up the definition of a word or phrase. This is particularly useful for quick word definitions and explanations. For instance, "define:computer" will provide definitions and related information for the term "computer."',
        img: "/accordion_img/define.png",
    },
    {
        title: "site:",
        content:
            'The "site:" dork allows you to narrow your search to a specific website or domain. It helps you find information within a particular site. For example, "site:wikipedia.org AI" will search for "AI" only within Wikipedia pages.',
        img: "/accordion_img/site.png",
    },
    {
        title: "phonebook:",
        content:
            'The "phonebook:" dork is used to search for phonebook listings. It helps you find contact information for individuals or businesses in specific locations. For example, "phonebook:John Doe New York" will retrieve phonebook listings for John Doe in New York.',
        img: "/accordion_img/phonebook.png",
    },
    {
        title: "maps:",
        content:
            'The "maps:" dork is utilized to search for maps and location-based information. It assists in finding geographical data and maps related to specific places or addresses. For instance, "maps:Paris France" will provide maps and location details for Paris, France.',
        img: "/accordion_img/maps.png",
    },
    {
        title: "book:",
        content:
            'The "book:" dork is employed to search for books and book-related content. It helps you find information about books, authors, and literary works. For example, "book:Harry Potter" will retrieve information about Harry Potter books.',
        img: "/accordion_img/book.png",
    },
    {
        title: "info:",
        content:
            'The "info:" dork is used to gather information about a specific website or domain. It provides details about the website, including its description, related pages, and cached versions. For instance, "info:google.com" will display information about Google\'s website.',
        img: "/accordion_img/info.png",
    },
    {
        title: "movie:",
        content:
            'The "movie:" dork is utilized to search for movie-related content and information. It helps you find details about movies, actors, reviews, and showtimes. For example, "movie:Inception" will provide information about the movie "Inception."',
        img: "/accordion_img/movie.png",
    },
    {
        title: "weather:",
        content:
            'The "weather:" dork is employed to search for weather-related information and forecasts. It assists in finding current weather conditions, forecasts, and meteorological data for specific locations. For instance, "weather:New York" will display weather information for New York.',
        img: "/accordion_img/weather.png",
    },
    {
        title: "related:",
        content:
            'The "related:" dork is used to find websites that are related or similar to a specific website. It helps you discover websites with similar content, topics, or themes. For example, "related:stackoverflow.com" will show websites related to Stack Overflow.',
        img: "/accordion_img/related.png",
    },
    {
        title: "link:",
        content:
            'The "link:" dork is utilized to search for web pages that contain links to a specific website or URL. It helps you find pages that reference or link to a particular site. For instance, "link:example.com" will display pages that have links pointing to example.com.',
        img: "/accordion_img/link.png",
    },
];

export const sortAllBooks = (list) => {
    const newList = list.sort(function (a,b){

        const titleA = a.titleA.toUpperCase();
       
        const titleB = b.titleB.toUpperCase();
        
        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;


    })
    return newList;
}
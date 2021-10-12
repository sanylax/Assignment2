/**
 * CSE183 Assignment 2
 */
class Templater {
  /**
   * Create a templater
   * @param {string} template - A {{ }} tagged string
   */
  constructor(template) {
    this.source = template;
    //let re = new RegExp('{\{([a-zA-Z ]+)\}\}');
    
    // console.log(words);
    // console.log(strict);
    // for(const entry in arr){
    //   console.log(entry);
    //   console.log(arr[entry]);
    // }
  }

  /**
   * Apply map to template to generate string
   * @param {object} map Object with propeties matching tags in template
   * @param {boolean} strict Throw an Error if any tags in template are
   *     not found in map
   * @return {string} template with all tags replaced
   * @throws An Error if strict is set and any tags in template are not
   *     found in map
   */
  apply(map, strict) {
    //console.log(map);
    if(map == undefined || this.source == undefined){
      return undefined;
    }
    let temp = this.source;
    //console.log(temp);
    let re = /\{\{([a-zA-Z ]+)\}\}/gm;
    // let arr = .match(re);
    // console.log(arr);
    let match = "";
    
    while ((match = re.exec(this.source)) != null) {
      if(match[1].search(' ') == -1){
        if(map[match[1]] != undefined){
          //console.log(match[1], map[match[1]]);
          temp = temp.replace('{{'+match[1]+'}}', map[match[1]]);
        }
        else if(!strict){
          let idx = temp.indexOf(match[0]);
          if(idx > 0 && temp[idx-1] == ' '){
            temp = temp.slice(0, idx-1) + temp.slice(idx, temp.length);
          }
          temp = temp.replace('{{'+match[1]+'}}', '');
        }
        else{
          throw "Missing key in map";
        }
      }
      
      //if(count == 10) break;
    }

    // for(const [key, value] of Object.entries(map)){
    //   console.log(key, value);
    //   
    // }

    
    // for(let i = 0; i < source.length; i++){
    //   if(source[i] == '{' && i<source.length-1 && source[i+1] == '{'){
    //     i += 2
    //     while(source[i] != '}'){

    //     }
        

    //   }
    // }
    //console.log(temp);
    return temp;
  }
}

// To satisfy linter rules
new Templater(undefined).apply();

module.exports = Templater;

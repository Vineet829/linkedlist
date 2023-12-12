class Node{
constructor(value){
this.value = null
this.nextNode = null
}

}
class LinkedList{
constructor(){
this.listHead = null
}

prepend(value){
let tmp = null
if(this.listHead !== null){
tmp = this.listHead}
this.listHead = new Node(value)

this.listHead.nextNode = tmp;
}

append(value){
let tmp = null
if(this.listHead == null){
    this.prepend(value)
}
else{
tmp = this.listHead
while(tmp.nextNode != null){
    tmp = tmp.nextNode

}
tmp.nextNode = new Node(value)
}
}

size(){
   let tmp = this.listHead
   let count = 0
   while(tmp != null){
    count++
    tmp = tmp.nextNode
      
} 
return count
}

head(){
  return this.listHead
}

tail(){
    let tmp = this.listHead
    while(tmp.nextNode !== null){
        tmp = tmp.nextNode
    }
  return tmp
}

at(index){
    let tmp = this.listHead
for(let i = 0; i<index; i++){
    tmp = tmp.nextNode
} 
if(tmp == null){
    return "There is no item at this node"
}
return tmp
}

pop(){
    let cur = this.listHead
    let prev = null
    while(cur.nextNode !== null){
        prev = cur
        cur = cur.nextNode
      } 
    prev.nextNode = null

    }
contains(value){
    let tmp = this.listHead
    while(tmp!== null){
        if(tmp.value == value ){
            return true
        }
      tmp = tmp.nextNode
    }
return false

}

find(value){
    let tmp = this.listHead
    let count = 0;
    while(tmp !== null){
        if(tmp.value == value){
            return count 
        }
    tmp = tmp.nextNode
        count++
    }
return null
}

toString(){
    let tmp = this.listHead
    let stringList = ""
    while(tmp !== null){
        stringList += "( " + `${tmp.value}` + " )" + " -> "
    tmp = tmp.nextNode
    }
return stringList += "null"

}

insertAt(value, index){
   if(this.listHead == null){
    this.prepend(value)
   }
   else{
   let cur = this.listHead
   let prev = null
   for(let i = 0; i<index; i++){
    prev = cur
    cur = cur.nextNode
    if(cur == null){
        break
    }
   }
{
    temp = new Node(value)
    prev.nextNode = temp
    temp.nextNode = cur
    
}

   }
}

removeAt(index){
    if(this.listHead == null){
        return "nothing to remove"
    }
    else{
        let cur = this.listHead
        let prev = null
        for(let i = 0; i<index; i++){
            prev = cur
            cur = cur.nextNode
        if(cur == null){
            return "There is no item for this index"
        } 
        }
    prev.nextNode = cur.nextNode


}

}



}





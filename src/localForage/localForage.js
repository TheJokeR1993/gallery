import localforage from "localforage"

const gallery = localforage.createInstance({ name: 'gallery' })

export const L_F_gallery ={
    getItem:()=> gallery.getItem('gallery'),
    setItem:(elem)=>gallery.setItem('gallery',elem),
}
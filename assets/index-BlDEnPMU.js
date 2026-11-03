const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./browserAll-CkpIybXi.js","./Geometry-HyndGk3I.js","./FederatedEventTarget-DxvYAUa_.js","./FilterSystem-BUCxTeM5.js","./canvasUtils-lHaXUF2w.js","./CanvasPool-DbcX-glp.js","./init-DBn1NSim.js","./webworkerAll-uuGR91-J.js"])))=>i.map(i=>d[i]);
/*
 * VX Ace Web Runtime
 * ------------------------------
 * See licenses of bundled dependencies at ../third-party-license.md
 */
import{$ as e,A as t,B as n,C as r,E as i,I as a,J as o,K as s,O as c,Q as l,R as u,S as d,V as f,W as p,X as m,Y as h,Z as g,_,a as v,at as y,b,c as x,d as S,et as C,f as w,g as T,i as E,it as D,l as O,m as k,n as A,nt as ee,o as j,ot as M,p as te,r as N,rt as P,s as ne,t as re,tt as ie,u as ae,v as oe,x as F,y as se,z as I}from"./Geometry-HyndGk3I.js";import{a as ce,n as le,r as ue,t as de}from"./FilterSystem-BUCxTeM5.js";import{n as fe,r as pe,t as L}from"./canvasUtils-lHaXUF2w.js";import{C as me,D as he,E as ge,O as R,S as _e,T as ve,_ as ye,a as be,b as xe,c as Se,d as Ce,f as we,g as Te,h as Ee,i as De,k as Oe,l as ke,m as Ae,n as je,o as Me,p as Ne,r as Pe,s as Fe,t as Ie,u as Le,v as Re,w as ze,x as Be,y as Ve}from"./RenderTargetSystem-DypFdAoS.js";import{t as He}from"./getTextureBatchBindGroup-D4JXHGb2.js";import{t as Ue}from"./CanvasPool-DbcX-glp.js";import{a as We,c as Ge,d as Ke,f as qe,i as Je,l as Ye,n as Xe,o as Ze,p as Qe,r as $e,s as et,t as tt,u as nt}from"./BufferResource-BQJc1ta6.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var rt=class e{static read_bytes(t,n){let r=new e;return r.buf=t.getUint32(n,!0),r.buf_len=t.getUint32(n+4,!0),r}static read_bytes_array(t,n,r){let i=[];for(let a=0;a<r;a++)i.push(e.read_bytes(t,n+8*a));return i}},it=class e{static read_bytes(t,n){let r=new e;return r.buf=t.getUint32(n,!0),r.buf_len=t.getUint32(n+4,!0),r}static read_bytes_array(t,n,r){let i=[];for(let a=0;a<r;a++)i.push(e.read_bytes(t,n+8*a));return i}},at=class{head_length(){return 24}name_length(){return this.dir_name.byteLength}write_head_bytes(e,t){e.setBigUint64(t,this.d_next,!0),e.setBigUint64(t+8,this.d_ino,!0),e.setUint32(t+16,this.dir_name.length,!0),e.setUint8(t+20,this.d_type)}write_name_bytes(e,t,n){e.set(this.dir_name.slice(0,Math.min(this.dir_name.byteLength,n)),t)}constructor(e,t,n,r){let i=new TextEncoder().encode(n);this.d_next=e,this.d_ino=t,this.d_namlen=i.byteLength,this.d_type=r,this.dir_name=i}},ot=class{write_bytes(e,t){e.setUint8(t,this.fs_filetype),e.setUint16(t+2,this.fs_flags,!0),e.setBigUint64(t+8,this.fs_rights_base,!0),e.setBigUint64(t+16,this.fs_rights_inherited,!0)}constructor(e,t){this.fs_rights_base=0n,this.fs_rights_inherited=0n,this.fs_filetype=e,this.fs_flags=t}},st=class{write_bytes(e,t){e.setBigUint64(t,this.dev,!0),e.setBigUint64(t+8,this.ino,!0),e.setUint8(t+16,this.filetype),e.setBigUint64(t+24,this.nlink,!0),e.setBigUint64(t+32,this.size,!0),e.setBigUint64(t+38,this.atim,!0),e.setBigUint64(t+46,this.mtim,!0),e.setBigUint64(t+52,this.ctim,!0)}constructor(e,t,n){this.dev=0n,this.nlink=0n,this.atim=0n,this.mtim=0n,this.ctim=0n,this.ino=e,this.filetype=t,this.size=n}},ct=class e{static read_bytes(t,n){return new e(t.getBigUint64(n,!0),t.getUint8(n+8),t.getUint32(n+16,!0),t.getBigUint64(n+24,!0),t.getUint16(n+36,!0))}constructor(e,t,n,r,i){this.userdata=e,this.eventtype=t,this.clockid=n,this.timeout=r,this.flags=i}},lt=class{write_bytes(e,t){e.setBigUint64(t,this.userdata,!0),e.setUint16(t+8,this.error,!0),e.setUint8(t+10,this.eventtype)}constructor(e,t,n){this.userdata=e,this.error=t,this.eventtype=n}},ut=class{write_bytes(e,t){e.setUint32(t,this.pr_name.byteLength,!0)}constructor(e){this.pr_name=new TextEncoder().encode(e)}},dt=class e{static dir(t){let n=new e;return n.tag=0,n.inner=new ut(t),n}write_bytes(e,t){e.setUint32(t,this.tag,!0),this.inner.write_bytes(e,t+4)}},ft=class{enable(e){this.log=pt(e===void 0?!0:e,this.prefix)}get enabled(){return this.isEnabled}constructor(e){this.isEnabled=e,this.prefix=`wasi:`,this.enable(e)}};function pt(e,t){return e?console.log.bind(console,`%c%s`,`color: #265BA0`,t):()=>{}}var z=new ft(!1),mt=class extends Error{constructor(e){super(`exit with exit code `+e),this.code=e}},ht=class{start(e){this.inst=e;try{return e.exports._start(),0}catch(e){if(e instanceof mt)return e.code;throw e}}initialize(e){this.inst=e,e.exports._initialize&&e.exports._initialize()}constructor(e,t,n,r={}){this.args=[],this.env=[],this.fds=[],z.enable(r.debug),this.args=e,this.env=t,this.fds=n;let i=this;this.wasiImport={args_sizes_get(e,t){let n=new DataView(i.inst.exports.memory.buffer);n.setUint32(e,i.args.length,!0);let r=0;for(let e of i.args)r+=e.length+1;return n.setUint32(t,r,!0),z.log(n.getUint32(e,!0),n.getUint32(t,!0)),0},args_get(e,t){let n=new DataView(i.inst.exports.memory.buffer),r=new Uint8Array(i.inst.exports.memory.buffer),a=t;for(let a=0;a<i.args.length;a++){n.setUint32(e,t,!0),e+=4;let o=new TextEncoder().encode(i.args[a]);r.set(o,t),n.setUint8(t+o.length,0),t+=o.length+1}return z.enabled&&z.log(new TextDecoder(`utf-8`).decode(r.slice(a,t))),0},environ_sizes_get(e,t){let n=new DataView(i.inst.exports.memory.buffer);n.setUint32(e,i.env.length,!0);let r=0;for(let e of i.env)r+=new TextEncoder().encode(e).length+1;return n.setUint32(t,r,!0),z.log(n.getUint32(e,!0),n.getUint32(t,!0)),0},environ_get(e,t){let n=new DataView(i.inst.exports.memory.buffer),r=new Uint8Array(i.inst.exports.memory.buffer),a=t;for(let a=0;a<i.env.length;a++){n.setUint32(e,t,!0),e+=4;let o=new TextEncoder().encode(i.env[a]);r.set(o,t),n.setUint8(t+o.length,0),t+=o.length+1}return z.enabled&&z.log(new TextDecoder(`utf-8`).decode(r.slice(a,t))),0},clock_res_get(e,t){let n;switch(e){case 1:n=5000n;break;case 0:n=1000000n;break;default:return 52}return new DataView(i.inst.exports.memory.buffer).setBigUint64(t,n,!0),0},clock_time_get(e,t,n){let r=new DataView(i.inst.exports.memory.buffer);if(e===0)r.setBigUint64(n,BigInt(new Date().getTime())*1000000n,!0);else if(e==1){let e;try{e=BigInt(Math.round(performance.now()*1e6))}catch{e=0n}r.setBigUint64(n,e,!0)}else r.setBigUint64(n,0n,!0);return 0},fd_advise(e,t,n,r){return i.fds[e]==null?8:0},fd_allocate(e,t,n){return i.fds[e]==null?8:i.fds[e].fd_allocate(t,n)},fd_close(e){if(i.fds[e]!=null){let t=i.fds[e].fd_close();return i.fds[e]=void 0,t}else return 8},fd_datasync(e){return i.fds[e]==null?8:i.fds[e].fd_sync()},fd_fdstat_get(e,t){if(i.fds[e]!=null){let{ret:n,fdstat:r}=i.fds[e].fd_fdstat_get();return r?.write_bytes(new DataView(i.inst.exports.memory.buffer),t),n}else return 8},fd_fdstat_set_flags(e,t){return i.fds[e]==null?8:i.fds[e].fd_fdstat_set_flags(t)},fd_fdstat_set_rights(e,t,n){return i.fds[e]==null?8:i.fds[e].fd_fdstat_set_rights(t,n)},fd_filestat_get(e,t){if(i.fds[e]!=null){let{ret:n,filestat:r}=i.fds[e].fd_filestat_get();return r?.write_bytes(new DataView(i.inst.exports.memory.buffer),t),n}else return 8},fd_filestat_set_size(e,t){return i.fds[e]==null?8:i.fds[e].fd_filestat_set_size(t)},fd_filestat_set_times(e,t,n,r){return i.fds[e]==null?8:i.fds[e].fd_filestat_set_times(t,n,r)},fd_pread(e,t,n,r,a){let o=new DataView(i.inst.exports.memory.buffer),s=new Uint8Array(i.inst.exports.memory.buffer);if(i.fds[e]!=null){let c=rt.read_bytes_array(o,t,n),l=0;for(let t of c){let{ret:n,data:c}=i.fds[e].fd_pread(t.buf_len,r);if(n!=0)return o.setUint32(a,l,!0),n;if(s.set(c,t.buf),l+=c.length,r+=BigInt(c.length),c.length!=t.buf_len)break}return o.setUint32(a,l,!0),0}else return 8},fd_prestat_get(e,t){let n=new DataView(i.inst.exports.memory.buffer);if(i.fds[e]!=null){let{ret:r,prestat:a}=i.fds[e].fd_prestat_get();return a?.write_bytes(n,t),r}else return 8},fd_prestat_dir_name(e,t,n){if(i.fds[e]!=null){let{ret:r,prestat:a}=i.fds[e].fd_prestat_get();if(a==null)return r;let o=a.inner.pr_name;return new Uint8Array(i.inst.exports.memory.buffer).set(o.slice(0,n),t),o.byteLength>n?37:0}else return 8},fd_pwrite(e,t,n,r,a){let o=new DataView(i.inst.exports.memory.buffer),s=new Uint8Array(i.inst.exports.memory.buffer);if(i.fds[e]!=null){let c=it.read_bytes_array(o,t,n),l=0;for(let t of c){let n=s.slice(t.buf,t.buf+t.buf_len),{ret:c,nwritten:u}=i.fds[e].fd_pwrite(n,r);if(c!=0)return o.setUint32(a,l,!0),c;if(l+=u,r+=BigInt(u),u!=n.byteLength)break}return o.setUint32(a,l,!0),0}else return 8},fd_read(e,t,n,r){let a=new DataView(i.inst.exports.memory.buffer),o=new Uint8Array(i.inst.exports.memory.buffer);if(i.fds[e]!=null){let s=rt.read_bytes_array(a,t,n),c=0;for(let t of s){let{ret:n,data:s}=i.fds[e].fd_read(t.buf_len);if(n!=0)return a.setUint32(r,c,!0),n;if(o.set(s,t.buf),c+=s.length,s.length!=t.buf_len)break}return a.setUint32(r,c,!0),0}else return 8},fd_readdir(e,t,n,r,a){let o=new DataView(i.inst.exports.memory.buffer),s=new Uint8Array(i.inst.exports.memory.buffer);if(i.fds[e]!=null){let c=0;for(;;){let{ret:l,dirent:u}=i.fds[e].fd_readdir_single(r);if(l!=0)return o.setUint32(a,c,!0),l;if(u==null)break;if(n-c<u.head_length()){c=n;break}let d=new ArrayBuffer(u.head_length());if(u.write_head_bytes(new DataView(d),0),s.set(new Uint8Array(d).slice(0,Math.min(d.byteLength,n-c)),t),t+=u.head_length(),c+=u.head_length(),n-c<u.name_length()){c=n;break}u.write_name_bytes(s,t,n-c),t+=u.name_length(),c+=u.name_length(),r=u.d_next}return o.setUint32(a,c,!0),0}else return 8},fd_renumber(e,t){if(i.fds[e]!=null&&i.fds[t]!=null){let n=i.fds[t].fd_close();return n==0?(i.fds[t]=i.fds[e],i.fds[e]=void 0,0):n}else return 8},fd_seek(e,t,n,r){let a=new DataView(i.inst.exports.memory.buffer);if(i.fds[e]!=null){let{ret:o,offset:s}=i.fds[e].fd_seek(t,n);return a.setBigInt64(r,s,!0),o}else return 8},fd_sync(e){return i.fds[e]==null?8:i.fds[e].fd_sync()},fd_tell(e,t){let n=new DataView(i.inst.exports.memory.buffer);if(i.fds[e]!=null){let{ret:r,offset:a}=i.fds[e].fd_tell();return n.setBigUint64(t,a,!0),r}else return 8},fd_write(e,t,n,r){let a=new DataView(i.inst.exports.memory.buffer),o=new Uint8Array(i.inst.exports.memory.buffer);if(i.fds[e]!=null){let s=it.read_bytes_array(a,t,n),c=0;for(let t of s){let n=o.slice(t.buf,t.buf+t.buf_len),{ret:s,nwritten:l}=i.fds[e].fd_write(n);if(s!=0)return a.setUint32(r,c,!0),s;if(c+=l,l!=n.byteLength)break}return a.setUint32(r,c,!0),0}else return 8},path_create_directory(e,t,n){let r=new Uint8Array(i.inst.exports.memory.buffer);if(i.fds[e]!=null){let a=new TextDecoder(`utf-8`).decode(r.slice(t,t+n));return i.fds[e].path_create_directory(a)}else return 8},path_filestat_get(e,t,n,r,a){let o=new DataView(i.inst.exports.memory.buffer),s=new Uint8Array(i.inst.exports.memory.buffer);if(i.fds[e]!=null){let c=new TextDecoder(`utf-8`).decode(s.slice(n,n+r)),{ret:l,filestat:u}=i.fds[e].path_filestat_get(t,c);return u?.write_bytes(o,a),l}else return 8},path_filestat_set_times(e,t,n,r,a,o,s){let c=new Uint8Array(i.inst.exports.memory.buffer);if(i.fds[e]!=null){let l=new TextDecoder(`utf-8`).decode(c.slice(n,n+r));return i.fds[e].path_filestat_set_times(t,l,a,o,s)}else return 8},path_link(e,t,n,r,a,o,s){let c=new Uint8Array(i.inst.exports.memory.buffer);if(i.fds[e]!=null&&i.fds[a]!=null){let l=new TextDecoder(`utf-8`).decode(c.slice(n,n+r)),u=new TextDecoder(`utf-8`).decode(c.slice(o,o+s)),{ret:d,inode_obj:f}=i.fds[e].path_lookup(l,t);return f==null?d:i.fds[a].path_link(u,f,!1)}else return 8},path_open(e,t,n,r,a,o,s,c,l){let u=new DataView(i.inst.exports.memory.buffer),d=new Uint8Array(i.inst.exports.memory.buffer);if(i.fds[e]!=null){let f=new TextDecoder(`utf-8`).decode(d.slice(n,n+r));z.log(f);let{ret:p,fd_obj:m}=i.fds[e].path_open(t,f,a,o,s,c);if(p!=0)return p;i.fds.push(m);let h=i.fds.length-1;return u.setUint32(l,h,!0),0}else return 8},path_readlink(e,t,n,r,a,o){let s=new DataView(i.inst.exports.memory.buffer),c=new Uint8Array(i.inst.exports.memory.buffer);if(i.fds[e]!=null){let l=new TextDecoder(`utf-8`).decode(c.slice(t,t+n));z.log(l);let{ret:u,data:d}=i.fds[e].path_readlink(l);if(d!=null){let e=new TextEncoder().encode(d);if(e.length>a)return s.setUint32(o,0,!0),8;c.set(e,r),s.setUint32(o,e.length,!0)}return u}else return 8},path_remove_directory(e,t,n){let r=new Uint8Array(i.inst.exports.memory.buffer);if(i.fds[e]!=null){let a=new TextDecoder(`utf-8`).decode(r.slice(t,t+n));return i.fds[e].path_remove_directory(a)}else return 8},path_rename(e,t,n,r,a,o){let s=new Uint8Array(i.inst.exports.memory.buffer);if(i.fds[e]!=null&&i.fds[r]!=null){let c=new TextDecoder(`utf-8`).decode(s.slice(t,t+n)),l=new TextDecoder(`utf-8`).decode(s.slice(a,a+o)),{ret:u,inode_obj:d}=i.fds[e].path_unlink(c);if(d==null)return u;if(u=i.fds[r].path_link(l,d,!0),u!=0&&i.fds[e].path_link(c,d,!0)!=0)throw`path_link should always return success when relinking an inode back to the original place`;return u}else return 8},path_symlink(e,t,n,r,a){let o=new Uint8Array(i.inst.exports.memory.buffer);return i.fds[n]==null?8:(new TextDecoder(`utf-8`).decode(o.slice(e,e+t)),new TextDecoder(`utf-8`).decode(o.slice(r,r+a)),58)},path_unlink_file(e,t,n){let r=new Uint8Array(i.inst.exports.memory.buffer);if(i.fds[e]!=null){let a=new TextDecoder(`utf-8`).decode(r.slice(t,t+n));return i.fds[e].path_unlink_file(a)}else return 8},poll_oneoff(e,t,n){if(n===0)return 28;if(n>1)return z.log(`poll_oneoff: only a single subscription is supported`),58;let r=new DataView(i.inst.exports.memory.buffer),a=ct.read_bytes(r,e),o=a.eventtype,s=a.clockid,c=a.timeout;if(o!==0)return z.log(`poll_oneoff: only clock subscriptions are supported`),58;let l;if(s===1)l=()=>BigInt(Math.round(performance.now()*1e6));else if(s===0)l=()=>BigInt(new Date().getTime())*1000000n;else return 28;let u=a.flags&1?c:l()+c;for(;u>l(););return new lt(a.userdata,0,o).write_bytes(r,t),0},proc_exit(e){throw new mt(e)},proc_raise(e){throw`raised signal `+e},sched_yield(){},random_get(e,t){let n=new Uint8Array(i.inst.exports.memory.buffer).subarray(e,e+t);if(`crypto`in globalThis&&(typeof SharedArrayBuffer>`u`||!(i.inst.exports.memory.buffer instanceof SharedArrayBuffer)))for(let e=0;e<t;e+=65536)crypto.getRandomValues(n.subarray(e,e+65536));else for(let e=0;e<t;e++)n[e]=Math.random()*256|0},sock_recv(e,t,n){throw`sockets not supported`},sock_send(e,t,n){throw`sockets not supported`},sock_shutdown(e,t){throw`sockets not supported`},sock_accept(e,t){throw`sockets not supported`}}}},gt=class{fd_allocate(e,t){return 58}fd_close(){return 0}fd_fdstat_get(){return{ret:58,fdstat:null}}fd_fdstat_set_flags(e){return 58}fd_fdstat_set_rights(e,t){return 58}fd_filestat_get(){return{ret:58,filestat:null}}fd_filestat_set_size(e){return 58}fd_filestat_set_times(e,t,n){return 58}fd_pread(e,t){return{ret:58,data:new Uint8Array}}fd_prestat_get(){return{ret:58,prestat:null}}fd_pwrite(e,t){return{ret:58,nwritten:0}}fd_read(e){return{ret:58,data:new Uint8Array}}fd_readdir_single(e){return{ret:58,dirent:null}}fd_seek(e,t){return{ret:58,offset:0n}}fd_sync(){return 0}fd_tell(){return{ret:58,offset:0n}}fd_write(e){return{ret:58,nwritten:0}}path_create_directory(e){return 58}path_filestat_get(e,t){return{ret:58,filestat:null}}path_filestat_set_times(e,t,n,r,i){return 58}path_link(e,t,n){return 58}path_unlink(e){return{ret:58,inode_obj:null}}path_lookup(e,t){return{ret:58,inode_obj:null}}path_open(e,t,n,r,i,a){return{ret:54,fd_obj:null}}path_readlink(e){return{ret:58,data:null}}path_remove_directory(e){return 58}path_rename(e,t,n){return 58}path_unlink_file(e){return 58}},_t=class e{static issue_ino(){return e.next_ino++}static root_ino(){return 0n}constructor(){this.ino=e.issue_ino()}};_t.next_ino=1n;var vt=class extends gt{fd_allocate(e,t){if(!(this.file.size>e+t)){let n=new Uint8Array(Number(e+t));n.set(this.file.data,0),this.file.data=n}return 0}fd_fdstat_get(){return{ret:0,fdstat:new ot(4,0)}}fd_filestat_set_size(e){if(this.file.size>e)this.file.data=new Uint8Array(this.file.data.buffer.slice(0,Number(e)));else{let t=new Uint8Array(Number(e));t.set(this.file.data,0),this.file.data=t}return 0}fd_read(e){let t=this.file.data.slice(Number(this.file_pos),Number(this.file_pos+BigInt(e)));return this.file_pos+=BigInt(t.length),{ret:0,data:t}}fd_pread(e,t){return{ret:0,data:this.file.data.slice(Number(t),Number(t+BigInt(e)))}}fd_seek(e,t){let n;switch(t){case 0:n=e;break;case 1:n=this.file_pos+e;break;case 2:n=BigInt(this.file.data.byteLength)+e;break;default:return{ret:28,offset:0n}}return n<0?{ret:28,offset:0n}:(this.file_pos=n,{ret:0,offset:this.file_pos})}fd_tell(){return{ret:0,offset:this.file_pos}}fd_write(e){if(this.file.readonly)return{ret:8,nwritten:0};if(this.file_pos+BigInt(e.byteLength)>this.file.size){let t=this.file.data;this.file.data=new Uint8Array(Number(this.file_pos+BigInt(e.byteLength))),this.file.data.set(t)}return this.file.data.set(e,Number(this.file_pos)),this.file_pos+=BigInt(e.byteLength),{ret:0,nwritten:e.byteLength}}fd_pwrite(e,t){if(this.file.readonly)return{ret:8,nwritten:0};if(t+BigInt(e.byteLength)>this.file.size){let n=this.file.data;this.file.data=new Uint8Array(Number(t+BigInt(e.byteLength))),this.file.data.set(n)}return this.file.data.set(e,Number(t)),{ret:0,nwritten:e.byteLength}}fd_filestat_get(){return{ret:0,filestat:this.file.stat()}}constructor(e){super(),this.file_pos=0n,this.file=e}},yt=class extends gt{fd_seek(e,t){return{ret:8,offset:0n}}fd_tell(){return{ret:8,offset:0n}}fd_allocate(e,t){return 8}fd_fdstat_get(){return{ret:0,fdstat:new ot(3,0)}}fd_readdir_single(e){if(z.enabled&&(z.log(`readdir_single`,e),z.log(e,this.dir.contents.keys())),e==0n)return{ret:0,dirent:new at(1n,this.dir.ino,`.`,3)};if(e==1n)return{ret:0,dirent:new at(2n,this.dir.parent_ino(),`..`,3)};if(e>=BigInt(this.dir.contents.size)+2n)return{ret:0,dirent:null};let[t,n]=Array.from(this.dir.contents.entries())[Number(e-2n)];return{ret:0,dirent:new at(e+1n,n.ino,t,n.stat().filetype)}}path_filestat_get(e,t){let{ret:n,path:r}=St.from(t);if(r==null)return{ret:n,filestat:null};let{ret:i,entry:a}=this.dir.get_entry_for_path(r);return a==null?{ret:i,filestat:null}:{ret:0,filestat:a.stat()}}path_lookup(e,t){let{ret:n,path:r}=St.from(e);if(r==null)return{ret:n,inode_obj:null};let{ret:i,entry:a}=this.dir.get_entry_for_path(r);return a==null?{ret:i,inode_obj:null}:{ret:0,inode_obj:a}}path_open(e,t,n,r,i,a){let{ret:o,path:s}=St.from(t);if(s==null)return{ret:o,fd_obj:null};let{ret:c,entry:l}=this.dir.get_entry_for_path(s);if(l==null){if(c!=44)return{ret:c,fd_obj:null};if((n&1)==1){let{ret:e,entry:r}=this.dir.create_entry_for_path(t,(n&2)==2);if(r==null)return{ret:e,fd_obj:null};l=r}else return{ret:44,fd_obj:null}}else if((n&4)==4)return{ret:20,fd_obj:null};return(n&2)==2&&l.stat().filetype!==3?{ret:54,fd_obj:null}:l.path_open(n,r,a)}path_create_directory(e){return this.path_open(0,e,3,0n,0n,0).ret}path_link(e,t,n){let{ret:r,path:i}=St.from(e);if(i==null)return r;if(i.is_dir)return 44;let{ret:a,parent_entry:o,filename:s,entry:c}=this.dir.get_parent_dir_and_entry_for_path(i,!0);if(o==null||s==null)return a;if(c!=null){let e=t.stat().filetype==3,r=c.stat().filetype==3;if(e&&r)if(n&&c instanceof Ct){if(c.contents.size!=0)return 55}else return 20;else if(e&&!r)return 54;else if(!e&&r)return 31;else if(!(t.stat().filetype==4&&c.stat().filetype==4))return 20}return!n&&t.stat().filetype==3?63:(o.contents.set(s,t),0)}path_unlink(e){let{ret:t,path:n}=St.from(e);if(n==null)return{ret:t,inode_obj:null};let{ret:r,parent_entry:i,filename:a,entry:o}=this.dir.get_parent_dir_and_entry_for_path(n,!0);return i==null||a==null?{ret:r,inode_obj:null}:o==null?{ret:44,inode_obj:null}:(i.contents.delete(a),{ret:0,inode_obj:o})}path_unlink_file(e){let{ret:t,path:n}=St.from(e);if(n==null)return t;let{ret:r,parent_entry:i,filename:a,entry:o}=this.dir.get_parent_dir_and_entry_for_path(n,!1);return i==null||a==null||o==null?r:o.stat().filetype===3?31:(i.contents.delete(a),0)}path_remove_directory(e){let{ret:t,path:n}=St.from(e);if(n==null)return t;let{ret:r,parent_entry:i,filename:a,entry:o}=this.dir.get_parent_dir_and_entry_for_path(n,!1);return i==null||a==null||o==null?r:!(o instanceof Ct)||o.stat().filetype!==3?54:o.contents.size===0?i.contents.delete(a)?0:44:55}fd_filestat_get(){return{ret:0,filestat:this.dir.stat()}}fd_filestat_set_size(e){return 8}fd_read(e){return{ret:8,data:new Uint8Array}}fd_pread(e,t){return{ret:8,data:new Uint8Array}}fd_write(e){return{ret:8,nwritten:0}}fd_pwrite(e,t){return{ret:8,nwritten:0}}constructor(e){super(),this.dir=e}},bt=class extends yt{fd_prestat_get(){return{ret:0,prestat:dt.dir(this.prestat_name)}}constructor(e,t){super(new Ct(t)),this.prestat_name=e}},xt=class extends _t{path_open(e,t,n){if(this.readonly&&(t&BigInt(64))==BigInt(64))return{ret:63,fd_obj:null};if((e&8)==8){if(this.readonly)return{ret:63,fd_obj:null};this.data=new Uint8Array([])}let r=new vt(this);return n&1&&r.fd_seek(0n,2),{ret:0,fd_obj:r}}get size(){return BigInt(this.data.byteLength)}stat(){return new st(this.ino,4,this.size)}constructor(e,t){super(),this.data=new Uint8Array(e),this.readonly=!!t?.readonly}},St=class e{static from(t){let n=new e;if(n.is_dir=t.endsWith(`/`),t.startsWith(`/`))return{ret:76,path:null};if(t.includes(`\0`))return{ret:28,path:null};for(let e of t.split(`/`))if(!(e===``||e===`.`)){if(e===`..`){if(n.parts.pop()==null)return{ret:76,path:null};continue}n.parts.push(e)}return{ret:0,path:n}}to_path_string(){let e=this.parts.join(`/`);return this.is_dir&&(e+=`/`),e}constructor(){this.parts=[],this.is_dir=!1}},Ct=class e extends _t{parent_ino(){return this.parent==null?_t.root_ino():this.parent.ino}path_open(e,t,n){return{ret:0,fd_obj:new yt(this)}}stat(){return new st(this.ino,3,0n)}get_entry_for_path(t){let n=this;for(let r of t.parts){if(!(n instanceof e))return{ret:54,entry:null};let t=n.contents.get(r);if(t!==void 0)n=t;else return z.log(r),{ret:44,entry:null}}return t.is_dir&&n.stat().filetype!=3?{ret:54,entry:null}:{ret:0,entry:n}}get_parent_dir_and_entry_for_path(t,n){let r=t.parts.pop();if(r===void 0)return{ret:28,parent_entry:null,filename:null,entry:null};let{ret:i,entry:a}=this.get_entry_for_path(t);if(a==null)return{ret:i,parent_entry:null,filename:null,entry:null};if(!(a instanceof e))return{ret:54,parent_entry:null,filename:null,entry:null};let o=a.contents.get(r);return o===void 0?n?{ret:0,parent_entry:a,filename:r,entry:null}:{ret:44,parent_entry:null,filename:null,entry:null}:t.is_dir&&o.stat().filetype!=3?{ret:54,parent_entry:null,filename:null,entry:null}:{ret:0,parent_entry:a,filename:r,entry:o}}create_entry_for_path(t,n){let{ret:r,path:i}=St.from(t);if(i==null)return{ret:r,entry:null};let{ret:a,parent_entry:o,filename:s,entry:c}=this.get_parent_dir_and_entry_for_path(i,!0);if(o==null||s==null)return{ret:a,entry:null};if(c!=null)return{ret:20,entry:null};z.log(`create`,i);let l;return l=n?new e(new Map):new xt(new ArrayBuffer(0)),o.contents.set(s,l),c=l,{ret:0,entry:c}}constructor(t){super(),this.parent=null,t instanceof Array?this.contents=new Map(t):this.contents=t;for(let t of this.contents.values())t instanceof e&&(t.parent=this)}};function wt({stdout:e,stderr:t}={stdout:console.log,stderr:console.warn}){let n,r;function i(){if(n===void 0)throw Error(`Memory is not set`);return(r===void 0||r.buffer.byteLength===0)&&(r=new DataView(n.buffer)),r}let a=new TextDecoder;return{addToImports(r){let o=r.wasi_snapshot_preview1,s=o.fd_write;o.fd_write=(r,o,c,l)=>{if(r!==1&&r!==2)return s(r,o,c,l);let u=i(),d=Array.from({length:c},(e,t)=>{let r=o+t*8,i=u.getUint32(r,!0),a=u.getUint32(r+4,!0);return new Uint8Array(n.buffer,i,a)}),f=0,p=``;for(let e of d)p+=a.decode(e),f+=e.byteLength;return u.setUint32(l,f,!0),(r===1?e:t)(p),0};let c=o.fd_filestat_get;o.fd_filestat_get=(e,t)=>{if(e!==1&&e!==2)return c(e,t);let n=i(),r=c(e,t);if(r!==0)return r;let a=t+0;return n.setUint8(a,2),0};let l=o.fd_fdstat_get;o.fd_fdstat_get=(e,t)=>{if(e!==1&&e!==2)return l(e,t);let n=i(),r=t+0;n.setUint8(r,2);let a=t+8;return n.setBigUint64(a,BigInt(64),!0),0}},setMemory(e){n=e}}}var Tt=new DataView(new ArrayBuffer);function B(e){return Tt.buffer!==e.buffer&&(Tt=new DataView(e.buffer)),Tt}function Et(e){return e>>>0}var Dt=new TextDecoder(`utf-8`),Ot=new TextEncoder(`utf-8`);function kt(e,t,n){if(typeof e!=`string`)throw TypeError(`expected a string`);if(e.length===0)return At=0,1;let r=0,i=0,a=0;for(;e.length>0;){i=t(i,r,1,r+e.length),r+=e.length;let{read:o,written:s}=Ot.encodeInto(e,new Uint8Array(n.buffer,i+a,r-a));a+=s,e=e.slice(o)}return r>a&&(i=t(i,r,1,a)),At=a,i}var At=0,jt=class{constructor(){this.list=[],this.head=0}insert(e){this.head>=this.list.length&&this.list.push({next:this.list.length+1,val:void 0});let t=this.head,n=this.list[t];return this.head=n.next,n.next=-1,n.val=e,t}get(e){if(e>=this.list.length)throw RangeError(`handle index not valid`);let t=this.list[e];if(t.next===-1)return t.val;throw RangeError(`handle index not valid`)}remove(e){let t=this.get(e),n=this.list[e];return n.val=void 0,n.next=this.head,this.head=e,t}};function Mt(){throw RangeError(`invalid variant discriminant for bool`)}var Nt=class{constructor(){this._resource0_slab=new jt}addToImports(e){`canonical_abi`in e||(e.canonical_abi={}),e.canonical_abi[`resource_drop_rb-abi-value`]=e=>{this._resource0_slab.remove(e).drop()},e.canonical_abi[`resource_clone_rb-abi-value`]=e=>{let t=this._resource0_slab.get(e);return this._resource0_slab.insert(t.clone())},e.canonical_abi[`resource_get_rb-abi-value`]=e=>this._resource0_slab.get(e)._wasm_val,e.canonical_abi[`resource_new_rb-abi-value`]=e=>(this._registry0,this._resource0_slab.insert(new Pt(e,this)))}async instantiate(e,t){if(t||={},this.addToImports(t),e instanceof WebAssembly.Instance)this.instance=e;else if(e instanceof WebAssembly.Module)this.instance=await WebAssembly.instantiate(e,t);else if(e instanceof ArrayBuffer||e instanceof Uint8Array){let{instance:n}=await WebAssembly.instantiate(e,t);this.instance=n}else{let{instance:n}=await WebAssembly.instantiateStreaming(e,t);this.instance=n}this._exports=this.instance.exports,this._registry0=new FinalizationRegistry(this._exports[`canonical_abi_drop_rb-abi-value`])}rubyShowVersion(){this._exports[`ruby-show-version: func() -> ()`]()}rubyInit(e){let t=this._exports.memory,n=this._exports.cabi_realloc,r=e,i=r.length,a=n(0,0,4,i*8);for(let e=0;e<r.length;e++){let i=r[e],o=a+e*8,s=kt(i,n,t),c=At;B(t).setInt32(o+4,c,!0),B(t).setInt32(o+0,s,!0)}this._exports[`ruby-init: func(args: list<string>) -> ()`](a,i)}rubyInitLoadpath(){this._exports[`ruby-init-loadpath: func() -> ()`]()}rbEvalStringProtect(e){let t=this._exports.memory,n=this._exports.cabi_realloc,r=kt(e,n,t),i=At,a=this._exports[`rb-eval-string-protect: func(str: string) -> tuple<handle<rb-abi-value>, s32>`](r,i);return[this._resource0_slab.remove(B(t).getInt32(a+0,!0)),B(t).getInt32(a+4,!0)]}rbFuncallvProtect(e,t,n){let r=this._exports.memory,i=this._exports.cabi_realloc,a=e;if(!(a instanceof Pt))throw TypeError(`expected instance of RbAbiValue`);let o=n,s=o.length,c=i(0,0,4,s*4);for(let e=0;e<o.length;e++){let t=o[e],n=c+e*4,i=t;if(!(i instanceof Pt))throw TypeError(`expected instance of RbAbiValue`);B(r).setInt32(n+0,this._resource0_slab.insert(i.clone()),!0)}let l=this._exports[`rb-funcallv-protect: func(recv: handle<rb-abi-value>, mid: u32, args: list<handle<rb-abi-value>>) -> tuple<handle<rb-abi-value>, s32>`](this._resource0_slab.insert(a.clone()),Et(t),c,s);return[this._resource0_slab.remove(B(r).getInt32(l+0,!0)),B(r).getInt32(l+4,!0)]}rbIntern(e){let t=this._exports.memory,n=this._exports.cabi_realloc,r=kt(e,n,t),i=At;return this._exports[`rb-intern: func(name: string) -> u32`](r,i)>>>0}rbErrinfo(){let e=this._exports[`rb-errinfo: func() -> handle<rb-abi-value>`]();return this._resource0_slab.remove(e)}rbClearErrinfo(){this._exports[`rb-clear-errinfo: func() -> ()`]()}rstringPtr(e){let t=this._exports.memory,n=e;if(!(n instanceof Pt))throw TypeError(`expected instance of RbAbiValue`);let r=this._exports[`rstring-ptr: func(value: handle<rb-abi-value>) -> string`](this._resource0_slab.insert(n.clone())),i=B(t).getInt32(r+0,!0),a=B(t).getInt32(r+4,!0),o=Dt.decode(new Uint8Array(t.buffer,i,a));return this._exports[`cabi_post_rstring-ptr`](r),o}rbVmBugreport(){this._exports[`rb-vm-bugreport: func() -> ()`]()}rbGcEnable(){let e=this._exports[`rb-gc-enable: func() -> bool`]();return e==0?!1:e==1?!0:Mt()}rbGcDisable(){let e=this._exports[`rb-gc-disable: func() -> bool`]();return e==0?!1:e==1?!0:Mt()}rbSetShouldProhibitRewind(e){let t=this._exports[`rb-set-should-prohibit-rewind: func(new-value: bool) -> bool`](+!!e);return t==0?!1:t==1?!0:Mt()}},Pt=class{constructor(e,t){this._wasm_val=e,this._obj=t,this._refcnt=1,t._registry0.register(this,e,this)}clone(){return this._refcnt+=1,this}drop(){if(--this._refcnt,this._refcnt!==0)return;this._obj._registry0.unregister(this);let e=this._obj._exports[`canonical_abi_drop_rb-abi-value`],t=this._wasm_val;delete this._obj,delete this._refcnt,delete this._wasm_val,e(t)}};function Ft(e,t,n){`rb-js-abi-host`in e||(e[`rb-js-abi-host`]={}),e[`rb-js-abi-host`][`eval-js: func(code: string) -> variant { success(handle<js-abi-value>), failure(handle<js-abi-value>) }`]=function(e,i,a){let o=n(`memory`),s=e,c=i,l=Dt.decode(new Uint8Array(o.buffer,s,c)),u=t.evalJs(l);switch(u.tag){case`success`:{let e=u.val;B(o).setInt8(a+0,0,!0),B(o).setInt32(a+4,r.insert(e),!0);break}case`failure`:{let e=u.val;B(o).setInt8(a+0,1,!0),B(o).setInt32(a+4,r.insert(e),!0);break}default:throw RangeError(`invalid variant specified for JsAbiResult`)}},e[`rb-js-abi-host`][`is-js: func(value: handle<js-abi-value>) -> bool`]=function(e){return+!!t.isJs(r.get(e))},e[`rb-js-abi-host`][`instance-of: func(value: handle<js-abi-value>, klass: handle<js-abi-value>) -> bool`]=function(e,n){return+!!t.instanceOf(r.get(e),r.get(n))},e[`rb-js-abi-host`][`global-this: func() -> handle<js-abi-value>`]=function(){let e=t.globalThis();return r.insert(e)},e[`rb-js-abi-host`][`int-to-js-number: func(value: s32) -> handle<js-abi-value>`]=function(e){let n=t.intToJsNumber(e);return r.insert(n)},e[`rb-js-abi-host`][`float-to-js-number: func(value: float64) -> handle<js-abi-value>`]=function(e){let n=t.floatToJsNumber(e);return r.insert(n)},e[`rb-js-abi-host`][`string-to-js-string: func(value: string) -> handle<js-abi-value>`]=function(e,i){let a=n(`memory`),o=e,s=i,c=Dt.decode(new Uint8Array(a.buffer,o,s)),l=t.stringToJsString(c);return r.insert(l)},e[`rb-js-abi-host`][`bool-to-js-bool: func(value: bool) -> handle<js-abi-value>`]=function(e){let n=e,i=t.boolToJsBool(n==0?!1:n==1?!0:Mt());return r.insert(i)},e[`rb-js-abi-host`][`proc-to-js-function: func(value: u32) -> handle<js-abi-value>`]=function(e){let n=t.procToJsFunction(e>>>0);return r.insert(n)},e[`rb-js-abi-host`][`rb-object-to-js-rb-value: func(raw-rb-abi-value: u32) -> handle<js-abi-value>`]=function(e){let n=t.rbObjectToJsRbValue(e>>>0);return r.insert(n)},e[`rb-js-abi-host`][`js-value-to-string: func(value: handle<js-abi-value>) -> string`]=function(e,i){let a=n(`memory`),o=n(`cabi_realloc`),s=kt(t.jsValueToString(r.get(e)),o,a),c=At;B(a).setInt32(i+4,c,!0),B(a).setInt32(i+0,s,!0)},e[`rb-js-abi-host`][`js-value-to-integer: func(value: handle<js-abi-value>) -> variant { as-float(float64), bignum(string) }`]=function(e,i){let a=n(`memory`),o=n(`cabi_realloc`),s=t.jsValueToInteger(r.get(e));switch(s.tag){case`as-float`:{let e=s.val;B(a).setInt8(i+0,0,!0),B(a).setFloat64(i+8,+e,!0);break}case`bignum`:{let e=s.val;B(a).setInt8(i+0,1,!0);let t=kt(e,o,a),n=At;B(a).setInt32(i+12,n,!0),B(a).setInt32(i+8,t,!0);break}default:throw RangeError(`invalid variant specified for RawInteger`)}},e[`rb-js-abi-host`][`export-js-value-to-host: func(value: handle<js-abi-value>) -> ()`]=function(e){t.exportJsValueToHost(r.get(e))},e[`rb-js-abi-host`][`import-js-value-from-host: func() -> handle<js-abi-value>`]=function(){let e=t.importJsValueFromHost();return r.insert(e)},e[`rb-js-abi-host`][`js-value-typeof: func(value: handle<js-abi-value>) -> string`]=function(e,i){let a=n(`memory`),o=n(`cabi_realloc`),s=kt(t.jsValueTypeof(r.get(e)),o,a),c=At;B(a).setInt32(i+4,c,!0),B(a).setInt32(i+0,s,!0)},e[`rb-js-abi-host`][`js-value-equal: func(lhs: handle<js-abi-value>, rhs: handle<js-abi-value>) -> bool`]=function(e,n){return+!!t.jsValueEqual(r.get(e),r.get(n))},e[`rb-js-abi-host`][`js-value-strictly-equal: func(lhs: handle<js-abi-value>, rhs: handle<js-abi-value>) -> bool`]=function(e,n){return+!!t.jsValueStrictlyEqual(r.get(e),r.get(n))},e[`rb-js-abi-host`][`reflect-apply: func(target: handle<js-abi-value>, this-argument: handle<js-abi-value>, arguments: list<handle<js-abi-value>>) -> variant { success(handle<js-abi-value>), failure(handle<js-abi-value>) }`]=function(e,i,a,o,s){let c=n(`memory`),l=o,u=a,d=[];for(let e=0;e<l;e++){let t=u+e*4;d.push(r.get(B(c).getInt32(t+0,!0)))}let f=t.reflectApply(r.get(e),r.get(i),d);switch(f.tag){case`success`:{let e=f.val;B(c).setInt8(s+0,0,!0),B(c).setInt32(s+4,r.insert(e),!0);break}case`failure`:{let e=f.val;B(c).setInt8(s+0,1,!0),B(c).setInt32(s+4,r.insert(e),!0);break}default:throw RangeError(`invalid variant specified for JsAbiResult`)}},e[`rb-js-abi-host`][`reflect-construct: func(target: handle<js-abi-value>, arguments: list<handle<js-abi-value>>) -> handle<js-abi-value>`]=function(e,i,a){let o=n(`memory`),s=a,c=i,l=[];for(let e=0;e<s;e++){let t=c+e*4;l.push(r.get(B(o).getInt32(t+0,!0)))}let u=t.reflectConstruct(r.get(e),l);return r.insert(u)},e[`rb-js-abi-host`][`reflect-delete-property: func(target: handle<js-abi-value>, property-key: string) -> bool`]=function(e,i,a){let o=n(`memory`),s=i,c=a,l=Dt.decode(new Uint8Array(o.buffer,s,c));return+!!t.reflectDeleteProperty(r.get(e),l)},e[`rb-js-abi-host`][`reflect-get: func(target: handle<js-abi-value>, property-key: string) -> variant { success(handle<js-abi-value>), failure(handle<js-abi-value>) }`]=function(e,i,a,o){let s=n(`memory`),c=i,l=a,u=Dt.decode(new Uint8Array(s.buffer,c,l)),d=t.reflectGet(r.get(e),u);switch(d.tag){case`success`:{let e=d.val;B(s).setInt8(o+0,0,!0),B(s).setInt32(o+4,r.insert(e),!0);break}case`failure`:{let e=d.val;B(s).setInt8(o+0,1,!0),B(s).setInt32(o+4,r.insert(e),!0);break}default:throw RangeError(`invalid variant specified for JsAbiResult`)}},e[`rb-js-abi-host`][`reflect-get-own-property-descriptor: func(target: handle<js-abi-value>, property-key: string) -> handle<js-abi-value>`]=function(e,i,a){let o=n(`memory`),s=i,c=a,l=Dt.decode(new Uint8Array(o.buffer,s,c)),u=t.reflectGetOwnPropertyDescriptor(r.get(e),l);return r.insert(u)},e[`rb-js-abi-host`][`reflect-get-prototype-of: func(target: handle<js-abi-value>) -> handle<js-abi-value>`]=function(e){let n=t.reflectGetPrototypeOf(r.get(e));return r.insert(n)},e[`rb-js-abi-host`][`reflect-has: func(target: handle<js-abi-value>, property-key: string) -> bool`]=function(e,i,a){let o=n(`memory`),s=i,c=a,l=Dt.decode(new Uint8Array(o.buffer,s,c));return+!!t.reflectHas(r.get(e),l)},e[`rb-js-abi-host`][`reflect-is-extensible: func(target: handle<js-abi-value>) -> bool`]=function(e){return+!!t.reflectIsExtensible(r.get(e))},e[`rb-js-abi-host`][`reflect-own-keys: func(target: handle<js-abi-value>) -> list<handle<js-abi-value>>`]=function(e,i){let a=n(`memory`),o=n(`cabi_realloc`),s=t.reflectOwnKeys(r.get(e)),c=s.length,l=o(0,0,4,c*4);for(let e=0;e<s.length;e++){let t=s[e],n=l+e*4;B(a).setInt32(n+0,r.insert(t),!0)}B(a).setInt32(i+4,c,!0),B(a).setInt32(i+0,l,!0)},e[`rb-js-abi-host`][`reflect-prevent-extensions: func(target: handle<js-abi-value>) -> bool`]=function(e){return+!!t.reflectPreventExtensions(r.get(e))},e[`rb-js-abi-host`][`reflect-set: func(target: handle<js-abi-value>, property-key: string, value: handle<js-abi-value>) -> variant { success(handle<js-abi-value>), failure(handle<js-abi-value>) }`]=function(e,i,a,o,s){let c=n(`memory`),l=i,u=a,d=Dt.decode(new Uint8Array(c.buffer,l,u)),f=t.reflectSet(r.get(e),d,r.get(o));switch(f.tag){case`success`:{let e=f.val;B(c).setInt8(s+0,0,!0),B(c).setInt32(s+4,r.insert(e),!0);break}case`failure`:{let e=f.val;B(c).setInt8(s+0,1,!0),B(c).setInt32(s+4,r.insert(e),!0);break}default:throw RangeError(`invalid variant specified for JsAbiResult`)}},e[`rb-js-abi-host`][`reflect-set-prototype-of: func(target: handle<js-abi-value>, prototype: handle<js-abi-value>) -> bool`]=function(e,n){return+!!t.reflectSetPrototypeOf(r.get(e),r.get(n))},`canonical_abi`in e||(e.canonical_abi={});let r=new jt;e.canonical_abi[`resource_drop_js-abi-value`]=e=>{let n=r.remove(e);t.dropJsAbiValue&&t.dropJsAbiValue(n)}}var It=class extends Nt{async setInstance(e){await this.instantiate(e)}},Lt=class{constructor(){}setUnderlying(e){this.underlying=e}rubyShowVersion(){this.underlying.rubyShowVersion()}rubyInit(e){this.underlying.rubyInit(e)}rubyInitLoadpath(){this.underlying.rubyInitLoadpath()}rbEvalStringProtect(e){return this.underlying.rbEvalStringProtect(e)}rbFuncallvProtect(e,t,n){return this.underlying.rbFuncallvProtect(e,t,n)}rbIntern(e){return this.underlying.rbIntern(e)}rbErrinfo(){return this.underlying.rbErrinfo()}rbClearErrinfo(){return this.underlying.rbClearErrinfo()}rstringPtr(e){return this.underlying.rstringPtr(e)}rbVmBugreport(){this.underlying.rbVmBugreport()}rbGcEnable(){return this.underlying.rbGcEnable()}rbGcDisable(){return this.underlying.rbGcDisable()}rbSetShouldProhibitRewind(e){return this.underlying.rbSetShouldProhibitRewind(e)}async setInstance(e){}addToImports(e){}},Rt=class e{static async instantiateModule(t){var n,r;let{module:i,wasip1:a}=t,o=new e,s={wasi_snapshot_preview1:a.wasiImport};o.addToImports(s),(n=t.addToImports)==null||n.call(t,s);let c=await WebAssembly.instantiate(i,s);try{await o.setInstance(c)}catch(e){throw console.error('Failed to instantiate Ruby VM. Please make sure that you have added `gem "js"` to your Gemfile.'),e}return(r=t.setMemory)==null||r.call(t,c.exports.memory),a.initialize(c),o.initialize(t.args),{vm:o,instance:c}}static async instantiateComponent(e){let t;return t=`getCoreModule`in e?async t=>{let{instantiate:n,getCoreModule:r,wasip2:i}=e,{cli:a,clocks:o,filesystem:s,io:c,random:l,sockets:u,http:d}=i;return(await n(r,{"ruby:js/js-runtime":t,"wasi:cli/environment":a.environment,"wasi:cli/exit":a.exit,"wasi:cli/stderr":a.stderr,"wasi:cli/stdin":a.stdin,"wasi:cli/stdout":a.stdout,"wasi:cli/terminal-input":a.terminalInput,"wasi:cli/terminal-output":a.terminalOutput,"wasi:cli/terminal-stderr":a.terminalStderr,"wasi:cli/terminal-stdin":a.terminalStdin,"wasi:cli/terminal-stdout":a.terminalStdout,"wasi:clocks/monotonic-clock":o.monotonicClock,"wasi:clocks/wall-clock":o.wallClock,"wasi:filesystem/preopens":s.preopens,"wasi:filesystem/types":s.types,"wasi:io/error":c.error,"wasi:io/poll":c.poll,"wasi:io/streams":c.streams,"wasi:random/random":l.random,"wasi:sockets/tcp":u.tcp,"wasi:http/types":d.types,"wasi:http/incoming-handler":d.incomingHandler,"wasi:http/outgoing-handler":d.outgoingHandler},e.instantiateCore)).rubyRuntime}:e.instantiate,{vm:await this._instantiate({},t)}}constructor(e){this.instance=null,this.interfaceState={hasJSFrameAfterRbFrame:!1},this.guest=(e=>{let t=[`constructor`,`setInstance`,`addToImports`,`instantiate`,`rbSetShouldProhibitRewind`,`rbGcDisable`,`rbGcEnable`];for(let n of Object.getOwnPropertyNames(Nt.prototype)){if(t.includes(n))continue;let r=e[n];typeof r==`function`&&(e[n]=(...t)=>{if(this.interfaceState.hasJSFrameAfterRbFrame){let n=this.guest.rbSetShouldProhibitRewind(!0),i=this.guest.rbGcDisable(),a=Reflect.apply(r,e,t);return this.guest.rbSetShouldProhibitRewind(n),i||this.guest.rbGcEnable(),a}else return Reflect.apply(r,e,t)})}return e})(e??new It),this.transport=new zt,this.exceptionFormatter=new Ht}static async _instantiate(t,n){let r=new Lt,i=new e(r);class a{constructor(e){this.underlying=e}}let o=i.getImports(e=>new a(e),e=>e.underlying),s=await n(Object.assign(Object.assign({},o),{throwProhibitRewindException:e=>{i.throwProhibitRewindException(e)},procToJsFunction:()=>{let e=new Bt(s.exportRbValueToJs(),i,i.privateObject());return new a((...t)=>e.call(`call`,...t.map(e=>i.wrap(e))).toJS())},rbObjectToJsRbValue:()=>new a(new Bt(s.exportRbValueToJs(),i,i.privateObject())),JsAbiValue:a}));return r.setUnderlying(s),i.initialize(t.args),i}initialize(e=[`ruby.wasm`,`-EUTF-8`,`-e_=0`]){let t=e.map(e=>e+`\0`);this.guest.rubyInit(t);try{this.eval(`
        # Require Bundler standalone setup
        if File.exist?("/bundle/bundler/setup.rb")
          # Some ruby-head + ruby.wasm revisions return from rubyInit with a partial
          # Gem module: Gem is defined, but RubyGems is not loaded yet and its API
          # helpers are still missing. Bundler standalone treats defined?(Gem) as
          # sufficient, so load RubyGems explicitly before requiring its setup file.
          require "rubygems" if defined?(Gem) && !Gem.respond_to?(:ruby_api_version)
          require "/bundle/bundler/setup.rb"
        elsif File.exist?("/bundle/setup.rb")
          # For non-CM builds, which doesn't use Bundler's standalone mode
          require "/bundle/setup.rb"
        end
      `)}catch(e){console.warn(`Failed to load /bundle/setup`,e)}}async setInstance(e){this.instance=e,await this.guest.setInstance(e)}addToImports(e){this.guest.addToImports(e),e[`rb-js-abi-host`]={rb_wasm_throw_prohibit_rewind_exception:(e,t)=>{let n=this.instance.exports.memory,r=new TextDecoder().decode(new Uint8Array(n.buffer,e,t));this.throwProhibitRewindException(r)}},Ft(e,this.getImports(e=>e,e=>e),e=>this.instance.exports[e])}throwProhibitRewindException(e){let t=`Ruby APIs that may rewind the VM stack are prohibited under nested VM operation (${e})\nNested VM operation means that the call stack has sandwitched JS frames like JS -> Ruby -> JS -> Ruby caused by something like \`window.rubyVM.eval("JS.global[:rubyVM].eval('Fiber.yield')")\`

Please check your call stack and make sure that you are **not** doing any of the following inside the nested Ruby frame:
  1. Switching fibers (e.g. Fiber#resume, Fiber.yield, and Fiber#transfer)
     Note that \`evalAsync\` JS API switches fibers internally
  2. Raising uncaught exceptions
     Please catch all exceptions inside the nested operation
  3. Calling Continuation APIs
`,n=new Bt(this.guest.rbErrinfo(),this,this.privateObject());throw n.call(`nil?`).toString()===`false`&&(t+=`
`+this.exceptionFormatter.format(n,this,this.privateObject())),new Jt(t)}getImports(e,t){let n=e=>{for(let[t,n]of Object.entries(e))typeof n==`function`&&(e[t]=(...t)=>{let r=this.interfaceState.hasJSFrameAfterRbFrame;this.interfaceState.hasJSFrameAfterRbFrame=!0;let i=Reflect.apply(n,e,t);return this.interfaceState.hasJSFrameAfterRbFrame=r,i});return e};function r(t){return(...n)=>{try{return{tag:`success`,val:t(...n)}}catch(t){if(t instanceof Jt)throw t;return{tag:`failure`,val:e(t)}}}}return n({evalJs:r(t=>e(Function(t)())),isJs:e=>!0,globalThis:()=>{if(typeof globalThis<`u`)return e(globalThis);if(typeof global<`u`)return e(global);if(typeof window<`u`)return e(window);throw Error(`unable to locate global object`)},intToJsNumber:t=>e(t),floatToJsNumber:t=>e(t),stringToJsString:t=>e(t),boolToJsBool:t=>e(t),procToJsFunction:t=>{let n=this.rbValueOfPointer(t);return e((...e)=>n.call(`call`,...e.map(e=>this.wrap(e))).toJS())},rbObjectToJsRbValue:t=>e(this.rbValueOfPointer(t)),jsValueToString:e=>(e=t(e),String(e)),jsValueToInteger(e){return e=t(e),typeof e==`number`?{tag:`as-float`,val:e}:typeof e==`bigint`?{tag:`bignum`,val:BigInt(e).toString(10)+`\0`}:typeof e==`string`?{tag:`bignum`,val:e+`\0`}:e===void 0?{tag:`as-float`,val:0}:{tag:`as-float`,val:Number(e)}},exportJsValueToHost:e=>{this.transport.takeJsValue(t(e))},importJsValueFromHost:()=>e(this.transport.consumeJsValue()),instanceOf:(e,n)=>(n=t(n),typeof n==`function`?t(e)instanceof n:!1),jsValueTypeof(e){return typeof t(e)},jsValueEqual(e,n){return t(e)==t(n)},jsValueStrictlyEqual(e,n){return t(e)===t(n)},reflectApply:r((n,r,i)=>{let a=i.map(e=>t(e));return e(Reflect.apply(t(n),t(r),a))}),reflectConstruct:function(e,t){throw Error(`Function not implemented.`)},reflectDeleteProperty:function(e,t){throw Error(`Function not implemented.`)},reflectGet:r((n,r)=>e(t(n)[r])),reflectGetOwnPropertyDescriptor:function(e,t){throw Error(`Function not implemented.`)},reflectGetPrototypeOf:function(e){throw Error(`Function not implemented.`)},reflectHas:function(e,t){throw Error(`Function not implemented.`)},reflectIsExtensible:function(e){throw Error(`Function not implemented.`)},reflectOwnKeys:function(e){throw Error(`Function not implemented.`)},reflectPreventExtensions:function(e){throw Error(`Function not implemented.`)},reflectSet:r((n,r,i)=>e(Reflect.set(t(n),r,t(i)))),reflectSetPrototypeOf:function(e,t){throw Error(`Function not implemented.`)}})}printVersion(){this.guest.rubyShowVersion()}eval(e){return Kt(this,this.privateObject(),e)}evalAsync(e){let t=this.eval(`require 'js'; JS`);return qt(this,this.privateObject(),n=>{t.call(`__eval_async_rb`,this.wrap(e),n)})}wrap(e){return this.transport.importJsValue(e,this)}privateObject(){return{transport:this.transport,exceptionFormatter:this.exceptionFormatter}}rbValueOfPointer(e){return new Bt(new Pt(e,this.guest),this,this.privateObject())}},zt=class{constructor(){this._takenJsValue=null}takeJsValue(e){this._takenJsValue=e}consumeJsValue(){return this._takenJsValue}exportJsValue(e){return e.call(`__export_to_js`),this._takenJsValue}importJsValue(e,t){return this._takenJsValue=e,t.eval(`require "js"; JS::Object`).call(`__import_from_js`)}},Bt=class e{constructor(e,t,n){this.inner=e,this.vm=t,this.privateObject=n}call(t,...n){let r=n.map(e=>e.inner);return new e(Gt(this.vm,this.privateObject,this.inner,t,r),this.vm,this.privateObject)}callAsync(e,...t){let n=this.vm.eval(`require 'js'; JS`);return qt(this.vm,this.privateObject,r=>{n.call(`__call_async_method`,this,this.vm.wrap(e),r,...t)})}[Symbol.toPrimitive](e){return e===`string`||e===`default`?this.toString():null}toString(){let e=Gt(this.vm,this.privateObject,this.inner,`to_s`,[]);return this.vm.guest.rstringPtr(e)}toJS(){let e=this.vm.eval(`JS`).call(`try_convert`,this);return e.call(`nil?`).toString()===`true`?null:this.privateObject.transport.exportJsValue(e)}},Vt;(function(e){e[e.None=0]=`None`,e[e.Return=1]=`Return`,e[e.Break=2]=`Break`,e[e.Next=3]=`Next`,e[e.Retry=4]=`Retry`,e[e.Redo=5]=`Redo`,e[e.Raise=6]=`Raise`,e[e.Throw=7]=`Throw`,e[e.Fatal=8]=`Fatal`,e[e.Mask=15]=`Mask`})(Vt||={});var Ht=class{constructor(){this.literalsCache=null,this.isFormmatting=!1}format(e,t,n){class r extends Error{}if(this.isFormmatting)throw new r(`Unexpected exception occurred during formatting exception message`);this.isFormmatting=!0;try{return this._format(e,t,n)}finally{this.isFormmatting=!1}}_format(e,t,n){let[r,i,a]=(()=>{if(this.literalsCache==null){let e=[Kt(t,n,`0`),Kt(t,n,`1`),Kt(t,n,`"
"`)];return this.literalsCache=e,e}else return this.literalsCache})(),o,s,c;try{o=e.call(`class`).toString()}catch{o=`unknown`}try{c=e.call(`message`).toString()}catch{c=`unknown`}try{s=e.call(`backtrace`)}catch{return this.formatString(o,c)}if(s.call(`nil?`).toString()===`true`)return this.formatString(o,c);try{let e=s.call(`at`,r),t=s.call(`drop`,i).call(`join`,a);return this.formatString(o,c,[e.toString(),t.toString()])}catch{return this.formatString(o,c)}}formatString(e,t,n){return n?`${n[0]}: ${t} (${e})\n${n[1]}`:`${e}: ${t}`}},Ut=(e,t,n)=>{switch(e&Vt.Mask){case Vt.None:break;case Vt.Return:throw new V(`unexpected return`);case Vt.Next:throw new V(`unexpected next`);case Vt.Break:throw new V(`unexpected break`);case Vt.Redo:throw new V(`unexpected redo`);case Vt.Retry:throw new V(`retry outside of rescue clause`);case Vt.Throw:throw new V(`unexpected throw`);case Vt.Raise:case Vt.Fatal:let r=new Bt(t.guest.rbErrinfo(),t,n);throw r.call(`nil?`).toString()===`true`?new V(`no exception object`):(t.guest.rbClearErrinfo(),new V(n.exceptionFormatter.format(r,t,n)));default:throw new V(`unknown error tag: ${e}`)}};function Wt(e,t){try{return t()}catch(t){if(t instanceof V)throw t;try{e.guest.rbVmBugreport()}catch(e){console.error(`Tried to report internal Ruby VM state but failed: `,e)}if(t instanceof WebAssembly.RuntimeError&&t.message===`unreachable`){let e=new V(`Something went wrong in Ruby VM: ${t}`);throw e.stack=t.stack,e}else throw t}}var Gt=(e,t,n,r,i)=>{let a=e.guest.rbIntern(r+`\0`);return Wt(e,()=>{let[r,o]=e.guest.rbFuncallvProtect(n,a,i);return Ut(o,e,t),r})},Kt=(e,t,n)=>Wt(e,()=>{let[r,i]=e.guest.rbEvalStringProtect(n+`\0`);return Ut(i,e,t),new Bt(r,e,t)});function qt(e,t,n){return new Promise((r,i)=>{n(e.wrap({resolve:r,reject:n=>{i(new V(t.exceptionFormatter.format(n,e,t)))}}))})}var V=class extends Error{constructor(e){super(e)}},Jt=class extends V{constructor(e){super(`Ruby Fatal Error: `+e)}},Yt=async(e,t={})=>{let n=new ht([],Object.entries(t.env??{}).map(([e,t])=>`${e}=${t}`),[new vt(new xt([])),new vt(new xt([])),new vt(new xt([])),new bt(`/`,new Map)],{debug:!1}),r=t.consolePrint??!0?wt():void 0,{vm:i,instance:a}=await Rt.instantiateModule({module:e,wasip1:n,addToImports:e=>{r?.addToImports(e)},setMemory:e=>{r?.setMemory(e)}});return{vm:i,wasi:n,instance:a}},Xt={title:``,screen:{width:544,height:416},input:{virtualGamepad:`none`}},Zt=()=>({title:Xt.title,screen:{...Xt.screen},input:{...Xt.input}}),Qt=e=>e.replace(/^\.\//,``).replace(/^\/+/,``).replace(/\/+$/,``),$t=(e,t,n=!0)=>{let r=e.normalize(`NFC`).replace(/\\/g,`/`).replace(/^\.\//,``).replace(/^\/+/,``),i=`${t.toLowerCase()}/`;return r.toLowerCase().startsWith(i)&&(r=r.slice(t.length+1)),n&&(r=r.replace(/\.[^/.]+$/,``)),r},en=e=>e.normalize(`NFC`).replace(/\.[^/.]+$/,``).toLowerCase(),tn=e=>{let t=e.match(/\.([^./]+)$/);return t?t[1].toLowerCase():``},nn=e=>String(e).trim().replace(/\s+/g,` `).toLowerCase(),rn=(e,t={})=>{let n=Qt(e);return{version:1,id:t.id??`local:${n}`,metadata:t.metadata?sn(t.metadata):Zt(),resources:{},packs:{},fonts:[]}},an=e=>({version:e.version,id:e.id,metadata:sn(e.metadata),...e.readme?{readme:{data:on(e.readme.data),encoding:e.readme.encoding,extension:e.readme.extension,logicalPath:e.readme.logicalPath}}:{},resources:Object.fromEntries(Object.entries(e.resources).map(([e,t])=>[e,t.map(e=>({type:e.type,extension:e.extension,logicalPath:e.logicalPath,data:on(e.data)}))])),packs:Object.fromEntries(Object.entries(e.packs).map(([e,t])=>[e,{path:t.path,...t.byteLength===void 0?{}:{byteLength:t.byteLength},...t.sha256?{sha256:t.sha256}:{}}])),fonts:e.fonts.map(e=>({data:on(e.data),extension:e.extension,families:[...e.families],style:e.style,weight:e.weight}))}),on=e=>e.kind===`pack`?{kind:e.kind,packId:e.packId,offset:e.offset,length:e.length,...e.contentType?{contentType:e.contentType}:{},...e.byteLength===void 0?{}:{byteLength:e.byteLength},...e.sha256?{sha256:e.sha256}:{}}:{kind:e.kind,path:e.path,...e.contentType?{contentType:e.contentType}:{},...e.byteLength===void 0?{}:{byteLength:e.byteLength},...e.sha256?{sha256:e.sha256}:{}},sn=e=>({title:e.title,screen:{...e.screen},input:{...e.input}}),cn=/^[\p{L}\p{N}]$/u,ln=/^[\p{L}\p{N}\p{M}._:-]$/u,un=e=>e.normalize(`NFC`),dn=e=>{if(e!==un(e))return!1;let t=Array.from(e);if(t.length===0||t.length>128)return!1;let n=t[0];return!n||!cn.test(n)?!1:t.slice(1).every(e=>ln.test(e))},fn=[...[`image`,`audio`,`movie`,`font`],`data`,`file`],pn=[`normal`,`normal-swap`,`simple`,`none`],mn=[`utf-8`,`shift_jis`,`utf-16le`,`utf-16be`],hn=e=>typeof e==`object`&&!!e&&!Array.isArray(e),gn=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),H=(e,t)=>e?`${e}.${String(t)}`:String(t),U=(e,t,n)=>{e.issues.push({path:t,message:t?`${t}: ${n}`:n})},_n=e=>Object.assign(Error(e[0]?.message??`Invalid game manifest JSON`),{name:`GameManifestJsonParseError`,issues:e}),vn=(e,t,n)=>{let r=jn(e,t,n);return{version:Mn(e,r.version,H(n,`version`)),id:Pn(e,r.id,H(n,`id`)),metadata:bn(e,r.metadata,H(n,`metadata`)),...r.readme===void 0?{}:{readme:yn(e,r.readme,`readme`)},resources:Cn(e,r.resources,H(n,`resources`)),packs:Dn(e,r.packs,H(n,`packs`)),fonts:kn(e,r.fonts,H(n,`fonts`))}},yn=(e,t,n)=>{let r=jn(e,t,n);return{data:En(e,r,n),encoding:Vn(e,r.encoding,mn,H(n,`encoding`)),extension:W(e,r.extension,H(n,`extension`)),logicalPath:W(e,r.logicalPath,H(n,`logicalPath`))}},bn=(e,t,n)=>{let r=jn(e,t,n);return{title:W(e,r.title,H(n,`title`)),screen:xn(e,r.screen,H(n,`screen`)),input:Sn(e,r.input,H(n,`input`))}},xn=(e,t,n)=>{let r=jn(e,t,n);return{width:Ln(e,r.width,H(n,`width`)),height:Ln(e,r.height,H(n,`height`))}},Sn=(e,t,n)=>({virtualGamepad:Vn(e,jn(e,t,n).virtualGamepad,pn,H(n,`virtualGamepad`))}),Cn=(e,t,n)=>{if(typeof t!=`object`||!t)return U(e,n,`Expected an object`),{};let r={};for(let[i,a]of Object.entries(t))r[i]=wn(e,a,H(n,i));return r},wn=(e,t,n)=>Array.isArray(t)?t.map((t,r)=>Tn(e,t,H(n,r))):(U(e,n,`Expected an array`),[]),Tn=(e,t,n)=>{let r=jn(e,t,n);return{type:Bn(e,r.type,H(n,`type`)),extension:W(e,r.extension,H(n,`extension`)),logicalPath:W(e,r.logicalPath,H(n,`logicalPath`)),data:En(e,r,n)}},En=(e,t,n)=>{let r=jn(e,t.data,H(n,`data`)),i=Nn(e,r.kind,H(n,`data.kind`)),a=i===`pack`?{kind:i,packId:W(e,r.packId,H(n,`data.packId`)),offset:Rn(e,r.offset,H(n,`data.offset`)),length:Rn(e,r.length,H(n,`data.length`))}:{kind:i,path:W(e,r.path,H(n,`data.path`))};return gn(r,`contentType`)&&(a.contentType=Fn(e,r.contentType,H(n,`data.contentType`))),gn(r,`byteLength`)&&(a.byteLength=zn(e,r.byteLength,H(n,`data.byteLength`))),gn(r,`sha256`)&&(a.sha256=Fn(e,r.sha256,H(n,`data.sha256`))),a},Dn=(e,t,n)=>{if(typeof t!=`object`||!t)return U(e,n,`Expected an object`),{};let r={};for(let[i,a]of Object.entries(t))r[i]=On(e,a,H(n,i));return r},On=(e,t,n)=>{let r=jn(e,t,n),i={path:W(e,r.path,H(n,`path`))};return gn(r,`byteLength`)&&(i.byteLength=zn(e,r.byteLength,H(n,`byteLength`))),gn(r,`sha256`)&&(i.sha256=Fn(e,r.sha256,H(n,`sha256`))),i},kn=(e,t,n)=>Array.isArray(t)?t.map((t,r)=>An(e,t,H(n,r))):(U(e,n,`Expected an array`),[]),An=(e,t,n)=>{let r=jn(e,t,n);return{data:En(e,r,n),extension:W(e,r.extension,H(n,`extension`)),families:In(e,r.families,H(n,`families`)),style:W(e,r.style,H(n,`style`)),weight:W(e,r.weight,H(n,`weight`))}},jn=(e,t,n)=>hn(t)?t:(U(e,n,`Expected an object`),{}),Mn=(e,t,n)=>(t!==1&&U(e,n,`Expected 1`),1),Nn=(e,t,n)=>t===`file`||t===`pack`?t:(U(e,n,`Expected one of: file, pack`),`file`),Pn=(e,t,n)=>typeof t==`string`?(dn(t)||U(e,n,`Expected a valid game id`),t):(U(e,n,`Expected a string`),``),W=(e,t,n)=>typeof t==`string`?t:(U(e,n,`Expected a string`),``),Fn=(e,t,n)=>{if(t!==void 0)return W(e,t,n)},In=(e,t,n)=>Array.isArray(t)?t.map((t,r)=>W(e,t,H(n,r))):(U(e,n,`Expected an array`),[]),Ln=(e,t,n)=>typeof t==`number`?(Number.isInteger(t)||U(e,n,`Expected an integer`),t<1&&U(e,n,`Expected a number greater than or equal to 1`),t):(U(e,n,`Expected a number`),1),Rn=(e,t,n)=>typeof t==`number`?(Number.isInteger(t)||U(e,n,`Expected an integer`),t<0&&U(e,n,`Expected a number greater than or equal to 0`),t):(U(e,n,`Expected a number`),0),zn=(e,t,n)=>{if(t!==void 0)return Rn(e,t,n)},Bn=(e,t,n)=>Vn(e,t,fn,n),Vn=(e,t,n,r)=>typeof t==`string`&&n.includes(t)?t:(U(e,r,`Expected one of: ${n.join(`, `)}`),n[0]);function Hn(e){let t=Un(e);if(t.ok)return t.manifest;throw _n(t.error)}function Un(e){let t={issues:[]},n=vn(t,e,``);return t.issues.length>0?{ok:!1,error:t.issues}:{ok:!0,manifest:n}}var Wn=(e,t)=>{let n=$t(t,e,!1);return encodeURI(`${e}/${n}`)},Gn=(e,t,n,r)=>Yn(e,t,n,{expectedType:r,fallbackOnExtensionMismatch:!0}),Kn=(e,t,n)=>Yn(e,t,n,{fallbackOnExtensionMismatch:!1}),qn=(e,t)=>{let n=Jn(e),r=[],i=new Set;for(let e of t){let t=n.get(nn(e));!t||i.has(t)||(r.push(t),i.add(t))}if(r.length>0)return r;let a=e[0]?.families.find(e=>e.trim());return a?[a]:[]},Jn=e=>{let t=new Map;for(let n of e)for(let e of n.families){let n=e.trim();if(!n)continue;let r=nn(n);t.has(r)||t.set(r,n)}return t},Yn=(e,t,n,r)=>{let i=$t(n,t,!1),a=tn(i),o=en(i),s=e.resources[o]??[],c=r.expectedType?s.filter(e=>e.type===r.expectedType):s;if(c.length===0)return null;if(a){let e=c.find(e=>e.extension===a);if(e)return Xn(e);if(!r.fallbackOnExtensionMismatch)return null}return Xn(c[0])},Xn=e=>({type:e.type,extension:e.extension,logicalPath:e.logicalPath,data:{...e.data}}),Zn=class e{static fromJson(t,n){return new e(t,Hn(n))}static fromManifestJson(t,n){return new e(t,n)}static empty(t){return new e(t,rn(t))}_json;_gameDir;_fontFamiliesByLookupKey;constructor(e,t){this._gameDir=Qt(e),this._json=an(t),this._fontFamiliesByLookupKey=Jn(t.fonts)}get gameDir(){return this._gameDir}get id(){return this._json.id}get fonts(){return this._json.fonts}get packs(){return{...this._json.packs}}get metadata(){return this._json.metadata}get readme(){let e=this._json.readme;if(e)return{...e,data:{...e.data}}}get screen(){return this._json.metadata.screen}toJson(){return an(this._json)}fontExists(e){return this._fontFamiliesByLookupKey.has(nn(e))}resolveFontFamilies(e){return qn(this._json.fonts,e)}resolveAsset(e,t){return Gn(this._json,this._gameDir,e,t)}resolveResource(e){return Kn(this._json,this._gameDir,e)}getPack(e){let t=this._json.packs[e];return t?{...t}:null}},Qn=``+new URL(`ruby_stdlib-B05E1SQ0.wasm`,import.meta.url).href,$n=500,er=class{_presenter=null;_pendingWaits=new Map;_showDelayMs=$n;_sessionStartedAt=null;_showTimer=null;_visible=!1;_presented=!1;setPresenter(e){this._presenter=e,this._refreshPresentation()}setShowDelayMs(e){this._showDelayMs=Math.max(0,Math.trunc(Number(e)||0))}async track(e,t){let n=this._beginWait(e),r=!1;try{return await t()}catch(e){throw r=!0,e}finally{this._endWait(n,r)}}completeIfIdle(){this._pendingWaits.size>0||this._clearSession()}_beginWait(e){let t=Symbol(`blocking-resource-wait`);return this._pendingWaits.set(t,{context:e}),this._sessionStartedAt??(this._sessionStartedAt=Date.now(),this._showTimer=globalThis.setTimeout(()=>{this._showTimer=null,this._sessionStartedAt!=null&&(this._visible=!0,this._refreshPresentation())},this._showDelayMs)),this._refreshPresentation(),t}_endWait(e,t){if(this._pendingWaits.delete(e),t){this._clearSession();return}this._refreshPresentation()}_clearSession(){this._sessionStartedAt==null&&this._showTimer==null&&!this._visible&&!this._presented&&this._pendingWaits.size===0||(this._showTimer!=null&&(globalThis.clearTimeout(this._showTimer),this._showTimer=null),this._sessionStartedAt=null,this._visible=!1,this._hidePresentation())}_hidePresentation(){this._presented&&(this._presented=!1,this._presenter?.hideBlockingResourceWait())}_refreshPresentation(){if(!this._presenter)return;if(!this._visible){this._hidePresentation();return}let e=[...this._pendingWaits.values()],t=e.at(-1);!t||this._sessionStartedAt==null||(this._presented=!0,this._presenter.showBlockingResourceWait({kind:t.context.kind,label:t.context.label??``,elapsedMs:Date.now()-this._sessionStartedAt,activeCount:e.length}))}},tr=new er,nr=e=>{tr.setPresenter(e)},rr=(e,t)=>tr.track(e,t),ir=()=>{tr.completeIfIdle()},ar=class{_metricsByFamily=new Map;register(e,t){let n=mr(e);for(let r of e.families){let e=r.trim();if(!e)continue;let i=nn(e),a=this._metricsByFamily.get(i)??new Map;a.set(n,t),this._metricsByFamily.set(i,a)}}resolve(e,t={}){let n=mr({style:`normal`,weight:`400`});for(let r of e){let e=this._metricsByFamily.get(nn(r));if(!e)continue;let i=pr(e,t)??e.get(n)??e.values().next().value;if(i)return i}return or}},or={cssSizeRatio:.75,lineHeightRatio:4/3,ascentRatio:1,descentRatio:1/3},sr=e=>{let t=new DataView(e),n=lr(t);if(n==null)return null;let r=ur(t,n),i=r.get(`head`),a=r.get(`hhea`);if(!i||!a||i.length<20||a.length<10)return null;let o=t.getUint16(i.offset+18,!1);if(!Number.isFinite(o)||o<=0)return null;let s=t.getInt16(a.offset+4,!1),c=t.getInt16(a.offset+6,!1),l=t.getInt16(a.offset+8,!1),u=r.get(`OS/2`),d=(u&&u.length>=78?{ascender:t.getUint16(u.offset+74,!1),descender:-t.getUint16(u.offset+76,!1),lineGap:0}:null)??{ascender:s,descender:c,lineGap:l},f=Math.max(0,d.ascender),p=Math.max(0,-d.descender),m=Math.max(0,d.lineGap),h=f+p+m;if(h<=0)return null;let g=h/o;return{cssSizeRatio:fr(1/g,.5,1.2),lineHeightRatio:g,ascentRatio:f/o,descentRatio:p/o}},cr=1024,lr=e=>{if(e.byteLength<12)return null;let t=dr(e,0);return t===`ttcf`?e.getUint32(8,!1)<=0||e.byteLength<16?null:e.getUint32(12,!1):t===`\0\0\0`||t===`OTTO`||t===`true`||t===`typ1`?0:null},ur=(e,t)=>{let n=new Map;if(t<0||t+12>e.byteLength)return n;let r=e.getUint16(t+4,!1),i=Math.floor((e.byteLength-t-12)/16),a=Math.min(r,i,cr);for(let r=0;r<a;r+=1){let i=t+12+r*16,a=dr(e,i),o=e.getUint32(i+8,!1),s=e.getUint32(i+12,!1);o+s<=e.byteLength&&n.set(a,{offset:o,length:s})}return n},dr=(e,t)=>String.fromCharCode(e.getUint8(t),e.getUint8(t+1),e.getUint8(t+2),e.getUint8(t+3)),fr=(e,t,n)=>Math.min(Math.max(e,t),n),pr=(e,t)=>{let n=hr(t.style),r=gr(t.weight),i=e.get(mr({style:n,weight:r}));if(i)return i;let a=Number(r),o=null,s=1/0;for(let[t,r]of e){let[e,i]=t.split(`|`);if(e!==n)continue;let c=Number.isFinite(a)?Math.abs(a-Number(i)):1/0;(!o||c<s)&&(o=r,s=c)}return o},mr=e=>`${hr(e.style)}|${gr(e.weight)}`,hr=e=>{let t=e?.trim().toLowerCase();return t===`italic`||t===`oblique`?t:`normal`},gr=e=>{let t=e?.trim().toLowerCase();if(!t||t===`normal`)return`400`;if(t===`bold`)return`700`;let n=Number(t);return Number.isFinite(n)?String(Math.min(Math.max(Math.round(n),1),1e3)):t},_r=e=>/^(mid|midi)$/i.test(e??``),vr=e=>typeof e==`function`?e():e===!0,G=e=>Math.max(0,Math.min(255,Math.trunc(Number(e)||0))),yr=(e,t,n)=>Math.max(t,Math.min(n,Math.trunc(Number(e)||0))),br=e=>Math.max(0,Math.min(1,e)),xr=e=>{let t=Sr(e),n=Cr(e),r=wr(n,`LOOPSTART`),i=wr(n,`LOOPLENGTH`);return!t||r==null||i==null||i<=0?null:{loopStart:r,loopLength:i,sampleRate:t}},Sr=e=>{let t=Er(e,Tr(1));return t<0||t+16>e.length?null:Dr(e,t+12)},Cr=e=>{let t=Er(e,Tr(3));if(t<0)return new Map;let n=new TextDecoder,r=new Map,i=t+7,a=Dr(e,i);if(a==null)return r;i+=4+a;let o=Dr(e,i);if(o==null)return r;i+=4;for(let t=0;t<o;t+=1){let t=Dr(e,i);if(t==null||(i+=4,i+t>e.length))break;let a=n.decode(e.slice(i,i+t)),o=a.indexOf(`=`);o>0&&r.set(a.slice(0,o).toUpperCase(),a.slice(o+1)),i+=t}return r},wr=(e,t)=>{let n=e.get(t);if(n==null)return null;let r=Number.parseInt(n,10);return Number.isFinite(r)&&r>=0?r:null},Tr=e=>new Uint8Array([e,118,111,114,98,105,115]),Er=(e,t)=>{for(let n=0;n<=e.length-t.length;n+=1){let r=!0;for(let i=0;i<t.length;i+=1)if(e[n+i]!==t[i]){r=!1;break}if(r)return n}return-1},Dr=(e,t)=>t<0||t+4>e.length?null:(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0,Or=2e5,kr=2e5,Ar=1e3,jr=new WeakMap,Mr=(e,t,n,r)=>{let i=jr.get(e);i||(i=new Map,jr.set(e,i));let a=i.get(t.key);if(!a){a={latest:null,listeners:new Set,promise:Promise.resolve(null)};let r=a;a.promise=Nr(e,t,n,e=>{r.latest=e,r.listeners.forEach(t=>t(e))}),a.promise.catch(()=>i.delete(t.key)),i.set(t.key,a)}let o=e=>{(n||e.complete)&&r(e)};return a.listeners.add(o),a.latest&&(n||a.latest.complete)&&r(a.latest),{promise:a.promise,unsubscribe:()=>a.listeners.delete(o)}},Nr=async(e,t,n,r)=>{if(n&&t.loadChunks)return Pr(e,t,r);let i=await t.loadBytes(),a=await Fr(e,new Uint8Array(i),!0);return r(a),a},Pr=async(e,t,n)=>{let r=[],i=0,a=0,o=0,s=null,c=Promise.resolve(),l=t=>{let l=Ir(r,i);a=i,o=performance.now(),c=c.then(async()=>{try{let r=await Fr(e,l,t);t&&(s=r),n(r)}catch(e){if(t)throw e}})};if(await t.loadChunks(e=>{r.push(e),i+=e.byteLength;let t=performance.now(),n=i>=Or,s=i-a>=kr,c=a===0||t-o>=Ar;n&&s&&c&&l(!1)}),l(!0),await c,!s)throw Error(`audio decode produced no buffer: ${t.label}`);return s},Fr=async(e,t,n)=>{let r=xr(t),i=new Uint8Array(t.byteLength);return i.set(t),{buffer:await e.decodeAudioData(i.buffer),complete:n,loopMetadata:r}},Ir=(e,t)=>{let n=new Uint8Array(t),r=0;for(let t of e)n.set(t,r),r+=t.byteLength;return n},Lr=class{_audioContext;_sourceKey=null;_buffer=null;_bufferComplete=!1;_sourceNode=null;_gainNode=null;_loopStart=0;_loopEnd=0;_startedAt=0;_offset=0;_volume=1;_playbackRate=1;_paused=!0;_loop=!0;_onEnded=null;_fadeTimer=null;_requestId=0;constructor(e){this._audioContext=e}get sourceKey(){return this._sourceKey}get paused(){return this._paused}debugState(){return{buffer:this._buffer,bufferComplete:this._bufferComplete,gainNode:this._gainNode}}async play(e,t,n,r,i={}){let a=this._sourceKey===e.key&&this._buffer!=null,o=r!=null&&r>0;if(this._loop=i.loop??!0,this._onEnded=i.onEnded??null,this._clearFade(),a&&!o){this._offset=this.positionSeconds(),this._startedAt=this._audioContext().currentTime,this._setVolumeAndPitch(t,n);let e=Rr(i.deferStart);(!e||!this._sourceNode)&&(this._paused=e),this._applyLiveSettings(),!this._paused&&!this._sourceNode&&this._startSource(this._offset);return}this._setVolumeAndPitch(t,n);let s=++this._requestId,c=this._audioContext(),l=!1,u=!1,d=Mr(c,e,i.progressive===!0,t=>{if(s!==this._requestId)return;let n=l?this._timelinePositionSeconds():r??0,a=l?this._paused:Rr(i.deferStart);this._stopSource(),this._sourceKey=e.key,this._buffer=t.buffer,this._bufferComplete=t.complete,this._applyLoopMetadata(t),this._offset=n,this._paused=a,l=!0,this._paused||(u||=(i.beforeStart?.(),!0),this._startSource(this._offset))});try{await d.promise}catch(t){if(s!==this._requestId)return;throw this._sourceKey===e.key&&this.stop(),t}finally{d.unsubscribe()}}stop(){this._requestId+=1,this._clearFade(),this._stopSource(),this._disconnectGain(),this._sourceKey=null,this._buffer=null,this._bufferComplete=!1,this._offset=0,this._loopStart=0,this._loopEnd=0,this._paused=!0,this._onEnded=null}cancelPendingPlay(){this._requestId++}fade(e){this._clearFade();let t=Math.max(0,Number(e)||0);if(t<=0){this.stop();return}let n=this._gainNode?.gain;if(!n)return;let r=this._audioContext().currentTime;n.cancelScheduledValues(r),n.setValueAtTime(n.value,r),n.linearRampToValueAtTime(0,r+t/1e3),this._fadeTimer=window.setTimeout(()=>this.stop(),t)}pause(){return this._paused?!1:(this._offset=this.positionSeconds(),this._stopSource(),this._paused=!0,!0)}resume(){!this._paused||!this._buffer||(this._paused=!1,this._startSource(this._offset))}positionSeconds(){return this._buffer?this._normalizeOffset(this._timelinePositionSeconds()):0}_setVolumeAndPitch(e,t){this._volume=br((Number(e)||0)/100),this._playbackRate=Math.max(.5,Math.min(4,(Number(t)||100)/100))}_applyLiveSettings(){this._gainNode&&(this._gainNode.gain.value=this._volume),this._sourceNode&&(this._sourceNode.playbackRate.value=this._playbackRate)}_startSource(e){let t=this._buffer;if(!t)return;this._stopSource();let n=this._audioContext(),r=n.createBufferSource(),i=this._gainNode??n.createGain();r.buffer=t,r.loop=this._loop&&this._bufferComplete,r.loopStart=this._loopStart,r.loopEnd=this._loopEnd,r.playbackRate.value=this._playbackRate,r.onended=()=>{if(!(this._sourceNode!==r||this._paused)){if(this._loop&&!this._bufferComplete){r.onended=null,r.disconnect(),this._sourceNode=null;return}this._loop||(this._offset=this.positionSeconds(),r.onended=null,r.disconnect(),this._sourceNode=null,this._paused=!0,this._onEnded?.())}},i.gain.value=this._volume,r.connect(i),i.connect(n.destination),r.start(0,this._normalizeOffset(e)),this._sourceNode=r,this._gainNode=i,this._startedAt=n.currentTime}_stopSource(){if(this._sourceNode){try{this._sourceNode.onended=null,this._sourceNode.stop()}catch{}this._sourceNode.disconnect(),this._sourceNode=null}}_disconnectGain(){this._gainNode&&=(this._gainNode.disconnect(),null)}_clearFade(){if(this._fadeTimer==null)return;window.clearTimeout(this._fadeTimer),this._fadeTimer=null;let e=this._gainNode?.gain;e&&e.cancelScheduledValues(this._audioContext().currentTime)}_applyLoopMetadata(e){if(this._loopStart=0,this._loopEnd=e.buffer.duration,!this._loop||!e.complete||!e.loopMetadata)return;let t=e.loopMetadata.loopStart/e.loopMetadata.sampleRate,n=(e.loopMetadata.loopStart+e.loopMetadata.loopLength)/e.loopMetadata.sampleRate;n>t&&n<=e.buffer.duration&&(this._loopStart=t,this._loopEnd=n)}_timelinePositionSeconds(){if(this._paused)return this._offset;let e=(this._audioContext().currentTime-this._startedAt)*this._playbackRate;return this._offset+e}_normalizeOffset(e){if(!this._buffer)return 0;let t=this._buffer.duration,n=Math.max(0,Number(e)||0);return this._loopEnd>this._loopStart&&n>=this._loopEnd?this._loopStart+(n-this._loopStart)%(this._loopEnd-this._loopStart):Math.min(n,t)}},Rr=e=>typeof e==`function`?e():e===!0,zr=class extends Error{url;status;constructor(e,t){super(e),this.name=`RetryableResourceLoadError`,this.url=t.url,this.status=t.status??null}},Br=class{_presenter=null;_pendingFailures=new Map;_retryResolvers=new Set;setPresenter(e){this._presenter=e,this._refreshPresentation()}async load(e,t){let n=1;for(;;)try{return await t()}catch(t){if(!(t instanceof zr))throw t;await this._waitForRetry(e,t,n),n+=1}}retry(){let e=[...this._retryResolvers];this._retryResolvers.clear(),this._pendingFailures.clear(),this._presenter?.hideResourceLoadError(),e.forEach(e=>e())}async _waitForRetry(e,t,n){let r=Symbol(`resource-load-failure`);this._pendingFailures.set(r,{context:e,error:t,attempt:n}),this._refreshPresentation();try{await new Promise(e=>{this._retryResolvers.add(e)})}finally{this._pendingFailures.delete(r),this._refreshPresentation()}}_refreshPresentation(){if(!this._presenter)return;let e=[...this._pendingFailures.values()].at(-1);if(!e){this._presenter.hideResourceLoadError();return}this._presenter.showResourceLoadError({kind:e.context.kind,url:e.error.url||e.context.url,label:e.context.label??e.context.url,attempt:e.attempt,status:e.error.status,causeMessage:e.error.message,retry:()=>this.retry()})}},Vr=new Br,Hr=e=>{Vr.setPresenter(e)},Ur={fetch:(e,t)=>fetch(e,t)},Wr=Ur;function Gr(e){if(e===null){Wr=Ur;return}Xr(e),Wr=e}function Kr(e,t,n){return Yr(e,t,n).then(e=>e.text())}function qr(e,t,n){return Yr(e,t,n).then(e=>e.arrayBuffer())}function Jr(e,t,n){return Yr(e,t,n).then(e=>e.blob())}function Yr(e,t,n){let r=$r(e),i={kind:n?.kind??`data`,url:n?.url??r,label:n?.label},a=async()=>{let n;try{n=await Wr.fetch(e,t,i)}catch(e){throw new zr(`network request failed: ${e instanceof Error?e.message:String(e)}`,{url:r})}return Zr(n,r)};return n?.retryOnFailure===!1?a():Vr.load(i,a)}function Xr(e){if(typeof e.fetch!=`function`)throw TypeError(`invalid resource fetch adapter: missing fetch`)}function Zr(e,t){if(e.ok)return e;let n=e.statusText?` ${e.statusText}`:``,r=e.url?` for ${e.url}`:``,i=`fetch failed with HTTP ${e.status}${n}${r}`;throw Qr(e.status)?new zr(i,{url:e.url||t,status:e.status}):Error(i)}function Qr(e){return e===408||e===429||e>=500&&e<=599}function $r(e){return typeof e==`string`?e:e instanceof URL?e.href:typeof Request<`u`&&e instanceof Request?e.url:`unknown request`}var ei=`modulepreload`,ti=function(e,t){return new URL(e,t).href},ni={},ri=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=ti(t,n),t in ni)return;ni[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:ei,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ii=new WeakMap,ai=()=>document.querySelector(`meta[name="vxace-midi"]`)?.getAttribute(`content`)!==`disabled`,oi=e=>{if(!ai())return Promise.reject(Error(`MIDI playback was omitted from this distribution`));let t=ii.get(e);if(t)return t;let n=new URL(`features/midi/`,document.baseURI).href,r=new URL(`entry.js`,n).href,i=document.querySelector(`meta[name="vxace-midi-gain"]`)?.getAttribute(`content`)?.trim(),a=Promise.all([ri(()=>import(r),[],import.meta.url),qr(new URL(`FluidR3Mono_GM.sf3`,n),void 0,{kind:`data`,label:`FluidR3Mono_GM.sf3`,retryOnFailure:!1})]).then(([t,r])=>t.initialize(e,r,n,i?Number(i):void 0));return ii.set(e,a),a.catch(()=>ii.delete(e)),a},si=class{track;pending=null;midi=!1;requestId=0;constructor(e){this.context=e,this.track=new Lr(e)}get sourceKey(){return this.track.sourceKey}get paused(){return this.track.paused}debugState(){return this.track.debugState()}positionSeconds(){return this.midi?0:this.track.positionSeconds()}pause(){return this.track.pause()}resume(){this.track.resume()}fade(e){this.cancelPendingPlay(),this.track.fade(e)}async play(e,t,n,r,i={}){let a=++this.requestId;this.pending?.stop(),this.pending=null;let o=_r(e.extension);if(o===this.midi)return this.track.play(e,t,n,o?null:r,i);this.track.cancelPendingPlay();let s=o?(await oi(this.context())).createTrack():new Lr(this.context);if(a!==this.requestId){s.stop();return}this.pending=s;let c=()=>{a===this.requestId&&this.track!==s&&(this.track.stop(),this.track=s,this.midi=o,this.pending=null)};try{await s.play(e,t,n,o?null:r,{...i,deferStart:()=>{let e=vr(i.deferStart);return c(),e}})}catch(e){if(s.stop(),a!==this.requestId)return;throw this.pending=null,e}}stop(){this.requestId++,this.pending?.stop(),this.pending=null,this.track.stop()}cancelPendingPlay(){this.requestId++,this.pending?.stop(),this.pending=null,this.track.cancelPendingPlay()}},ci=class{_audioContext=null;_music;_me;_soundEffects=new Set;_meBlocksBgm=!1;_resumeBgmAfterMe=!1;_meResumeTimer=null;_meRequestId=0;constructor(e,t){this._assetProvider=e,this._onPlaybackFailure=t,this._music={bgm:new si(()=>this._getAudioContext()),bgs:new si(()=>this._getAudioContext())},this._me=new si(()=>this._getAudioContext())}setupMidi(){ai()&&Object.values(this._assetProvider.manifest.toJson().resources).some(e=>e.some(e=>_r(e.extension)))&&oi(this._getAudioContext()).catch(e=>this._onPlaybackFailure(`bgm`,`setup_midi`,e))}play(e,t,n=100,r=100,i=null){let a=this._assetProvider.resolveAsset(t,`audio`);if(!a)return;if(_r(a.extension)&&(e===`bgs`||e===`se`)){this._onPlaybackFailure(e,t,Error(`RGSS3 MIDI playback is supported for BGM and ME only`));return}let o=this._assetProvider.createAudioSource(a,{kind:`data`,label:t,retryOnFailure:!1}),s=li(i);if(e===`bgm`||e===`bgs`){this._music[e].play(o,n,r,s,{deferStart:()=>{let t=e===`bgm`&&this._isMePlaying();return t&&(this._resumeBgmAfterMe=!0),t},loop:!0,progressive:!0}).then(()=>{e!==`bgm`||this._isMePlaying()||!this._music.bgm.paused||(this._resumeBgmAfterMe=!1,this._music.bgm.resume())}).catch(n=>this._onPlaybackFailure(e,t,n));return}if(e===`se`){let i=new Lr(()=>this._getAudioContext());this._soundEffects.add(i),i.play(o,n,r,s,{loop:!1,onEnded:()=>{i.stop(),this._soundEffects.delete(i)}}).catch(n=>{this._soundEffects.delete(i),this._onPlaybackFailure(e,t,n)});return}let c=++this._meRequestId;this._meBlocksBgm=!0,this._clearMeResumeTimer(),this._me.stop(),this._me.play(o,n,r,s,{beforeStart:()=>{c===this._meRequestId&&this._pauseBgmForMe()},loop:!1,onEnded:()=>{c===this._meRequestId&&this._finishMePlayback()}}).catch(n=>{c===this._meRequestId&&(this._finishMePlayback(),this._onPlaybackFailure(e,t,n))})}stop(e){if(e===`se`){this._soundEffects.forEach(e=>e.stop()),this._soundEffects.clear();return}if(e===`bgm`||e===`bgs`){this._music[e].stop(),e===`bgm`&&(this._resumeBgmAfterMe=!1);return}this._meRequestId++,this._me.stop(),this._clearMeResumeTimer(),this._meBlocksBgm=!1,this._resumeBgmAfterMeIfNeeded()}fade(e,t){if(e===`bgm`||e===`bgs`){this._music[e].fade(t);return}this._me.fade(t),this._clearMeResumeTimer(),this._meResumeTimer=window.setTimeout(()=>{this._meResumeTimer=null,this._finishMePlayback()},Math.max(0,Number(t)||0))}position(e){return ui(e===`bgm`||e===`bgs`?this._music[e].positionSeconds():this._me.positionSeconds())}suspend(){this._audioContext?.suspend().catch(()=>void 0)}resume(){this._audioContext?.state===`suspended`&&this._audioContext.resume().catch(()=>void 0)}debugState(){return{music:this._music,me:this._me,soundEffects:this._soundEffects}}_pauseBgmForMe(){this._music.bgm.pause()&&(this._resumeBgmAfterMe=!0)}_isMePlaying(){return this._meBlocksBgm||!this._me.paused}_finishMePlayback(){this._me.stop(),this._clearMeResumeTimer(),this._meBlocksBgm=!1,this._resumeBgmAfterMeIfNeeded()}_resumeBgmAfterMeIfNeeded(){this._resumeBgmAfterMe&&(this._resumeBgmAfterMe=!1,this._music.bgm.resume())}_clearMeResumeTimer(){this._meResumeTimer!=null&&(window.clearTimeout(this._meResumeTimer),this._meResumeTimer=null)}_getAudioContext(){return this._audioContext||=new window.AudioContext,this._audioContext}},li=e=>e==null?null:Math.max(0,(Number(e)||0)/1e3),ui=e=>Math.max(0,(Number(e)||0)*1e3),di=class{_state=null;begin(){this._state=pi()}end(){let e=this._state;if(!e)throw Error(`bridge metrics are not active`);return this._state=null,_i(e)}trace(e,t){let n=this._state;if(!n)return t();let r=performance.now();try{return t()}finally{hi(n,gi(e),performance.now()-r)}}async traceAsync(e,t){let n=this._state;if(!n)return t();let r=performance.now();try{return await t()}finally{hi(n,gi(e),performance.now()-r)}}render(e){let t=this._state;if(!t){e.updateWindows(),e.syncDisplayList(),e.syncBackBuffer(),e.renderPixi(),e.noteWindowsPresented();return}let n=performance.now(),r=n;e.updateWindows(),t.renderWindowUpdateMs+=performance.now()-r,r=performance.now(),e.syncDisplayList(),t.renderDisplayListSyncMs+=performance.now()-r,r=performance.now(),e.syncBackBuffer(),t.renderBackBufferSyncMs+=performance.now()-r,r=performance.now(),e.renderPixi(),t.renderPixiMs+=performance.now()-r,r=performance.now(),e.noteWindowsPresented(),t.renderWindowPresentedMs+=performance.now()-r,mi(t.render,performance.now()-n)}async pace(e){let t=this._state;if(!t){await e();return}let n=performance.now();await e(),mi(t.framePacing,performance.now()-n)}},fi=()=>({count:0,totalMs:0,maxMs:0}),pi=()=>({startedAt:performance.now(),calls:fi(),callsByOperation:new Map,render:fi(),renderWindowUpdateMs:0,renderDisplayListSyncMs:0,renderBackBufferSyncMs:0,renderPixiMs:0,renderWindowPresentedMs:0,framePacing:fi()}),mi=(e,t)=>{e.count+=1,e.totalMs+=t,e.maxMs=Math.max(e.maxMs,t)},hi=(e,t,n)=>{mi(e.calls,n);let r=e.callsByOperation.get(t);r||(r=fi(),e.callsByOperation.set(t,r)),mi(r,n)},gi=e=>{let t=e.indexOf(`(`);return t<0?e:e.slice(0,t)},_i=e=>({elapsedMs:performance.now()-e.startedAt,calls:{...e.calls,byOperation:Object.fromEntries([...e.callsByOperation.entries()].sort(([e],[t])=>e.localeCompare(t)))},render:{...e.render,windowUpdateMs:e.renderWindowUpdateMs,displayListSyncMs:e.renderDisplayListSyncMs,backBufferSyncMs:e.renderBackBufferSyncMs,pixiRenderMs:e.renderPixiMs,windowPresentedMs:e.renderWindowPresentedMs},framePacing:{...e.framePacing}}),vi={extension:{type:D.Environment,name:`browser`,priority:-1},test:()=>!0,load:async()=>{await ri(()=>import(`./browserAll-CkpIybXi.js`),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url)}},yi={extension:{type:D.Environment,name:`webworker`,priority:0},test:()=>typeof self<`u`&&self.WorkerGlobalScope!==void 0,load:async()=>{await ri(()=>import(`./webworkerAll-uuGR91-J.js`),__vite__mapDeps([7,3,1,4,5,6]),import.meta.url)}},bi=`
in vec2 vTextureCoord;
in vec4 vColor;

out vec4 finalColor;

uniform float uBlend;

uniform sampler2D uTexture;
uniform sampler2D uBackTexture;

{FUNCTIONS}

void main()
{ 
    vec4 back = texture(uBackTexture, vTextureCoord);
    vec4 front = texture(uTexture, vTextureCoord);
    float blendedAlpha = front.a + back.a * (1.0 - front.a);
    
    {MAIN}
}
`,xi=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 backgroundUv;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,Si=`
struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlendUniforms {
  uBlend:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;
@group(0) @binding(3) var uBackTexture: texture_2d<f32>;

@group(1) @binding(0) var<uniform> blendUniforms : BlendUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

{FUNCTIONS}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>
) -> @location(0) vec4<f32> {


   var back =  textureSample(uBackTexture, uSampler, uv);
   var front = textureSample(uTexture, uSampler, uv);
   var blendedAlpha = front.a + back.a * (1.0 - front.a);
   
   var out = vec4<f32>(0.0,0.0,0.0,0.0);

   {MAIN}

   return out;
}`,Ci=class extends E{constructor(e){let t=e.gpu,n=wi({source:Si,...t}),r=w.from({vertex:{source:n,entryPoint:`mainVertex`},fragment:{source:n,entryPoint:`mainFragment`}}),i=e.gl,a=wi({source:bi,...i}),o=k.from({vertex:xi,fragment:a}),s=new S({uBlend:{value:1,type:`f32`}});super({gpuProgram:r,glProgram:o,blendRequired:!0,resources:{blendUniforms:s,uBackTexture:f.EMPTY}})}};function wi(e){let{source:t,functions:n,main:r}=e;return t.replace(`{FUNCTIONS}`,n).replace(`{MAIN}`,r)}var Ti;function Ei(e){return Ti===void 0&&(Ti=(()=>{let t={stencil:!0,failIfMajorPerformanceCaveat:e??he.defaultOptions.failIfMajorPerformanceCaveat};try{if(!b.get().getWebGLRenderingContext())return!1;let e=b.get().createCanvas().getContext(`webgl`,t),n=!!e?.getContextAttributes()?.stencil;if(e){let t=e.getExtension(`WEBGL_lose_context`);t&&t.loseContext()}return e=null,n}catch{return!1}})()),Ti}var Di;async function Oi(e={}){return Di===void 0&&(Di=await(async()=>{let t=b.get().getNavigator().gpu;if(!t)return!1;try{return await(await t.requestAdapter(e)).requestDevice(),!0}catch{return!1}})()),Di}var ki=[`webgl`,`webgpu`,`canvas`];async function Ai(e){let t=[];e.preference?Array.isArray(e.preference)?t=e.preference.slice():(t.push(e.preference),ki.forEach(n=>{n!==e.preference&&t.push(n)})):t=ki.slice();let n,r={};for(let i=0;i<t.length;i++){let a=t[i];if(a===`webgpu`&&await Oi()){let{WebGPURenderer:t}=await ri(async()=>{let{WebGPURenderer:e}=await import(`./WebGPURenderer-B1dC6_BF.js`);return{WebGPURenderer:e}},[],import.meta.url);n=t,r={...e,...e.webgpu};break}else if(a===`webgl`&&Ei(e.failIfMajorPerformanceCaveat??he.defaultOptions.failIfMajorPerformanceCaveat)){let{WebGLRenderer:t}=await ri(async()=>{let{WebGLRenderer:e}=await import(`./WebGLRenderer-CXJ_APvE.js`);return{WebGLRenderer:e}},[],import.meta.url);n=t,r={...e,...e.webgl};break}else if(a===`canvas`){let{CanvasRenderer:t}=await ri(async()=>{let{CanvasRenderer:e}=await import(`./CanvasRenderer-m8NcYpZ5.js`);return{CanvasRenderer:e}},[],import.meta.url);n=t,r={...e,...e.canvasOptions};break}}if(delete r.webgpu,delete r.webgl,delete r.canvasOptions,!n)throw Error(`No available renderer for the current environment`);let i=new n;return await i.init(r),i}var ji=class{static init(e){Object.defineProperty(this,`resizeTo`,{configurable:!0,set(e){globalThis.removeEventListener(`resize`,this.queueResize),this._resizeTo=e,e&&(globalThis.addEventListener(`resize`,this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this._cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this._cancelResize=()=>{this._resizeId&&=(cancelAnimationFrame(this._resizeId),null)},this.resize=()=>{if(!this._resizeTo)return;this._cancelResize();let e,t;if(this._resizeTo===globalThis.window)e=globalThis.innerWidth,t=globalThis.innerHeight;else{let{clientWidth:n,clientHeight:r}=this._resizeTo;e=n,t=r}this.renderer.resize(e,t),this.render()},this._resizeId=null,this._resizeTo=null,this.resizeTo=e.resizeTo||null}static destroy(){globalThis.removeEventListener(`resize`,this.queueResize),this._cancelResize(),this._cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}};ji.extension=D.Application;var Mi=class{static init(e){e=Object.assign({autoStart:!0,sharedTicker:!1},e),Object.defineProperty(this,`ticker`,{configurable:!0,set(e){this._ticker&&this._ticker.remove(this.render,this),this._ticker=e,e&&e.add(this.render,this,oe.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=e.sharedTicker?_.shared:new _,e.autoStart&&this.start()}static destroy(){if(this._ticker){let e=this._ticker;this.ticker=null,e.destroy()}}};Mi.extension=D.Application,y.add(ji),y.add(Mi);var Ni=class e{constructor(...e){this.stage=new r,e[0]!==void 0&&o(h,`Application constructor options are deprecated, please use Application.init() instead.`)}async init(t){t={...t},this.stage||=new r,this.renderer=await Ai(t),e._plugins.forEach(e=>{e.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return o(h,`Application.view is deprecated, please use Application.canvas instead.`),this.renderer.canvas}get screen(){return this.renderer.screen}get domContainerRoot(){return this.renderer.renderPipes.dom?._domElement}destroy(t=!1,n=!1){let r=e._plugins.slice(0);r.reverse(),r.forEach(e=>{e.destroy.call(this)}),this.stage.destroy(n),this.stage=null,this.renderer.destroy(t),this.renderer=null}};Ni._plugins=[];var Pi=Ni;y.handleByList(D.Application,Pi._plugins),y.add(ge);var Fi={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},Ii=/([astvzqmhlc])([^astvzqmhlc]*)/gi,Li=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;function Ri(e){let t=[];return e.replace(Ii,(e,n,r)=>{let i=n.toLowerCase(),a=n,o=zi(r);for(i===`m`&&o.length>2&&(t.push([a,...o.splice(0,2)]),i=`l`,a=a===`m`?`l`:`L`);;){if(o.length===Fi[i])return t.push([a,...o]),``;if(o.length<Fi[i])throw Error(`malformed path data`);t.push([a,...o.splice(0,Fi[i])])}}),t}function zi(e){let t=e.match(Li);return t?t.map(Number):[]}function Bi(e,t){let n=Ri(e),r=[],i=null,a=0,o=0;for(let e=0;e<n.length;e++){let s=n[e],c=s[0],l=s;switch(c){case`M`:a=l[1],o=l[2],t.moveTo(a,o);break;case`m`:a+=l[1],o+=l[2],t.moveTo(a,o);break;case`H`:a=l[1],t.lineTo(a,o);break;case`h`:a+=l[1],t.lineTo(a,o);break;case`V`:o=l[1],t.lineTo(a,o);break;case`v`:o+=l[1],t.lineTo(a,o);break;case`L`:a=l[1],o=l[2],t.lineTo(a,o);break;case`l`:a+=l[1],o+=l[2],t.lineTo(a,o);break;case`C`:a=l[5],o=l[6],t.bezierCurveTo(l[1],l[2],l[3],l[4],a,o);break;case`c`:t.bezierCurveTo(a+l[1],o+l[2],a+l[3],o+l[4],a+l[5],o+l[6]),a+=l[5],o+=l[6];break;case`S`:a=l[3],o=l[4],t.bezierCurveToShort(l[1],l[2],a,o);break;case`s`:t.bezierCurveToShort(a+l[1],o+l[2],a+l[3],o+l[4]),a+=l[3],o+=l[4];break;case`Q`:a=l[3],o=l[4],t.quadraticCurveTo(l[1],l[2],a,o);break;case`q`:t.quadraticCurveTo(a+l[1],o+l[2],a+l[3],o+l[4]),a+=l[3],o+=l[4];break;case`T`:a=l[1],o=l[2],t.quadraticCurveToShort(a,o);break;case`t`:a+=l[1],o+=l[2],t.quadraticCurveToShort(a,o);break;case`A`:a=l[6],o=l[7],t.arcToSvg(l[1],l[2],l[3],l[4],l[5],a,o);break;case`a`:a+=l[6],o+=l[7],t.arcToSvg(l[1],l[2],l[3],l[4],l[5],a,o);break;case`Z`:case`z`:t.closePath(),r.length>0&&(i=r.pop(),i?(a=i.startX,o=i.startY):(a=0,o=0)),i=null;break;default:u(`Unknown SVG path command: ${c}`)}c!==`Z`&&c!==`z`&&i===null&&(i={startX:a,startY:o},r.push(i))}return t}var Vi=class e{constructor(e=0,t=0,n=0){this.type=`circle`,this.x=e,this.y=t,this.radius=n}clone(){return new e(this.x,this.y,this.radius)}contains(e,t){if(this.radius<=0)return!1;let n=this.radius*this.radius,r=this.x-e,i=this.y-t;return r*=r,i*=i,r+i<=n}strokeContains(e,t,n,r=.5){if(this.radius===0)return!1;let i=this.x-e,a=this.y-t,o=this.radius,s=(1-r)*n,c=Math.sqrt(i*i+a*a);return c<=o+s&&c>o-(n-s)}getBounds(e){return e||=new l,e.x=this.x-this.radius,e.y=this.y-this.radius,e.width=this.radius*2,e.height=this.radius*2,e}copyFrom(e){return this.x=e.x,this.y=e.y,this.radius=e.radius,this}copyTo(e){return e.copyFrom(this),e}toString(){return`[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`}},Hi=class e{constructor(e=0,t=0,n=0,r=0){this.type=`ellipse`,this.x=e,this.y=t,this.halfWidth=n,this.halfHeight=r}clone(){return new e(this.x,this.y,this.halfWidth,this.halfHeight)}contains(e,t){if(this.halfWidth<=0||this.halfHeight<=0)return!1;let n=(e-this.x)/this.halfWidth,r=(t-this.y)/this.halfHeight;return n*=n,r*=r,n+r<=1}strokeContains(e,t,n,r=.5){let{halfWidth:i,halfHeight:a}=this;if(i<=0||a<=0)return!1;let o=n*(1-r),s=n-o,c=i-s,l=a-s,u=i+o,d=a+o,f=e-this.x,p=t-this.y,m=f*f/(c*c)+p*p/(l*l),h=f*f/(u*u)+p*p/(d*d);return m>1&&h<=1}getBounds(e){return e||=new l,e.x=this.x-this.halfWidth,e.y=this.y-this.halfHeight,e.width=this.halfWidth*2,e.height=this.halfHeight*2,e}copyFrom(e){return this.x=e.x,this.y=e.y,this.halfWidth=e.halfWidth,this.halfHeight=e.halfHeight,this}copyTo(e){return e.copyFrom(this),e}toString(){return`[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`}};function Ui(e){let t=e.length;if(t<6)return 1;let n=0;for(let r=0,i=e[t-2],a=e[t-1];r<t;r+=2){let t=e[r],o=e[r+1];n+=(t-i)*(o+a),i=t,a=o}return n<0?-1:1}function Wi(e,t,n,r,i,a){let o=e-n,s=t-r,c=i-n,l=a-r,u=o*c+s*l,d=c*c+l*l,f=-1;d!==0&&(f=u/d);let p,m;f<0?(p=n,m=r):f>1?(p=i,m=a):(p=n+f*c,m=r+f*l);let h=e-p,g=t-m;return h*h+g*g}var Gi,Ki,qi=class e{constructor(...e){this.type=`polygon`;let t=Array.isArray(e[0])?e[0]:e;if(typeof t[0]!=`number`){let e=[];for(let n=0,r=t.length;n<r;n++)e.push(t[n].x,t[n].y);t=e}this.points=t,this.closePath=!0}isClockwise(){let e=0,t=this.points,n=t.length;for(let r=0;r<n;r+=2){let i=t[r],a=t[r+1],o=t[(r+2)%n],s=t[(r+3)%n];e+=(o-i)*(s+a)}return e<0}containsPolygon(e){let t=this.getBounds(Gi),n=e.getBounds(Ki);if(!t.containsRect(n))return!1;let r=e.points;for(let e=0;e<r.length;e+=2){let t=r[e],n=r[e+1];if(!this.contains(t,n))return!1}return!0}clone(){let t=new e(this.points.slice());return t.closePath=this.closePath,t}contains(e,t){let n=!1,r=this.points.length/2;for(let i=0,a=r-1;i<r;a=i++){let r=this.points[i*2],o=this.points[i*2+1],s=this.points[a*2],c=this.points[a*2+1];o>t!=c>t&&e<(s-r)*((t-o)/(c-o))+r&&(n=!n)}return n}strokeContains(e,t,n,r=.5){let{points:i}=this,a=n*(r===.5?r:(r-.5)*Ui(i)+.5),o=n-a,s=a*a,c=o*o,l=i.length-(this.closePath?0:2);for(let n=0;n<l;n+=2){let r=i[n],a=i[n+1],o=i[(n+2)%i.length],l=i[(n+3)%i.length];if(Wi(e,t,r,a,o,l)<=(Math.sign((o-r)*(t-a)-(l-a)*(e-r))<0?s:c))return!0}return!1}getBounds(e){e||=new l;let t=this.points,n=1/0,r=-1/0,i=1/0,a=-1/0;for(let e=0,o=t.length;e<o;e+=2){let o=t[e],s=t[e+1];n=o<n?o:n,r=o>r?o:r,i=s<i?s:i,a=s>a?s:a}return e.x=n,e.width=r-n,e.y=i,e.height=a-i,e}copyFrom(e){return this.points=e.points.slice(),this.closePath=e.closePath,this}copyTo(e){return e.copyFrom(this),e}toString(){return`[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((e,t)=>`${e}, ${t}`,``)}]`}get lastX(){return this.points[this.points.length-2]}get lastY(){return this.points[this.points.length-1]}get x(){return o(`8.11.0`,`Polygon.lastX is deprecated, please use Polygon.lastX instead.`),this.points[this.points.length-2]}get y(){return o(`8.11.0`,`Polygon.y is deprecated, please use Polygon.lastY instead.`),this.points[this.points.length-1]}get startX(){return this.points[0]}get startY(){return this.points[1]}},Ji=(e,t,n,r,i,a,o)=>{let s=e-n,c=t-r,l=Math.sqrt(s*s+c*c);return l>=i-a&&l<=i+o},Yi=class e{constructor(e=0,t=0,n=0,r=0,i=20){this.type=`roundedRectangle`,this.x=e,this.y=t,this.width=n,this.height=r,this.radius=i}getBounds(e){return e||=new l,e.x=this.x,e.y=this.y,e.width=this.width,e.height=this.height,e}clone(){return new e(this.x,this.y,this.width,this.height,this.radius)}copyFrom(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this.radius=e.radius,this}copyTo(e){return e.copyFrom(this),e}contains(e,t){if(this.width<=0||this.height<=0)return!1;if(e>=this.x&&e<=this.x+this.width&&t>=this.y&&t<=this.y+this.height){let n=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(t>=this.y+n&&t<=this.y+this.height-n||e>=this.x+n&&e<=this.x+this.width-n)return!0;let r=e-(this.x+n),i=t-(this.y+n),a=n*n;if(r*r+i*i<=a||(r=e-(this.x+this.width-n),r*r+i*i<=a)||(i=t-(this.y+this.height-n),r*r+i*i<=a)||(r=e-(this.x+n),r*r+i*i<=a))return!0}return!1}strokeContains(e,t,n,r=.5){let{x:i,y:a,width:o,height:s,radius:c}=this,l=n*(1-r),u=n-l,d=i+c,f=a+c,p=o-c*2,m=s-c*2,h=i+o,g=a+s;return(e>=i-l&&e<=i+u||e>=h-u&&e<=h+l)&&t>=f&&t<=f+m||(t>=a-l&&t<=a+u||t>=g-u&&t<=g+l)&&e>=d&&e<=d+p?!0:e<d&&t<f&&Ji(e,t,d,f,c,u,l)||e>h-c&&t<f&&Ji(e,t,h-c,f,c,u,l)||e>h-c&&t>g-c&&Ji(e,t,h-c,g-c,c,u,l)||e<d&&t>g-c&&Ji(e,t,d,g-c,c,u,l)}toString(){return`[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`}};function Xi(e,t,n,r,i,a,o,s=null){let c=0;n*=t,i*=a;let l=s.a,u=s.b,d=s.c,f=s.d,p=s.tx,m=s.ty;for(;c<o;){let o=e[n],s=e[n+1];r[i]=l*o+d*s+p,r[i+1]=u*o+f*s+m,i+=a,n+=t,c++}}function Zi(e,t,n,r){let i=0;for(t*=n;i<r;)e[t]=0,e[t+1]=0,t+=n,i++}function Qi(e,t,n,r,i){let a=t.a,o=t.b,s=t.c,c=t.d,l=t.tx,u=t.ty;n||=0,r||=2,i||=e.length/r-n;let d=n*r;for(let t=0;t<i;t++){let t=e[d],n=e[d+1];e[d]=a*t+s*n+l,e[d+1]=o*t+c*n+u,d+=r}}var $i=new C,ea=class{constructor(){this.packAsQuad=!1,this.batcherName=`default`,this.topology=`triangle-list`,this.applyTransform=!0,this.roundPixels=0,this._batcher=null,this._batch=null}get uvs(){return this.geometryData.uvs}get positions(){return this.geometryData.vertices}get indices(){return this.geometryData.indices}get blendMode(){return this.renderable&&this.applyTransform?this.renderable.groupBlendMode:`normal`}get color(){let e=this.baseColor,n=e>>16|e&65280|(e&255)<<16,r=this.renderable;return r?t(n,r.groupColor)+(this.alpha*r.groupAlpha*255<<24):n+(this.alpha*255<<24)}get transform(){return this.renderable?.groupTransform||$i}copyTo(e){e.indexOffset=this.indexOffset,e.indexSize=this.indexSize,e.attributeOffset=this.attributeOffset,e.attributeSize=this.attributeSize,e.baseColor=this.baseColor,e.alpha=this.alpha,e.texture=this.texture,e.geometryData=this.geometryData,e.topology=this.topology}reset(){this.applyTransform=!0,this.renderable=null,this.topology=`triangle-list`}destroy(){this.renderable=null,this.texture=null,this.geometryData=null,this._batcher=null,this._batch=null}},ta={extension:{type:D.ShapeBuilder,name:`circle`},build(e,t){let n,r,i,a,o,s;if(e.type===`circle`){let t=e;if(o=s=t.radius,o<=0)return!1;n=t.x,r=t.y,i=a=0}else if(e.type===`ellipse`){let t=e;if(o=t.halfWidth,s=t.halfHeight,o<=0||s<=0)return!1;n=t.x,r=t.y,i=a=0}else{let t=e,c=t.width/2,l=t.height/2;n=t.x+c,r=t.y+l,o=s=Math.max(0,Math.min(t.radius,Math.min(c,l))),i=c-o,a=l-s}if(i<0||a<0)return!1;let c=Math.ceil(2.3*Math.sqrt(o+s)),l=c*8+(i?4:0)+(a?4:0);if(l===0)return!1;if(c===0)return t[0]=t[6]=n+i,t[1]=t[3]=r+a,t[2]=t[4]=n-i,t[5]=t[7]=r-a,!0;let u=0,d=c*4+(i?2:0)+2,f=d,p=l,m=i+o,h=a,g=n+m,_=n-m,v=r+h;if(t[u++]=g,t[u++]=v,t[--d]=v,t[--d]=_,a){let e=r-h;t[f++]=_,t[f++]=e,t[--p]=e,t[--p]=g}for(let e=1;e<c;e++){let l=Math.PI/2*(e/c),m=i+Math.cos(l)*o,h=a+Math.sin(l)*s,g=n+m,_=n-m,v=r+h,y=r-h;t[u++]=g,t[u++]=v,t[--d]=v,t[--d]=_,t[f++]=_,t[f++]=y,t[--p]=y,t[--p]=g}m=i,h=a+s,g=n+m,_=n-m,v=r+h;let y=r-h;return t[u++]=g,t[u++]=v,t[--p]=y,t[--p]=g,i&&(t[u++]=_,t[u++]=v,t[--p]=y,t[--p]=_),!0},triangulate(e,t,n,r,i,a){if(e.length===0)return;let o=0,s=0;for(let t=0;t<e.length;t+=2)o+=e[t],s+=e[t+1];o/=e.length/2,s/=e.length/2;let c=r;t[c*n]=o,t[c*n+1]=s;let l=c++;for(let r=0;r<e.length;r+=2)t[c*n]=e[r],t[c*n+1]=e[r+1],r>0&&(i[a++]=c,i[a++]=l,i[a++]=c-1),c++;i[a++]=l+1,i[a++]=l,i[a++]=c-1}},na={...ta,extension:{...ta.extension,name:`ellipse`}},ra={...ta,extension:{...ta.extension,name:`roundedRectangle`}},ia=1e-4,aa=1e-4;function oa(e,t,n,r,i,a,o,s){let c=e-n*i,l=t-r*i,u=e+n*a,d=t+r*a,f,p;o?(f=r,p=-n):(f=-r,p=n);let m=c+f,h=l+p,g=u+f,_=d+p;return s.push(m,h),s.push(g,_),2}function sa(e,t,n,r,i,a,o,s){let c=n-e,l=r-t,u=Math.atan2(c,l),d=Math.atan2(i-e,a-t);s&&u<d?u+=Math.PI*2:!s&&u>d&&(d+=Math.PI*2);let f=u,p=d-u,m=Math.abs(p),h=Math.sqrt(c*c+l*l),g=(15*m*Math.sqrt(h)/Math.PI>>0)+1,_=p/g;if(f+=_,s){o.push(e,t),o.push(n,r);for(let n=1,r=f;n<g;n++,r+=_)o.push(e,t),o.push(e+Math.sin(r)*h,t+Math.cos(r)*h);o.push(e,t),o.push(i,a)}else{o.push(n,r),o.push(e,t);for(let n=1,r=f;n<g;n++,r+=_)o.push(e+Math.sin(r)*h,t+Math.cos(r)*h),o.push(e,t);o.push(i,a),o.push(e,t)}return g*2}function ca(e,t,n,r,i,a){let o=ia;if(e.length===0)return;let s=t,c=s.alignment;if(t.alignment!==.5){let t=Ui(e);n&&(t*=-1),c=(c-.5)*t+.5}let l=new ie(e[0],e[1]),u=new ie(e[e.length-2],e[e.length-1]),d=r,f=Math.abs(l.x-u.x)<o&&Math.abs(l.y-u.y)<o;if(d){e=e.slice(),f&&(e.pop(),e.pop(),u.set(e[e.length-2],e[e.length-1]));let t=(l.x+u.x)*.5,n=(u.y+l.y)*.5;e.unshift(t,n),e.push(t,n)}let p=i,m=e.length/2,h=e.length,g=p.length/2,_=s.width/2,v=_*_,y=s.miterLimit*s.miterLimit,b=e[0],x=e[1],S=e[2],C=e[3],w=0,T=0,E=-(x-C),D=b-S,O=0,k=0,A=Math.sqrt(E*E+D*D);E/=A,D/=A,E*=_,D*=_;let ee=c,j=(1-ee)*2,M=ee*2;d||(s.cap===`round`?h+=sa(b-E*(j-M)*.5,x-D*(j-M)*.5,b-E*j,x-D*j,b+E*M,x+D*M,p,!0)+2:s.cap===`square`&&(h+=oa(b,x,E,D,j,M,!0,p))),p.push(b-E*j,x-D*j),p.push(b+E*M,x+D*M);for(let t=1;t<m-1;++t){b=e[(t-1)*2],x=e[(t-1)*2+1],S=e[t*2],C=e[t*2+1],w=e[(t+1)*2],T=e[(t+1)*2+1],E=-(x-C),D=b-S,A=Math.sqrt(E*E+D*D),E/=A,D/=A,E*=_,D*=_,O=-(C-T),k=S-w,A=Math.sqrt(O*O+k*k),O/=A,k/=A,O*=_,k*=_;let n=S-b,r=x-C,i=S-w,a=T-C,o=n*i+r*a,c=r*i-a*n,l=c<0;if(Math.abs(c)<.001*Math.abs(o)){p.push(S-E*j,C-D*j),p.push(S+E*M,C+D*M),o>=0&&(s.join===`round`?h+=sa(S,C,S-E*j,C-D*j,S-O*j,C-k*j,p,!1)+4:h+=2,p.push(S-O*M,C-k*M),p.push(S+O*j,C+k*j));continue}let u=(-E+b)*(-D+C)-(-E+S)*(-D+x),d=(-O+w)*(-k+C)-(-O+S)*(-k+T),f=(n*d-i*u)/c,m=(a*u-r*d)/c,g=(f-S)*(f-S)+(m-C)*(m-C),ee=S+(f-S)*j,te=C+(m-C)*j,N=S-(f-S)*M,P=C-(m-C)*M,ne=Math.min(n*n+r*r,i*i+a*a),re=l?j:M;g<=ne+re*re*v?s.join===`bevel`||g/v>y?(l?(p.push(ee,te),p.push(S+E*M,C+D*M),p.push(ee,te),p.push(S+O*M,C+k*M)):(p.push(S-E*j,C-D*j),p.push(N,P),p.push(S-O*j,C-k*j),p.push(N,P)),h+=2):s.join===`round`?l?(p.push(ee,te),p.push(S+E*M,C+D*M),h+=sa(S,C,S+E*M,C+D*M,S+O*M,C+k*M,p,!0)+4,p.push(ee,te),p.push(S+O*M,C+k*M)):(p.push(S-E*j,C-D*j),p.push(N,P),h+=sa(S,C,S-E*j,C-D*j,S-O*j,C-k*j,p,!1)+4,p.push(S-O*j,C-k*j),p.push(N,P)):(p.push(ee,te),p.push(N,P)):(p.push(S-E*j,C-D*j),p.push(S+E*M,C+D*M),s.join===`round`?l?h+=sa(S,C,S+E*M,C+D*M,S+O*M,C+k*M,p,!0)+2:h+=sa(S,C,S-E*j,C-D*j,S-O*j,C-k*j,p,!1)+2:s.join===`miter`&&g/v<=y&&(l?(p.push(N,P),p.push(N,P)):(p.push(ee,te),p.push(ee,te)),h+=2),p.push(S-O*j,C-k*j),p.push(S+O*M,C+k*M),h+=2)}b=e[(m-2)*2],x=e[(m-2)*2+1],S=e[(m-1)*2],C=e[(m-1)*2+1],E=-(x-C),D=b-S,A=Math.sqrt(E*E+D*D),E/=A,D/=A,E*=_,D*=_,p.push(S-E*j,C-D*j),p.push(S+E*M,C+D*M),d||(s.cap===`round`?h+=sa(S-E*(j-M)*.5,C-D*(j-M)*.5,S-E*j,C-D*j,S+E*M,C+D*M,p,!1)+2:s.cap===`square`&&(h+=oa(S,C,E,D,j,M,!1,p)));let te=aa*aa;for(let e=g;e<h+g-2;++e)b=p[e*2],x=p[e*2+1],S=p[(e+1)*2],C=p[(e+1)*2+1],w=p[(e+2)*2],T=p[(e+2)*2+1],!(Math.abs(b*(C-T)+S*(T-x)+w*(x-C))<te)&&a.push(e,e+1,e+2)}function la(e,t,n,r){let i=ia;if(e.length===0)return;let a=e[0],o=e[1],s=e[e.length-2],c=e[e.length-1],l=t||Math.abs(a-s)<i&&Math.abs(o-c)<i,u=n,d=e.length/2,f=u.length/2;for(let t=0;t<d;t++)u.push(e[t*2]),u.push(e[t*2+1]);for(let e=0;e<d-1;e++)r.push(f+e,f+e+1);l&&r.push(f+d-1,f)}function ua(e,t,n,r,i,a,o){let s=Oe(e,t,2);if(!s)return;for(let e=0;e<s.length;e+=3)a[o++]=s[e]+i,a[o++]=s[e+1]+i,a[o++]=s[e+2]+i;let c=i*r;for(let t=0;t<e.length;t+=2)n[c]=e[t],n[c+1]=e[t+1],c+=r}var da=[],fa={extension:{type:D.ShapeBuilder,name:`polygon`},build(e,t){for(let n=0;n<e.points.length;n++)t[n]=e.points[n];return!0},triangulate(e,t,n,r,i,a){ua(e,da,t,n,r,i,a)}},pa={extension:{type:D.ShapeBuilder,name:`rectangle`},build(e,t){let n=e,r=n.x,i=n.y,a=n.width,o=n.height;return a>0&&o>0?(t[0]=r,t[1]=i,t[2]=r+a,t[3]=i,t[4]=r+a,t[5]=i+o,t[6]=r,t[7]=i+o,!0):!1},triangulate(e,t,n,r,i,a){let o=0;r*=n,t[r+o]=e[0],t[r+o+1]=e[1],o+=n,t[r+o]=e[2],t[r+o+1]=e[3],o+=n,t[r+o]=e[6],t[r+o+1]=e[7],o+=n,t[r+o]=e[4],t[r+o+1]=e[5],o+=n;let s=r/n;i[a++]=s,i[a++]=s+1,i[a++]=s+2,i[a++]=s+1,i[a++]=s+3,i[a++]=s+2}},ma={extension:{type:D.ShapeBuilder,name:`triangle`},build(e,t){return t[0]=e.x,t[1]=e.y,t[2]=e.x2,t[3]=e.y2,t[4]=e.x3,t[5]=e.y3,!0},triangulate(e,t,n,r,i,a){let o=0;r*=n,t[r+o]=e[0],t[r+o+1]=e[1],o+=n,t[r+o]=e[2],t[r+o+1]=e[3],o+=n,t[r+o]=e[4],t[r+o+1]=e[5];let s=r/n;i[a++]=s,i[a++]=s+1,i[a++]=s+2}},ha=[{offset:0,color:`white`},{offset:1,color:`black`}],ga=class e{constructor(...t){this.uid=g(`fillGradient`),this._tick=0,this.type=`linear`,this.colorStops=[];let n=ba(t);n={...n.type===`radial`?e.defaultRadialOptions:e.defaultLinearOptions,...s(n)},this._textureSize=n.textureSize,this._wrapMode=n.wrapMode,n.type===`radial`?(this.center=n.center,this.outerCenter=n.outerCenter??this.center,this.innerRadius=n.innerRadius,this.outerRadius=n.outerRadius,this.scale=n.scale,this.rotation=n.rotation):(this.start=n.start,this.end=n.end),this.textureSpace=n.textureSpace,this.type=n.type,n.colorStops.forEach(e=>{this.addColorStop(e.offset,e.color)})}addColorStop(e,t){return this.colorStops.push({offset:e,color:I.shared.setValue(t).toHexa()}),this}buildLinearGradient(){if(this.texture)return;let{x:e,y:t}=this.start,{x:n,y:r}=this.end,i=n-e,a=r-t,o=i<0||a<0;if(this._wrapMode===`clamp-to-edge`){if(i<0){let t=e;e=n,n=t,i*=-1}if(a<0){let e=t;t=r,r=e,a*=-1}}let s=this.colorStops.length?this.colorStops:ha,c=this._textureSize,{canvas:l,context:u}=ya(c,1),d=o?u.createLinearGradient(this._textureSize,0,0,0):u.createLinearGradient(0,0,this._textureSize,0);va(d,s),u.fillStyle=d,u.fillRect(0,0,c,1),this.texture=new f({source:new pe({resource:l,addressMode:this._wrapMode})});let p=Math.sqrt(i*i+a*a),m=Math.atan2(a,i),h=new C;h.scale(p/c,1),h.rotate(m),h.translate(e,t),this.textureSpace===`local`&&h.scale(c,c),this.transform=h}buildGradient(){this.texture||this._tick++,this.type===`linear`?this.buildLinearGradient():this.buildRadialGradient()}buildRadialGradient(){if(this.texture)return;let e=this.colorStops.length?this.colorStops:ha,t=this._textureSize,{canvas:n,context:r}=ya(t,t),{x:i,y:a}=this.center,{x:o,y:s}=this.outerCenter,c=this.innerRadius,l=this.outerRadius,u=o-l,d=s-l,p=t/(l*2),m=(i-u)*p,h=(a-d)*p,g=r.createRadialGradient(m,h,c*p,(o-u)*p,(s-d)*p,l*p);va(g,e),r.fillStyle=e[e.length-1].color,r.fillRect(0,0,t,t),r.fillStyle=g,r.translate(m,h),r.rotate(this.rotation),r.scale(1,this.scale),r.translate(-m,-h),r.fillRect(0,0,t,t),this.texture=new f({source:new pe({resource:n,addressMode:this._wrapMode})});let _=new C;this.textureSpace===`local`?_.scale(2*l,2*l):_.scale(1/p,1/p),_.translate(u,d),this.transform=_}destroy(){this.texture?.destroy(!0),this.texture=null,this.transform=null,this.colorStops=[],this.start=null,this.end=null,this.center=null,this.outerCenter=null}get styleKey(){return`fill-gradient-${this.uid}-${this._tick}`}};ga.defaultLinearOptions={start:{x:0,y:0},end:{x:0,y:1},colorStops:[],textureSpace:`local`,type:`linear`,textureSize:256,wrapMode:`clamp-to-edge`},ga.defaultRadialOptions={center:{x:.5,y:.5},innerRadius:0,outerRadius:.5,colorStops:[],scale:1,rotation:0,textureSpace:`local`,type:`radial`,textureSize:256,wrapMode:`clamp-to-edge`};var _a=ga;function va(e,t){for(let n=0;n<t.length;n++){let r=t[n];e.addColorStop(r.offset,r.color)}}function ya(e,t){let n=b.get().createCanvas(e,t);return{canvas:n,context:n.getContext(`2d`)}}function ba(e){let t=e[0]??{};return(typeof t==`number`||e[1])&&(o(`8.5.2`,`use options object instead`),t={type:`linear`,start:{x:e[0],y:e[1]},end:{x:e[2],y:e[3]},textureSpace:e[4],textureSize:e[5]??_a.defaultLinearOptions.textureSize}),t}var xa=new C,Sa=new l,Ca=new C;function wa(e,t,n,r){let i=t.matrix?e.copyFrom(t.matrix).invert():e.identity();if(t.textureSpace===`local`){let e=n.getBounds(Sa);t.width&&e.pad(t.width);let{x:r,y:a}=e,o=1/e.width,s=1/e.height,c=-r*o,l=-a*s,u=i.a,d=i.b,f=i.c,p=i.d;i.a*=o,i.b*=o,i.c*=s,i.d*=s,i.tx=c*u+l*f+i.tx,i.ty=c*d+l*p+i.ty}else if(t.texture.rotate){let{uvs:e,orig:n}=t.texture;i.scale(1/n.width,1/n.height),i.prepend(Ca.set(e.x1-e.x0,e.y1-e.y0,e.x3-e.x0,e.y3-e.y0,e.x0,e.y0))}else i.translate(t.texture.frame.x,t.texture.frame.y),i.scale(1/t.texture.source.width,1/t.texture.source.height);let a=t.texture.source.style;return!(t.fill instanceof _a)&&a.addressMode===`clamp-to-edge`&&(a.addressMode=`repeat`,a.update()),r&&i.append(xa.copyFrom(r).invert()),i}var Ta={};y.handleByMap(D.ShapeBuilder,Ta),y.add(pa,fa,ma,ta,na,ra);var Ea=new l,Da=new C;function Oa(e,t){let{geometryData:n,batches:r}=t;r.length=0,n.indices.length=0,n.vertices.length=0,n.uvs.length=0;for(let t=0;t<e.instructions.length;t++){let i=e.instructions[t];if(i.action===`texture`)ka(i.data,r,n);else if(i.action===`fill`||i.action===`stroke`){let e=i.action===`stroke`,t=i.data.path.shapePath,a=i.data.style,o=i.data.hole;e&&o&&Aa(o.shapePath,a,!0,r,n),o&&(t.shapePrimitives[t.shapePrimitives.length-1].holes=o.shapePath.shapePrimitives),Aa(t,a,e,r,n)}}}function ka(e,t,n){let r=[],i=Ta.rectangle,o=Ea;o.x=e.dx,o.y=e.dy,o.width=e.dw,o.height=e.dh;let s=e.transform;if(!i.build(o,r))return;let{vertices:c,uvs:l,indices:u}=n,d=u.length,f=c.length/2;s&&Qi(r,s),i.triangulate(r,c,2,f,u,d);let p=e.image,m=p.uvs;l.push(m.x0,m.y0,m.x1,m.y1,m.x3,m.y3,m.x2,m.y2);let h=a.get(ea);h.indexOffset=d,h.indexSize=u.length-d,h.attributeOffset=f,h.attributeSize=c.length/2-f,h.baseColor=e.style,h.alpha=e.alpha,h.texture=p,h.geometryData=n,t.push(h)}function Aa(e,t,n,r,i){let{vertices:o,uvs:s,indices:c}=i;e.shapePrimitives.forEach(({shape:e,transform:l,holes:u})=>{let d=[],p=Ta[e.type];if(!p.build(e,d))return;let m=c.length,h=o.length/2,g=`triangle-list`;if(l&&Qi(d,l),n){let n=e.closePath??!0,r=t;r.pixelLine?(la(d,n,o,c),g=`line-list`):ca(d,r,!1,n,o,c)}else if(u){let e=[],t=d.slice();ja(u).forEach(n=>{e.push(t.length/2),t.push(...n)}),ua(t,e,o,2,h,c,m)}else p.triangulate(d,o,2,h,c,m);let _=s.length/2,v=t.texture;if(v!==f.WHITE){let n=wa(Da,t,e,l);Xi(o,2,h,s,_,2,o.length/2-h,n)}else Zi(s,_,2,o.length/2-h);let y=a.get(ea);y.indexOffset=m,y.indexSize=c.length-m,y.attributeOffset=h,y.attributeSize=o.length/2-h,y.baseColor=t.color,y.alpha=t.alpha,y.texture=v,y.geometryData=i,y.topology=g,r.push(y)})}function ja(e){let t=[];for(let n=0;n<e.length;n++){let r=e[n].shape,i=[];Ta[r.type].build(r,i)&&t.push(i)}return t}var Ma=class{constructor(){this.batches=[],this.geometryData={vertices:[],uvs:[],indices:[]}}reset(){this.batches&&this.batches.forEach(e=>{a.return(e)}),this.graphicsData&&a.return(this.graphicsData),this.isBatchable=!1,this.context=null,this.batches.length=0,this.geometryData.indices.length=0,this.geometryData.vertices.length=0,this.geometryData.uvs.length=0,this.graphicsData=null}destroy(){this.reset(),this.batches=null,this.geometryData=null}},Na=class{constructor(){this.instructions=new i}init(e){let t=e.maxTextures;this.batcher?this.batcher._updateMaxTextures(t):this.batcher=new we({maxTextures:t}),this.instructions.reset()}get geometry(){return o(m,`GraphicsContextRenderData#geometry is deprecated, please use batcher.geometry instead.`),this.batcher.geometry}destroy(){this.batcher.destroy(),this.instructions.destroy(),this.batcher=null,this.instructions=null}},Pa=class e{constructor(e){this._renderer=e,this._managedContexts=new Ce({renderer:e,type:`resource`,name:`graphicsContext`})}init(t){e.defaultOptions.bezierSmoothness=t?.bezierSmoothness??e.defaultOptions.bezierSmoothness}getContextRenderData(e){return e._gpuData[this._renderer.uid].graphicsData||this._initContextRenderData(e)}updateGpuContext(e){let t=!!e._gpuData[this._renderer.uid],n=e._gpuData[this._renderer.uid]||this._initContext(e);if(e.dirty||!t){t&&n.reset(),Oa(e,n);let r=e.batchMode;e.customShader||r===`no-batch`?n.isBatchable=!1:r===`auto`?n.isBatchable=n.geometryData.vertices.length<400:n.isBatchable=!0,e.dirty=!1}return n}getGpuContext(e){return e._gpuData[this._renderer.uid]||this._initContext(e)}_initContextRenderData(e){let t=a.get(Na,{maxTextures:this._renderer.limits.maxBatchableTextures}),n=e._gpuData[this._renderer.uid],{batches:r,geometryData:i}=n;n.graphicsData=t;let o=i.vertices.length,s=i.indices.length;for(let e=0;e<r.length;e++)r[e].applyTransform=!1;let c=t.batcher;c.ensureAttributeBuffer(o),c.ensureIndexBuffer(s),c.begin();for(let e=0;e<r.length;e++){let t=r[e];c.add(t)}c.finish(t.instructions);let l=c.geometry;l.indexBuffer.setDataWithSize(c.indexBuffer,c.indexSize,!0),l.buffers[0].setDataWithSize(c.attributeBuffer.float32View,c.attributeSize,!0);let u=c.batches;for(let e=0;e<u.length;e++){let t=u[e];t.bindGroup=He(t.textures.textures,t.textures.count,this._renderer.limits.maxBatchableTextures)}return t}_initContext(e){let t=new Ma;return t.context=e,e._gpuData[this._renderer.uid]=t,this._managedContexts.add(e),t}destroy(){this._managedContexts.destroy(),this._renderer=null}};Pa.extension={type:[D.WebGLSystem,D.WebGPUSystem],name:`graphicsContext`},Pa.defaultOptions={bezierSmoothness:.5};var Fa=Pa,Ia=8,La=1.1920929e-7,Ra=1,za=.01,Ba=0,Va=0;function Ha(e,t,n,r,i,a,o,s,c,l){let u=(Ra-Math.min(.99,Math.max(0,l??Fa.defaultOptions.bezierSmoothness)))/1;return u*=u,Ua(t,n,r,i,a,o,s,c,e,u),e}function Ua(e,t,n,r,i,a,o,s,c,l){Wa(e,t,n,r,i,a,o,s,c,l,0),c.push(o,s)}function Wa(e,t,n,r,i,a,o,s,c,l,u){if(u>Ia)return;let d=Math.PI,f=(e+n)/2,p=(t+r)/2,m=(n+i)/2,h=(r+a)/2,g=(i+o)/2,_=(a+s)/2,v=(f+m)/2,y=(p+h)/2,b=(m+g)/2,x=(h+_)/2,S=(v+b)/2,C=(y+x)/2;if(u>0){let u=o-e,f=s-t,p=Math.abs((n-o)*f-(r-s)*u),m=Math.abs((i-o)*f-(a-s)*u),h,g;if(p>La&&m>La){if((p+m)*(p+m)<=l*(u*u+f*f)){if(Ba<za){c.push(S,C);return}let l=Math.atan2(a-r,i-n);if(h=Math.abs(l-Math.atan2(r-t,n-e)),g=Math.abs(Math.atan2(s-a,o-i)-l),h>=d&&(h=2*d-h),g>=d&&(g=2*d-g),h+g<Ba){c.push(S,C);return}if(Va!==0){if(h>Va){c.push(n,r);return}if(g>Va){c.push(i,a);return}}}}else if(p>La){if(p*p<=l*(u*u+f*f)){if(Ba<za){c.push(S,C);return}if(h=Math.abs(Math.atan2(a-r,i-n)-Math.atan2(r-t,n-e)),h>=d&&(h=2*d-h),h<Ba){c.push(n,r),c.push(i,a);return}if(Va!==0&&h>Va){c.push(n,r);return}}}else if(m>La){if(m*m<=l*(u*u+f*f)){if(Ba<za){c.push(S,C);return}if(h=Math.abs(Math.atan2(s-a,o-i)-Math.atan2(a-r,i-n)),h>=d&&(h=2*d-h),h<Ba){c.push(n,r),c.push(i,a);return}if(Va!==0&&h>Va){c.push(i,a);return}}}else if(u=S-(e+o)/2,f=C-(t+s)/2,u*u+f*f<=l){c.push(S,C);return}}Wa(e,t,f,p,v,y,S,C,c,l,u+1),Wa(S,C,b,x,g,_,o,s,c,l,u+1)}var Ga=8,Ka=1.1920929e-7,qa=1,Ja=.01,Ya=0;function Xa(e,t,n,r,i,a,o,s){let c=(qa-Math.min(.99,Math.max(0,s??Fa.defaultOptions.bezierSmoothness)))/1;return c*=c,Za(t,n,r,i,a,o,e,c),e}function Za(e,t,n,r,i,a,o,s){Qa(o,e,t,n,r,i,a,s,0),o.push(i,a)}function Qa(e,t,n,r,i,a,o,s,c){if(c>Ga)return;let l=Math.PI,u=(t+r)/2,d=(n+i)/2,f=(r+a)/2,p=(i+o)/2,m=(u+f)/2,h=(d+p)/2,g=a-t,_=o-n,v=Math.abs((r-a)*_-(i-o)*g);if(v>Ka){if(v*v<=s*(g*g+_*_)){if(Ya<Ja){e.push(m,h);return}let s=Math.abs(Math.atan2(o-i,a-r)-Math.atan2(i-n,r-t));if(s>=l&&(s=2*l-s),s<Ya){e.push(m,h);return}}}else if(g=m-(t+a)/2,_=h-(n+o)/2,g*g+_*_<=s){e.push(m,h);return}Qa(e,t,n,u,d,m,h,s,c+1),Qa(e,m,h,f,p,a,o,s,c+1)}function $a(e,t,n,r,i,a,o,s){let c=Math.abs(i-a);(!o&&i>a||o&&a>i)&&(c=2*Math.PI-c),s||=Math.max(6,Math.floor(6*r**(1/3)*(c/Math.PI))),s=Math.max(s,3);let l=c/s,u=i;l*=o?-1:1;for(let i=0;i<s+1;i++){let i=Math.cos(u),a=Math.sin(u),o=t+i*r,s=n+a*r;e.push(o,s),u+=l}}function eo(e,t,n,r,i,a){let o=e[e.length-2],s=e[e.length-1]-n,c=o-t,l=i-n,u=r-t,d=Math.abs(s*u-c*l);if(d<1e-8||a===0){(e[e.length-2]!==t||e[e.length-1]!==n)&&e.push(t,n);return}let f=s*s+c*c,p=l*l+u*u,m=s*l+c*u,h=a*Math.sqrt(f)/d,g=a*Math.sqrt(p)/d,_=h*m/f,v=g*m/p,y=h*u+g*c,b=h*l+g*s,x=c*(g+_),S=s*(g+_),C=u*(h+v),w=l*(h+v),T=Math.atan2(S-b,x-y),E=Math.atan2(w-b,C-y);$a(e,y+t,b+n,a,T,E,c*l>u*s)}var to=Math.PI*2,no={centerX:0,centerY:0,ang1:0,ang2:0},ro=({x:e,y:t},n,r,i,a,o,s,c)=>{e*=n,t*=r;let l=i*e-a*t,u=a*e+i*t;return c.x=l+o,c.y=u+s,c};function io(e,t){let n=t===-1.5707963267948966?-.551915024494:4/3*Math.tan(t/4),r=t===1.5707963267948966?.551915024494:n,i=Math.cos(e),a=Math.sin(e),o=Math.cos(e+t),s=Math.sin(e+t);return[{x:i-a*r,y:a+i*r},{x:o+s*r,y:s-o*r},{x:o,y:s}]}var ao=(e,t,n,r)=>{let i=e*r-t*n<0?-1:1,a=e*n+t*r;return a>1&&(a=1),a<-1&&(a=-1),i*Math.acos(a)},oo=(e,t,n,r,i,a,o,s,c,l,u,d,f)=>{let p=i**2,m=a**2,h=u**2,g=d**2,_=p*m-p*g-m*h;_<0&&(_=0),_/=p*g+m*h,_=Math.sqrt(_)*(o===s?-1:1);let v=_*i/a*d,y=_*-a/i*u,b=l*v-c*y+(e+n)/2,x=c*v+l*y+(t+r)/2,S=(u-v)/i,C=(d-y)/a,w=(-u-v)/i,T=(-d-y)/a,E=ao(1,0,S,C),D=ao(S,C,w,T);s===0&&D>0&&(D-=to),s===1&&D<0&&(D+=to),f.centerX=b,f.centerY=x,f.ang1=E,f.ang2=D};function so(e,t,n,r,i,a,o,s=0,c=0,l=0){if(a===0||o===0)return;let u=Math.sin(s*to/360),d=Math.cos(s*to/360),f=d*(t-r)/2+u*(n-i)/2,p=-u*(t-r)/2+d*(n-i)/2;if(f===0&&p===0)return;a=Math.abs(a),o=Math.abs(o);let m=f**2/a**2+p**2/o**2;m>1&&(a*=Math.sqrt(m),o*=Math.sqrt(m)),oo(t,n,r,i,a,o,c,l,u,d,f,p,no);let{ang1:h,ang2:g}=no,{centerX:_,centerY:v}=no,y=Math.abs(g)/(to/4);Math.abs(1-y)<1e-7&&(y=1);let b=Math.max(Math.ceil(y),1);g/=b;let x=e[e.length-2],S=e[e.length-1],C={x:0,y:0};for(let t=0;t<b;t++){let t=io(h,g),{x:n,y:r}=ro(t[0],a,o,d,u,_,v,C),{x:i,y:s}=ro(t[1],a,o,d,u,_,v,C),{x:c,y:l}=ro(t[2],a,o,d,u,_,v,C);Ha(e,x,S,n,r,i,s,c,l),x=c,S=l,h+=g}}function co(e,t,n){let r=(e,t)=>{let n=t.x-e.x,r=t.y-e.y,i=Math.sqrt(n*n+r*r);return{len:i,nx:n/i,ny:r/i}},i=(t,n)=>{t===0?e.moveTo(n.x,n.y):e.lineTo(n.x,n.y)},a=t[t.length-1];for(let o=0;o<t.length;o++){let s=t[o%t.length],c=s.radius??n;if(c<=0){i(o,s),a=s;continue}let l=t[(o+1)%t.length],u=r(s,a),d=r(s,l);if(u.len<1e-4||d.len<1e-4){i(o,s),a=s;continue}let f=Math.asin(u.nx*d.ny-u.ny*d.nx),p=1,m=!1;u.nx*d.nx-u.ny*-d.ny<0?f<0?f=Math.PI+f:(f=Math.PI-f,p=-1,m=!0):f>0&&(p=-1,m=!0);let h=f/2,g,_=Math.abs(Math.cos(h)*c/Math.sin(h));_>Math.min(u.len/2,d.len/2)?(_=Math.min(u.len/2,d.len/2),g=Math.abs(_*Math.sin(h)/Math.cos(h))):g=c;let v=s.x+d.nx*_+-d.ny*g*p,y=s.y+d.ny*_+d.nx*g*p,b=Math.atan2(u.ny,u.nx)+Math.PI/2*p,x=Math.atan2(d.ny,d.nx)-Math.PI/2*p;o===0&&e.moveTo(v+Math.cos(b)*g,y+Math.sin(b)*g),e.arc(v,y,g,b,x,m),a=s}}function lo(e,t,n,r){let i=(e,t)=>Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2),a=(e,t,n)=>({x:e.x+(t.x-e.x)*n,y:e.y+(t.y-e.y)*n}),o=t.length;for(let s=0;s<o;s++){let c=t[(s+1)%o],l=c.radius??n;if(l<=0){s===0?e.moveTo(c.x,c.y):e.lineTo(c.x,c.y);continue}let u=t[s],d=t[(s+2)%o],f=i(u,c),p;p=f<1e-4?c:a(c,u,Math.min(f/2,l)/f);let m=i(d,c),h;h=m<1e-4?c:a(c,d,Math.min(m/2,l)/m),s===0?e.moveTo(p.x,p.y):e.lineTo(p.x,p.y),e.quadraticCurveTo(c.x,c.y,h.x,h.y,r)}}var uo=new l,fo=class{constructor(e){this.shapePrimitives=[],this._currentPoly=null,this._bounds=new n,this._graphicsPath2D=e,this.signed=e.checkForHoles}moveTo(e,t){return this.startPoly(e,t),this}lineTo(e,t){this._ensurePoly();let n=this._currentPoly.points,r=n[n.length-2],i=n[n.length-1];return(r!==e||i!==t)&&n.push(e,t),this}arc(e,t,n,r,i,a){this._ensurePoly(!1);let o=this._currentPoly.points;return $a(o,e,t,n,r,i,a),this}arcTo(e,t,n,r,i){this._ensurePoly();let a=this._currentPoly.points;return eo(a,e,t,n,r,i),this}arcToSvg(e,t,n,r,i,a,o){let s=this._currentPoly.points;return so(s,this._currentPoly.lastX,this._currentPoly.lastY,a,o,e,t,n,r,i),this}bezierCurveTo(e,t,n,r,i,a,o){this._ensurePoly();let s=this._currentPoly;return Ha(this._currentPoly.points,s.lastX,s.lastY,e,t,n,r,i,a,o),this}quadraticCurveTo(e,t,n,r,i){this._ensurePoly();let a=this._currentPoly;return Xa(this._currentPoly.points,a.lastX,a.lastY,e,t,n,r,i),this}closePath(){return this.endPoly(!0),this}addPath(e,t){this.endPoly(),t&&!t.isIdentity()&&(e=e.clone(!0),e.transform(t));let n=this.shapePrimitives,r=n.length;for(let t=0;t<e.instructions.length;t++){let n=e.instructions[t];this[n.action](...n.data)}if(e.checkForHoles&&n.length-r>1){let e=null;for(let t=r;t<n.length;t++){let r=n[t];if(r.shape.type===`polygon`){let i=r.shape,a=e?.shape;a&&a.containsPolygon(i)?(e.holes||=[],e.holes.push(r),n.copyWithin(t,t+1),n.length--,t--):e=r}}}return this}finish(e=!1){this.endPoly(e)}rect(e,t,n,r,i){return this.drawShape(new l(e,t,n,r),i),this}circle(e,t,n,r){return this.drawShape(new Vi(e,t,n),r),this}poly(e,t,n){let r=new qi(e);return r.closePath=t,this.drawShape(r,n),this}regularPoly(e,t,n,r,i=0,a){r=Math.max(r|0,3);let o=-1*Math.PI/2+i,s=Math.PI*2/r,c=[];for(let i=0;i<r;i++){let r=o-i*s;c.push(e+n*Math.cos(r),t+n*Math.sin(r))}return this.poly(c,!0,a),this}roundPoly(e,t,n,r,i,a=0,o){if(r=Math.max(r|0,3),i<=0)return this.regularPoly(e,t,n,r,a);let s=n*Math.sin(Math.PI/r)-.001;i=Math.min(i,s);let c=-1*Math.PI/2+a,l=Math.PI*2/r,u=(r-2)*Math.PI/r/2;for(let a=0;a<r;a++){let r=a*l+c,s=e+n*Math.cos(r),d=t+n*Math.sin(r),f=r+Math.PI+u,p=r-Math.PI-u,m=s+i*Math.cos(f),h=d+i*Math.sin(f),g=s+i*Math.cos(p),_=d+i*Math.sin(p);a===0?this.moveTo(m,h):this.lineTo(m,h),this.quadraticCurveTo(s,d,g,_,o)}return this.closePath()}roundShape(e,t,n=!1,r){return e.length<3?this:(n?lo(this,e,t,r):co(this,e,t),this.closePath())}filletRect(e,t,n,r,i){if(i===0)return this.rect(e,t,n,r);let a=Math.min(n,r)/2,o=Math.min(a,Math.max(-a,i)),s=e+n,c=t+r,l=o<0?-o:0,u=Math.abs(o);return this.moveTo(e,t+u).arcTo(e+l,t+l,e+u,t,u).lineTo(s-u,t).arcTo(s-l,t+l,s,t+u,u).lineTo(s,c-u).arcTo(s-l,c-l,e+n-u,c,u).lineTo(e+u,c).arcTo(e+l,c-l,e,c-u,u).closePath()}chamferRect(e,t,n,r,i,a){if(i<=0)return this.rect(e,t,n,r);let o=Math.min(i,Math.min(n,r)/2),s=e+n,c=t+r,l=[e+o,t,s-o,t,s,t+o,s,c-o,s-o,c,e+o,c,e,c-o,e,t+o];for(let e=l.length-1;e>=2;e-=2)l[e]===l[e-2]&&l[e-1]===l[e-3]&&l.splice(e-1,2);return this.poly(l,!0,a)}ellipse(e,t,n,r,i){return this.drawShape(new Hi(e,t,n,r),i),this}roundRect(e,t,n,r,i,a){return this.drawShape(new Yi(e,t,n,r,i),a),this}drawShape(e,t){return this.endPoly(),this.shapePrimitives.push({shape:e,transform:t}),this}startPoly(e,t){let n=this._currentPoly;return n&&this.endPoly(),n=new qi,n.points.push(e,t),this._currentPoly=n,this}endPoly(e=!1){let t=this._currentPoly;return t&&t.points.length>2&&(t.closePath=e,this.shapePrimitives.push({shape:t})),this._currentPoly=null,this}_ensurePoly(e=!0){if(!this._currentPoly&&(this._currentPoly=new qi,e)){let e=this.shapePrimitives[this.shapePrimitives.length-1];if(e){let t=e.shape.x,n=e.shape.y;if(e.transform&&!e.transform.isIdentity()){let r=e.transform,i=t;t=r.a*t+r.c*n+r.tx,n=r.b*i+r.d*n+r.ty}this._currentPoly.points.push(t,n)}else this._currentPoly.points.push(0,0)}}buildPath(){let e=this._graphicsPath2D;this.shapePrimitives.length=0,this._currentPoly=null;for(let t=0;t<e.instructions.length;t++){let n=e.instructions[t];this[n.action](...n.data)}this.finish()}get bounds(){let e=this._bounds;e.clear();let t=this.shapePrimitives;for(let n=0;n<t.length;n++){let r=t[n],i=r.shape.getBounds(uo);r.transform?e.addRect(i,r.transform):e.addRect(i)}return e}},po=class e{constructor(e,t=!1){this.instructions=[],this.uid=g(`graphicsPath`),this._dirty=!0,this.checkForHoles=t,typeof e==`string`?Bi(e,this):this.instructions=e?.slice()??[]}get shapePath(){return this._shapePath||=new fo(this),this._dirty&&(this._dirty=!1,this._shapePath.buildPath()),this._shapePath}addPath(e,t){return e=e.clone(),this.instructions.push({action:`addPath`,data:[e,t]}),this._dirty=!0,this}arc(...e){return this.instructions.push({action:`arc`,data:e}),this._dirty=!0,this}arcTo(...e){return this.instructions.push({action:`arcTo`,data:e}),this._dirty=!0,this}arcToSvg(...e){return this.instructions.push({action:`arcToSvg`,data:e}),this._dirty=!0,this}bezierCurveTo(...e){return this.instructions.push({action:`bezierCurveTo`,data:e}),this._dirty=!0,this}bezierCurveToShort(e,t,n,r,i){let a=this.instructions[this.instructions.length-1],o=this.getLastPoint(ie.shared),s=0,c=0;if(!a||a.action!==`bezierCurveTo`)s=o.x,c=o.y;else{s=a.data[2],c=a.data[3];let e=o.x,t=o.y;s=e+(e-s),c=t+(t-c)}return this.instructions.push({action:`bezierCurveTo`,data:[s,c,e,t,n,r,i]}),this._dirty=!0,this}closePath(){return this.instructions.push({action:`closePath`,data:[]}),this._dirty=!0,this}ellipse(...e){return this.instructions.push({action:`ellipse`,data:e}),this._dirty=!0,this}lineTo(...e){return this.instructions.push({action:`lineTo`,data:e}),this._dirty=!0,this}moveTo(...e){return this.instructions.push({action:`moveTo`,data:e}),this}quadraticCurveTo(...e){return this.instructions.push({action:`quadraticCurveTo`,data:e}),this._dirty=!0,this}quadraticCurveToShort(e,t,n){let r=this.instructions[this.instructions.length-1],i=this.getLastPoint(ie.shared),a=0,o=0;if(!r||r.action!==`quadraticCurveTo`)a=i.x,o=i.y;else{a=r.data[0],o=r.data[1];let e=i.x,t=i.y;a=e+(e-a),o=t+(t-o)}return this.instructions.push({action:`quadraticCurveTo`,data:[a,o,e,t,n]}),this._dirty=!0,this}rect(e,t,n,r,i){return this.instructions.push({action:`rect`,data:[e,t,n,r,i]}),this._dirty=!0,this}circle(e,t,n,r){return this.instructions.push({action:`circle`,data:[e,t,n,r]}),this._dirty=!0,this}roundRect(...e){return this.instructions.push({action:`roundRect`,data:e}),this._dirty=!0,this}poly(...e){return this.instructions.push({action:`poly`,data:e}),this._dirty=!0,this}regularPoly(...e){return this.instructions.push({action:`regularPoly`,data:e}),this._dirty=!0,this}roundPoly(...e){return this.instructions.push({action:`roundPoly`,data:e}),this._dirty=!0,this}roundShape(...e){return this.instructions.push({action:`roundShape`,data:e}),this._dirty=!0,this}filletRect(...e){return this.instructions.push({action:`filletRect`,data:e}),this._dirty=!0,this}chamferRect(...e){return this.instructions.push({action:`chamferRect`,data:e}),this._dirty=!0,this}star(e,t,n,r,i,a,o){i||=r/2;let s=-1*Math.PI/2+a,c=n*2,l=Math.PI*2/c,u=[];for(let n=0;n<c;n++){let a=n%2?i:r,o=n*l+s;u.push(e+a*Math.cos(o),t+a*Math.sin(o))}return this.poly(u,!0,o),this}clone(t=!1){let n=new e;if(n.checkForHoles=this.checkForHoles,!t)n.instructions=this.instructions.slice();else for(let e=0;e<this.instructions.length;e++){let t=this.instructions[e];n.instructions.push({action:t.action,data:t.data.slice()})}return n}clear(){return this.instructions.length=0,this._dirty=!0,this}transform(e){if(e.isIdentity())return this;let t=e.a,n=e.b,r=e.c,i=e.d,a=e.tx,o=e.ty,s=0,c=0,l=0,d=0,f=0,p=0,m=0,h=0;for(let g=0;g<this.instructions.length;g++){let _=this.instructions[g],v=_.data;switch(_.action){case`moveTo`:case`lineTo`:s=v[0],c=v[1],v[0]=t*s+r*c+a,v[1]=n*s+i*c+o;break;case`bezierCurveTo`:l=v[0],d=v[1],f=v[2],p=v[3],s=v[4],c=v[5],v[0]=t*l+r*d+a,v[1]=n*l+i*d+o,v[2]=t*f+r*p+a,v[3]=n*f+i*p+o,v[4]=t*s+r*c+a,v[5]=n*s+i*c+o;break;case`quadraticCurveTo`:l=v[0],d=v[1],s=v[2],c=v[3],v[0]=t*l+r*d+a,v[1]=n*l+i*d+o,v[2]=t*s+r*c+a,v[3]=n*s+i*c+o;break;case`arcToSvg`:s=v[5],c=v[6],m=v[0],h=v[1],v[0]=t*m+r*h,v[1]=n*m+i*h,v[5]=t*s+r*c+a,v[6]=n*s+i*c+o;break;case`circle`:v[4]=mo(v[3],e);break;case`rect`:v[4]=mo(v[4],e);break;case`ellipse`:v[8]=mo(v[8],e);break;case`roundRect`:v[5]=mo(v[5],e);break;case`addPath`:v[0].transform(e);break;case`poly`:v[2]=mo(v[2],e);break;case`regularPoly`:case`chamferRect`:v[5]=mo(v[5],e);break;case`closePath`:break;default:u(`unknown transform action`,_.action);break}}return this._dirty=!0,this}get bounds(){return this.shapePath.bounds}getLastPoint(e){let t=this.instructions.length-1,n=this.instructions[t];if(!n)return e.x=0,e.y=0,e;for(;n.action===`closePath`;){if(t--,t<0)return e.x=0,e.y=0,e;n=this.instructions[t]}switch(n.action){case`moveTo`:case`lineTo`:e.x=n.data[0],e.y=n.data[1];break;case`quadraticCurveTo`:e.x=n.data[2],e.y=n.data[3];break;case`bezierCurveTo`:e.x=n.data[4],e.y=n.data[5];break;case`arc`:case`arcToSvg`:e.x=n.data[5],e.y=n.data[6];break;case`addPath`:n.data[0].getLastPoint(e);break}return e}};function mo(e,t){return e?e.prepend(t):t.clone()}function K(e,t,n){let r=e.getAttribute(t);return r?Number(r):n}function ho(e,t){let n=e.querySelectorAll(`defs`);for(let e=0;e<n.length;e++){let r=n[e];for(let e=0;e<r.children.length;e++){let n=r.children[e];switch(n.nodeName.toLowerCase()){case`lineargradient`:t.defs[n.id]=yo(n);break;case`radialgradient`:t.defs[n.id]=bo(n);break;default:break}}}}function go(e,t,n){let r=e.getAttribute(t);if(r?.trim().endsWith(`%`)){let e=Number(r.trim().slice(0,-1));return Number.isNaN(e)?n:e/100}return K(e,t,n)}function _o(e){return(e.getAttribute(`gradientUnits`)||`objectBoundingBox`)===`objectBoundingBox`?`local`:`global`}function vo(e){let t=[];for(let n=0;n<e.children.length;n++){let r=e.children[n],i=go(r,`offset`,0),a=I.shared.setValue(r.getAttribute(`stop-color`)).toNumber();t.push({offset:i,color:a})}return t}function yo(e){let t=go(e,`x1`,0),n=go(e,`y1`,0),r=go(e,`x2`,1),i=go(e,`y2`,0);return new _a({type:`linear`,start:{x:t,y:n},end:{x:r,y:i},textureSpace:_o(e),colorStops:vo(e)})}function bo(e){let t=go(e,`cx`,.5),n=go(e,`cy`,.5),r=go(e,`r`,.5),i=go(e,`fx`,t),a=go(e,`fy`,n),o=go(e,`fr`,0);return new _a({type:`radial`,center:{x:i,y:a},innerRadius:o,outerCenter:{x:t,y:n},outerRadius:r,textureSpace:_o(e),colorStops:vo(e)})}function xo(e){let t=e.match(/url\s*\(\s*['"]?\s*#([^'"\s)]+)\s*['"]?\s*\)/i);return t?t[1]:``}var So={fill:{type:`paint`,default:0},"fill-opacity":{type:`number`,default:1},stroke:{type:`paint`,default:0},"stroke-width":{type:`number`,default:1},"stroke-opacity":{type:`number`,default:1},"stroke-linecap":{type:`string`,default:`butt`},"stroke-linejoin":{type:`string`,default:`miter`},"stroke-miterlimit":{type:`number`,default:10},"stroke-dasharray":{type:`string`,default:`none`},"stroke-dashoffset":{type:`number`,default:0},opacity:{type:`number`,default:1}};function Co(e,t){let n=e.getAttribute(`style`),r={},i={},a={strokeStyle:r,fillStyle:i,useFill:!1,useStroke:!1};for(let n in So){let r=e.getAttribute(n);r&&wo(t,a,n,r.trim())}if(n){let e=n.split(`;`);for(let n=0;n<e.length;n++){let[r,i]=e[n].trim().split(`:`);So[r]&&wo(t,a,r,i.trim())}}return{strokeStyle:a.useStroke?r:null,fillStyle:a.useFill?i:null,useFill:a.useFill,useStroke:a.useStroke}}function wo(e,t,n,r){switch(n){case`stroke`:if(r!==`none`){if(r.startsWith(`url(`)){let n=xo(r);t.strokeStyle.fill=e.defs[n]}else t.strokeStyle.color=I.shared.setValue(r).toNumber();t.useStroke=!0}break;case`stroke-width`:t.strokeStyle.width=Number(r);break;case`fill`:if(r!==`none`){if(r.startsWith(`url(`)){let n=xo(r);t.fillStyle.fill=e.defs[n]}else t.fillStyle.color=I.shared.setValue(r).toNumber();t.useFill=!0}break;case`fill-opacity`:t.fillStyle.alpha=Number(r);break;case`stroke-opacity`:t.strokeStyle.alpha=Number(r);break;case`opacity`:t.fillStyle.alpha=Number(r),t.strokeStyle.alpha=Number(r);break}}function To(e){if(e.length<=2)return!0;let t=e.map(e=>e.area).sort((e,t)=>t-e),[n,r]=t,i=t[t.length-1],a=n/r,o=r/i;return!(a>3&&o<2)}function Eo(e){return e.split(/(?=[Mm])/).filter(e=>e.trim().length>0)}function Do(e){let t=e.match(/[-+]?[0-9]*\.?[0-9]+/g);if(!t||t.length<4)return 0;let n=t.map(Number),r=[],i=[];for(let e=0;e<n.length;e+=2)e+1<n.length&&(r.push(n[e]),i.push(n[e+1]));if(r.length===0||i.length===0)return 0;let a=Math.min(...r),o=Math.max(...r),s=Math.min(...i),c=Math.max(...i);return(o-a)*(c-s)}function Oo(e,t){let n=new po(e,!1);for(let e of n.instructions)t.instructions.push(e)}function ko(e,t){if(typeof e==`string`){let t=document.createElement(`div`);t.innerHTML=e.trim(),e=t.querySelector(`svg`)}let n={context:t,defs:{},path:new po};ho(e,n);let r=e.children,{fillStyle:i,strokeStyle:a}=Co(e,n);for(let e=0;e<r.length;e++){let t=r[e];t.nodeName.toLowerCase()!==`defs`&&Ao(t,n,i,a)}return t}function Ao(e,t,n,r){let i=e.children,{fillStyle:a,strokeStyle:o}=Co(e,t);a&&n?n={...n,...a}:a&&(n=a),o&&r?r={...r,...o}:o&&(r=o);let s=!n&&!r;s&&(n={color:0});let c,l,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;switch(e.nodeName.toLowerCase()){case`path`:{S=e.getAttribute(`d`);let i=e.getAttribute(`fill-rule`),a=Eo(S),o=i===`evenodd`,s=a.length>1;if(o&&s){let e=a.map(e=>({path:e,area:Do(e)}));if(e.sort((e,t)=>t.area-e.area),a.length>3||!To(e))for(let i=0;i<e.length;i++){let a=e[i],o=i===0;t.context.beginPath();let s=new po(void 0,!0);Oo(a.path,s),t.context.path(s),o?(n&&t.context.fill(n),r&&t.context.stroke(r)):t.context.cut()}else for(let i=0;i<e.length;i++){let a=e[i],o=i%2==1;t.context.beginPath();let s=new po(void 0,!0);Oo(a.path,s),t.context.path(s),o?t.context.cut():(n&&t.context.fill(n),r&&t.context.stroke(r))}}else C=new po(S,i?i===`evenodd`:!0),t.context.path(C),n&&t.context.fill(n),r&&t.context.stroke(r);break}case`circle`:h=K(e,`cx`,0),g=K(e,`cy`,0),_=K(e,`r`,0),t.context.ellipse(h,g,_,_),n&&t.context.fill(n),r&&t.context.stroke(r);break;case`rect`:c=K(e,`x`,0),l=K(e,`y`,0),w=K(e,`width`,0),T=K(e,`height`,0),v=K(e,`rx`,0),y=K(e,`ry`,0),v||y?t.context.roundRect(c,l,w,T,v||y):t.context.rect(c,l,w,T),n&&t.context.fill(n),r&&t.context.stroke(r);break;case`ellipse`:h=K(e,`cx`,0),g=K(e,`cy`,0),v=K(e,`rx`,0),y=K(e,`ry`,0),t.context.beginPath(),t.context.ellipse(h,g,v,y),n&&t.context.fill(n),r&&t.context.stroke(r);break;case`line`:d=K(e,`x1`,0),f=K(e,`y1`,0),p=K(e,`x2`,0),m=K(e,`y2`,0),t.context.beginPath(),t.context.moveTo(d,f),t.context.lineTo(p,m),r&&t.context.stroke(r);break;case`polygon`:x=e.getAttribute(`points`),b=x.match(/-?\d+/g).map(e=>parseInt(e,10)),t.context.poly(b,!0),n&&t.context.fill(n),r&&t.context.stroke(r);break;case`polyline`:x=e.getAttribute(`points`),b=x.match(/-?\d+/g).map(e=>parseInt(e,10)),t.context.poly(b,!1),r&&t.context.stroke(r);break;case`g`:case`svg`:break;default:u(`[SVG parser] <${e.nodeName}> elements unsupported`);break}s&&(n=null);for(let e=0;e<i.length;e++)Ao(i[e],t,n,r)}function jo(e){return e.texture!==void 0}var Mo={repeat:{addressModeU:`repeat`,addressModeV:`repeat`},"repeat-x":{addressModeU:`repeat`,addressModeV:`clamp-to-edge`},"repeat-y":{addressModeU:`clamp-to-edge`,addressModeV:`repeat`},"no-repeat":{addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`}},No=class{constructor(e,t){this.uid=g(`fillPattern`),this._tick=0,this.transform=new C;let n=jo(e)?e:{texture:e,repetition:t};this.texture=n.texture,this.textureSpace=n.textureSpace??`global`;let r=n.repetition;r&&(this.texture.source.style.addressModeU=Mo[r].addressModeU,this.texture.source.style.addressModeV=Mo[r].addressModeV)}setTransform(e){if(e){if(this.transform.equals(e))return;this.transform.copyFrom(e)}else{if(this.transform.isIdentity())return;this.transform.identity()}this._tick++}get texture(){return this._texture}set texture(e){this._texture!==e&&(this._texture=e,this._tick++)}get styleKey(){return`fill-pattern-${this.uid}-${this._tick}`}destroy(){this.texture.destroy(!0),this.texture=null}};function Po(e){return I.isColorLike(e)}function Fo(e){return e instanceof No}function Io(e){return e instanceof _a}function Lo(e){return e instanceof f}function Ro(e,t,n){let r=I.shared.setValue(t??0);return e.color=r.toNumber(),e.alpha=r.alpha===1?n.alpha:r.alpha,e.texture=f.WHITE,{...n,...e}}function zo(e,t,n){return e.texture=t,{...n,...e}}function Bo(e,t,n){return e.fill=t,e.color=16777215,e.texture=t.texture,e.matrix=t.transform,e.textureSpace=t.textureSpace,{...n,...e}}function Vo(e,t,n){return t.buildGradient(),e.fill=t,e.color=16777215,e.texture=t.texture,e.matrix=t.transform,e.textureSpace=t.textureSpace,{...n,...e}}function Ho(e,t){let n={...t,...e},r=I.shared.setValue(n.color);return n.alpha*=r.alpha,n.color=r.toNumber(),n}function Uo(e,t){if(e==null)return null;let n={},r=e;return Po(e)?Ro(n,e,t):Lo(e)?zo(n,e,t):Fo(e)?Bo(n,e,t):Io(e)?Vo(n,e,t):r.fill&&Fo(r.fill)?Bo(r,r.fill,t):r.fill&&Io(r.fill)?Vo(r,r.fill,t):Ho(r,t)}function Wo(e,t){let{width:n,alignment:r,miterLimit:i,cap:a,join:o,pixelLine:s,...c}=t,l=Uo(e,c);return l?{width:n,alignment:r,miterLimit:i,cap:a,join:o,pixelLine:s,...l}:null}function Go(e,t){let n=1,r=e.shapePath.shapePrimitives;for(let e=0;e<r.length;e++){let i=r[e].shape;if(i.type!==`polygon`)continue;let a=i.points,o=a.length;if(o<6)continue;let s=i.closePath;for(let e=0;e<o;e+=2){if(!s&&(e===0||e===o-2))continue;let r=(e-2+o)%o,i=(e+2)%o,c=a[r],l=a[r+1],u=a[e],d=a[e+1],f=a[i],p=a[i+1],m=c-u,h=l-d,g=f-u,_=p-d,v=m*m+h*h,y=g*g+_*_;if(v<1e-12||y<1e-12)continue;let b=(m*g+h*_)/Math.sqrt(v*y);b<-1?b=-1:b>1&&(b=1);let x=Math.sqrt((1-b)*.5);if(x<1e-6)continue;let S=Math.min(1/x,t);S>n&&(n=S)}}return n}var Ko=new ie,qo=new C,Jo=class e extends ee{constructor(){super(...arguments),this._gpuData=Object.create(null),this.autoGarbageCollect=!0,this._gcLastUsed=-1,this.uid=g(`graphicsContext`),this.dirty=!0,this.batchMode=`auto`,this.instructions=[],this.destroyed=!1,this._activePath=new po,this._transform=new C,this._fillStyle={...e.defaultFillStyle},this._strokeStyle={...e.defaultStrokeStyle},this._stateStack=[],this._tick=0,this._bounds=new n,this._boundsDirty=!0}clone(){let t=new e;return t.batchMode=this.batchMode,t.instructions=this.instructions.slice(),t._activePath=this._activePath.clone(),t._transform=this._transform.clone(),t._fillStyle={...this._fillStyle},t._strokeStyle={...this._strokeStyle},t._stateStack=this._stateStack.slice(),t._bounds=this._bounds.clone(),t._boundsDirty=!0,t}get fillStyle(){return this._fillStyle}set fillStyle(t){this._fillStyle=Uo(t,e.defaultFillStyle)}get strokeStyle(){return this._strokeStyle}set strokeStyle(t){this._strokeStyle=Wo(t,e.defaultStrokeStyle)}setFillStyle(t){return this._fillStyle=Uo(t,e.defaultFillStyle),this}setStrokeStyle(t){return this._strokeStyle=Uo(t,e.defaultStrokeStyle),this}texture(e,t,n,r,i,a){return this.instructions.push({action:`texture`,data:{image:e,dx:n||0,dy:r||0,dw:i||e.frame.width,dh:a||e.frame.height,transform:this._transform.clone(),alpha:this._fillStyle.alpha,style:t||t===0?I.shared.setValue(t).toNumber():16777215}}),this.onUpdate(),this}beginPath(){return this._activePath=new po,this}fill(t,n){let r,i=this.instructions[this.instructions.length-1];return r=this._tick===0&&i?.action===`stroke`?i.data.path:this._activePath.clone(),r?(t!=null&&(n!==void 0&&typeof t==`number`&&(o(h,`GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead`),t={color:t,alpha:n}),this._fillStyle=Uo(t,e.defaultFillStyle)),this.instructions.push({action:`fill`,data:{style:this.fillStyle,path:r}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}_initNextPathLocation(){let{x:e,y:t}=this._activePath.getLastPoint(ie.shared);this._activePath.clear(),this._activePath.moveTo(e,t)}stroke(t){let n,r=this.instructions[this.instructions.length-1];return n=this._tick===0&&r?.action===`fill`?r.data.path:this._activePath.clone(),n?(t!=null&&(this._strokeStyle=Wo(t,e.defaultStrokeStyle)),this.instructions.push({action:`stroke`,data:{style:this.strokeStyle,path:n}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}cut(){for(let e=0;e<2;e++){let t=this.instructions[this.instructions.length-1-e],n=this._activePath.clone();if(t&&(t.action===`stroke`||t.action===`fill`))if(t.data.hole)t.data.hole.addPath(n);else{t.data.hole=n;break}}return this._initNextPathLocation(),this}arc(e,t,n,r,i,a){this._tick++;let o=this._transform;return this._activePath.arc(o.a*e+o.c*t+o.tx,o.b*e+o.d*t+o.ty,n,r,i,a),this}arcTo(e,t,n,r,i){this._tick++;let a=this._transform;return this._activePath.arcTo(a.a*e+a.c*t+a.tx,a.b*e+a.d*t+a.ty,a.a*n+a.c*r+a.tx,a.b*n+a.d*r+a.ty,i),this}arcToSvg(e,t,n,r,i,a,o){this._tick++;let s=this._transform;return this._activePath.arcToSvg(e,t,n,r,i,s.a*a+s.c*o+s.tx,s.b*a+s.d*o+s.ty),this}bezierCurveTo(e,t,n,r,i,a,o){this._tick++;let s=this._transform;return this._activePath.bezierCurveTo(s.a*e+s.c*t+s.tx,s.b*e+s.d*t+s.ty,s.a*n+s.c*r+s.tx,s.b*n+s.d*r+s.ty,s.a*i+s.c*a+s.tx,s.b*i+s.d*a+s.ty,o),this}closePath(){return this._tick++,this._activePath?.closePath(),this}ellipse(e,t,n,r){return this._tick++,this._activePath.ellipse(e,t,n,r,this._transform.clone()),this}circle(e,t,n){return this._tick++,this._activePath.circle(e,t,n,this._transform.clone()),this}path(e){return this._tick++,this._activePath.addPath(e,this._transform.clone()),this}lineTo(e,t){this._tick++;let n=this._transform;return this._activePath.lineTo(n.a*e+n.c*t+n.tx,n.b*e+n.d*t+n.ty),this}moveTo(e,t){this._tick++;let n=this._transform,r=this._activePath.instructions,i=n.a*e+n.c*t+n.tx,a=n.b*e+n.d*t+n.ty;return r.length===1&&r[0].action===`moveTo`?(r[0].data[0]=i,r[0].data[1]=a,this):(this._activePath.moveTo(i,a),this)}quadraticCurveTo(e,t,n,r,i){this._tick++;let a=this._transform;return this._activePath.quadraticCurveTo(a.a*e+a.c*t+a.tx,a.b*e+a.d*t+a.ty,a.a*n+a.c*r+a.tx,a.b*n+a.d*r+a.ty,i),this}rect(e,t,n,r){return this._tick++,this._activePath.rect(e,t,n,r,this._transform.clone()),this}roundRect(e,t,n,r,i){return this._tick++,this._activePath.roundRect(e,t,n,r,i,this._transform.clone()),this}poly(e,t){return this._tick++,this._activePath.poly(e,t,this._transform.clone()),this}regularPoly(e,t,n,r,i=0,a){return this._tick++,this._activePath.regularPoly(e,t,n,r,i,a),this}roundPoly(e,t,n,r,i,a){return this._tick++,this._activePath.roundPoly(e,t,n,r,i,a),this}roundShape(e,t,n,r){return this._tick++,this._activePath.roundShape(e,t,n,r),this}filletRect(e,t,n,r,i){return this._tick++,this._activePath.filletRect(e,t,n,r,i),this}chamferRect(e,t,n,r,i,a){return this._tick++,this._activePath.chamferRect(e,t,n,r,i,a),this}star(e,t,n,r,i=0,a=0){return this._tick++,this._activePath.star(e,t,n,r,i,a,this._transform.clone()),this}svg(e){return this._tick++,ko(e,this),this}restore(){let e=this._stateStack.pop();return e&&(this._transform=e.transform,this._fillStyle=e.fillStyle,this._strokeStyle=e.strokeStyle),this}save(){return this._stateStack.push({transform:this._transform.clone(),fillStyle:{...this._fillStyle},strokeStyle:{...this._strokeStyle}}),this}getTransform(){return this._transform}resetTransform(){return this._transform.identity(),this}rotate(e){return this._transform.rotate(e),this}scale(e,t=e){return this._transform.scale(e,t),this}setTransform(e,t,n,r,i,a){return e instanceof C?(this._transform.set(e.a,e.b,e.c,e.d,e.tx,e.ty),this):(this._transform.set(e,t,n,r,i,a),this)}transform(e,t,n,r,i,a){return e instanceof C?(this._transform.append(e),this):(qo.set(e,t,n,r,i,a),this._transform.append(qo),this)}translate(e,t=e){return this._transform.translate(e,t),this}clear(){return this._activePath.clear(),this.instructions.length=0,this.resetTransform(),this.onUpdate(),this}onUpdate(){this._boundsDirty=!0,this.dirty=!0,this.emit(`update`,this,16)}get bounds(){if(!this._boundsDirty)return this._bounds;this._boundsDirty=!1;let e=this._bounds;e.clear();for(let t=0;t<this.instructions.length;t++){let n=this.instructions[t],r=n.action;if(r===`fill`){let t=n.data;e.addBounds(t.path.bounds)}else if(r===`texture`){let t=n.data;e.addFrame(t.dx,t.dy,t.dx+t.dw,t.dy+t.dh,t.transform)}if(r===`stroke`){let t=n.data,r=t.style.alignment,i=t.style.width*(1-r);t.style.join===`miter`&&(i*=Go(t.path,t.style.miterLimit));let a=t.path.bounds;e.addFrame(a.minX-i,a.minY-i,a.maxX+i,a.maxY+i)}}return e.isValid||e.set(0,0,0,0),e}containsPoint(e){if(!this.bounds.containsPoint(e.x,e.y))return!1;let t=this.instructions,n=!1;for(let r=0;r<t.length;r++){let i=t[r],a=i.data,o=a.path;if(!i.action||!o)continue;let s=a.style,c=o.shapePath.shapePrimitives;for(let t=0;t<c.length;t++){let r=c[t].shape;if(!s||!r)continue;let o=c[t].transform,l=o?o.applyInverse(e,Ko):e;if(i.action===`fill`)n=r.contains(l.x,l.y);else{let e=s;n=r.strokeContains(l.x,l.y,e.width,e.alignment)}let u=a.hole;if(u){let e=u.shapePath?.shapePrimitives;if(e)for(let t=0;t<e.length;t++)e[t].shape.contains(l.x,l.y)&&(n=!1)}if(n)return!0}}return n}unload(){this.emit(`unload`,this);for(let e in this._gpuData)this._gpuData[e]?.destroy();this._gpuData=Object.create(null)}destroy(e=!1){if(!this.destroyed){if(this.destroyed=!0,this._stateStack.length=0,this._transform=null,this.unload(),this.emit(`destroy`,this),this.removeAllListeners(),typeof e==`boolean`?e:e?.texture){let t=typeof e==`boolean`?e:e?.textureSource;this._fillStyle.texture&&(this._fillStyle.fill&&`uid`in this._fillStyle.fill?this._fillStyle.fill.destroy():this._fillStyle.texture.destroy(t)),this._strokeStyle.texture&&(this._strokeStyle.fill&&`uid`in this._strokeStyle.fill?this._strokeStyle.fill.destroy():this._strokeStyle.texture.destroy(t))}this._fillStyle=null,this._strokeStyle=null,this.instructions=null,this._activePath=null,this._bounds=null,this._stateStack=null,this.customShader=null,this._transform=null}}};Jo.defaultFillStyle={color:16777215,alpha:1,texture:f.WHITE,matrix:null,fill:null,textureSpace:`local`},Jo.defaultStrokeStyle={width:1,color:16777215,alpha:1,alignment:.5,miterLimit:10,cap:`butt`,join:`miter`,texture:f.WHITE,matrix:null,fill:null,textureSpace:`local`,pixelLine:!1};var Yo=Jo,Xo=`
in vec2 vTextureCoord;
in vec4 vColor;

out vec4 finalColor;

uniform float uColorMatrix[20];
uniform float uAlpha;

uniform sampler2D uTexture;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * 0.2);
    float diff = (randomValue - 0.5) *  0.5;

    if (uAlpha == 0.0) {
        finalColor = color;
        return;
    }

    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    vec4 result;

    result.r = (uColorMatrix[0] * color.r);
        result.r += (uColorMatrix[1] * color.g);
        result.r += (uColorMatrix[2] * color.b);
        result.r += (uColorMatrix[3] * color.a);
        result.r += uColorMatrix[4];

    result.g = (uColorMatrix[5] * color.r);
        result.g += (uColorMatrix[6] * color.g);
        result.g += (uColorMatrix[7] * color.b);
        result.g += (uColorMatrix[8] * color.a);
        result.g += uColorMatrix[9];

    result.b = (uColorMatrix[10] * color.r);
       result.b += (uColorMatrix[11] * color.g);
       result.b += (uColorMatrix[12] * color.b);
       result.b += (uColorMatrix[13] * color.a);
       result.b += uColorMatrix[14];

    result.a = (uColorMatrix[15] * color.r);
       result.a += (uColorMatrix[16] * color.g);
       result.a += (uColorMatrix[17] * color.b);
       result.a += (uColorMatrix[18] * color.a);
       result.a += uColorMatrix[19];

    vec3 rgb = mix(color.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    finalColor = vec4(rgb, result.a);
}
`,Zo=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct ColorMatrixUniforms {
  uColorMatrix:array<vec4<f32>, 5>,
  uAlpha:f32,
};


@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;
@group(1) @binding(0) var<uniform> colorMatrixUniforms : ColorMatrixUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
  };
  
fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
  );
}


@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
) -> @location(0) vec4<f32> {


  var c = textureSample(uTexture, uSampler, uv);
  
  if (colorMatrixUniforms.uAlpha == 0.0) {
    return c;
  }

 
    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.r /= c.a;
      c.g /= c.a;
      c.b /= c.a;
    }

    var cm = colorMatrixUniforms.uColorMatrix;


    var result = vec4<f32>(0.);

    result.r = (cm[0][0] * c.r);
    result.r += (cm[0][1] * c.g);
    result.r += (cm[0][2] * c.b);
    result.r += (cm[0][3] * c.a);
    result.r += cm[1][0];

    result.g = (cm[1][1] * c.r);
    result.g += (cm[1][2] * c.g);
    result.g += (cm[1][3] * c.b);
    result.g += (cm[2][0] * c.a);
    result.g += cm[2][1];

    result.b = (cm[2][2] * c.r);
    result.b += (cm[2][3] * c.g);
    result.b += (cm[3][0] * c.b);
    result.b += (cm[3][1] * c.a);
    result.b += cm[3][2];

    result.a = (cm[3][3] * c.r);
    result.a += (cm[4][0] * c.g);
    result.a += (cm[4][1] * c.b);
    result.a += (cm[4][2] * c.a);
    result.a += cm[4][3];

    var rgb = mix(c.rgb, result.rgb, colorMatrixUniforms.uAlpha);

    rgb.r *= result.a;
    rgb.g *= result.a;
    rgb.b *= result.a;

    return vec4(rgb, result.a);
}`,Qo=class extends E{constructor(e={}){let t=new S({uColorMatrix:{value:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],type:`f32`,size:20},uAlpha:{value:1,type:`f32`}}),n=w.from({vertex:{source:Zo,entryPoint:`mainVertex`},fragment:{source:Zo,entryPoint:`mainFragment`}}),r=k.from({vertex:ue,fragment:Xo,name:`color-matrix-filter`});super({...e,gpuProgram:n,glProgram:r,resources:{colorMatrixUniforms:t}}),this.alpha=1}_loadMatrix(e,t=!1){if(t){let t=[...e];this._multiply(t,this.matrix,e),this.resources.colorMatrixUniforms.uniforms.uColorMatrix=t}else this.resources.colorMatrixUniforms.uniforms.uColorMatrix=e;this.resources.colorMatrixUniforms.update()}_multiply(e,t,n){return e[0]=t[0]*n[0]+t[1]*n[5]+t[2]*n[10]+t[3]*n[15],e[1]=t[0]*n[1]+t[1]*n[6]+t[2]*n[11]+t[3]*n[16],e[2]=t[0]*n[2]+t[1]*n[7]+t[2]*n[12]+t[3]*n[17],e[3]=t[0]*n[3]+t[1]*n[8]+t[2]*n[13]+t[3]*n[18],e[4]=t[0]*n[4]+t[1]*n[9]+t[2]*n[14]+t[3]*n[19]+t[4],e[5]=t[5]*n[0]+t[6]*n[5]+t[7]*n[10]+t[8]*n[15],e[6]=t[5]*n[1]+t[6]*n[6]+t[7]*n[11]+t[8]*n[16],e[7]=t[5]*n[2]+t[6]*n[7]+t[7]*n[12]+t[8]*n[17],e[8]=t[5]*n[3]+t[6]*n[8]+t[7]*n[13]+t[8]*n[18],e[9]=t[5]*n[4]+t[6]*n[9]+t[7]*n[14]+t[8]*n[19]+t[9],e[10]=t[10]*n[0]+t[11]*n[5]+t[12]*n[10]+t[13]*n[15],e[11]=t[10]*n[1]+t[11]*n[6]+t[12]*n[11]+t[13]*n[16],e[12]=t[10]*n[2]+t[11]*n[7]+t[12]*n[12]+t[13]*n[17],e[13]=t[10]*n[3]+t[11]*n[8]+t[12]*n[13]+t[13]*n[18],e[14]=t[10]*n[4]+t[11]*n[9]+t[12]*n[14]+t[13]*n[19]+t[14],e[15]=t[15]*n[0]+t[16]*n[5]+t[17]*n[10]+t[18]*n[15],e[16]=t[15]*n[1]+t[16]*n[6]+t[17]*n[11]+t[18]*n[16],e[17]=t[15]*n[2]+t[16]*n[7]+t[17]*n[12]+t[18]*n[17],e[18]=t[15]*n[3]+t[16]*n[8]+t[17]*n[13]+t[18]*n[18],e[19]=t[15]*n[4]+t[16]*n[9]+t[17]*n[14]+t[18]*n[19]+t[19],e}brightness(e,t){let n=[e,0,0,0,0,0,e,0,0,0,0,0,e,0,0,0,0,0,1,0];this._loadMatrix(n,t)}tint(e,t){let[n,r,i]=I.shared.setValue(e).toArray(),a=[n,0,0,0,0,0,r,0,0,0,0,0,i,0,0,0,0,0,1,0];this._loadMatrix(a,t)}greyscale(e,t){let n=[e,e,e,0,0,e,e,e,0,0,e,e,e,0,0,0,0,0,1,0];this._loadMatrix(n,t)}grayscale(e,t){this.greyscale(e,t)}blackAndWhite(e){this._loadMatrix([.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0],e)}hue(e,t){e=(e||0)/180*Math.PI;let n=Math.cos(e),r=Math.sin(e),i=Math.sqrt,a=1/3,o=i(a),s=[n+(1-n)*a,a*(1-n)-o*r,a*(1-n)+o*r,0,0,a*(1-n)+o*r,n+a*(1-n),a*(1-n)-o*r,0,0,a*(1-n)-o*r,a*(1-n)+o*r,n+a*(1-n),0,0,0,0,0,1,0];this._loadMatrix(s,t)}contrast(e,t){let n=(e||0)+1,r=-.5*(n-1),i=[n,0,0,0,r,0,n,0,0,r,0,0,n,0,r,0,0,0,1,0];this._loadMatrix(i,t)}saturate(e=0,t){let n=e*2/3+1,r=(n-1)*-.5,i=[n,r,r,0,0,r,n,r,0,0,r,r,n,0,0,0,0,0,1,0];this._loadMatrix(i,t)}desaturate(){this.saturate(-1)}negative(e){this._loadMatrix([-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0],e)}sepia(e){this._loadMatrix([.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0],e)}technicolor(e){this._loadMatrix([1.9125277891456083,-.8545344976951645,-.09155508482755585,0,.046249425232852304,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-.2758903984886823,-.231103377548616,-.7501899197440212,1.847597816108189,0,.12137623870388682,0,0,0,1,0],e)}polaroid(e){this._loadMatrix([1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0],e)}toBGR(e){this._loadMatrix([0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0],e)}kodachrome(e){this._loadMatrix([1.1285582396593525,-.3967382283601348,-.03992559172921793,0,.24991995145868634,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,.09698983488904393,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,.13972481597886063,0,0,0,1,0],e)}browni(e){this._loadMatrix([.5997023498159715,.34553243048391263,-.2708298674538042,0,.1860075629647401,-.037703249837783157,.8609577587992641,.15059552388459913,0,-.14497417640467167,.24113635128153335,-.07441037908422492,.44972182064877153,0,-.029655197167024642,0,0,0,1,0],e)}vintage(e){this._loadMatrix([.6279345635605994,.3202183420819367,-.03965408211312453,0,.037848179746251466,.02578397704808868,.6441188644374771,.03259127616149294,0,.029265996770472907,.0466055556782719,-.0851232987247891,.5241648018700465,0,.020232119953863904,0,0,0,1,0],e)}colorTone(e,t,n,r,i){e||=.2,t||=.15,n||=16770432,r||=3375104;let a=I.shared,[o,s,c]=a.setValue(n).toArray(),[l,u,d]=a.setValue(r).toArray(),f=[.3,.59,.11,0,0,o,s,c,e,0,l,u,d,t,0,o-l,s-u,c-d,0,0];this._loadMatrix(f,i)}night(e,t){e||=.1;let n=[e*-2,-e,0,0,0,-e,0,e,0,0,0,e,e*2,0,0,0,0,0,1,0];this._loadMatrix(n,t)}predator(e,t){let n=[11.224130630493164*e,-4.794486999511719*e,-2.8746118545532227*e,0*e,.40342438220977783*e,-3.6330697536468506*e,9.193157196044922*e,-2.951810836791992*e,0*e,-1.316135048866272*e,-3.2184197902679443*e,-4.2375030517578125*e,7.476448059082031*e,0*e,.8044459223747253*e,0,0,0,1,0];this._loadMatrix(n,t)}lsd(e){this._loadMatrix([2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0],e)}reset(){this._loadMatrix([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],!1)}get matrix(){return this.resources.colorMatrixUniforms.uniforms.uColorMatrix}set matrix(e){this.resources.colorMatrixUniforms.uniforms.uColorMatrix=e}get alpha(){return this.resources.colorMatrixUniforms.uniforms.uAlpha}set alpha(e){this.resources.colorMatrixUniforms.uniforms.uAlpha=e}},$o=class{constructor(){this.isBatchable=!1}reset(){this.isBatchable=!1,this.context=null,this.graphicsData&&=(this.graphicsData.destroy(),null)}destroy(){this.reset()}},es=class{constructor(){this.instructions=new i}init(){this.instructions.reset()}destroy(){this.instructions.destroy(),this.instructions=null}},ts=class e{constructor(e){this._renderer=e,this._managedContexts=new Ce({renderer:e,type:`resource`,name:`graphicsContext`})}init(t){e.defaultOptions.bezierSmoothness=t?.bezierSmoothness??e.defaultOptions.bezierSmoothness}getContextRenderData(e){return this.getGpuContext(e).graphicsData||this._initContextRenderData(e)}updateGpuContext(e){let t=e._gpuData,n=!!t[this._renderer.uid],r=t[this._renderer.uid]||this._initContext(e);return(e.dirty||!n)&&(n&&r.reset(),r.isBatchable=!1,e.dirty=!1),r}getGpuContext(e){return e._gpuData[this._renderer.uid]||this._initContext(e)}_initContextRenderData(e){let t=new es,n=this.getGpuContext(e);return n.graphicsData=t,t.init(),t}_initContext(e){let t=new $o;return t.context=e,e._gpuData[this._renderer.uid]=t,this._managedContexts.add(e),t}destroy(){this._managedContexts.destroy(),this._renderer=null}};ts.extension={type:[D.CanvasSystem],name:`graphicsContext`},ts.defaultOptions={bezierSmoothness:.5};var ns=ts,rs=class{constructor(e,t){this.state=j.for2d(),this.renderer=e,this._adaptor=t,this.renderer.runners.contextChange.add(this),this._managedGraphics=new Ce({renderer:e,type:`renderable`,priority:-1,name:`graphics`})}contextChange(){this._adaptor.contextChange(this.renderer)}validateRenderable(e){return!1}addRenderable(e,t){this._managedGraphics.add(e),this.renderer.renderPipes.batch.break(t),t.add(e)}updateRenderable(e){}execute(e){e.isRenderable&&this._adaptor.execute(this,e)}destroy(){this._managedGraphics.destroy(),this.renderer=null,this._adaptor.destroy(),this._adaptor=null}};rs.extension={type:[D.CanvasPipes],name:`graphics`};var is=class{constructor(){this.batches=[],this.batched=!1}destroy(){this.batches.forEach(e=>{a.return(e)}),this.batches.length=0}},as=class{constructor(e,t){this.state=j.for2d(),this.renderer=e,this._adaptor=t,this.renderer.runners.contextChange.add(this),this._managedGraphics=new Ce({renderer:e,type:`renderable`,priority:-1,name:`graphics`})}contextChange(){this._adaptor.contextChange(this.renderer)}validateRenderable(e){let t=e.context,n=!!e._gpuData,r=this.renderer.graphicsContext.updateGpuContext(t);return!!(r.isBatchable||n!==r.isBatchable)}addRenderable(e,t){let n=this.renderer.graphicsContext.updateGpuContext(e.context);e.didViewUpdate&&this._rebuild(e),n.isBatchable?this._addToBatcher(e,t):(this.renderer.renderPipes.batch.break(t),t.add(e))}updateRenderable(e){let t=this._getGpuDataForRenderable(e).batches;for(let e=0;e<t.length;e++){let n=t[e];n._batcher.updateElement(n)}}execute(e){if(!e.isRenderable)return;let t=this.renderer,n=e.context;if(!t.graphicsContext.getGpuContext(n).batches.length)return;let r=n.customShader||this._adaptor.shader;this.state.blendMode=e.groupBlendMode;let i=r.resources.localUniforms.uniforms;i.uTransformMatrix=e.groupTransform,i.uRound=t._roundPixels|e._roundPixels,Le(e.groupColorAlpha,i.uColor,0),this._adaptor.execute(this,e)}_rebuild(e){let t=this._getGpuDataForRenderable(e),n=this.renderer.graphicsContext.updateGpuContext(e.context);t.destroy(),n.isBatchable&&this._updateBatchesForRenderable(e,t)}_addToBatcher(e,t){let n=this.renderer.renderPipes.batch,r=this._getGpuDataForRenderable(e).batches;for(let e=0;e<r.length;e++){let i=r[e];n.addToBatch(i,t)}}_getGpuDataForRenderable(e){return e._gpuData[this.renderer.uid]||this._initGpuDataForRenderable(e)}_initGpuDataForRenderable(e){let t=new is;return e._gpuData[this.renderer.uid]=t,this._managedGraphics.add(e),t}_updateBatchesForRenderable(e,t){let n=e.context,r=this.renderer.graphicsContext.getGpuContext(n),i=this.renderer._roundPixels|e._roundPixels;t.batches=r.batches.map(t=>{let n=a.get(ea);return t.copyTo(n),n.renderable=e,n.roundPixels=i,n})}destroy(){this._managedGraphics.destroy(),this.renderer=null,this._adaptor.destroy(),this._adaptor=null,this.state=null}};as.extension={type:[D.WebGLPipes,D.WebGPUPipes],name:`graphics`},y.add(rs),y.add(as),y.add(ns),y.add(Fa);var os=class e extends d{constructor(e){e instanceof Yo&&(e={context:e});let{context:t,roundPixels:n,...r}=e||{};super({label:`Graphics`,...r}),this.renderPipeId=`graphics`,t?this.context=t:(this.context=this._ownedContext=new Yo,this.context.autoGarbageCollect=this.autoGarbageCollect),this.didViewUpdate=!0,this.allowChildren=!1,this.roundPixels=n??!1}set context(e){e!==this._context&&(this._context&&(this._context.off(`update`,this.onViewUpdate,this),this._context.off(`unload`,this.unload,this)),this._context=e,this._context.on(`update`,this.onViewUpdate,this),this._context.on(`unload`,this.unload,this),this.onViewUpdate())}get context(){return this._context}get bounds(){return this._context.bounds}updateBounds(){}containsPoint(e){return this._context.containsPoint(e)}destroy(e){this._ownedContext&&!e?this._ownedContext.destroy(e):(e===!0||e?.context===!0)&&this._context.destroy(e),this._context?.off(`update`,this.onViewUpdate,this),this._context?.off(`unload`,this.unload,this),this._ownedContext=null,this._context=null,super.destroy(e)}_onTouch(e){this._gcLastUsed=e,this._context._gcLastUsed=e}_callContextMethod(e,t){return this.context[e](...t),this}setFillStyle(...e){return this._callContextMethod(`setFillStyle`,e)}setStrokeStyle(...e){return this._callContextMethod(`setStrokeStyle`,e)}fill(...e){return this._callContextMethod(`fill`,e)}stroke(...e){return this._callContextMethod(`stroke`,e)}texture(...e){return this._callContextMethod(`texture`,e)}beginPath(){return this._callContextMethod(`beginPath`,[])}cut(){return this._callContextMethod(`cut`,[])}arc(...e){return this._callContextMethod(`arc`,e)}arcTo(...e){return this._callContextMethod(`arcTo`,e)}arcToSvg(...e){return this._callContextMethod(`arcToSvg`,e)}bezierCurveTo(...e){return this._callContextMethod(`bezierCurveTo`,e)}closePath(){return this._callContextMethod(`closePath`,[])}ellipse(...e){return this._callContextMethod(`ellipse`,e)}circle(...e){return this._callContextMethod(`circle`,e)}path(...e){return this._callContextMethod(`path`,e)}lineTo(...e){return this._callContextMethod(`lineTo`,e)}moveTo(...e){return this._callContextMethod(`moveTo`,e)}quadraticCurveTo(...e){return this._callContextMethod(`quadraticCurveTo`,e)}rect(...e){return this._callContextMethod(`rect`,e)}roundRect(...e){return this._callContextMethod(`roundRect`,e)}poly(...e){return this._callContextMethod(`poly`,e)}regularPoly(...e){return this._callContextMethod(`regularPoly`,e)}roundPoly(...e){return this._callContextMethod(`roundPoly`,e)}roundShape(...e){return this._callContextMethod(`roundShape`,e)}filletRect(...e){return this._callContextMethod(`filletRect`,e)}chamferRect(...e){return this._callContextMethod(`chamferRect`,e)}star(...e){return this._callContextMethod(`star`,e)}svg(...e){return this._callContextMethod(`svg`,e)}restore(...e){return this._callContextMethod(`restore`,e)}save(){return this._callContextMethod(`save`,[])}getTransform(){return this.context.getTransform()}resetTransform(){return this._callContextMethod(`resetTransform`,[])}rotateTransform(...e){return this._callContextMethod(`rotate`,e)}scaleTransform(...e){return this._callContextMethod(`scale`,e)}setTransform(...e){return this._callContextMethod(`setTransform`,e)}transform(...e){return this._callContextMethod(`transform`,e)}translateTransform(...e){return this._callContextMethod(`translate`,e)}clear(){return this._callContextMethod(`clear`,[])}get fillStyle(){return this._context.fillStyle}set fillStyle(e){this._context.fillStyle=e}get strokeStyle(){return this._context.strokeStyle}set strokeStyle(e){this._context.strokeStyle=e}clone(t=!1){return t?new e(this._context.clone()):(this._ownedContext=null,new e(this._context))}lineStyle(e,t,n){o(h,`Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.`);let r={};return e&&(r.width=e),t&&(r.color=t),n&&(r.alpha=n),this.context.strokeStyle=r,this}beginFill(e,t){o(h,`Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.`);let n={};return e!==void 0&&(n.color=e),t!==void 0&&(n.alpha=t),this.context.fillStyle=n,this}endFill(){o(h,`Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.`),this.context.fill();let e=this.context.strokeStyle;return(e.width!==Yo.defaultStrokeStyle.width||e.color!==Yo.defaultStrokeStyle.color||e.alpha!==Yo.defaultStrokeStyle.alpha)&&this.context.stroke(),this}drawCircle(...e){return o(h,`Graphics#drawCircle has been renamed to Graphics#circle`),this._callContextMethod(`circle`,e)}drawEllipse(...e){return o(h,`Graphics#drawEllipse has been renamed to Graphics#ellipse`),this._callContextMethod(`ellipse`,e)}drawPolygon(...e){return o(h,`Graphics#drawPolygon has been renamed to Graphics#poly`),this._callContextMethod(`poly`,e)}drawRect(...e){return o(h,`Graphics#drawRect has been renamed to Graphics#rect`),this._callContextMethod(`rect`,e)}drawRoundedRect(...e){return o(h,`Graphics#drawRoundedRect has been renamed to Graphics#roundRect`),this._callContextMethod(`roundRect`,e)}drawStar(...e){return o(h,`Graphics#drawStar has been renamed to Graphics#star`),this._callContextMethod(`star`,e)}},ss=class e extends re{constructor(...t){let n=t[0]??{};n instanceof Float32Array&&(o(h,`use new MeshGeometry({ positions, uvs, indices }) instead`),n={positions:n,uvs:t[1],indices:t[2]}),n={...e.defaultOptions,...n};let r=n.positions||new Float32Array([0,0,1,0,1,1,0,1]),i=n.uvs;i||=n.positions?new Float32Array(r.length):new Float32Array([0,0,1,0,1,1,0,1]);let a=n.indices||new Uint32Array([0,1,2,0,2,3]),s=n.shrinkBuffersToFit,c=new A({data:r,label:`attribute-mesh-positions`,shrinkToFit:s,usage:N.VERTEX|N.COPY_DST}),l=new A({data:i,label:`attribute-mesh-uvs`,shrinkToFit:s,usage:N.VERTEX|N.COPY_DST}),u=new A({data:a,label:`index-mesh-buffer`,shrinkToFit:s,usage:N.INDEX|N.COPY_DST});super({attributes:{aPosition:{buffer:c,format:`float32x2`,stride:8,offset:0},aUV:{buffer:l,format:`float32x2`,stride:8,offset:0}},indexBuffer:u,topology:n.topology}),this.batchMode=`auto`}get positions(){return this.attributes.aPosition.buffer.data}set positions(e){this.attributes.aPosition.buffer.data=e}get uvs(){return this.attributes.aUV.buffer.data}set uvs(e){this.attributes.aUV.buffer.data=e}get indices(){return this.indexBuffer.data}set indices(e){this.indexBuffer.data=e}};ss.defaultOptions={topology:`triangle-list`,shrinkBuffersToFit:!1};var cs=ss,ls=class{constructor(){this.batcherName=`default`,this.packAsQuad=!1,this.indexOffset=0,this.attributeOffset=0,this.roundPixels=0,this._batcher=null,this._batch=null,this._textureMatrixUpdateId=-1,this._uvUpdateId=-1}get blendMode(){return this.renderable.groupBlendMode}get topology(){return this._topology||this.geometry.topology}set topology(e){this._topology=e}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.geometry=null,this._uvUpdateId=-1,this._textureMatrixUpdateId=-1}setTexture(e){this.texture!==e&&(this.texture=e,this._textureMatrixUpdateId=-1)}get uvs(){let e=this.geometry.getBuffer(`aUV`),t=e.data,n=t,r=this.texture.textureMatrix;return r.isSimple||(n=this._transformedUvs,(this._textureMatrixUpdateId!==r._updateID||this._uvUpdateId!==e._updateID)&&((!n||n.length<t.length)&&(n=this._transformedUvs=new Float32Array(t.length)),this._textureMatrixUpdateId=r._updateID,this._uvUpdateId=e._updateID,r.multiplyUvs(t,n))),n}get positions(){return this.geometry.positions}get indices(){return this.geometry.indices}get color(){return this.renderable.groupColorAlpha}get groupTransform(){return this.renderable.groupTransform}get attributeSize(){return this.geometry.positions.length/2}get indexSize(){return this.geometry.indices.length}},us=class{constructor({matrix:e,observer:t}={}){this.dirty=!0,this._matrix=e??new C,this.observer=t,this.position=new P(this,0,0),this.scale=new P(this,1,1),this.pivot=new P(this,0,0),this.skew=new P(this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1}get matrix(){let e=this._matrix;return this.dirty?(e.a=this._cx*this.scale.x,e.b=this._sx*this.scale.x,e.c=this._cy*this.scale.y,e.d=this._sy*this.scale.y,e.tx=this.position.x-(this.pivot.x*e.a+this.pivot.y*e.c),e.ty=this.position.y-(this.pivot.x*e.b+this.pivot.y*e.d),this.dirty=!1,e):e}_onUpdate(e){this.dirty=!0,e===this.skew&&this.updateSkew(),this.observer?._onUpdate(this)}updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this.dirty=!0}toString(){return`[pixi.js/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`}setFromMatrix(e){e.decompose(this),this.dirty=!0}get rotation(){return this._rotation}set rotation(e){this._rotation!==e&&(this._rotation=e,this._onUpdate(this.skew))}},ds=new C,fs=new C,ps=[new ie,new ie,new ie,new ie],ms=class{constructor(e){this._renderer=e}validateRenderable(e){return!1}addRenderable(e,t){this._renderer.renderPipes.batch.break(t),t.add(e)}updateRenderable(e){}execute(e){let n=this._renderer,r=n.canvasContext,i=r.activeContext;i.save(),r.setBlendMode(e.groupBlendMode);let a=n.globalUniforms.globalUniformData?.worldColor??4294967295,o=e.groupColorAlpha,s=(a>>>24&255)/255,l=(o>>>24&255)/255,u=n.filter?.alphaMultiplier??1,d=s*l*u;if(d<=0){i.restore();return}i.globalAlpha=d;let f=a&16777215,p=c(t(o&16777215,f)),m=e.texture,h=L.getTintedPattern(m,p),g=e.width,_=e.height,v=e.groupTransform,y=m.source._resolution??m.source.resolution??1;fs.copyFrom(e._tileTransform.matrix),e.applyAnchorToTexture||fs.translate(-e.anchor.x*g,-e.anchor.y*_);let b=fs.tx,x=fs.ty;fs.scale(1/y,1/y),fs.tx=b,fs.ty=x,ds.identity(),ds.prepend(fs),ds.prepend(v);let S=n._roundPixels|e._roundPixels;r.setContextTransform(ds,S===1),i.fillStyle=h;let C=e.anchor.x*-g,w=e.anchor.y*-_;ps[0].set(C,w),ps[1].set(C+g,w),ps[2].set(C+g,w+_),ps[3].set(C,w+_);for(let e=0;e<4;e++)fs.applyInverse(ps[e],ps[e]);i.beginPath(),i.moveTo(ps[0].x,ps[0].y);for(let e=1;e<4;e++)i.lineTo(ps[e].x,ps[e].y);i.closePath(),i.fill(),i.restore()}destroy(){this._renderer=null}};ms.extension={type:[D.CanvasPipes],name:`tilingSprite`};var hs={name:`tiling-bit`,vertex:{header:`
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,main:`
            uv = (tilingUniforms.uTextureTransform * vec3(uv, 1.0)).xy;

            position = (position - tilingUniforms.uSizeAnchor.zw) * tilingUniforms.uSizeAnchor.xy;
        `},fragment:{header:`
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,main:`

            var coord = vUV + ceil(tilingUniforms.uClampOffset - vUV);
            coord = (tilingUniforms.uMapCoord * vec3(coord, 1.0)).xy;
            var unclamped = coord;
            coord = clamp(coord, tilingUniforms.uClampFrame.xy, tilingUniforms.uClampFrame.zw);

            var bias = 0.;

            if(unclamped.x == coord.x && unclamped.y == coord.y)
            {
                bias = -32.;
            }

            outColor = textureSampleBias(uTexture, uSampler, coord, bias);
        `}},gs={name:`tiling-bit`,vertex:{header:`
            uniform mat3 uTextureTransform;
            uniform vec4 uSizeAnchor;

        `,main:`
            uv = (uTextureTransform * vec3(aUV, 1.0)).xy;

            position = (position - uSizeAnchor.zw) * uSizeAnchor.xy;
        `},fragment:{header:`
            uniform sampler2D uTexture;
            uniform mat3 uMapCoord;
            uniform vec4 uClampFrame;
            uniform vec2 uClampOffset;
        `,main:`

        vec2 coord = vUV + ceil(uClampOffset - vUV);
        coord = (uMapCoord * vec3(coord, 1.0)).xy;
        vec2 unclamped = coord;
        coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

        outColor = texture(uTexture, coord, unclamped == coord ? 0.0 : -32.0);// lod-bias very negative to force lod 0

        `}},_s,vs,ys=class extends ne{constructor(){_s??=Be({name:`tiling-sprite-shader`,bits:[Ke,hs,Ae]}),vs??=xe({name:`tiling-sprite-shader`,bits:[qe,gs,Ee]});let e=new S({uMapCoord:{value:new C,type:`mat3x3<f32>`},uClampFrame:{value:new Float32Array([0,0,1,1]),type:`vec4<f32>`},uClampOffset:{value:new Float32Array([0,0]),type:`vec2<f32>`},uTextureTransform:{value:new C,type:`mat3x3<f32>`},uSizeAnchor:{value:new Float32Array([100,100,.5,.5]),type:`vec4<f32>`}});super({glProgram:vs,gpuProgram:_s,resources:{localUniforms:new S({uTransformMatrix:{value:new C,type:`mat3x3<f32>`},uColor:{value:new Float32Array([1,1,1,1]),type:`vec4<f32>`},uRound:{value:0,type:`f32`}}),tilingUniforms:e,uTexture:f.EMPTY.source,uSampler:f.EMPTY.source.style}})}updateUniforms(e,t,n,r,i,a){let o=this.resources.tilingUniforms,s=a.width,c=a.height,l=a.textureMatrix,u=o.uniforms.uTextureTransform;u.set(n.a*s/e,n.b*s/t,n.c*c/e,n.d*c/t,n.tx/e,n.ty/t),u.invert(),o.uniforms.uMapCoord=l.mapCoord,o.uniforms.uClampFrame=l.uClampFrame,o.uniforms.uClampOffset=l.uClampOffset,o.uniforms.uTextureTransform=u,o.uniforms.uSizeAnchor[0]=e,o.uniforms.uSizeAnchor[1]=t,o.uniforms.uSizeAnchor[2]=r,o.uniforms.uSizeAnchor[3]=i,a&&(this.resources.uTexture=a.source,this.resources.uSampler=a.source.style)}},bs=class extends cs{constructor(){super({positions:new Float32Array([0,0,1,0,1,1,0,1]),uvs:new Float32Array([0,0,1,0,1,1,0,1]),indices:new Uint32Array([0,1,2,0,2,3])})}};function xs(e,t){let n=e.anchor.x,r=e.anchor.y;t[0]=-n*e.width,t[1]=-r*e.height,t[2]=(1-n)*e.width,t[3]=-r*e.height,t[4]=(1-n)*e.width,t[5]=(1-r)*e.height,t[6]=-n*e.width,t[7]=(1-r)*e.height}function Ss(e,t,n,r){let i=0,a=e.length/(t||2),o=r.a,s=r.b,c=r.c,l=r.d,u=r.tx,d=r.ty;for(n*=t;i<a;){let r=e[n],a=e[n+1];e[n]=o*r+c*a+u,e[n+1]=s*r+l*a+d,n+=t,i++}}function Cs(e,t){let n=e.texture,r=n.frame.width,i=n.frame.height,a=0,o=0;e.applyAnchorToTexture&&(a=e.anchor.x,o=e.anchor.y),t[0]=t[6]=-a,t[2]=t[4]=1-a,t[1]=t[3]=-o,t[5]=t[7]=1-o;let s=e._tileTransform.matrix,c=C.shared;c.set(s.a*r/e.width,s.b*r/e.height,s.c*i/e.width,s.d*i/e.height,s.tx/e.width,s.ty/e.height),c.invert(),Ss(t,2,0,c)}var ws=new bs,Ts=class{constructor(){this.canBatch=!0,this.geometry=new cs({indices:ws.indices.slice(),positions:ws.positions.slice(),uvs:ws.uvs.slice()})}destroy(){this.geometry.destroy(),this.shader?.destroy()}},Es=class{constructor(e){this._state=j.default2d,this._renderer=e,this._managedTilingSprites=new Ce({renderer:e,type:`renderable`,name:`tilingSprite`})}validateRenderable(e){let t=this._getTilingSpriteData(e),n=t.canBatch;this._updateCanBatch(e);let r=t.canBatch;if(r&&r===n){let{batchableMesh:n}=t;return!n._batcher.checkAndUpdateTexture(n,e.texture)}return n!==r}addRenderable(e,t){let n=this._renderer.renderPipes.batch;this._updateCanBatch(e);let r=this._getTilingSpriteData(e),{geometry:i,canBatch:a}=r;if(a){r.batchableMesh||=new ls;let a=r.batchableMesh;e.didViewUpdate&&(this._updateBatchableMesh(e),a.geometry=i,a.renderable=e,a.transform=e.groupTransform,a.setTexture(e._texture)),a.roundPixels=this._renderer._roundPixels|e._roundPixels,n.addToBatch(a,t)}else n.break(t),r.shader||=new ys,this.updateRenderable(e),t.add(e)}execute(e){let t=this._renderer,{shader:n}=this._getTilingSpriteData(e);n.groups[0]=t.globalUniforms.bindGroup;let r=n.resources.localUniforms.uniforms;r.uTransformMatrix=e.groupTransform,r.uRound=t._roundPixels|e._roundPixels,Le(e.groupColorAlpha,r.uColor,0),this._state.blendMode=me(e.groupBlendMode,e.texture._source),t.encoder.draw({geometry:ws,shader:n,state:this._state})}updateRenderable(e){let t=this._getTilingSpriteData(e),{canBatch:n}=t;if(n){let{batchableMesh:n}=t;e.didViewUpdate&&this._updateBatchableMesh(e),n._batcher.updateElement(n)}else if(e.didViewUpdate){let{shader:n}=t;n.updateUniforms(e.width,e.height,e._tileTransform.matrix,e.anchor.x,e.anchor.y,e.texture)}}_getTilingSpriteData(e){return e._gpuData[this._renderer.uid]||this._initTilingSpriteData(e)}_initTilingSpriteData(e){let t=new Ts;return t.renderable=e,e._gpuData[this._renderer.uid]=t,this._managedTilingSprites.add(e),t}_updateBatchableMesh(e){let{geometry:t}=this._getTilingSpriteData(e),n=e.texture.source.style;n.addressMode!==`repeat`&&(n.addressMode=`repeat`,n.update()),Cs(e,t.uvs),xs(e,t.positions)}destroy(){this._managedTilingSprites.destroy(),this._renderer=null}_updateCanBatch(e){let t=this._getTilingSpriteData(e),n=e.texture,r=!0;return this._renderer.type===O.WEBGL&&(r=this._renderer.context.supports.nonPowOf2wrapping),t.canBatch=n.textureMatrix.isSimple&&(r||n.source.isPowerOfTwo),t.canBatch}};Es.extension={type:[D.WebGLPipes,D.WebGPUPipes],name:`tilingSprite`},y.add(ms),y.add(Es);var Ds=class e extends d{constructor(...t){let n=t[0]||{};n instanceof f&&(n={texture:n}),t.length>1&&(o(h,`use new TilingSprite({ texture, width:100, height:100 }) instead`),n.width=t[1],n.height=t[2]),n={...e.defaultOptions,...n};let{texture:r,anchor:i,tilePosition:a,tileScale:s,tileRotation:c,width:l,height:u,applyAnchorToTexture:d,roundPixels:p,...m}=n??{};super({label:`TilingSprite`,...m}),this.renderPipeId=`tilingSprite`,this.batched=!0,this.allowChildren=!1,this._anchor=new P({_onUpdate:()=>{this.onViewUpdate()}}),this.applyAnchorToTexture=d,this.texture=r,this._width=l??r.width,this._height=u??r.height,this._tileTransform=new us({observer:{_onUpdate:()=>this.onViewUpdate()}}),i&&(this.anchor=i),this.tilePosition=a,this.tileScale=s,this.tileRotation=c,this.roundPixels=p??!1}static from(t,n={}){return typeof t==`string`?new e({texture:ce.get(t),...n}):new e({texture:t,...n})}get uvRespectAnchor(){return o(h,`uvRespectAnchor is deprecated, please use applyAnchorToTexture instead`),this.applyAnchorToTexture}set uvRespectAnchor(e){o(h,`uvRespectAnchor is deprecated, please use applyAnchorToTexture instead`),this.applyAnchorToTexture=e}get clampMargin(){return this._texture.textureMatrix.clampMargin}set clampMargin(e){this._texture.textureMatrix.clampMargin=e}get anchor(){return this._anchor}set anchor(e){typeof e==`number`?this._anchor.set(e):this._anchor.copyFrom(e)}get tilePosition(){return this._tileTransform.position}set tilePosition(e){this._tileTransform.position.copyFrom(e)}get tileScale(){return this._tileTransform.scale}set tileScale(e){typeof e==`number`?this._tileTransform.scale.set(e):this._tileTransform.scale.copyFrom(e)}set tileRotation(e){this._tileTransform.rotation=e}get tileRotation(){return this._tileTransform.rotation}get tileTransform(){return this._tileTransform}set texture(e){e||=f.EMPTY;let t=this._texture;t!==e&&(t&&t.dynamic&&t.off(`update`,this.onViewUpdate,this),e.dynamic&&e.on(`update`,this.onViewUpdate,this),this._texture=e,this.onViewUpdate())}get texture(){return this._texture}set width(e){this._width=e,this.onViewUpdate()}get width(){return this._width}set height(e){this._height=e,this.onViewUpdate()}get height(){return this._height}setSize(e,t){typeof e==`object`&&(t=e.height??e.width,e=e.width),this._width=e,this._height=t??e,this.onViewUpdate()}getSize(e){return e||={},e.width=this._width,e.height=this._height,e}updateBounds(){let e=this._bounds,t=this._anchor,n=this._width,r=this._height;e.minX=-t._x*n,e.maxX=e.minX+n,e.minY=-t._y*r,e.maxY=e.minY+r}containsPoint(e){let t=this._width,n=this._height,r=-t*this._anchor._x,i=0;return e.x>=r&&e.x<=r+t&&(i=-n*this._anchor._y,e.y>=i&&e.y<=i+n)}destroy(e=!1){if(super.destroy(e),this._anchor=null,this._tileTransform=null,this._bounds=null,typeof e==`boolean`?e:e?.texture){let t=typeof e==`boolean`?e:e?.textureSource;this._texture.destroy(t)}this._texture=null}};Ds.defaultOptions={texture:f.EMPTY,anchor:{x:0,y:0},tilePosition:{x:0,y:0},tileScale:{x:1,y:1},tileRotation:0,applyAnchorToTexture:!1};var Os=Ds;function ks(){let{userAgent:e}=b.get().getNavigator();return/^((?!chrome|android).)*safari/i.test(e)}var As=class n{static _getPatternRepeat(e,t){let n=e&&e!==`clamp-to-edge`,r=t&&t!==`clamp-to-edge`;return n&&r?`repeat`:n?`repeat-x`:r?`repeat-y`:`no-repeat`}start(e,t,n){}execute(r,i){let a=i.elements;if(!a||!a.length)return;let o=r.renderer,s=o.canvasContext,l=s.activeContext;for(let r=0;r<a.length;r++){let u=a[r];if(!u.packAsQuad)continue;let d=u,f=d.texture,p=f?L.getCanvasSource(f):null;if(!p)continue;let m=f.source.style,h=s.smoothProperty,g=m.scaleMode!==`nearest`;l[h]!==g&&(l[h]=g),s.setBlendMode(i.blendMode);let _=o.globalUniforms.globalUniformData?.worldColor??4294967295,v=d.color,y=(_>>>24&255)/255,b=(v>>>24&255)/255,x=o.filter?.alphaMultiplier??1,S=y*b*x;if(S<=0)continue;l.globalAlpha=S;let C=_&16777215,w=c(t(v&16777215,C)),T=f.frame,E=m.addressModeU??m.addressMode,D=m.addressModeV??m.addressMode,O=n._getPatternRepeat(E,D),k=f.source._resolution??f.source.resolution??1,A=d.renderable?.renderGroup?.isCachedAsTexture,ee=T.x*k,j=T.y*k,M=T.width*k,te=T.height*k,N=d.bounds,P=o.renderTarget.renderTarget.isRoot,ne=N.minX,re=N.minY,ie=N.maxX-N.minX,ae=N.maxY-N.minY,oe=f.rotate,F=f.uvs,se=Math.min(F.x0,F.x1,F.x2,F.x3,F.y0,F.y1,F.y2,F.y3),I=Math.max(F.x0,F.x1,F.x2,F.x3,F.y0,F.y1,F.y2,F.y3),ce=O!==`no-repeat`&&(se<0||I>1),le=oe&&!(!ce&&(w!==16777215||oe));le?(n._tempPatternMatrix.copyFrom(d.transform),e.matrixAppendRotationInv(n._tempPatternMatrix,oe,ne,re,ie,ae),s.setContextTransform(n._tempPatternMatrix,d.roundPixels===1,void 0,A&&P)):s.setContextTransform(d.transform,d.roundPixels===1,void 0,A&&P);let ue=ie,de=ae,fe=le?0:ne,pe=le?0:re;if(!le&&d.roundPixels===1&&(fe|=0,pe|=0),ce){let e=p,t=w!==16777215&&!oe,r=T.width<=f.source.width&&T.height<=f.source.height;t&&r&&(e=L.getTintedCanvas({texture:f},w));let i=l.createPattern(e,O);if(!i)continue;let a=ue,o=de;if(a===0||o===0)continue;let s=1/a,c=1/o,u=(F.x1-F.x0)*s,d=(F.y1-F.y0)*s,m=(F.x3-F.x0)*c,h=(F.y3-F.y0)*c,g=F.x0-u*fe-m*pe,_=F.y0-d*fe-h*pe,v=f.source.pixelWidth,y=f.source.pixelHeight;n._tempPatternMatrix.set(u*v,d*y,m*v,h*y,g*v,_*y),L.applyPatternTransform(i,n._tempPatternMatrix),l.fillStyle=i,l.fillRect(fe,pe,ue,de)}else{let e=w!==16777215||oe?L.getTintedCanvas({texture:f},w):p,t=e!==p;l.drawImage(e,t?0:ee,t?0:j,t?e.width:M,t?e.height:te,fe,pe,ue,de)}}}};As._tempPatternMatrix=new C,As.extension={type:[D.CanvasPipesAdaptor],name:`batch`};var js=As,Ms=class{constructor(){this._tempState=j.for2d(),this._didUploadHash={}}init(e){e.renderer.runners.contextChange.add(this)}contextChange(){this._didUploadHash={}}start(e,t,n){let r=e.renderer,i=this._didUploadHash[n.uid];r.shader.bind(n,i),i||(this._didUploadHash[n.uid]=!0),r.shader.updateUniformGroup(r.globalUniforms.uniformGroup),r.geometry.bind(t,n.glProgram)}execute(e,t){let n=e.renderer;this._tempState.blendMode=t.blendMode,n.state.set(this._tempState);let r=t.textures.textures;for(let e=0;e<t.textures.count;e++)n.texture.bind(r[e],e);n.geometry.draw(t.topology,t.size,t.start)}};Ms.extension={type:[D.WebGLPipesAdaptor],name:`batch`};var Ns=j.for2d(),Ps=class{start(e,t,n){let r=e.renderer,i=r.encoder,a=n.gpuProgram;this._shader=n,this._geometry=t,i.setGeometry(t,a),Ns.blendMode=`normal`,r.pipeline.getPipeline(t,a,Ns,void 0,n._overrides);let o=r.globalUniforms.bindGroup;i.resetBindGroup(1),i.setBindGroup(0,o,a)}execute(e,t){let n=this._shader.gpuProgram,r=e.renderer,i=r.encoder;if(!t.bindGroup){let e=t.textures;t.bindGroup=He(e.textures,e.count,r.limits.maxBatchableTextures)}Ns.blendMode=t.blendMode;let a=r.bindGroup.getBindGroup(t.bindGroup,n,1),o=r.pipeline.getPipeline(this._geometry,n,Ns,t.topology,this._shader._overrides);t.bindGroup._touch(r.gc.now,r.tick),i.setPipeline(o),i.renderPassEncoder.setBindGroup(1,a),i.renderPassEncoder.drawIndexed(t.size,1,t.start)}};Ps.extension={type:[D.WebGPUPipesAdaptor],name:`batch`};var Fs=class{constructor(e){this._colorStack=[],this._colorStackIndex=0,this._currentColor=0,this._renderer=e}buildStart(){this._colorStack[0]=15,this._colorStackIndex=1,this._currentColor=15}push(e,t,n){this._renderer.renderPipes.batch.break(n);let r=this._colorStack;r[this._colorStackIndex]=r[this._colorStackIndex-1]&e.mask;let i=this._colorStack[this._colorStackIndex];i!==this._currentColor&&(this._currentColor=i,n.add({renderPipeId:`colorMask`,colorMask:i,canBundle:!1})),this._colorStackIndex++}pop(e,t,n){this._renderer.renderPipes.batch.break(n);let r=this._colorStack;this._colorStackIndex--;let i=r[this._colorStackIndex-1];i!==this._currentColor&&(this._currentColor=i,n.add({renderPipeId:`colorMask`,colorMask:i,canBundle:!1}))}execute(e){}destroy(){this._renderer=null,this._colorStack=null}};Fs.extension={type:[D.CanvasPipes],name:`colorMask`};function Is(e,t,n,r,i,a){a=Math.max(0,Math.min(a,Math.min(r,i)/2)),e.moveTo(t+a,n),e.lineTo(t+r-a,n),e.quadraticCurveTo(t+r,n,t+r,n+a),e.lineTo(t+r,n+i-a),e.quadraticCurveTo(t+r,n+i,t+r-a,n+i),e.lineTo(t+a,n+i),e.quadraticCurveTo(t,n+i,t,n+i-a),e.lineTo(t,n+a),e.quadraticCurveTo(t,n,t+a,n)}function Ls(e,t){switch(t.type){case`rectangle`:{let n=t;e.rect(n.x,n.y,n.width,n.height);break}case`roundedRectangle`:{let n=t;Is(e,n.x,n.y,n.width,n.height,n.radius);break}case`circle`:{let n=t;e.moveTo(n.x+n.radius,n.y),e.arc(n.x,n.y,n.radius,0,Math.PI*2);break}case`ellipse`:{let n=t;e.ellipse?(e.moveTo(n.x+n.halfWidth,n.y),e.ellipse(n.x,n.y,n.halfWidth,n.halfHeight,0,0,Math.PI*2)):(e.save(),e.translate(n.x,n.y),e.scale(n.halfWidth,n.halfHeight),e.moveTo(1,0),e.arc(0,0,1,0,Math.PI*2),e.restore());break}case`triangle`:{let n=t;e.moveTo(n.x,n.y),e.lineTo(n.x2,n.y2),e.lineTo(n.x3,n.y3),e.closePath();break}default:{let n=t,r=n.points;if(!r?.length)break;e.moveTo(r[0],r[1]);for(let t=2;t<r.length;t+=2)e.lineTo(r[t],r[t+1]);n.closePath&&e.closePath();break}}}function Rs(e,t,n){let r=[],i=[],a=[];if(!Ta[t.type]?.build(t,r))return!1;ca(r,n,!1,t.closePath??!0,i,a);for(let t=0;t<a.length;t+=3){let n=a[t]*2,r=a[t+1]*2,o=a[t+2]*2;e.moveTo(i[n],i[n+1]),e.lineTo(i[r],i[r+1]),e.lineTo(i[o],i[o+1]),e.closePath()}return!0}function zs(e,t){if(!t?.length)return!1;for(let n=0;n<t.length;n++){let r=t[n];if(!r?.shape)continue;let i=r.transform,a=i&&!i.isIdentity();a&&(e.save(),e.transform(i.a,i.b,i.c,i.d,i.tx,i.ty)),Ls(e,r.shape),a&&e.restore()}return!0}var Bs=class{constructor(e){this._warnedMaskTypes=new Set,this._canvasMaskStack=[],this._renderer=e}push(e,t,n){this._renderer.renderPipes.batch.break(n),n.add({renderPipeId:`stencilMask`,action:`pushMaskBegin`,mask:e,inverse:t._maskOptions.inverse,canBundle:!1})}pop(e,t,n){this._renderer.renderPipes.batch.break(n),n.add({renderPipeId:`stencilMask`,action:`popMaskEnd`,mask:e,inverse:t._maskOptions.inverse,canBundle:!1})}execute(e){if(e.action!==`pushMaskBegin`&&e.action!==`popMaskEnd`)return;let t=this._renderer,n=t.canvasContext,r=n?.activeContext;if(!r)return;if(e.action===`popMaskEnd`){this._canvasMaskStack.pop()&&r.restore();return}e.inverse&&this._warnOnce(`inverse`,`CanvasRenderer: inverse masks are not supported on Canvas2D; ignoring inverse flag.`);let i=e.mask.mask;if(!(i instanceof os)){this._warnOnce(`nonGraphics`,`CanvasRenderer: only Graphics masks are supported in Canvas2D; skipping mask.`),this._canvasMaskStack.push(!1);return}let a=i,o=a.context?.instructions;if(!o?.length){this._canvasMaskStack.push(!1);return}r.save(),n.setContextTransform(a.groupTransform,(t._roundPixels|a._roundPixels)===1),r.beginPath();let s=!1,c=!1;for(let e=0;e<o.length;e++){let t=o[e],n=t.action;if(n!==`fill`&&n!==`stroke`)continue;let i=t.data,a=i?.path?.shapePath;if(!a?.shapePrimitives?.length)continue;let l=n===`stroke`,u=a.shapePrimitives;for(let e=0;e<u.length;e++){let t=u[e];if(!t?.shape)continue;let n=t.transform,a=n&&!n.isIdentity();a&&(r.save(),r.transform(n.a,n.b,n.c,n.d,n.tx,n.ty)),l&&i.style?s=Rs(r,t.shape,i.style)||s:(Ls(r,t.shape),c=zs(r,t.holes)||c,s=!0),a&&r.restore()}}if(!s){r.restore(),this._canvasMaskStack.push(!1);return}c?r.clip(`evenodd`):r.clip(),this._canvasMaskStack.push(!0)}destroy(){this._renderer=null,this._warnedMaskTypes=null,this._canvasMaskStack=null}_warnOnce(e,t){this._warnedMaskTypes.has(e)||(this._warnedMaskTypes.add(e),u(t))}};Bs.extension={type:[D.CanvasPipes],name:`stencilMask`};var q=`source-over`;function Vs(){let e=fe(),t=Object.create(null);return t.inherit=q,t.none=q,t.normal=`source-over`,t.add=`lighter`,t.multiply=e?`multiply`:q,t.screen=e?`screen`:q,t.overlay=e?`overlay`:q,t.darken=e?`darken`:q,t.lighten=e?`lighten`:q,t[`color-dodge`]=e?`color-dodge`:q,t[`color-burn`]=e?`color-burn`:q,t[`hard-light`]=e?`hard-light`:q,t[`soft-light`]=e?`soft-light`:q,t.difference=e?`difference`:q,t.exclusion=e?`exclusion`:q,t.saturation=e?`saturation`:q,t.color=e?`color`:q,t.luminosity=e?`luminosity`:q,t[`linear-burn`]=e?`color-burn`:q,t[`linear-dodge`]=e?`color-dodge`:q,t[`linear-light`]=e?`hard-light`:q,t[`pin-light`]=e?`hard-light`:q,t[`vivid-light`]=e?`hard-light`:q,t[`hard-mix`]=q,t.negation=e?`difference`:q,t[`normal-npm`]=t.normal,t[`add-npm`]=t.add,t[`screen-npm`]=t.screen,t.erase=`destination-out`,t.subtract=q,t.divide=q,t.min=q,t.max=q,t}var Hs=new C,Us=class{constructor(e){this.activeResolution=1,this.smoothProperty=`imageSmoothingEnabled`,this.blendModes=Vs(),this._activeBlendMode=`normal`,this._projTransform=null,this._outerBlend=!1,this._warnedBlendModes=new Set,this._renderer=e}resolutionChange(e){this.activeResolution=e}init(){let e=this._renderer.background.alpha<1;if(this.rootContext=this._renderer.canvas.getContext(`2d`,{alpha:e}),this.activeContext=this.rootContext,this.activeResolution=this._renderer.resolution,!this.rootContext.imageSmoothingEnabled){let e=this.rootContext;e.webkitImageSmoothingEnabled?this.smoothProperty=`webkitImageSmoothingEnabled`:e.mozImageSmoothingEnabled?this.smoothProperty=`mozImageSmoothingEnabled`:e.oImageSmoothingEnabled?this.smoothProperty=`oImageSmoothingEnabled`:e.msImageSmoothingEnabled&&(this.smoothProperty=`msImageSmoothingEnabled`)}}setContextTransform(e,t,n,r){let i=r?C.IDENTITY:this._renderer.globalUniforms.globalUniformData?.worldTransformMatrix||C.IDENTITY,a=Hs;a.copyFrom(i),a.append(e);let o=this._projTransform,s=this.activeResolution;if(n||=s,o){let e=C.shared;e.copyFrom(a),e.prepend(o),a=e}t?this.activeContext.setTransform(a.a*n,a.b*n,a.c*n,a.d*n,a.tx*s|0,a.ty*s|0):this.activeContext.setTransform(a.a*n,a.b*n,a.c*n,a.d*n,a.tx*s,a.ty*s)}clear(e,t){let n=this.activeContext,r=this._renderer;if(n.clearRect(0,0,r.width,r.height),e){let i=I.shared.setValue(e);n.globalAlpha=t??i.alpha,n.fillStyle=i.toHex(),n.fillRect(0,0,r.width,r.height),n.globalAlpha=1}}setBlendMode(e){if(this._activeBlendMode===e)return;this._activeBlendMode=e,this._outerBlend=!1;let t=this.blendModes[e];if(!t){this._warnedBlendModes.has(e)||(console.warn(`CanvasRenderer: blend mode "${e}" is not supported in Canvas2D; falling back to "source-over".`),this._warnedBlendModes.add(e)),this.activeContext.globalCompositeOperation=`source-over`;return}this.activeContext.globalCompositeOperation=t}destroy(){this.rootContext=null,this.activeContext=null,this._warnedBlendModes.clear()}};Us.extension={type:[D.CanvasSystem],name:`canvasContext`};var Ws=class{constructor(){this.maxTextures=16,this.maxBatchableTextures=16,this.maxUniformBindings=0}init(){}};Ws.extension={type:[D.CanvasSystem],name:`limits`};var Gs=`#808080`,Ks=new C,qs=new C,Js=new C,Ys=new C,Xs=new C;function Zs(e,t,n){e.beginPath();for(let r=0;r<n.length;r+=3){let i=n[r]*2,a=n[r+1]*2,o=n[r+2]*2;e.moveTo(t[i],t[i+1]),e.lineTo(t[a],t[a+1]),e.lineTo(t[o],t[o+1]),e.closePath()}e.fill()}function Qs(e){return`#${(e&16777215).toString(16).padStart(6,`0`)}`}function $s(e,t,n,r,i,a){a=Math.max(0,Math.min(a,Math.min(r,i)/2)),e.moveTo(t+a,n),e.lineTo(t+r-a,n),e.quadraticCurveTo(t+r,n,t+r,n+a),e.lineTo(t+r,n+i-a),e.quadraticCurveTo(t+r,n+i,t+r-a,n+i),e.lineTo(t+a,n+i),e.quadraticCurveTo(t,n+i,t,n+i-a),e.lineTo(t,n+a),e.quadraticCurveTo(t,n,t+a,n)}function ec(e,t){switch(t.type){case`rectangle`:{let n=t;e.rect(n.x,n.y,n.width,n.height);break}case`roundedRectangle`:{let n=t;$s(e,n.x,n.y,n.width,n.height,n.radius);break}case`circle`:{let n=t;e.arc(n.x,n.y,n.radius,0,Math.PI*2);break}case`ellipse`:{let n=t;e.ellipse?e.ellipse(n.x,n.y,n.halfWidth,n.halfHeight,0,0,Math.PI*2):(e.save(),e.translate(n.x,n.y),e.scale(n.halfWidth,n.halfHeight),e.arc(0,0,1,0,Math.PI*2),e.restore());break}case`triangle`:{let n=t;e.moveTo(n.x,n.y),e.lineTo(n.x2,n.y2),e.lineTo(n.x3,n.y3),e.closePath();break}default:{let n=t,r=n.points;if(!r?.length)break;e.moveTo(r[0],r[1]);for(let t=2;t<r.length;t+=2)e.lineTo(r[t],r[t+1]);n.closePath&&e.closePath();break}}}function tc(e,t){if(!t?.length)return!1;for(let n=0;n<t.length;n++){let r=t[n];if(!r?.shape)continue;let i=r.transform,a=i&&!i.isIdentity();a&&(e.save(),e.transform(i.a,i.b,i.c,i.d,i.tx,i.ty)),ec(e,r.shape),a&&e.restore()}return!0}function nc(e,t,n,r){let i=e.fill;if(i instanceof _a){i.buildGradient();let a=i.texture;if(a){let o=L.getTintedPattern(a,t),s=n?Ys.copyFrom(n).scale(a.source.pixelWidth,a.source.pixelHeight):Ys.copyFrom(i.transform);return r&&!e.textureSpace&&s.append(r),L.applyPatternTransform(o,s),o}}if(i instanceof No){let e=L.getTintedPattern(i.texture,t);return L.applyPatternTransform(e,i.transform,!1),e}let a=e.texture;if(a&&a!==f.WHITE){if(!a.source.resource)return Gs;let r=L.getTintedPattern(a,t),i=e.matrix;if(n){let{resolution:e}=a.source;if(i=Ys.copyFrom(n),a.rotate){let{uvs:t,orig:n}=a;i.prepend(Xs.set(t.x1-t.x0,t.y1-t.y0,t.x3-t.x0,t.y3-t.y0,t.x0,t.y0).invert()).scale(n.width*e,n.height*e)}else i.scale(a.source.pixelWidth,a.source.pixelHeight).translate(-a.frame.x*e,-a.frame.y*e)}return L.applyPatternTransform(r,i),r}return Qs(t)}var rc=class{constructor(){this.shader=null}contextChange(e){}execute(n,r){let i=n.renderer,a=i.canvasContext,o=a.activeContext,s=r.groupTransform,l=i.globalUniforms.globalUniformData?.worldColor??4294967295,u=r.groupColorAlpha,d=(l>>>24&255)/255,p=(u>>>24&255)/255,m=i.filter?.alphaMultiplier??1,h=d*p*m;if(h<=0)return;let g=l&16777215,_=c(t(u&16777215,g)),v=i._roundPixels|r._roundPixels;o.save(),a.setContextTransform(s,v===1),a.setBlendMode(r.groupBlendMode);let y=r.context.instructions;for(let n=0;n<y.length;n++){let r=y[n];if(r.action===`texture`){let n=r.data,i=n.image,c=i?L.getCanvasSource(i):null;if(!c)continue;let l=n.alpha*h;if(l<=0)continue;let u=t(n.style,_);o.globalAlpha=l;let d=c;u!==16777215&&(d=L.getTintedCanvas({texture:i},u));let f=i.frame,p=i.source._resolution??i.source.resolution??1,m=f.x*p,g=f.y*p,y=f.width*p,b=f.height*p;d!==c&&(m=0,g=0);let x=n.transform,S=x&&!x.isIdentity(),C=i.rotate;S||C?(Ks.copyFrom(s),S&&Ks.append(x),C&&e.matrixAppendRotationInv(Ks,C,n.dx,n.dy,n.dw,n.dh),a.setContextTransform(Ks,v===1)):a.setContextTransform(s,v===1),o.drawImage(d,m,g,d===c?y:d.width,d===c?b:d.height,C?0:n.dx,C?0:n.dy,n.dw,n.dh),(S||C)&&a.setContextTransform(s,v===1);continue}let i=r.data,c=i?.path?.shapePath;if(!c?.shapePrimitives?.length)continue;let l=i.style,u=t(l.color,_),d=l.alpha*h;if(d<=0)continue;let p=r.action===`stroke`;if(o.globalAlpha=d,p){let e=l;o.lineWidth=e.width,o.lineCap=e.cap,o.lineJoin=e.join,o.miterLimit=e.miterLimit}let m=c.shapePrimitives;if(!p&&i.hole?.shapePath?.shapePrimitives?.length){let e=m[m.length-1];e.holes=i.hole.shapePath.shapePrimitives}for(let e=0;e<m.length;e++){let t=m[e];if(!t?.shape)continue;let n=t.transform,r=n&&!n.isIdentity(),i=l.texture&&l.texture!==f.WHITE,a=l.textureSpace===`global`?n:null,c=nc(l,u,i?wa(qs,l,t.shape,a):null,r?Js.copyFrom(s).append(n):s);if(r&&(o.save(),o.transform(n.a,n.b,n.c,n.d,n.tx,n.ty)),p){let e=l;if(e.alignment!==.5&&!e.pixelLine){let n=[],r=[],i=[];Ta[t.shape.type]?.build(t.shape,n)?(ca(n,e,!1,t.shape.closePath??!0,r,i),o.fillStyle=c,Zs(o,r,i)):(o.strokeStyle=c,o.beginPath(),ec(o,t.shape),o.stroke())}else o.strokeStyle=c,o.beginPath(),ec(o,t.shape),o.stroke()}else o.fillStyle=c,o.beginPath(),ec(o,t.shape),tc(o,t.holes)?o.fill(`evenodd`):o.fill();r&&o.restore()}}o.restore()}destroy(){this.shader=null}};rc.extension={type:[D.CanvasPipesAdaptor],name:`graphics`};var ic=class{init(e,t){this._renderer=e,this._renderTargetSystem=t}initGpuRenderTarget(e){let t=e.colorTexture,{canvas:n,context:r}=this._ensureCanvas(t);return{canvas:n,context:r,width:n.width,height:n.height}}resizeGpuRenderTarget(e){let t=e.colorTexture,{canvas:n}=this._ensureCanvas(t);n.width=e.pixelWidth,n.height=e.pixelHeight}startRenderPass(e,t,n,r){let i=this._renderTargetSystem.getGpuRenderTarget(e);this._renderer.canvasContext.activeContext=i.context,this._renderer.canvasContext.activeResolution=e.resolution,t&&this.clear(e,t,n,r)}clear(e,t,n,r){let i=this._renderTargetSystem.getGpuRenderTarget(e).context,a=r||{x:0,y:0,width:e.pixelWidth,height:e.pixelHeight};if(i.setTransform(1,0,0,1,0,0),i.clearRect(a.x,a.y,a.width,a.height),n){let e=I.shared.setValue(n);e.alpha>0&&(i.globalAlpha=e.alpha,i.fillStyle=e.toHex(),i.fillRect(a.x,a.y,a.width,a.height),i.globalAlpha=1)}}finishRenderPass(){}copyToTexture(e,t,n,r,i){let a=this._renderTargetSystem.getGpuRenderTarget(e).canvas,o=t.source,{context:s}=this._ensureCanvas(o),c=i?.x??0,l=i?.y??0;return s.drawImage(a,n.x,n.y,r.width,r.height,c,l,r.width,r.height),o.update(),t}copyDepthTexture(e,t,n,r,i){u(`[CanvasRenderTargetAdaptor] copyDepthTexture is not supported in the canvas renderer`)}destroyGpuRenderTarget(e){}_ensureCanvas(e){let t=e.resource;(!t||!se.test(t))&&(t=b.get().createCanvas(e.pixelWidth,e.pixelHeight),e.resource=t),(t.width!==e.pixelWidth||t.height!==e.pixelHeight)&&(t.width=e.pixelWidth,t.height=e.pixelHeight);let n=t.getContext(`2d`);return{canvas:t,context:n}}},ac=class extends Ie{constructor(e){super(e),this.adaptor=new ic,this.adaptor.init(e,this)}};ac.extension={type:[D.CanvasSystem],name:`renderTarget`};var oc=class{constructor(e){}init(){}initSource(e){}generateCanvas(e){let t=b.get().createCanvas(),n=t.getContext(`2d`),r=L.getCanvasSource(e);if(!r)return t;let i=e.frame,a=e.source._resolution??e.source.resolution??1,o=i.x*a,s=i.y*a,c=i.width*a,l=i.height*a;return t.width=Math.ceil(c),t.height=Math.ceil(l),n.drawImage(r,o,s,c,l,0,0,c,l),t}getPixels(e){let t=this.generateCanvas(e);return{pixels:t.getContext(`2d`,{willReadFrequently:!0}).getImageData(0,0,t.width,t.height).data,width:t.width,height:t.height}}destroy(){}};oc.extension={type:[D.CanvasSystem],name:`texture`};var sc=[...Pe,Us,Ws,oc,ac],cc=[De,ke,be,Me,Se,Bs,Fs,Fe],lc=[js,rc],uc=[],dc=[],fc=[];y.handleByNamedList(D.CanvasSystem,uc),y.handleByNamedList(D.CanvasPipes,dc),y.handleByNamedList(D.CanvasPipesAdaptor,fc),y.add(...sc,...cc,...lc);var pc=class extends he{constructor(){let e={name:`canvas`,type:O.CANVAS,systems:uc,renderPipes:dc,renderPipeAdaptors:fc};super(e)}},mc=(e=>(e[e.ELEMENT_ARRAY_BUFFER=34963]=`ELEMENT_ARRAY_BUFFER`,e[e.ARRAY_BUFFER=34962]=`ARRAY_BUFFER`,e[e.UNIFORM_BUFFER=35345]=`UNIFORM_BUFFER`,e))(mc||{}),hc=class{constructor(e,t){this._lastBindBaseLocation=-1,this._lastBindCallId=-1,this.buffer=e||null,this.updateID=-1,this.byteLength=-1,this.type=t}destroy(){this.buffer=null,this.updateID=-1,this.byteLength=-1,this.type=-1,this._lastBindBaseLocation=-1,this._lastBindCallId=-1}},gc=class{constructor(e){this._boundBufferBases=Object.create(null),this._minBaseLocation=0,this._nextBindBaseIndex=this._minBaseLocation,this._bindCallId=0,this._renderer=e,this._managedBuffers=new Ce({renderer:e,type:`resource`,onUnload:this.onBufferUnload.bind(this),name:`glBuffer`})}destroy(){this._managedBuffers.destroy(),this._renderer=null,this._gl=null,this._boundBufferBases={}}contextChange(){this._gl=this._renderer.gl,this.destroyAll(!0),this._maxBindings=this._renderer.limits.maxUniformBindings}getGlBuffer(e){return e._gcLastUsed=this._renderer.gc.now,e._gpuData[this._renderer.uid]||this.createGLBuffer(e)}bind(e){let{_gl:t}=this,n=this.getGlBuffer(e);t.bindBuffer(n.type,n.buffer)}bindBufferBase(e,t){let{_gl:n}=this;this._boundBufferBases[t]!==e&&(this._boundBufferBases[t]=e,e._lastBindBaseLocation=t,n.bindBufferBase(n.UNIFORM_BUFFER,t,e.buffer))}nextBindBase(e){this._bindCallId++,this._minBaseLocation=0,e&&(this._boundBufferBases[0]=null,this._minBaseLocation=1,this._nextBindBaseIndex<1&&(this._nextBindBaseIndex=1))}freeLocationForBufferBase(e){let t=this.getLastBindBaseLocation(e);if(t>=this._minBaseLocation)return e._lastBindCallId=this._bindCallId,t;let n=0,r=this._nextBindBaseIndex;for(;n<2;){r>=this._maxBindings&&(r=this._minBaseLocation,n++);let e=this._boundBufferBases[r];if(e&&e._lastBindCallId===this._bindCallId){r++;continue}break}return t=r,this._nextBindBaseIndex=r+1,n>=2?-1:(e._lastBindCallId=this._bindCallId,this._boundBufferBases[t]=null,t)}getLastBindBaseLocation(e){let t=e._lastBindBaseLocation;return this._boundBufferBases[t]===e?t:-1}bindBufferRange(e,t,n,r){let{_gl:i}=this;n||=0,t||=0,this._boundBufferBases[t]=null,i.bindBufferRange(i.UNIFORM_BUFFER,t||0,e.buffer,n*256,r||256)}updateBuffer(e){let{_gl:t}=this,n=this.getGlBuffer(e);if(e._updateID===n.updateID)return n;n.updateID=e._updateID,t.bindBuffer(n.type,n.buffer);let r=e.data,i=e.descriptor.usage&N.STATIC?t.STATIC_DRAW:t.DYNAMIC_DRAW;return r?n.byteLength>=r.byteLength?t.bufferSubData(n.type,e._updateOffset,r,e._updateOffset/r.BYTES_PER_ELEMENT,(e._updateSize||r.byteLength)/r.BYTES_PER_ELEMENT):(n.byteLength=r.byteLength,t.bufferData(n.type,r,i)):(n.byteLength=e.descriptor.size,t.bufferData(n.type,n.byteLength,i)),n}destroyAll(e=!1){this._managedBuffers.removeAll(e)}onBufferUnload(e,t=!1){let n=e._gpuData[this._renderer.uid];n&&(t||this._gl.deleteBuffer(n.buffer))}createGLBuffer(e){let{_gl:t}=this,n=mc.ARRAY_BUFFER;e.descriptor.usage&N.INDEX?n=mc.ELEMENT_ARRAY_BUFFER:e.descriptor.usage&N.UNIFORM&&(n=mc.UNIFORM_BUFFER);let r=new hc(t.createBuffer(),n);return e._gpuData[this._renderer.uid]=r,this._managedBuffers.add(e),r}resetState(){this._boundBufferBases=Object.create(null)}};gc.extension={type:[D.WebGLSystem],name:`buffer`};var _c=class e{constructor(e){this.supports={uint32Indices:!0,uniformBufferObject:!0,vertexArrayObject:!0,srgbTextures:!0,nonPowOf2wrapping:!0,msaa:!0,nonPowOf2mipmaps:!0},this._renderer=e,this.extensions=Object.create(null),this.handleContextLost=this.handleContextLost.bind(this),this.handleContextRestored=this.handleContextRestored.bind(this)}get isLost(){return!this.gl||this.gl.isContextLost()}contextChange(e){this.gl=e,this._renderer.gl=e}init(t){t={...e.defaultOptions,...t};let n=this.multiView=t.multiView;if(t.context&&n&&(u(`Renderer created with both a context and multiview enabled. Disabling multiView as both cannot work together.`),n=!1),n?this.canvas=b.get().createCanvas(this._renderer.canvas.width,this._renderer.canvas.height):this.canvas=this._renderer.view.canvas,t.context)this.initFromContext(t.context);else{let e=this._renderer.background.alpha<1,n=t.premultipliedAlpha??!0,r=t.antialias&&!this._renderer.backBuffer.useBackBuffer;this.createContext(t.preferWebGLVersion,{alpha:e,premultipliedAlpha:n,antialias:r,stencil:!0,preserveDrawingBuffer:t.preserveDrawingBuffer,powerPreference:t.powerPreference??`default`})}}ensureCanvasSize(e){if(!this.multiView){e!==this.canvas&&u(`multiView is disabled, but targetCanvas is not the main canvas`);return}let{canvas:t}=this;(t.width<e.width||t.height<e.height)&&(t.width=Math.max(e.width,e.width),t.height=Math.max(e.height,e.height))}initFromContext(e){this.gl=e,this.webGLVersion=e instanceof b.get().getWebGLRenderingContext()?1:2,this.getExtensions(),this.validateContext(e),this._renderer.runners.contextChange.emit(e);let t=this._renderer.view.canvas;t.addEventListener(`webglcontextlost`,this.handleContextLost,!1),t.addEventListener(`webglcontextrestored`,this.handleContextRestored,!1)}createContext(e,t){let n,r=this.canvas;if(e===2&&(n=r.getContext(`webgl2`,t)),!n&&(n=r.getContext(`webgl`,t),!n))throw Error(`This browser does not support WebGL. Try using the canvas renderer`);this.gl=n,this.initFromContext(this.gl)}getExtensions(){let{gl:e}=this,t={anisotropicFiltering:e.getExtension(`EXT_texture_filter_anisotropic`),floatTextureLinear:e.getExtension(`OES_texture_float_linear`),s3tc:e.getExtension(`WEBGL_compressed_texture_s3tc`),s3tc_sRGB:e.getExtension(`WEBGL_compressed_texture_s3tc_srgb`),etc:e.getExtension(`WEBGL_compressed_texture_etc`),etc1:e.getExtension(`WEBGL_compressed_texture_etc1`),pvrtc:e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`),atc:e.getExtension(`WEBGL_compressed_texture_atc`),astc:e.getExtension(`WEBGL_compressed_texture_astc`),bptc:e.getExtension(`EXT_texture_compression_bptc`),rgtc:e.getExtension(`EXT_texture_compression_rgtc`),loseContext:e.getExtension(`WEBGL_lose_context`)};if(this.webGLVersion===1)this.extensions={...t,drawBuffers:e.getExtension(`WEBGL_draw_buffers`),depthTexture:e.getExtension(`WEBGL_depth_texture`),vertexArrayObject:e.getExtension(`OES_vertex_array_object`)||e.getExtension(`MOZ_OES_vertex_array_object`)||e.getExtension(`WEBKIT_OES_vertex_array_object`),uint32ElementIndex:e.getExtension(`OES_element_index_uint`),floatTexture:e.getExtension(`OES_texture_float`),floatTextureLinear:e.getExtension(`OES_texture_float_linear`),textureHalfFloat:e.getExtension(`OES_texture_half_float`),textureHalfFloatLinear:e.getExtension(`OES_texture_half_float_linear`),vertexAttribDivisorANGLE:e.getExtension(`ANGLE_instanced_arrays`),srgb:e.getExtension(`EXT_sRGB`)};else{this.extensions={...t,colorBufferFloat:e.getExtension(`EXT_color_buffer_float`)};let n=e.getExtension(`WEBGL_provoking_vertex`);n&&n.provokingVertexWEBGL(n.FIRST_VERTEX_CONVENTION_WEBGL)}}handleContextLost(e){e.preventDefault(),this._contextLossForced&&(this._contextLossForced=!1,setTimeout(()=>{this.gl.isContextLost()&&this.extensions.loseContext?.restoreContext()},0))}handleContextRestored(){this.getExtensions(),this._renderer.runners.contextChange.emit(this.gl)}destroy(){let e=this._renderer.view.canvas;this._renderer=null,e.removeEventListener(`webglcontextlost`,this.handleContextLost),e.removeEventListener(`webglcontextrestored`,this.handleContextRestored),this.gl.useProgram(null),this.extensions.loseContext?.loseContext()}forceContextLoss(){this.extensions.loseContext?.loseContext(),this._contextLossForced=!0}validateContext(e){let t=e.getContextAttributes();t&&!t.stencil&&u(`Provided WebGL context does not have a stencil buffer, masks may not render correctly`);let n=this.supports,r=this.webGLVersion===2,i=this.extensions;n.uint32Indices=r||!!i.uint32ElementIndex,n.uniformBufferObject=r,n.vertexArrayObject=r||!!i.vertexArrayObject,n.srgbTextures=r||!!i.srgb,n.nonPowOf2wrapping=r,n.nonPowOf2mipmaps=r,n.msaa=r,n.uint32Indices||u(`Provided WebGL context does not support 32 index buffer, large scenes may not render correctly`)}};_c.extension={type:[D.WebGLSystem],name:`context`},_c.defaultOptions={context:null,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:void 0,preferWebGLVersion:2,multiView:!1};var vc=_c,yc=(e=>(e[e.RGBA=6408]=`RGBA`,e[e.RGB=6407]=`RGB`,e[e.RG=33319]=`RG`,e[e.RED=6403]=`RED`,e[e.RGBA_INTEGER=36249]=`RGBA_INTEGER`,e[e.RGB_INTEGER=36248]=`RGB_INTEGER`,e[e.RG_INTEGER=33320]=`RG_INTEGER`,e[e.RED_INTEGER=36244]=`RED_INTEGER`,e[e.ALPHA=6406]=`ALPHA`,e[e.LUMINANCE=6409]=`LUMINANCE`,e[e.LUMINANCE_ALPHA=6410]=`LUMINANCE_ALPHA`,e[e.DEPTH_COMPONENT=6402]=`DEPTH_COMPONENT`,e[e.DEPTH_STENCIL=34041]=`DEPTH_STENCIL`,e))(yc||{}),bc=(e=>(e[e.TEXTURE_2D=3553]=`TEXTURE_2D`,e[e.TEXTURE_CUBE_MAP=34067]=`TEXTURE_CUBE_MAP`,e[e.TEXTURE_2D_ARRAY=35866]=`TEXTURE_2D_ARRAY`,e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]=`TEXTURE_CUBE_MAP_POSITIVE_X`,e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]=`TEXTURE_CUBE_MAP_NEGATIVE_X`,e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]=`TEXTURE_CUBE_MAP_POSITIVE_Y`,e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]=`TEXTURE_CUBE_MAP_NEGATIVE_Y`,e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]=`TEXTURE_CUBE_MAP_POSITIVE_Z`,e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]=`TEXTURE_CUBE_MAP_NEGATIVE_Z`,e))(bc||{}),J=(e=>(e[e.UNSIGNED_BYTE=5121]=`UNSIGNED_BYTE`,e[e.UNSIGNED_SHORT=5123]=`UNSIGNED_SHORT`,e[e.UNSIGNED_SHORT_5_6_5=33635]=`UNSIGNED_SHORT_5_6_5`,e[e.UNSIGNED_SHORT_4_4_4_4=32819]=`UNSIGNED_SHORT_4_4_4_4`,e[e.UNSIGNED_SHORT_5_5_5_1=32820]=`UNSIGNED_SHORT_5_5_5_1`,e[e.UNSIGNED_INT=5125]=`UNSIGNED_INT`,e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]=`UNSIGNED_INT_10F_11F_11F_REV`,e[e.UNSIGNED_INT_2_10_10_10_REV=33640]=`UNSIGNED_INT_2_10_10_10_REV`,e[e.UNSIGNED_INT_24_8=34042]=`UNSIGNED_INT_24_8`,e[e.UNSIGNED_INT_5_9_9_9_REV=35902]=`UNSIGNED_INT_5_9_9_9_REV`,e[e.BYTE=5120]=`BYTE`,e[e.SHORT=5122]=`SHORT`,e[e.INT=5124]=`INT`,e[e.FLOAT=5126]=`FLOAT`,e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]=`FLOAT_32_UNSIGNED_INT_24_8_REV`,e[e.HALF_FLOAT=36193]=`HALF_FLOAT`,e))(J||{}),xc={uint8x2:J.UNSIGNED_BYTE,uint8x4:J.UNSIGNED_BYTE,sint8x2:J.BYTE,sint8x4:J.BYTE,unorm8x2:J.UNSIGNED_BYTE,unorm8x4:J.UNSIGNED_BYTE,snorm8x2:J.BYTE,snorm8x4:J.BYTE,uint16x2:J.UNSIGNED_SHORT,uint16x4:J.UNSIGNED_SHORT,sint16x2:J.SHORT,sint16x4:J.SHORT,unorm16x2:J.UNSIGNED_SHORT,unorm16x4:J.UNSIGNED_SHORT,snorm16x2:J.SHORT,snorm16x4:J.SHORT,float16x2:J.HALF_FLOAT,float16x4:J.HALF_FLOAT,float32:J.FLOAT,float32x2:J.FLOAT,float32x3:J.FLOAT,float32x4:J.FLOAT,uint32:J.UNSIGNED_INT,uint32x2:J.UNSIGNED_INT,uint32x3:J.UNSIGNED_INT,uint32x4:J.UNSIGNED_INT,sint32:J.INT,sint32x2:J.INT,sint32x3:J.INT,sint32x4:J.INT};function Sc(e){return xc[e]??xc.float32}var Cc={"point-list":0,"line-list":1,"line-strip":3,"triangle-list":4,"triangle-strip":5},wc=class{constructor(){this.vaoCache=Object.create(null)}destroy(){this.vaoCache=Object.create(null)}},Tc=class{constructor(e){this._renderer=e,this._activeGeometry=null,this._activeVao=null,this.hasVao=!0,this.hasInstance=!0,this._managedGeometries=new Ce({renderer:e,type:`resource`,onUnload:this.onGeometryUnload.bind(this),name:`glGeometry`})}contextChange(){let e=this.gl=this._renderer.gl;if(!this._renderer.context.supports.vertexArrayObject)throw Error(`[PixiJS] Vertex Array Objects are not supported on this device`);this.destroyAll(!0);let t=this._renderer.context.extensions.vertexArrayObject;t&&(e.createVertexArray=()=>t.createVertexArrayOES(),e.bindVertexArray=e=>t.bindVertexArrayOES(e),e.deleteVertexArray=e=>t.deleteVertexArrayOES(e));let n=this._renderer.context.extensions.vertexAttribDivisorANGLE;n&&(e.drawArraysInstanced=(e,t,r,i)=>{n.drawArraysInstancedANGLE(e,t,r,i)},e.drawElementsInstanced=(e,t,r,i,a)=>{n.drawElementsInstancedANGLE(e,t,r,i,a)},e.vertexAttribDivisor=(e,t)=>n.vertexAttribDivisorANGLE(e,t)),this._activeGeometry=null,this._activeVao=null}bind(e,t){let n=this.gl;this._activeGeometry=e;let r=this.getVao(e,t);this._activeVao!==r&&(this._activeVao=r,n.bindVertexArray(r)),this.updateBuffers()}resetState(){this.unbind()}updateBuffers(){let e=this._activeGeometry,t=this._renderer.buffer;for(let n=0;n<e.buffers.length;n++){let r=e.buffers[n];t.updateBuffer(r)}e._gcLastUsed=this._renderer.gc.now}checkCompatibility(e,t){let n=e.attributes,r=t._attributeData;for(let e in r)if(!n[e])throw Error(`shader and geometry incompatible, geometry missing the "${e}" attribute`)}getSignature(e,t){let n=e.attributes,r=t._attributeData,i=[`g`,e.uid];for(let e in n)r[e]&&i.push(e,r[e].location);return i.join(`-`)}getVao(e,t){return e._gpuData[this._renderer.uid]?.vaoCache[t._key]||this.initGeometryVao(e,t)}initGeometryVao(e,t,n=!0){let r=this._renderer.gl,i=this._renderer.buffer;this._renderer.shader._getProgramData(t),this.checkCompatibility(e,t);let a=this.getSignature(e,t),o=e._gpuData[this._renderer.uid];o||(o=new wc,e._gpuData[this._renderer.uid]=o,this._managedGeometries.add(e));let s=o.vaoCache,c=s[a];if(c)return s[t._key]=c,c;Ge(e,t._attributeData);let l=e.buffers;c=r.createVertexArray(),r.bindVertexArray(c);for(let e=0;e<l.length;e++){let t=l[e];i.bind(t)}return this.activateVao(e,t),s[t._key]=c,s[a]=c,r.bindVertexArray(null),c}onGeometryUnload(e,t=!1){let n=e._gpuData[this._renderer.uid];if(!n)return;let r=n.vaoCache;if(!t)for(let e in r)this._activeVao!==r[e]&&this.resetState(),this.gl.deleteVertexArray(r[e])}destroyAll(e=!1){this._managedGeometries.removeAll(e)}activateVao(e,t){let n=this._renderer.gl,r=this._renderer.buffer,i=e.attributes;e.indexBuffer&&r.bind(e.indexBuffer);let a=null;for(let e in i){let o=i[e],s=o.buffer,c=r.getGlBuffer(s),l=t._attributeData[e];if(l){a!==c&&(r.bind(s),a=c);let e=l.location;n.enableVertexAttribArray(e);let t=te(o.format),i=Sc(o.format);if(l.format?.substring(1,4)===`int`?n.vertexAttribIPointer(e,t.size,i,o.stride,o.offset):n.vertexAttribPointer(e,t.size,i,t.normalised,o.stride,o.offset),o.instance)if(this.hasInstance){let t=o.divisor??1;n.vertexAttribDivisor(e,t)}else throw Error(`geometry error, GPU Instancing is not supported on this device`)}}}draw(e,t,n,r){let{gl:i}=this._renderer,a=this._activeGeometry,o=Cc[e||a.topology];if(r??=a.instanceCount,a.indexBuffer){let e=a.indexBuffer.data.BYTES_PER_ELEMENT,s=e===2?i.UNSIGNED_SHORT:i.UNSIGNED_INT;r===1?i.drawElements(o,t||a.indexBuffer.data.length,s,(n||0)*e):i.drawElementsInstanced(o,t||a.indexBuffer.data.length,s,(n||0)*e,r)}else r===1?i.drawArrays(o,n||0,t||a.vertexCount):i.drawArraysInstanced(o,n||0,t||a.vertexCount,r);return this}unbind(){this.gl.bindVertexArray(null),this._activeVao=null,this._activeGeometry=null}destroy(){this._managedGeometries.destroy(),this._renderer=null,this.gl=null,this._activeVao=null,this._activeGeometry=null}};Tc.extension={type:[D.WebGLSystem],name:`geometry`};var Ec=new re({attributes:{aPosition:[-1,-1,3,-1,-1,3]}}),Dc=class e{constructor(e){this.useBackBuffer=!1,this._useBackBufferThisRender=!1,this._renderer=e}init(t={}){let{useBackBuffer:n,antialias:r}={...e.defaultOptions,...t};this.useBackBuffer=n,this._antialias=r,this._renderer.context.supports.msaa||(u(`antialiasing, is not supported on when using the back buffer`),this._antialias=!1),this._state=j.for2d(),this._bigTriangleShader=new ne({glProgram:new k({vertex:`
                attribute vec2 aPosition;
                out vec2 vUv;

                void main() {
                    gl_Position = vec4(aPosition, 0.0, 1.0);

                    vUv = (aPosition + 1.0) / 2.0;

                    // flip dem UVs
                    vUv.y = 1.0 - vUv.y;
                }`,fragment:`
                in vec2 vUv;
                out vec4 finalColor;

                uniform sampler2D uTexture;

                void main() {
                    finalColor = texture(uTexture, vUv);
                }`,name:`big-triangle`}),resources:{uTexture:f.WHITE.source}})}renderStart(e){let t=this._renderer.renderTarget.getRenderTarget(e.target);if(this._useBackBufferThisRender=this.useBackBuffer&&!!t.isRoot,this._useBackBufferThisRender){let t=this._renderer.renderTarget.getRenderTarget(e.target);this._targetTexture=t.colorTexture,e.target=this._getBackBufferTexture(t.colorTexture)}}renderEnd(){this._presentBackBuffer()}_presentBackBuffer(){let e=this._renderer;e.renderTarget.finishRenderPass(),this._useBackBufferThisRender&&(e.renderTarget.bind({target:this._targetTexture,clear:!1}),this._bigTriangleShader.resources.uTexture=this._backBufferTexture.source,e.encoder.draw({geometry:Ec,shader:this._bigTriangleShader,state:this._state}))}_getBackBufferTexture(e){return this._backBufferTexture=this._backBufferTexture||new f({source:new p({width:e.width,height:e.height,resolution:e._resolution,antialias:this._antialias})}),this._backBufferTexture.source.resize(e.width,e.height,e._resolution),this._backBufferTexture}destroy(){this._backBufferTexture&&=(this._backBufferTexture.destroy(),null)}};Dc.extension={type:[D.WebGLSystem],name:`backBuffer`,priority:1},Dc.defaultOptions={useBackBuffer:!1};var Oc=Dc,kc=class{constructor(e){this._colorMaskCache=15,this._renderer=e}setMask(e){this._colorMaskCache!==e&&(this._colorMaskCache=e,this._renderer.gl.colorMask(!!(e&8),!!(e&4),!!(e&2),!!(e&1)))}};kc.extension={type:[D.WebGLSystem],name:`colorMask`};var Ac=class{constructor(e){this.commandFinished=Promise.resolve(),this._renderer=e}setGeometry(e,t){this._renderer.geometry.bind(e,t.glProgram)}finishRenderPass(){}draw(e){let t=this._renderer,{geometry:n,shader:r,state:i,skipSync:a,topology:o,size:s,start:c,instanceCount:l}=e;t.shader.bind(r,a),t.geometry.bind(n,t.shader._activeProgram),i&&t.state.set(i),t.geometry.draw(o,s,c,l??n.instanceCount)}destroy(){this._renderer=null}};Ac.extension={type:[D.WebGLSystem],name:`encoder`};var jc=class{constructor(e){this._renderer=e}contextChange(){let e=this._renderer.gl;this.maxTextures=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),this.maxBatchableTextures=_e(this.maxTextures,e),this.maxUniformBindings=this._renderer.context.webGLVersion===2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0}destroy(){}};jc.extension={type:[D.WebGLSystem],name:`limits`};var Mc=class{constructor(){this.width=-1,this.height=-1,this.msaa=!1,this._attachedMipLevel=0,this._attachedLayer=0,this.msaaRenderBuffer=[]}},Nc=class{constructor(e){this._stencilCache={enabled:!1,stencilReference:0,stencilMode:ze.NONE},this._renderTargetStencilState=Object.create(null),e.renderTarget.onRenderTargetChange.add(this)}contextChange(e){this._gl=e,this._comparisonFuncMapping={always:e.ALWAYS,never:e.NEVER,equal:e.EQUAL,"not-equal":e.NOTEQUAL,less:e.LESS,"less-equal":e.LEQUAL,greater:e.GREATER,"greater-equal":e.GEQUAL},this._stencilOpsMapping={keep:e.KEEP,zero:e.ZERO,replace:e.REPLACE,invert:e.INVERT,"increment-clamp":e.INCR,"decrement-clamp":e.DECR,"increment-wrap":e.INCR_WRAP,"decrement-wrap":e.DECR_WRAP},this.resetState()}onRenderTargetChange(e){if(this._activeRenderTarget===e)return;this._activeRenderTarget=e;let t=this._renderTargetStencilState[e.uid];t||=this._renderTargetStencilState[e.uid]={stencilMode:ze.DISABLED,stencilReference:0},this.setStencilMode(t.stencilMode,t.stencilReference)}resetState(){this._stencilCache.enabled=!1,this._stencilCache.stencilMode=ze.NONE,this._stencilCache.stencilReference=0}setStencilMode(e,t){let n=this._renderTargetStencilState[this._activeRenderTarget.uid],r=this._gl,i=et[e],a=this._stencilCache;if(n.stencilMode=e,n.stencilReference=t,e===ze.DISABLED){this._stencilCache.enabled&&(this._stencilCache.enabled=!1,r.disable(r.STENCIL_TEST));return}this._stencilCache.enabled||(this._stencilCache.enabled=!0,r.enable(r.STENCIL_TEST)),(e!==a.stencilMode||a.stencilReference!==t)&&(a.stencilMode=e,a.stencilReference=t,r.stencilFunc(this._comparisonFuncMapping[i.stencilBack.compare],t,255),r.stencilOp(r.KEEP,r.KEEP,this._stencilOpsMapping[i.stencilBack.passOp]))}};Nc.extension={type:[D.WebGLSystem],name:`stencil`};var Pc={f32:4,i32:4,"vec2<f32>":8,"vec3<f32>":12,"vec4<f32>":16,"vec2<i32>":8,"vec3<i32>":12,"vec4<i32>":16,u32:4,"vec2<u32>":8,"vec3<u32>":12,"vec4<u32>":16,"mat2x2<f32>":32,"mat3x3<f32>":48,"mat4x4<f32>":64};function Fc(e){let t=e.map(e=>({data:e,offset:0,size:0})),n=0,r=0;for(let e=0;e<t.length;e++){let i=t[e];if(n=Pc[i.data.type],!n)throw Error(`Unknown type ${i.data.type}`);i.data.size>1&&(n=Math.max(n,16)*i.data.size);let a=n===12?16:n;i.size=n;let o=r%16;o>0&&16-o<a?r+=(16-o)%16:r+=(n-o%n)%n,i.offset=r,r+=n}return r=Math.ceil(r/16)*16,{uboElements:t,size:r}}function Ic(e,t){let n=Math.max(Pc[e.data.type]/16,1),r=e.data.value.length/e.data.size,i=(4-r%4)%4,a=e.data.type.indexOf(`i32`)>=0?`dataInt32`:`data`;return`
        v = uv.${e.data.name};
        offset += ${t};

        arrayOffset = offset;

        t = 0;

        for(var i=0; i < ${e.data.size*n}; i++)
        {
            for(var j = 0; j < ${r}; j++)
            {
                ${a}[arrayOffset++] = v[t++];
            }
            ${i===0?``:`arrayOffset += ${i};`}
        }
    `}function Lc(e){return Je(e,Xe,Ic)}var Rc=class extends Ze{constructor(){super({createUboElements:Fc,generateUboSync:Lc})}};Rc.extension={type:[D.WebGLSystem],name:`ubo`};var zc=class{constructor(){this._clearColorCache=[0,0,0,0],this._viewPortCache=new l,this._boundFramebuffer=void 0}init(e,t){this._renderer=e,this._renderTargetSystem=t,e.runners.contextChange.add(this)}contextChange(){this._clearColorCache=[0,0,0,0],this._viewPortCache=new l,this._boundFramebuffer=void 0;let e=this._renderer.gl;this._drawBuffersCache=[];for(let t=1;t<=16;t++)this._drawBuffersCache[t]=Array.from({length:t},(t,n)=>e.COLOR_ATTACHMENT0+n)}copyToTexture(e,t,n,r,i){let a=this._renderTargetSystem,o=this._renderer,s=a.getGpuRenderTarget(e),c=o.gl;return this.finishRenderPass(e),c.bindFramebuffer(c.FRAMEBUFFER,s.resolveTargetFramebuffer),this._boundFramebuffer=s.resolveTargetFramebuffer,o.texture.bind(t,0),c.copyTexSubImage2D(c.TEXTURE_2D,0,i.x,i.y,n.x,n.y,r.width,r.height),t}copyDepthTexture(e,t,n,r,i){let a=this._renderTargetSystem,o=this._renderer.gl;this.finishRenderPass(e);let s=a.getRenderTarget(t),c=a.getGpuRenderTarget(e),l=a.getGpuRenderTarget(s);o.bindFramebuffer(o.READ_FRAMEBUFFER,c.framebuffer),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,l.framebuffer),this._boundFramebuffer=void 0,o.blitFramebuffer(n.x,n.y,n.x+r.width,n.y+r.height,i.x,i.y,i.x+r.width,i.y+r.height,o.DEPTH_BUFFER_BIT,o.NEAREST)}startRenderPass(e,t=!0,n,r,i=0,a=0){let o=this._renderTargetSystem.getGpuRenderTarget(e);if(a!==0&&this._renderer.context.webGLVersion<2)throw Error(`[RenderTargetSystem] Rendering to array layers requires WebGL2.`);if(i>0){if(o.msaa)throw Error(`[RenderTargetSystem] Rendering to mip levels is not supported with MSAA render targets.`);if(this._renderer.context.webGLVersion<2)throw Error(`[RenderTargetSystem] Rendering to mip levels requires WebGL2.`)}e.colorAttachments.forEach(e=>{this._renderer.texture.unbind(e.texture)});let s=this._renderer.gl;this.bindFramebuffer(o.framebuffer),!e.isRoot&&e.colorAttachments.length>0&&(o._attachedMipLevel!==i||o._attachedLayer!==a)&&(e.colorAttachments.forEach((e,t)=>{let n=e.texture,r=this._renderer.texture.getGlSource(n);if(r.target===s.TEXTURE_2D){if(a!==0)throw Error(`[RenderTargetSystem] layer must be 0 when rendering to 2D textures in WebGL.`);s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+t,s.TEXTURE_2D,r.texture,i)}else if(r.target===s.TEXTURE_2D_ARRAY){if(this._renderer.context.webGLVersion<2)throw Error(`[RenderTargetSystem] Rendering to 2D array textures requires WebGL2.`);s.framebufferTextureLayer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+t,r.texture,i,a)}else if(r.target===s.TEXTURE_CUBE_MAP){if(a<0||a>5)throw Error(`[RenderTargetSystem] Cube map layer must be between 0 and 5.`);s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+t,s.TEXTURE_CUBE_MAP_POSITIVE_X+a,r.texture,i)}else throw Error(`[RenderTargetSystem] Unsupported texture target for render-to-layer in WebGL.`)}),o._attachedMipLevel=i,o._attachedLayer=a),o.framebuffer&&(e.depthStencilAttachment?this._attachDepthStencilTexture(e,i,a):!o.depthStencilRenderBuffer&&(e.stencil||e.depth)&&this._initStencil(o)),e.colorAttachments.length>1&&this._setDrawBuffers(e,s);let c=r.y;e.isRoot&&(c=e.pixelHeight-r.height-r.y);let l=this._viewPortCache;(l.x!==r.x||l.y!==c||l.width!==r.width||l.height!==r.height)&&(l.x=r.x,l.y=c,l.width=r.width,l.height=r.height,s.viewport(r.x,c,r.width,r.height)),this.clear(e,t,n)}finishRenderPass(e){let t=this._renderTargetSystem.getGpuRenderTarget(e);if(!t.msaa||e.colorAttachments.length===0)return;let n=this._renderer.gl;n.bindFramebuffer(n.FRAMEBUFFER,t.resolveTargetFramebuffer),n.bindFramebuffer(n.READ_FRAMEBUFFER,t.framebuffer),n.blitFramebuffer(0,0,t.width,t.height,0,0,t.width,t.height,n.COLOR_BUFFER_BIT,n.NEAREST),n.bindFramebuffer(n.FRAMEBUFFER,t.framebuffer),this._boundFramebuffer=t.framebuffer}initGpuRenderTarget(e){let t=this._renderer.gl,n=new Mc;n._attachedMipLevel=0,n._attachedLayer=0;let r=e.colorTexture;return r instanceof se?(this._renderer.context.ensureCanvasSize(r.resource),n.framebuffer=null,n):(n.width=e.pixelWidth,n.height=e.pixelHeight,e.colorAttachments.length===0?this._initDepth(e,n):this._initColor(e,n),e.depthStencilAttachment&&this._attachDepthStencilTexture(e,0,0),t.bindFramebuffer(t.FRAMEBUFFER,null),this._boundFramebuffer=null,n)}destroyGpuRenderTarget(e){let t=this._renderer.gl;e.framebuffer&&=(t.deleteFramebuffer(e.framebuffer),null),e.resolveTargetFramebuffer&&=(t.deleteFramebuffer(e.resolveTargetFramebuffer),null),e.depthStencilRenderBuffer&&=(t.deleteRenderbuffer(e.depthStencilRenderBuffer),null),e.msaaRenderBuffer.forEach(e=>{t.deleteRenderbuffer(e)}),e.msaaRenderBuffer=null}clear(e,t,n,r,i=0,a=0){if(!t)return;if(a!==0)throw Error(`[RenderTargetSystem] Clearing array layers is not supported in WebGL renderer.`);let o=this._renderTargetSystem;if(typeof t==`boolean`&&(t=t?R.ALL:R.NONE),e.colorAttachments.length===0&&(t&=~R.COLOR,!t))return;let s=this._renderer.gl,c=!!(t&R.DEPTH)&&!this._renderer.state.depthMaskEnabled;if(t&R.COLOR){n??=o.defaultClearColor;let e=this._clearColorCache,t=n;(e[0]!==t[0]||e[1]!==t[1]||e[2]!==t[2]||e[3]!==t[3])&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],s.clearColor(t[0],t[1],t[2],t[3]))}c&&s.depthMask(!0),s.clear(t),c&&s.depthMask(!1)}resizeGpuRenderTarget(e){if(e.isRoot)return;let t=this._renderTargetSystem.getGpuRenderTarget(e);t.width=e.pixelWidth,t.height=e.pixelHeight,e.colorAttachments.length>0&&this._resizeColor(e,t),t.depthStencilRenderBuffer&&this._resizeStencil(t),this._boundFramebuffer=void 0}_initColor(e,t){let n=this._renderer,r=n.gl,i=r.createFramebuffer();if(t.resolveTargetFramebuffer=i,r.bindFramebuffer(r.FRAMEBUFFER,i),e.colorAttachments.forEach((e,i)=>{let a=e.texture;a.antialias&&(n.context.supports.msaa?t.msaa=!0:u(`[RenderTexture] Antialiasing on textures is not supported in WebGL1`)),n.texture.bindSource(a,0);let o=n.texture.getGlSource(a),s=o.texture;if(o.target===r.TEXTURE_2D)r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+i,r.TEXTURE_2D,s,0);else if(o.target===r.TEXTURE_2D_ARRAY){if(n.context.webGLVersion<2)throw Error(`[RenderTargetSystem] TEXTURE_2D_ARRAY requires WebGL2.`);r.framebufferTextureLayer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+i,s,0,0)}else if(o.target===r.TEXTURE_CUBE_MAP)r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+i,r.TEXTURE_CUBE_MAP_POSITIVE_X,s,0);else throw Error(`[RenderTargetSystem] Unsupported texture target for framebuffer attachment.`)}),t.msaa){let n=r.createFramebuffer();t.framebuffer=n,r.bindFramebuffer(r.FRAMEBUFFER,n),e.colorAttachments.forEach((e,n)=>{let i=r.createRenderbuffer();t.msaaRenderBuffer[n]=i})}else t.framebuffer=i;this._resizeColor(e,t)}_initDepth(e,t){let n=this._renderer;if(n.context.webGLVersion<2)throw Error(`[RenderTargetSystem] Depth-only render targets require WebGL2.`);let r=n.gl,i=r.createFramebuffer();t.resolveTargetFramebuffer=i,t.framebuffer=i,r.bindFramebuffer(r.FRAMEBUFFER,i),r.drawBuffers([r.NONE]),r.readBuffer(r.NONE)}_resizeColor(e,t){let n=e.colorAttachments[0].texture;if(t._attachedMipLevel=0,t._attachedLayer=0,e.colorAttachments.forEach((e,t)=>{t!==0&&e.texture.resize(n.width,n.height,n._resolution)}),t.msaa){let n=this._renderer,r=n.gl,i=t.framebuffer;r.bindFramebuffer(r.FRAMEBUFFER,i),e.colorAttachments.forEach((e,i)=>{let a=e.texture;n.texture.bindSource(a,0);let o=n.texture.getGlSource(a).internalFormat,s=t.msaaRenderBuffer[i];r.bindRenderbuffer(r.RENDERBUFFER,s),r.renderbufferStorageMultisample(r.RENDERBUFFER,4,o,a.pixelWidth,a.pixelHeight),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+i,r.RENDERBUFFER,s)})}}_attachDepthStencilTexture(e,t,n){let r=this._renderer,i=r.gl,a=e.depthStencilAttachment.texture,o=r.texture.getGlSource(a),s=o.texture,c=a.format,l;l=c===`depth24plus-stencil8`||c===`depth32float-stencil8`?i.DEPTH_STENCIL_ATTACHMENT:c===`stencil8`?i.STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,o.target===i.TEXTURE_2D?i.framebufferTexture2D(i.FRAMEBUFFER,l,i.TEXTURE_2D,s,t):o.target===i.TEXTURE_2D_ARRAY?i.framebufferTextureLayer(i.FRAMEBUFFER,l,s,t,n):o.target===i.TEXTURE_CUBE_MAP&&i.framebufferTexture2D(i.FRAMEBUFFER,l,i.TEXTURE_CUBE_MAP_POSITIVE_X+n,s,t)}_initStencil(e){if(e.framebuffer===null)return;let t=this._renderer.gl,n=t.createRenderbuffer();e.depthStencilRenderBuffer=n,t.bindRenderbuffer(t.RENDERBUFFER,n),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,n),this._resizeStencil(e)}_resizeStencil(e){let t=this._renderer.gl;t.bindRenderbuffer(t.RENDERBUFFER,e.depthStencilRenderBuffer),e.msaa?t.renderbufferStorageMultisample(t.RENDERBUFFER,4,t.DEPTH24_STENCIL8,e.width,e.height):t.renderbufferStorage(t.RENDERBUFFER,this._renderer.context.webGLVersion===2?t.DEPTH24_STENCIL8:t.DEPTH_STENCIL,e.width,e.height)}prerender(e){if(e.colorAttachments.length===0)return;let t=e.colorAttachments[0].texture.resource;this._renderer.context.multiView&&se.test(t)&&this._renderer.context.ensureCanvasSize(t)}postrender(e){if(!this._renderer.context.multiView||e.colorAttachments.length===0)return;let t=e.colorAttachments[0].texture;if(se.test(t.resource)){let e=this._renderer.context.canvas,n=t;n.context2D.drawImage(e,0,n.pixelHeight-e.height)}}_setDrawBuffers(e,t){let n=e.colorAttachments.length,r=this._drawBuffersCache[n];if(this._renderer.context.webGLVersion===1){let e=this._renderer.context.extensions.drawBuffers;e?e.drawBuffersWEBGL(r):u(`[RenderTexture] This WebGL1 context does not support rendering to multiple targets`)}else t.drawBuffers(r)}resetState(){this._boundFramebuffer=void 0,this._viewPortCache=new l,this._clearColorCache=[0,0,0,0]}bindFramebuffer(e){this._boundFramebuffer!==e&&(this._boundFramebuffer=e,this._renderer.gl.bindFramebuffer(this._renderer.gl.FRAMEBUFFER,e))}},Bc=class extends Ie{constructor(e){super(e),this.adaptor=new zc,this.adaptor.init(e,this)}resetState(){this.adaptor.resetState()}};Bc.extension={type:[D.WebGLSystem],name:`renderTarget`};var Vc=class extends ee{constructor(e,t){super(),this._resourceType=`textureView`,this._resourceId=g(`resource`),this._touched=0,this.source=e,this.viewDescriptor=t,this._onChange=this._onChange.bind(this),this._onDestroy=this._onDestroy.bind(this),this.source.on(`change`,this._onChange),this.source.on(`destroy`,this._onDestroy)}_onChange(){this.emit(`change`,this)}_onDestroy(){this.destroy()}get destroyed(){return this.source.destroyed}destroy(){this.source&&(this.source.off(`change`,this._onChange),this.source.off(`destroy`,this._onDestroy)),this.emit(`destroy`,this),this.removeAllListeners()}};function Hc(e,t){let n=[],r=[`
        var g = s.groups;
        var sS = r.shader;
        var p = s.glProgram;
        var ugS = r.uniformGroup;
        var resources;
    `],i=!1,a=0,o=t._getProgramData(e.glProgram);for(let s in e.groups){let c=e.groups[s];n.push(`
            resources = g[${s}].resources;
        `);for(let l in c.resources){let u=c.resources[l];if(u instanceof S)if(u.ubo){let t=e._uniformBindMap[s][Number(l)];n.push(`
                        sS.bindUniformBlock(
                            resources[${l}],
                            '${t}',
                            ${e.glProgram._uniformBlockData[t].index}
                        );
                    `)}else n.push(`
                        ugS.updateUniformGroup(resources[${l}], p, sD);
                    `);else if(u instanceof tt){let t=e._uniformBindMap[s][Number(l)];n.push(`
                    sS.bindUniformBlock(
                        resources[${l}],
                        '${t}',
                        ${e.glProgram._uniformBlockData[t].index}
                    );
                `)}else if(u instanceof p||u instanceof Vc){let c=e._uniformBindMap[s][l],u=o.uniformData[c];u&&(i||(i=!0,r.push(`
                        var tS = r.texture;
                        `)),t._gl.uniform1i(u.location,a),n.push(`
                        tS.bind(resources[${l}], ${a});
                    `),a++)}}}let s=[...r,...n].join(`
`);return Function(`r`,`s`,`sD`,s)}var Uc=class{constructor(e,t){this.program=e,this.uniformData=t,this.uniformGroups={},this.uniformDirtyGroups={},this.uniformBlockBindings={}}destroy(){this.uniformData=null,this.uniformGroups=null,this.uniformDirtyGroups=null,this.uniformBlockBindings=null,this.program=null}};function Wc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}function Gc(e){let t=Array(e);for(let e=0;e<t.length;e++)t[e]=!1;return t}function Kc(e,t){switch(e){case`float`:return 0;case`vec2`:return new Float32Array(2*t);case`vec3`:return new Float32Array(3*t);case`vec4`:return new Float32Array(4*t);case`int`:case`uint`:case`sampler2D`:case`sampler2DArray`:return 0;case`ivec2`:return new Int32Array(2*t);case`ivec3`:return new Int32Array(3*t);case`ivec4`:return new Int32Array(4*t);case`uvec2`:return new Uint32Array(2*t);case`uvec3`:return new Uint32Array(3*t);case`uvec4`:return new Uint32Array(4*t);case`bool`:return!1;case`bvec2`:return Gc(2*t);case`bvec3`:return Gc(3*t);case`bvec4`:return Gc(4*t);case`mat2`:return new Float32Array([1,0,0,1]);case`mat3`:return new Float32Array([1,0,0,0,1,0,0,0,1]);case`mat4`:return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}var qc=null,Jc={FLOAT:`float`,FLOAT_VEC2:`vec2`,FLOAT_VEC3:`vec3`,FLOAT_VEC4:`vec4`,INT:`int`,INT_VEC2:`ivec2`,INT_VEC3:`ivec3`,INT_VEC4:`ivec4`,UNSIGNED_INT:`uint`,UNSIGNED_INT_VEC2:`uvec2`,UNSIGNED_INT_VEC3:`uvec3`,UNSIGNED_INT_VEC4:`uvec4`,BOOL:`bool`,BOOL_VEC2:`bvec2`,BOOL_VEC3:`bvec3`,BOOL_VEC4:`bvec4`,FLOAT_MAT2:`mat2`,FLOAT_MAT3:`mat3`,FLOAT_MAT4:`mat4`,SAMPLER_2D:`sampler2D`,INT_SAMPLER_2D:`sampler2D`,UNSIGNED_INT_SAMPLER_2D:`sampler2D`,SAMPLER_2D_SHADOW:`sampler2DShadow`,SAMPLER_CUBE:`samplerCube`,INT_SAMPLER_CUBE:`samplerCube`,UNSIGNED_INT_SAMPLER_CUBE:`samplerCube`,SAMPLER_CUBE_SHADOW:`samplerCubeShadow`,SAMPLER_2D_ARRAY:`sampler2DArray`,INT_SAMPLER_2D_ARRAY:`sampler2DArray`,UNSIGNED_INT_SAMPLER_2D_ARRAY:`sampler2DArray`,SAMPLER_2D_ARRAY_SHADOW:`sampler2DArrayShadow`},Yc={float:`float32`,vec2:`float32x2`,vec3:`float32x3`,vec4:`float32x4`,int:`sint32`,ivec2:`sint32x2`,ivec3:`sint32x3`,ivec4:`sint32x4`,uint:`uint32`,uvec2:`uint32x2`,uvec3:`uint32x3`,uvec4:`uint32x4`,bool:`uint32`,bvec2:`uint32x2`,bvec3:`uint32x3`,bvec4:`uint32x4`};function Xc(e,t){if(!qc){let t=Object.keys(Jc);qc={};for(let n=0;n<t.length;++n){let r=t[n];qc[e[r]]=Jc[r]}}return qc[t]}function Zc(e,t){return Yc[Xc(e,t)]||`float32`}function Qc(e,t,n=!1){let r={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let i=t.getActiveAttrib(e,n);if(i.name.startsWith(`gl_`))continue;let a=Zc(t,i.type);r[i.name]={location:0,format:a,stride:te(a).stride,offset:0,instance:!1,start:0}}let a=Object.keys(r);if(n){a.sort((e,t)=>e>t?1:-1);for(let n=0;n<a.length;n++)r[a[n]].location=n,t.bindAttribLocation(e,n,a[n]);t.linkProgram(e)}else for(let n=0;n<a.length;n++)r[a[n]].location=t.getAttribLocation(e,a[n]);return r}function $c(e,t){if(!t.ACTIVE_UNIFORM_BLOCKS)return{};let n={},r=t.getProgramParameter(e,t.ACTIVE_UNIFORM_BLOCKS);for(let i=0;i<r;i++){let r=t.getActiveUniformBlockName(e,i);n[r]={name:r,index:t.getUniformBlockIndex(e,r),size:t.getActiveUniformBlockParameter(e,i,t.UNIFORM_BLOCK_DATA_SIZE)}}return n}function el(e,t){let n={},r=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<r;i++){let r=t.getActiveUniform(e,i),a=r.name.replace(/\[.*?\]$/,``),o=!!r.name.match(/\[.*?\]$/),s=Xc(t,r.type);n[a]={name:a,index:i,type:s,size:r.size,isArray:o,value:Kc(s,r.size)}}return n}function tl(e,t){let n=e.getShaderSource(t);if(n===null){console.error(`PixiJS Error: Could not retrieve shader source (WebGL context may be lost).`);return}let r=n.split(`
`).map((e,t)=>`${t}: ${e}`),i=e.getShaderInfoLog(t)??``,a=i.split(`
`),o={},s=a.map(e=>parseFloat(e.replace(/^ERROR\: 0\:([\d]+)\:.*$/,`$1`))).filter(e=>e&&!o[e]?(o[e]=!0,!0):!1),c=[``];s.forEach(e=>{r[e-1]=`%c${r[e-1]}%c`,c.push(`background: #FF0000; color:#FFFFFF; font-size: 10px`,`font-size: 10px`)}),c[0]=r.join(`
`),console.error(i),console.groupCollapsed(`click to view full shader code`),console.warn(...c),console.groupEnd()}function nl(e,t,n,r){e.getProgramParameter(t,e.LINK_STATUS)||(e.getShaderParameter(n,e.COMPILE_STATUS)||tl(e,n),e.getShaderParameter(r,e.COMPILE_STATUS)||tl(e,r),console.error(`PixiJS Error: Could not initialize shader.`),e.getProgramInfoLog(t)!==``&&console.warn(`PixiJS Warning: gl.getProgramInfoLog()`,e.getProgramInfoLog(t)))}function rl(e,t){let n=Wc(e,e.VERTEX_SHADER,t.vertex),r=Wc(e,e.FRAGMENT_SHADER,t.fragment),i=e.createProgram();e.attachShader(i,n),e.attachShader(i,r);let a=t.transformFeedbackVaryings;a&&(typeof e.transformFeedbackVaryings==`function`?e.transformFeedbackVaryings(i,a.names,a.bufferMode===`separate`?e.SEPARATE_ATTRIBS:e.INTERLEAVED_ATTRIBS):u(`TransformFeedback is not supported but TransformFeedbackVaryings are given.`)),e.linkProgram(i),e.getProgramParameter(i,e.LINK_STATUS)||nl(e,i,n,r),t._attributeData=Qc(i,e,!/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertex)),t._uniformData=el(i,e),t._uniformBlockData=$c(i,e),e.deleteShader(n),e.deleteShader(r);let o={};for(let n in t._uniformData){let r=t._uniformData[n];o[n]={location:e.getUniformLocation(i,n),value:Kc(r.type,r.size)}}return new Uc(i,o)}var il={textureCount:0,blockIndex:0},al=class{constructor(e){this._activeProgram=null,this._programDataHash=Object.create(null),this._shaderSyncFunctions=Object.create(null),this._renderer=e}contextChange(e){this._gl=e,this._programDataHash=Object.create(null),this._shaderSyncFunctions=Object.create(null),this._activeProgram=null}bind(e,t){if(this._setProgram(e.glProgram),t)return;il.textureCount=0,il.blockIndex=0;let n=this._shaderSyncFunctions[e.glProgram._key];n||=this._shaderSyncFunctions[e.glProgram._key]=this._generateShaderSync(e,this),this._renderer.buffer.nextBindBase(!!e.glProgram.transformFeedbackVaryings),n(this._renderer,e,il)}updateUniformGroup(e){this._renderer.uniformGroup.updateUniformGroup(e,this._activeProgram,il)}bindUniformBlock(e,t,n=0){let r=this._renderer.buffer,i=this._getProgramData(this._activeProgram),a=e._bufferResource;a||this._renderer.ubo.updateUniformGroup(e);let o=e.buffer,s=r.updateBuffer(o),c=r.freeLocationForBufferBase(s);if(a){let{offset:t,size:n}=e;t===0&&n===o.data.byteLength?r.bindBufferBase(s,c):r.bindBufferRange(s,c,t)}else r.getLastBindBaseLocation(s)!==c&&r.bindBufferBase(s,c);let l=this._activeProgram._uniformBlockData[t].index;i.uniformBlockBindings[n]!==c&&(i.uniformBlockBindings[n]=c,this._renderer.gl.uniformBlockBinding(i.program,l,c))}_setProgram(e){if(this._activeProgram===e)return;this._activeProgram=e;let t=this._getProgramData(e);this._gl.useProgram(t.program)}_getProgramData(e){return this._programDataHash[e._key]||this._createProgramData(e)}_createProgramData(e){let t=e._key;return this._programDataHash[t]=rl(this._gl,e),this._programDataHash[t]}destroy(){for(let e of Object.keys(this._programDataHash))this._programDataHash[e].destroy();this._programDataHash=null,this._shaderSyncFunctions=null,this._activeProgram=null,this._renderer=null,this._gl=null}_generateShaderSync(e,t){return Hc(e,t)}resetState(){this._activeProgram=null}};al.extension={type:[D.WebGLSystem],name:`shader`};var ol={f32:`if (cv !== v) {
            cu.value = v;
            gl.uniform1f(location, v);
        }`,"vec2<f32>":`if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2f(location, v[0], v[1]);
        }`,"vec3<f32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3f(location, v[0], v[1], v[2]);
        }`,"vec4<f32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4f(location, v[0], v[1], v[2], v[3]);
        }`,i32:`if (cv !== v) {
            cu.value = v;
            gl.uniform1i(location, v);
        }`,"vec2<i32>":`if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2i(location, v[0], v[1]);
        }`,"vec3<i32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3i(location, v[0], v[1], v[2]);
        }`,"vec4<i32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4i(location, v[0], v[1], v[2], v[3]);
        }`,u32:`if (cv !== v) {
            cu.value = v;
            gl.uniform1ui(location, v);
        }`,"vec2<u32>":`if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2ui(location, v[0], v[1]);
        }`,"vec3<u32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3ui(location, v[0], v[1], v[2]);
        }`,"vec4<u32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
        }`,bool:`if (cv !== v) {
            cu.value = v;
            gl.uniform1i(location, v);
        }`,"vec2<bool>":`if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2i(location, v[0], v[1]);
        }`,"vec3<bool>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3i(location, v[0], v[1], v[2]);
        }`,"vec4<bool>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4i(location, v[0], v[1], v[2], v[3]);
        }`,"mat2x2<f32>":`gl.uniformMatrix2fv(location, false, v);`,"mat3x3<f32>":`gl.uniformMatrix3fv(location, false, v);`,"mat4x4<f32>":`gl.uniformMatrix4fv(location, false, v);`},sl={f32:`gl.uniform1fv(location, v);`,"vec2<f32>":`gl.uniform2fv(location, v);`,"vec3<f32>":`gl.uniform3fv(location, v);`,"vec4<f32>":`gl.uniform4fv(location, v);`,"mat2x2<f32>":`gl.uniformMatrix2fv(location, false, v);`,"mat3x3<f32>":`gl.uniformMatrix3fv(location, false, v);`,"mat4x4<f32>":`gl.uniformMatrix4fv(location, false, v);`,i32:`gl.uniform1iv(location, v);`,"vec2<i32>":`gl.uniform2iv(location, v);`,"vec3<i32>":`gl.uniform3iv(location, v);`,"vec4<i32>":`gl.uniform4iv(location, v);`,u32:`gl.uniform1iv(location, v);`,"vec2<u32>":`gl.uniform2iv(location, v);`,"vec3<u32>":`gl.uniform3iv(location, v);`,"vec4<u32>":`gl.uniform4iv(location, v);`,bool:`gl.uniform1iv(location, v);`,"vec2<bool>":`gl.uniform2iv(location, v);`,"vec3<bool>":`gl.uniform3iv(location, v);`,"vec4<bool>":`gl.uniform4iv(location, v);`};function cl(e,t){let n=[`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
        var name = null;
    `];for(let r in e.uniforms){if(!t[r]){e.uniforms[r]instanceof S?e.uniforms[r].ubo?n.push(`
                        renderer.shader.bindUniformBlock(uv.${r}, "${r}");
                    `):n.push(`
                        renderer.shader.updateUniformGroup(uv.${r});
                    `):e.uniforms[r]instanceof tt&&n.push(`
                        renderer.shader.bindBufferResource(uv.${r}, "${r}");
                    `);continue}let i=e.uniformStructures[r],a=!1;for(let e=0;e<We.length;e++){let t=We[e];if(i.type===t.type&&t.test(i)){n.push(`name = "${r}";`,We[e].uniform),a=!0;break}}if(!a){let e=(i.size===1?ol:sl)[i.type].replace(`location`,`ud["${r}"].location`);n.push(`
            cu = ud["${r}"];
            cv = cu.value;
            v = uv["${r}"];
            ${e};`)}}return Function(`ud`,`uv`,`renderer`,`syncData`,n.join(`
`))}var ll=class{constructor(e){this._cache={},this._uniformGroupSyncHash={},this._renderer=e,this.gl=null,this._cache={}}contextChange(e){this.gl=e}updateUniformGroup(e,t,n){let r=this._renderer.shader._getProgramData(t);(!e.isStatic||e._dirtyId!==r.uniformDirtyGroups[e.uid])&&(r.uniformDirtyGroups[e.uid]=e._dirtyId,this._getUniformSyncFunction(e,t)(r.uniformData,e.uniforms,this._renderer,n))}_getUniformSyncFunction(e,t){return this._uniformGroupSyncHash[e._signature]?.[t._key]||this._createUniformSyncFunction(e,t)}_createUniformSyncFunction(e,t){let n=this._uniformGroupSyncHash[e._signature]||(this._uniformGroupSyncHash[e._signature]={}),r=this._getSignature(e,t._uniformData,`u`);return this._cache[r]||(this._cache[r]=this._generateUniformsSync(e,t._uniformData)),n[t._key]=this._cache[r],n[t._key]}_generateUniformsSync(e,t){return cl(e,t)}_getSignature(e,t,n){let r=e.uniforms,i=[`${n}-`];for(let e in r)i.push(e),t[e]&&i.push(t[e].type);return i.join(`-`)}destroy(){this._renderer=null,this._cache=null}};ll.extension={type:[D.WebGLSystem],name:`uniformGroup`};function ul(e){let t={};if(t.normal=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t.add=[e.ONE,e.ONE],t.multiply=[e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA],t.screen=[e.ONE,e.ONE_MINUS_SRC_COLOR,e.ONE,e.ONE_MINUS_SRC_ALPHA],t.none=[0,0],t[`normal-npm`]=[e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA],t[`add-npm`]=[e.SRC_ALPHA,e.ONE,e.ONE,e.ONE],t[`screen-npm`]=[e.SRC_ALPHA,e.ONE_MINUS_SRC_COLOR,e.ONE,e.ONE_MINUS_SRC_ALPHA],t.erase=[e.ZERO,e.ONE_MINUS_SRC_ALPHA],!(e instanceof b.get().getWebGLRenderingContext()))t.min=[e.ONE,e.ONE,e.ONE,e.ONE,e.MIN,e.MIN],t.max=[e.ONE,e.ONE,e.ONE,e.ONE,e.MAX,e.MAX];else{let n=e.getExtension(`EXT_blend_minmax`);n&&(t.min=[e.ONE,e.ONE,e.ONE,e.ONE,n.MIN_EXT,n.MIN_EXT],t.max=[e.ONE,e.ONE,e.ONE,e.ONE,n.MAX_EXT,n.MAX_EXT])}return t}var{BLEND:dl,OFFSET:fl,CULLING:pl,DEPTH_TEST:ml,WINDING:hl,DEPTH_MASK:gl}=v,_l=class e{constructor(e){this._invertFrontFace=!1,this.gl=null,this.stateId=0,this.polygonOffset=0,this.blendMode=`none`,this._blendEq=!1,this.map=[],this.map[dl]=this.setBlend,this.map[fl]=this.setOffset,this.map[pl]=this.setCullFace,this.map[ml]=this.setDepthTest,this.map[hl]=this.setFrontFace,this.map[gl]=this.setDepthMask,this.checks=[],this.defaultState=j.for2d(),e.renderTarget.onRenderTargetChange.add(this)}onRenderTargetChange(e){this._invertFrontFace=!e.isRoot!=!!e.flipY,this._cullFace?this.setFrontFace(this._frontFace):this._frontFaceDirty=!0}contextChange(e){this.gl=e,this.blendModesMap=ul(e),this.resetState()}set(e){if(e||=this.defaultState,this.stateId!==e.data){let t=this.stateId^e.data,n=0;for(;t;)t&1&&this.map[n].call(this,!!(e.data&1<<n)),t>>=1,n++;this.stateId=e.data}for(let t=0;t<this.checks.length;t++)this.checks[t](this,e)}forceState(e){e||=this.defaultState;for(let t=0;t<this.map.length;t++)this.map[t].call(this,!!(e.data&1<<t));for(let t=0;t<this.checks.length;t++)this.checks[t](this,e);this.stateId=e.data}setBlend(t){this._updateCheck(e._checkBlendMode,t),this.gl[t?`enable`:`disable`](this.gl.BLEND)}setOffset(t){this._updateCheck(e._checkPolygonOffset,t),this.gl[t?`enable`:`disable`](this.gl.POLYGON_OFFSET_FILL)}setDepthTest(e){this.gl[e?`enable`:`disable`](this.gl.DEPTH_TEST)}setDepthMask(e){this.gl.depthMask(e)}get depthMaskEnabled(){return!!(this.stateId&1<<gl)}setCullFace(e){this._cullFace=e,this.gl[e?`enable`:`disable`](this.gl.CULL_FACE),this._cullFace&&this._frontFaceDirty&&this.setFrontFace(this._frontFace)}setFrontFace(e){this._frontFace=e,this._frontFaceDirty=!1;let t=this._invertFrontFace?!e:e;this._glFrontFace!==t&&(this._glFrontFace=t,this.gl.frontFace(this.gl[t?`CW`:`CCW`]))}setBlendMode(e){if(this.blendModesMap[e]||(e=`normal`),e===this.blendMode)return;this.blendMode=e;let t=this.blendModesMap[e],n=this.gl;t.length===2?n.blendFunc(t[0],t[1]):n.blendFuncSeparate(t[0],t[1],t[2],t[3]),t.length===6?(this._blendEq=!0,n.blendEquationSeparate(t[4],t[5])):this._blendEq&&(this._blendEq=!1,n.blendEquationSeparate(n.FUNC_ADD,n.FUNC_ADD))}setPolygonOffset(e,t){this.gl.polygonOffset(e,t)}resetState(){this._glFrontFace=!1,this._frontFace=!1,this._cullFace=!1,this._frontFaceDirty=!1,this._invertFrontFace=!1,this.gl.frontFace(this.gl.CCW),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.forceState(this.defaultState),this._blendEq=!0,this.blendMode=``,this.setBlendMode(`normal`)}_updateCheck(e,t){let n=this.checks.indexOf(e);t&&n===-1?this.checks.push(e):!t&&n!==-1&&this.checks.splice(n,1)}static _checkBlendMode(e,t){e.setBlendMode(t.blendMode)}static _checkPolygonOffset(e,t){e.setPolygonOffset(1,t.polygonOffset)}destroy(){this.gl=null,this.checks.length=0}};_l.extension={type:[D.WebGLSystem],name:`state`};var vl=_l,yl=class{constructor(e){this.target=bc.TEXTURE_2D,this._layerInitMask=0,this.texture=e,this.width=-1,this.height=-1,this.type=J.UNSIGNED_BYTE,this.internalFormat=yc.RGBA,this.format=yc.RGBA,this.samplerType=0}destroy(){}},bl={id:`buffer`,upload(e,t,n,r,i,a=!1){let o=i||t.target;!a&&t.width===e.width&&t.height===e.height?n.texSubImage2D(o,0,0,0,e.width,e.height,t.format,t.type,e.resource):n.texImage2D(o,0,t.internalFormat,e.width,e.height,0,t.format,t.type,e.resource),t.width=e.width,t.height=e.height}},xl={"bc1-rgba-unorm":!0,"bc1-rgba-unorm-srgb":!0,"bc2-rgba-unorm":!0,"bc2-rgba-unorm-srgb":!0,"bc3-rgba-unorm":!0,"bc3-rgba-unorm-srgb":!0,"bc4-r-unorm":!0,"bc4-r-snorm":!0,"bc5-rg-unorm":!0,"bc5-rg-snorm":!0,"bc6h-rgb-ufloat":!0,"bc6h-rgb-float":!0,"bc7-rgba-unorm":!0,"bc7-rgba-unorm-srgb":!0,"etc2-rgb8unorm":!0,"etc2-rgb8unorm-srgb":!0,"etc2-rgb8a1unorm":!0,"etc2-rgb8a1unorm-srgb":!0,"etc2-rgba8unorm":!0,"etc2-rgba8unorm-srgb":!0,"eac-r11unorm":!0,"eac-r11snorm":!0,"eac-rg11unorm":!0,"eac-rg11snorm":!0,"astc-4x4-unorm":!0,"astc-4x4-unorm-srgb":!0,"astc-5x4-unorm":!0,"astc-5x4-unorm-srgb":!0,"astc-5x5-unorm":!0,"astc-5x5-unorm-srgb":!0,"astc-6x5-unorm":!0,"astc-6x5-unorm-srgb":!0,"astc-6x6-unorm":!0,"astc-6x6-unorm-srgb":!0,"astc-8x5-unorm":!0,"astc-8x5-unorm-srgb":!0,"astc-8x6-unorm":!0,"astc-8x6-unorm-srgb":!0,"astc-8x8-unorm":!0,"astc-8x8-unorm-srgb":!0,"astc-10x5-unorm":!0,"astc-10x5-unorm-srgb":!0,"astc-10x6-unorm":!0,"astc-10x6-unorm-srgb":!0,"astc-10x8-unorm":!0,"astc-10x8-unorm-srgb":!0,"astc-10x10-unorm":!0,"astc-10x10-unorm-srgb":!0,"astc-12x10-unorm":!0,"astc-12x10-unorm-srgb":!0,"astc-12x12-unorm":!0,"astc-12x12-unorm-srgb":!0},Sl={id:`compressed`,upload(e,t,n,r,i,a){let o=i??t.target;n.pixelStorei(n.UNPACK_ALIGNMENT,4);let s=e.pixelWidth,c=e.pixelHeight,l=!!xl[e.format];for(let r=0;r<e.resource.length;r++){let i=e.resource[r];l?n.compressedTexImage2D(o,r,t.internalFormat,s,c,0,i):n.texImage2D(o,r,t.internalFormat,s,c,0,t.format,t.type,i),s=Math.max(s>>1,1),c=Math.max(c>>1,1)}}},Cl=[`right`,`left`,`top`,`bottom`,`front`,`back`];function wl(e){return{id:`cube`,upload(t,n,r,i){let a=t.faces;for(let t=0;t<Cl.length;t++){let o=a[Cl[t]];o.resource&&((e[o.uploadMethodId]||e.image).upload(o,n,r,i,bc.TEXTURE_CUBE_MAP_POSITIVE_X+t,(n._layerInitMask&1<<t)==0),n._layerInitMask|=1<<t)}n.width=t.pixelWidth,n.height=t.pixelHeight}}}var Tl={id:`image`,upload(e,t,n,r,i,a=!1){let o=i||t.target,s=e.pixelWidth,c=e.pixelHeight,l=e.resourceWidth,u=e.resourceHeight,d=r===2,f=a||t.width!==s||t.height!==c,p=l>=s&&u>=c,m=e.resource;(d?El:Dl)(n,o,t,s,c,l,u,m,f,p),t.width=s,t.height=c}};function El(e,t,n,r,i,a,o,s,c,l){if(!l){c&&e.texImage2D(t,0,n.internalFormat,r,i,0,n.format,n.type,null),e.texSubImage2D(t,0,0,0,a,o,n.format,n.type,s);return}if(!c){e.texSubImage2D(t,0,0,0,n.format,n.type,s);return}e.texImage2D(t,0,n.internalFormat,r,i,0,n.format,n.type,s)}function Dl(e,t,n,r,i,a,o,s,c,l){if(!l){c&&e.texImage2D(t,0,n.internalFormat,r,i,0,n.format,n.type,null),e.texSubImage2D(t,0,0,0,n.format,n.type,s);return}if(!c){e.texSubImage2D(t,0,0,0,n.format,n.type,s);return}e.texImage2D(t,0,n.internalFormat,n.format,n.type,s)}var Ol=ks(),kl={id:`video`,upload(e,t,n,r,i,a=Ol){if(!e.isValid){let e=i??t.target;n.texImage2D(e,0,t.internalFormat,1,1,0,t.format,t.type,null);return}Tl.upload(e,t,n,r,i,a)}},Al={linear:9729,nearest:9728},jl={linear:{linear:9987,nearest:9985},nearest:{linear:9986,nearest:9984}},Ml={"clamp-to-edge":33071,repeat:10497,"mirror-repeat":33648},Nl={never:512,less:513,equal:514,"less-equal":515,greater:516,"not-equal":517,"greater-equal":518,always:519};function Pl(e,t,n,r,i,a,o,s){let c=a;if(!s||e.addressModeU!==`repeat`||e.addressModeV!==`repeat`||e.addressModeW!==`repeat`){let n=Ml[o?`clamp-to-edge`:e.addressModeU],r=Ml[o?`clamp-to-edge`:e.addressModeV],a=Ml[o?`clamp-to-edge`:e.addressModeW];t[i](c,t.TEXTURE_WRAP_S,n),t[i](c,t.TEXTURE_WRAP_T,r),t.TEXTURE_WRAP_R&&t[i](c,t.TEXTURE_WRAP_R,a)}if((!s||e.magFilter!==`linear`)&&t[i](c,t.TEXTURE_MAG_FILTER,Al[e.magFilter]),n){if(!s||e.mipmapFilter!==`linear`){let n=jl[e.minFilter][e.mipmapFilter];t[i](c,t.TEXTURE_MIN_FILTER,n)}}else t[i](c,t.TEXTURE_MIN_FILTER,Al[e.minFilter]);if(r&&e.maxAnisotropy>1){let n=Math.min(e.maxAnisotropy,t.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT));t[i](c,r.TEXTURE_MAX_ANISOTROPY_EXT,n)}e.compare?(t[i](c,t.TEXTURE_COMPARE_FUNC,Nl[e.compare]),t[i](c,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE)):s||t[i](c,t.TEXTURE_COMPARE_MODE,t.NONE)}function Fl(e){return{r8unorm:e.RED,r8snorm:e.RED,r8uint:e.RED,r8sint:e.RED,r16uint:e.RED,r16sint:e.RED,r16float:e.RED,rg8unorm:e.RG,rg8snorm:e.RG,rg8uint:e.RG,rg8sint:e.RG,r32uint:e.RED,r32sint:e.RED,r32float:e.RED,rg16uint:e.RG,rg16sint:e.RG,rg16float:e.RG,rgba8unorm:e.RGBA,"rgba8unorm-srgb":e.RGBA,rgba8snorm:e.RGBA,rgba8uint:e.RGBA,rgba8sint:e.RGBA,bgra8unorm:e.RGBA,"bgra8unorm-srgb":e.RGBA,rgb9e5ufloat:e.RGB,rgb10a2unorm:e.RGBA,rg11b10ufloat:e.RGB,rg32uint:e.RG,rg32sint:e.RG,rg32float:e.RG,rgba16uint:e.RGBA,rgba16sint:e.RGBA,rgba16float:e.RGBA,rgba32uint:e.RGBA,rgba32sint:e.RGBA,rgba32float:e.RGBA,stencil8:e.STENCIL_INDEX8,depth16unorm:e.DEPTH_COMPONENT,depth24plus:e.DEPTH_COMPONENT,"depth24plus-stencil8":e.DEPTH_STENCIL,depth32float:e.DEPTH_COMPONENT,"depth32float-stencil8":e.DEPTH_STENCIL}}function Il(e,t){let n={},r=e.RGBA;return e instanceof b.get().getWebGLRenderingContext()?t.srgb&&(n={"rgba8unorm-srgb":t.srgb.SRGB8_ALPHA8_EXT,"bgra8unorm-srgb":t.srgb.SRGB8_ALPHA8_EXT}):(n={"rgba8unorm-srgb":e.SRGB8_ALPHA8,"bgra8unorm-srgb":e.SRGB8_ALPHA8},r=e.RGBA8),{r8unorm:e.R8,r8snorm:e.R8_SNORM,r8uint:e.R8UI,r8sint:e.R8I,r16uint:e.R16UI,r16sint:e.R16I,r16float:e.R16F,rg8unorm:e.RG8,rg8snorm:e.RG8_SNORM,rg8uint:e.RG8UI,rg8sint:e.RG8I,r32uint:e.R32UI,r32sint:e.R32I,r32float:e.R32F,rg16uint:e.RG16UI,rg16sint:e.RG16I,rg16float:e.RG16F,rgba8unorm:e.RGBA,...n,rgba8snorm:e.RGBA8_SNORM,rgba8uint:e.RGBA8UI,rgba8sint:e.RGBA8I,bgra8unorm:r,rgb9e5ufloat:e.RGB9_E5,rgb10a2unorm:e.RGB10_A2,rg11b10ufloat:e.R11F_G11F_B10F,rg32uint:e.RG32UI,rg32sint:e.RG32I,rg32float:e.RG32F,rgba16uint:e.RGBA16UI,rgba16sint:e.RGBA16I,rgba16float:e.RGBA16F,rgba32uint:e.RGBA32UI,rgba32sint:e.RGBA32I,rgba32float:e.RGBA32F,stencil8:e.STENCIL_INDEX8,depth16unorm:e.DEPTH_COMPONENT16,depth24plus:e.DEPTH_COMPONENT24,"depth24plus-stencil8":e.DEPTH24_STENCIL8,depth32float:e.DEPTH_COMPONENT32F,"depth32float-stencil8":e.DEPTH32F_STENCIL8,...t.s3tc?{"bc1-rgba-unorm":t.s3tc.COMPRESSED_RGBA_S3TC_DXT1_EXT,"bc2-rgba-unorm":t.s3tc.COMPRESSED_RGBA_S3TC_DXT3_EXT,"bc3-rgba-unorm":t.s3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT}:{},...t.s3tc_sRGB?{"bc1-rgba-unorm-srgb":t.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,"bc2-rgba-unorm-srgb":t.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,"bc3-rgba-unorm-srgb":t.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}:{},...t.rgtc?{"bc4-r-unorm":t.rgtc.COMPRESSED_RED_RGTC1_EXT,"bc4-r-snorm":t.rgtc.COMPRESSED_SIGNED_RED_RGTC1_EXT,"bc5-rg-unorm":t.rgtc.COMPRESSED_RED_GREEN_RGTC2_EXT,"bc5-rg-snorm":t.rgtc.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}:{},...t.bptc?{"bc6h-rgb-float":t.bptc.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT,"bc6h-rgb-ufloat":t.bptc.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT,"bc7-rgba-unorm":t.bptc.COMPRESSED_RGBA_BPTC_UNORM_EXT,"bc7-rgba-unorm-srgb":t.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT}:{},...t.etc?{"etc2-rgb8unorm":t.etc.COMPRESSED_RGB8_ETC2,"etc2-rgb8unorm-srgb":t.etc.COMPRESSED_SRGB8_ETC2,"etc2-rgb8a1unorm":t.etc.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2,"etc2-rgb8a1unorm-srgb":t.etc.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2,"etc2-rgba8unorm":t.etc.COMPRESSED_RGBA8_ETC2_EAC,"etc2-rgba8unorm-srgb":t.etc.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC,"eac-r11unorm":t.etc.COMPRESSED_R11_EAC,"eac-rg11unorm":t.etc.COMPRESSED_SIGNED_RG11_EAC}:{},...t.astc?{"astc-4x4-unorm":t.astc.COMPRESSED_RGBA_ASTC_4x4_KHR,"astc-4x4-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR,"astc-5x4-unorm":t.astc.COMPRESSED_RGBA_ASTC_5x4_KHR,"astc-5x4-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR,"astc-5x5-unorm":t.astc.COMPRESSED_RGBA_ASTC_5x5_KHR,"astc-5x5-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR,"astc-6x5-unorm":t.astc.COMPRESSED_RGBA_ASTC_6x5_KHR,"astc-6x5-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR,"astc-6x6-unorm":t.astc.COMPRESSED_RGBA_ASTC_6x6_KHR,"astc-6x6-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR,"astc-8x5-unorm":t.astc.COMPRESSED_RGBA_ASTC_8x5_KHR,"astc-8x5-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR,"astc-8x6-unorm":t.astc.COMPRESSED_RGBA_ASTC_8x6_KHR,"astc-8x6-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR,"astc-8x8-unorm":t.astc.COMPRESSED_RGBA_ASTC_8x8_KHR,"astc-8x8-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR,"astc-10x5-unorm":t.astc.COMPRESSED_RGBA_ASTC_10x5_KHR,"astc-10x5-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR,"astc-10x6-unorm":t.astc.COMPRESSED_RGBA_ASTC_10x6_KHR,"astc-10x6-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR,"astc-10x8-unorm":t.astc.COMPRESSED_RGBA_ASTC_10x8_KHR,"astc-10x8-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR,"astc-10x10-unorm":t.astc.COMPRESSED_RGBA_ASTC_10x10_KHR,"astc-10x10-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR,"astc-12x10-unorm":t.astc.COMPRESSED_RGBA_ASTC_12x10_KHR,"astc-12x10-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR,"astc-12x12-unorm":t.astc.COMPRESSED_RGBA_ASTC_12x12_KHR,"astc-12x12-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR}:{}}}function Ll(e){return{r8unorm:e.UNSIGNED_BYTE,r8snorm:e.BYTE,r8uint:e.UNSIGNED_BYTE,r8sint:e.BYTE,r16uint:e.UNSIGNED_SHORT,r16sint:e.SHORT,r16float:e.HALF_FLOAT,rg8unorm:e.UNSIGNED_BYTE,rg8snorm:e.BYTE,rg8uint:e.UNSIGNED_BYTE,rg8sint:e.BYTE,r32uint:e.UNSIGNED_INT,r32sint:e.INT,r32float:e.FLOAT,rg16uint:e.UNSIGNED_SHORT,rg16sint:e.SHORT,rg16float:e.HALF_FLOAT,rgba8unorm:e.UNSIGNED_BYTE,"rgba8unorm-srgb":e.UNSIGNED_BYTE,rgba8snorm:e.BYTE,rgba8uint:e.UNSIGNED_BYTE,rgba8sint:e.BYTE,bgra8unorm:e.UNSIGNED_BYTE,"bgra8unorm-srgb":e.UNSIGNED_BYTE,rgb9e5ufloat:e.UNSIGNED_INT_5_9_9_9_REV,rgb10a2unorm:e.UNSIGNED_INT_2_10_10_10_REV,rg11b10ufloat:e.UNSIGNED_INT_10F_11F_11F_REV,rg32uint:e.UNSIGNED_INT,rg32sint:e.INT,rg32float:e.FLOAT,rgba16uint:e.UNSIGNED_SHORT,rgba16sint:e.SHORT,rgba16float:e.HALF_FLOAT,rgba32uint:e.UNSIGNED_INT,rgba32sint:e.INT,rgba32float:e.FLOAT,stencil8:e.UNSIGNED_BYTE,depth16unorm:e.UNSIGNED_SHORT,depth24plus:e.UNSIGNED_INT,"depth24plus-stencil8":e.UNSIGNED_INT_24_8,depth32float:e.FLOAT,"depth32float-stencil8":e.FLOAT_32_UNSIGNED_INT_24_8_REV}}function Rl(e){return{"2d":e.TEXTURE_2D,cube:e.TEXTURE_CUBE_MAP,"1d":null,"3d":e?.TEXTURE_3D||null,"2d-array":e?.TEXTURE_2D_ARRAY||null,"cube-array":e?.TEXTURE_CUBE_MAP_ARRAY||null}}var zl=4,Bl=class e{constructor(t){this._glSamplers=Object.create(null),this._boundTextures=[],this._activeTextureLocation=-1,this._boundSamplers=Object.create(null),this._premultiplyAlpha=!1,this._useSeparateSamplers=!1,this._renderer=t,this._managedTextures=new Ce({renderer:t,type:`resource`,onUnload:this.onSourceUnload.bind(this),name:`glTexture`});let n={image:Tl,buffer:bl,video:kl,compressed:Sl,...e.uploadExtensions};this._uploads={...n,cube:wl(n)}}get managedTextures(){return Object.values(this._managedTextures.items)}contextChange(e){this._gl=e,this._mapFormatToInternalFormat||(this._mapFormatToInternalFormat=Il(e,this._renderer.context.extensions),this._mapFormatToType=Ll(e),this._mapFormatToFormat=Fl(e),this._mapViewDimensionToGlTarget=Rl(e)),this._managedTextures.removeAll(!0),this._glSamplers=Object.create(null),this._boundSamplers=Object.create(null),this._premultiplyAlpha=!1;for(let e=0;e<16;e++)this.bind(f.EMPTY,e)}initSource(e){this.bind(e)}bind(e,t=0){let n=e.source;e?(this.bindSource(n,t),this._useSeparateSamplers&&this._bindSampler(n.style,t)):(this.bindSource(null,t),this._useSeparateSamplers&&this._bindSampler(null,t))}bindSource(e,t=0){let n=this._gl;if(e._gcLastUsed=this._renderer.gc.now,this._boundTextures[t]!==e){this._boundTextures[t]=e,this._activateLocation(t),e||=f.EMPTY.source;let r=this.getGlSource(e);n.bindTexture(r.target,r.texture)}}_bindSampler(e,t=0){let n=this._gl;if(!e){this._boundSamplers[t]=null,n.bindSampler(t,null);return}let r=this._getGlSampler(e);this._boundSamplers[t]!==r&&(this._boundSamplers[t]=r,n.bindSampler(t,r))}unbind(e){let t=e.source,n=this._boundTextures,r=this._gl;for(let e=0;e<n.length;e++)if(n[e]===t){this._activateLocation(e);let i=this.getGlSource(t);r.bindTexture(i.target,null),n[e]=null}}_activateLocation(e){this._activeTextureLocation!==e&&(this._activeTextureLocation=e,this._gl.activeTexture(this._gl.TEXTURE0+e))}_initSource(e){let t=this._gl,n=new yl(t.createTexture());if(n.type=this._mapFormatToType[e.format],n.internalFormat=this._mapFormatToInternalFormat[e.format],n.format=this._mapFormatToFormat[e.format],n.target=this._mapViewDimensionToGlTarget[e.viewDimension],n.target===null)throw Error(`Unsupported view dimension: ${e.viewDimension} with this webgl version: ${this._renderer.context.webGLVersion}`);if(e.autoGenerateMipmaps&&(this._renderer.context.supports.nonPowOf2mipmaps||e.isPowerOfTwo)){let t=Math.max(e.width,e.height);e.mipLevelCount=Math.floor(Math.log2(t))+1}return e._gpuData[this._renderer.uid]=n,this._managedTextures.add(e)&&(e.on(`update`,this.onSourceUpdate,this),e.on(`resize`,this.onSourceUpdate,this),e.on(`styleChange`,this.onStyleChange,this),e.on(`updateMipmaps`,this.onUpdateMipmaps,this)),this.onSourceUpdate(e),this.updateStyle(e,!1),n}onStyleChange(e){this.updateStyle(e,!1)}updateStyle(e,t){let n=this._gl,r=this.getGlSource(e);n.bindTexture(r.target,r.texture),this._boundTextures[this._activeTextureLocation]=e,Pl(e.style,n,e.mipLevelCount>1,this._renderer.context.extensions.anisotropicFiltering,`texParameteri`,r.target,!this._renderer.context.supports.nonPowOf2wrapping&&!e.isPowerOfTwo,t)}onSourceUnload(e,t=!1){let n=e._gpuData[this._renderer.uid];n&&(t||(this.unbind(e),this._gl.deleteTexture(n.texture)),e.off(`update`,this.onSourceUpdate,this),e.off(`resize`,this.onSourceUpdate,this),e.off(`styleChange`,this.onStyleChange,this),e.off(`updateMipmaps`,this.onUpdateMipmaps,this))}onSourceUpdate(e){let t=this._gl,n=this.getGlSource(e);t.bindTexture(n.target,n.texture),this._boundTextures[this._activeTextureLocation]=e;let r=e.alphaMode===`premultiply-alpha-on-upload`;if(this._premultiplyAlpha!==r&&(this._premultiplyAlpha=r,t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r)),this._uploads[e.uploadMethodId])this._uploads[e.uploadMethodId].upload(e,n,t,this._renderer.context.webGLVersion);else if(n.target===t.TEXTURE_2D)this._initEmptyTexture2D(n,e);else if(n.target===t.TEXTURE_2D_ARRAY)this._initEmptyTexture2DArray(n,e);else if(n.target===t.TEXTURE_CUBE_MAP)this._initEmptyTextureCube(n,e);else throw Error(`[GlTextureSystem] Unsupported texture target for empty allocation.`);this._applyMipRange(n,e),e.autoGenerateMipmaps&&e.mipLevelCount>1&&this.onUpdateMipmaps(e,!1)}onUpdateMipmaps(e,t=!0){t&&this.bindSource(e,0);let n=this.getGlSource(e);this._gl.generateMipmap(n.target)}_initEmptyTexture2D(e,t){let n=this._gl;n.texImage2D(n.TEXTURE_2D,0,e.internalFormat,t.pixelWidth,t.pixelHeight,0,e.format,e.type,null);let r=Math.max(t.pixelWidth>>1,1),i=Math.max(t.pixelHeight>>1,1);for(let a=1;a<t.mipLevelCount;a++)n.texImage2D(n.TEXTURE_2D,a,e.internalFormat,r,i,0,e.format,e.type,null),r=Math.max(r>>1,1),i=Math.max(i>>1,1)}_initEmptyTexture2DArray(e,t){if(this._renderer.context.webGLVersion!==2)throw Error(`[GlTextureSystem] TEXTURE_2D_ARRAY requires WebGL2.`);let n=this._gl,r=Math.max(t.arrayLayerCount|0,1);n.texImage3D(n.TEXTURE_2D_ARRAY,0,e.internalFormat,t.pixelWidth,t.pixelHeight,r,0,e.format,e.type,null);let i=Math.max(t.pixelWidth>>1,1),a=Math.max(t.pixelHeight>>1,1);for(let o=1;o<t.mipLevelCount;o++)n.texImage3D(n.TEXTURE_2D_ARRAY,o,e.internalFormat,i,a,r,0,e.format,e.type,null),i=Math.max(i>>1,1),a=Math.max(a>>1,1)}_initEmptyTextureCube(e,t){let n=this._gl;for(let r=0;r<6;r++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,e.internalFormat,t.pixelWidth,t.pixelHeight,0,e.format,e.type,null);let r=Math.max(t.pixelWidth>>1,1),i=Math.max(t.pixelHeight>>1,1);for(let a=1;a<t.mipLevelCount;a++){for(let t=0;t<6;t++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+t,a,e.internalFormat,r,i,0,e.format,e.type,null);r=Math.max(r>>1,1),i=Math.max(i>>1,1)}}_applyMipRange(e,t){if(this._renderer.context.webGLVersion!==2||t.mipLevelCount<=1)return;let n=this._gl,r=Math.max((t.mipLevelCount|0)-1,0);n.texParameteri(e.target,n.TEXTURE_BASE_LEVEL,0),n.texParameteri(e.target,n.TEXTURE_MAX_LEVEL,r)}_initSampler(e){let t=this._gl,n=this._gl.createSampler();return this._glSamplers[e._resourceId]=n,Pl(e,t,this._boundTextures[this._activeTextureLocation].mipLevelCount>1,this._renderer.context.extensions.anisotropicFiltering,`samplerParameteri`,n,!1,!0),this._glSamplers[e._resourceId]}_getGlSampler(e){return this._glSamplers[e._resourceId]||this._initSampler(e)}getGlSource(e){return e._gcLastUsed=this._renderer.gc.now,e._gpuData[this._renderer.uid]||this._initSource(e)}generateCanvas(e){let{pixels:t,width:n,height:r}=this.getPixels(e),i=b.get().createCanvas();i.width=n,i.height=r;let a=i.getContext(`2d`);if(a){let e=a.createImageData(n,r);e.data.set(t),a.putImageData(e,0,0)}return i}getPixels(e){let t=e.source.resolution,n=e.frame,r=Math.max(Math.round(n.width*t),1),i=Math.max(Math.round(n.height*t),1),a=new Uint8Array(zl*r*i),o=this._renderer,s=o.renderTarget.getRenderTarget(e),c=o.renderTarget.getGpuRenderTarget(s),l=o.gl;return o.renderTarget.adaptor.bindFramebuffer(c.resolveTargetFramebuffer),l.readPixels(Math.round(n.x*t),Math.round(n.y*t),r,i,l.RGBA,l.UNSIGNED_BYTE,a),{pixels:new Uint8ClampedArray(a.buffer),width:r,height:i}}destroy(){this._managedTextures.destroy(),this._glSamplers=null,this._boundTextures=null,this._boundSamplers=null,this._mapFormatToInternalFormat=null,this._mapFormatToType=null,this._mapFormatToFormat=null,this._uploads=null,this._renderer=null}resetState(){this._activeTextureLocation=-1,this._boundTextures.fill(f.EMPTY.source),this._boundSamplers=Object.create(null);let e=this._gl;this._premultiplyAlpha=!1,e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this._premultiplyAlpha)}};Bl.extension={type:[D.WebGLSystem],name:`texture`},Bl.uploadExtensions=Object.create(null);var Vl=Bl;y.handleByMap(D.TextureUploaderWebGL,Vl.uploadExtensions);var Hl=class{contextChange(e){let t=new S({uColor:{value:new Float32Array([1,1,1,1]),type:`vec4<f32>`},uTransformMatrix:{value:new C,type:`mat3x3<f32>`},uRound:{value:0,type:`f32`}}),n=e.limits.maxBatchableTextures;this.shader=new ne({glProgram:xe({name:`graphics`,bits:[Ve,ye(n),qe,Ee]}),resources:{localUniforms:t,batchSamplers:Ne(n)}})}execute(e,t){let n=t.context,r=n.customShader||this.shader,i=e.renderer,{batcher:a,instructions:o}=i.graphicsContext.getContextRenderData(n);r.groups[0]=i.globalUniforms.bindGroup,i.state.set(e.state),i.shader.bind(r),i.geometry.bind(a.geometry,r.glProgram);let s=o.instructions;for(let e=0;e<o.instructionSize;e++){let t=s[e];if(t.size){for(let e=0;e<t.textures.count;e++)i.texture.bind(t.textures.textures[e],e);i.geometry.draw(t.topology,t.size,t.start)}}}destroy(){this.shader.destroy(!0),this.shader=null}};Hl.extension={type:[D.WebGLPipesAdaptor],name:`graphics`};var Ul=class{init(){this._shader=new ne({glProgram:xe({name:`mesh`,bits:[qe,nt,Ee]}),resources:{uTexture:f.EMPTY.source,textureUniforms:{uTextureMatrix:{type:`mat3x3<f32>`,value:new C}}}})}execute(e,t){let n=e.renderer,r=t._shader;if(!r){r=this._shader;let e=t.texture,n=e.source;r.resources.uTexture=n,r.resources.uSampler=n.style,r.resources.textureUniforms.uniforms.uTextureMatrix=e.textureMatrix.mapCoord}else if(!r.glProgram){u(`Mesh shader has no glProgram`,t.shader);return}r.groups[100]=n.globalUniforms.bindGroup,r.groups[101]=e.localUniformsBindGroup,n.encoder.draw({geometry:t._geometry,shader:r,state:t.state})}destroy(){this._shader.destroy(!0),this._shader=null}};Ul.extension={type:[D.WebGLPipesAdaptor],name:`mesh`};var Wl=[...Pe,Rc,Oc,vc,jc,gc,Vl,Bc,Tc,ll,al,Ac,vl,Nc,kc],Gl=[...je],Kl=[Ms,Ul,Hl],ql=[],Jl=[],Yl=[];y.handleByNamedList(D.WebGLSystem,ql),y.handleByNamedList(D.WebGLPipes,Jl),y.handleByNamedList(D.WebGLPipesAdaptor,Yl),y.add(...Wl,...Gl,...Kl);var Xl=class extends he{constructor(){let e={name:`webgl`,type:O.WEBGL,systems:ql,renderPipes:Jl,renderPipeAdaptors:Yl};super(e)}},Zl=class{constructor(e){this._hash=Object.create(null),this._renderer=e}contextChange(e){this._gpu=e}getBindGroup(e,t,n){let r=`${e._key}:${t._layoutKey<<4|n}`;return this._hash[r]||this._createBindGroup(r,e,t,n)}_createBindGroup(e,t,n,r){let i=this._gpu.device,a=n.layout[r],o=[],s=this._renderer;for(let e in a){let n=t.resources[e]??t.resources[a[e]];if(!n||n.destroyed)throw Error(`[BindGroup] the resource bound as '${e}' was destroyed while a shader still uses it. Remove it from the shader before destroying it.`);let r;if(n._resourceType===`uniformGroup`){let e=n;s.ubo.updateUniformGroup(e);let t=e.buffer;r={buffer:s.buffer.getGPUBuffer(t),offset:0,size:t.descriptor.size}}else if(n._resourceType===`buffer`){let e=n;r={buffer:s.buffer.getGPUBuffer(e),offset:0,size:e.descriptor.size}}else if(n._resourceType===`bufferResource`){let e=n;r={buffer:s.buffer.getGPUBuffer(e.buffer),offset:e.offset,size:e.size??e.buffer.descriptor.size}}else if(n._resourceType===`textureSampler`){let e=n;r=s.texture.getGpuSampler(e)}else if(n._resourceType===`textureSource`){let e=n;r=s.texture.getTextureView(e)}else if(n._resourceType===`textureView`){let e=n;r=s.texture.getTextureView(e.source,e.viewDescriptor)}o.push({binding:a[e],resource:r})}let c=s.shader.getProgramData(n).bindGroups[r],l=i.createBindGroup({layout:c,entries:o});return this._hash[e]=l,l}destroy(){this._hash=null,this._renderer=null}};Zl.extension={type:[D.WebGPUSystem],name:`bindGroup`};var Ql=class{constructor(e){this.gpuBuffer=e}destroy(){this.gpuBuffer.destroy(),this.gpuBuffer=null}},$l=class{constructor(e){this._renderer=e,this._managedBuffers=new Ce({renderer:e,type:`resource`,onUnload:this.onBufferUnload.bind(this),name:`gpuBuffer`})}contextChange(e){this._gpu=e}getGPUBuffer(e){return e._gcLastUsed=this._renderer.gc.now,e._gpuData[this._renderer.uid]?.gpuBuffer||this.createGPUBuffer(e)}updateBuffer(e){let t=this.getGPUBuffer(e),n=e.data;return e._updateID&&n&&(e._updateID=0,this._gpu.device.queue.writeBuffer(t,e._updateOffset,n.buffer,n.byteOffset+e._updateOffset,(e._updateSize||n.byteLength)+3&-4)),t}destroyAll(){this._managedBuffers.removeAll()}onBufferUnload(e){e.off(`update`,this.updateBuffer,this),e.off(`change`,this.onBufferChange,this)}createGPUBuffer(e){let t=this._gpu.device.createBuffer(e.descriptor);return e._updateID=0,e.data&&(ve(e.data.buffer,t.getMappedRange(),e.data.byteOffset,e.data.byteLength),t.unmap()),e._gpuData[this._renderer.uid]=new Ql(t),this._managedBuffers.add(e)&&(e.on(`update`,this.updateBuffer,this),e.on(`change`,this.onBufferChange,this)),t}onBufferChange(e){this._managedBuffers.remove(e),e._updateID=0,this.createGPUBuffer(e)}destroy(){this._managedBuffers.destroy(),this._renderer=null,this._gpu=null}};$l.extension={type:[D.WebGPUSystem],name:`buffer`};var eu=class{constructor({minUniformOffsetAlignment:e}){this._minUniformOffsetAlignment=256,this.byteIndex=0,this._minUniformOffsetAlignment=e,this.data=new Float32Array(65535)}clear(){this.byteIndex=0}addEmptyGroup(e){if(e>this._minUniformOffsetAlignment/4)throw Error(`UniformBufferBatch: array is too large: ${e*4}`);let t=this.byteIndex,n=t+e*4;if(n=Math.ceil(n/this._minUniformOffsetAlignment)*this._minUniformOffsetAlignment,n>this.data.length*4)throw Error(`UniformBufferBatch: ubo batch got too big`);return this.byteIndex=n,t}addGroup(e){let t=this.addEmptyGroup(e.length);for(let n=0;n<e.length;n++)this.data[t/4+n]=e[n];return t}destroy(){this.data=null}},tu=class{constructor(e){this._colorMaskCache=15,this._renderer=e}setMask(e){this._colorMaskCache!==e&&(this._colorMaskCache=e,this._renderer.pipeline.setColorMask(e))}destroy(){this._renderer=null,this._colorMaskCache=null}};tu.extension={type:[D.WebGPUSystem],name:`colorMask`};var nu=class{constructor(e){this._renderer=e}async init(e){return this._initPromise||=(e.gpu?Promise.resolve(e.gpu):this._createDeviceAndAdaptor(e)).then(e=>{this.gpu=e,this.extensions={transientAttachment:typeof GPUTextureUsage.TRANSIENT_ATTACHMENT==`number`},this._renderer.runners.contextChange.emit(this.gpu)}),this._initPromise}contextChange(e){this._renderer.gpu=e}async _createDeviceAndAdaptor(e){let t=await b.get().getNavigator().gpu.requestAdapter({powerPreference:e.powerPreference,forceFallbackAdapter:e.forceFallbackAdapter});if(!t)throw Error(`WebGPU not supported. No GPU adapter was returned by navigator.gpu.requestAdapter().`);let n=[`texture-compression-bc`,`texture-compression-astc`,`texture-compression-etc2`,`indirect-first-instance`].filter(e=>t.features.has(e));return{adapter:t,device:await t.requestDevice({requiredFeatures:n,requiredLimits:{maxSampledTexturesPerShaderStage:t.limits.maxSampledTexturesPerShaderStage,maxSamplersPerShaderStage:t.limits.maxSamplersPerShaderStage}})}}destroy(){this.gpu=null,this.extensions=null,this._renderer=null}};nu.extension={type:[D.WebGPUSystem],name:`device`},nu.defaultOptions={powerPreference:void 0,forceFallbackAdapter:!1};var ru=class{constructor(e){this._boundBindGroup=Object.create(null),this._boundVertexBuffer=Object.create(null),this._renderer=e;for(let e=0;e<16;e++)this._boundBindGroup[e]={bindGroup:null,program:null,key:null}}renderStart(){this.commandFinished=new Promise(e=>{this._resolveCommandFinished=e}),this.commandEncoder=this._renderer.gpu.device.createCommandEncoder()}beginRenderPass(e){this.endRenderPass(),this._clearCache(),this._passEncoder=this.commandEncoder.beginRenderPass(e.descriptor),this.renderPassEncoder=this._passEncoder}endRenderPass(){this._passEncoder&&this._passEncoder.end(),this.renderPassEncoder=null,this._passEncoder=null}beginBundle(){if(this._passEncoder!==this.renderPassEncoder)throw Error(`Cannot begin a new render bundle while one is already being recorded.`);this._clearCache();let e=this._renderer.pipeline.getBundleDescriptor();this.renderPassEncoder=this._gpu.device.createRenderBundleEncoder(e)}endBundle(){let e=this.renderPassEncoder;if(!e||!(`finish`in e))throw Error(`endBundle called without an active render bundle.`);let t=e.finish();return this.renderPassEncoder=this._passEncoder,this._clearCache(),t}executeBundle(e){this._clearCache(),this._passEncoder.executeBundles([e])}setViewport(e){this._passEncoder.setViewport(e.x,e.y,e.width,e.height,0,1)}setStencilReference(e){this._passEncoder.setStencilReference(e)}setPipelineFromGeometryProgramAndState(e,t,n,r,i){let a=this._renderer.pipeline.getPipeline(e,t,n,r,i);this.setPipeline(a)}setPipeline(e){this._boundPipeline!==e&&(this._boundPipeline=e,this.renderPassEncoder.setPipeline(e))}_setVertexBuffer(e,t){this._boundVertexBuffer[e]!==t&&(this._boundVertexBuffer[e]=t,this.renderPassEncoder.setVertexBuffer(e,this._renderer.buffer.updateBuffer(t)))}_setIndexBuffer(e){if(this._boundIndexBuffer===e)return;this._boundIndexBuffer=e;let t=e.data.BYTES_PER_ELEMENT===2?`uint16`:`uint32`;this.renderPassEncoder.setIndexBuffer(this._renderer.buffer.updateBuffer(e),t)}resetBindGroup(e){let t=this._boundBindGroup[e];t.bindGroup=null,t.program=null,t.key=null}setBindGroup(e,t,n){let r=this._boundBindGroup[e];if(r.bindGroup===t&&r.program===n&&r.key===t._key)return;r.bindGroup=t,r.program=n,r.key=t._key,t._touch(this._renderer.gc.now,this._renderer.tick);let i=this._renderer.bindGroup.getBindGroup(t,n,e);this.renderPassEncoder.setBindGroup(e,i)}setGeometry(e,t){let n=this._renderer.pipeline.getBufferNamesToBind(e,t);for(let t in n)this._setVertexBuffer(parseInt(t,10),e.attributes[n[t]].buffer);e.indexBuffer&&this._setIndexBuffer(e.indexBuffer)}_setShaderBindGroups(e,t){let n=e.gpuProgram;for(let r in e.groups){if(!n.layout[r])continue;let i=e.groups[r];t||this._syncBindGroup(i),this.setBindGroup(r,i,n)}}_syncBindGroup(e){for(let t in e.resources){let n=e.resources[t];n&&n.isUniformGroup&&this._renderer.ubo.updateUniformGroup(n)}}draw(e){let{geometry:t,shader:n,state:r,topology:i,size:a,start:o,baseVertex:s,instanceCount:c,skipSync:l,firstInstance:u}=e;this.setPipelineFromGeometryProgramAndState(t,n.gpuProgram,r,i,n._overrides),this.setGeometry(t,n.gpuProgram),this._setShaderBindGroups(n,l),t.indexBuffer?this.renderPassEncoder.drawIndexed(a||t.indexBuffer.data.length,c??t.instanceCount,o||0,s||0,u||0):this.renderPassEncoder.draw(a||t.vertexCount,c??t.instanceCount,o||0,u||0)}drawIndirect(e){let{geometry:t,shader:n,state:r,topology:i,skipSync:a,indirectBuffer:o,indirectOffset:s}=e;this.setPipelineFromGeometryProgramAndState(t,n.gpuProgram,r,i,n._overrides),this.setGeometry(t,n.gpuProgram),this._setShaderBindGroups(n,a),t.indexBuffer?this.renderPassEncoder.drawIndexedIndirect(o,s):this.renderPassEncoder.drawIndirect(o,s)}finishRenderPass(){this._passEncoder&&=(this._passEncoder.end(),this.renderPassEncoder=null,null)}postrender(){this.finishRenderPass(),this._gpu.device.queue.submit([this.commandEncoder.finish()]),this._resolveCommandFinished(),this.commandEncoder=null}_clearCache(){for(let e=0;e<16;e++){let t=this._boundBindGroup[e];t.bindGroup=null,t.program=null,t.key=null,this._boundVertexBuffer[e]=null}this._boundIndexBuffer=null,this._boundPipeline=null}destroy(){this._renderer=null,this._gpu=null,this._boundBindGroup=null,this._boundVertexBuffer=null,this._boundIndexBuffer=null,this._boundPipeline=null,this.renderPassEncoder=null,this._passEncoder=null}contextChange(e){this._gpu=e}};ru.extension={type:[D.WebGPUSystem],name:`encoder`,priority:1};var iu=class{constructor(e){this.supportsOverrideConstants=!1,this._renderer=e}contextChange(){let e=this._renderer.device.gpu.device;this.maxTextures=Math.min(e.limits.maxSampledTexturesPerShaderStage,e.limits.maxSamplersPerShaderStage),this.maxBatchableTextures=this.maxTextures,this._detectOverrideConstantsSupport(e)}_detectOverrideConstantsSupport(e){e.pushErrorScope(`validation`);let t=e.createShaderModule({code:`override TEST_VALUE: f32 = 0.0;
@compute @workgroup_size(1) fn main() {}`});e.createComputePipeline({layout:`auto`,compute:{module:t,entryPoint:`main`,constants:{TEST_VALUE:1}}}),e.popErrorScope().then(e=>{this.supportsOverrideConstants=!e})}destroy(){}};iu.extension={type:[D.WebGPUSystem],name:`limits`};var au=class{constructor(e){this._renderTargetStencilState=Object.create(null),this._renderer=e,e.renderTarget.onRenderTargetChange.add(this)}onRenderTargetChange(e){let t=this._renderTargetStencilState[e.uid];t||=this._renderTargetStencilState[e.uid]={stencilMode:ze.DISABLED,stencilReference:0},this._activeRenderTarget=e,this.setStencilMode(t.stencilMode,t.stencilReference)}setStencilMode(e,t){let n=this._renderTargetStencilState[this._activeRenderTarget.uid];n.stencilMode=e,n.stencilReference=t;let r=this._renderer;r.pipeline.setStencilMode(e),r.encoder.setStencilReference(t)}destroy(){this._renderer.renderTarget.onRenderTargetChange.remove(this),this._renderer=null,this._activeRenderTarget=null,this._renderTargetStencilState=null}};au.extension={type:[D.WebGPUSystem],name:`stencil`};var ou={i32:{align:4,size:4},u32:{align:4,size:4},f32:{align:4,size:4},f16:{align:2,size:2},"vec2<i32>":{align:8,size:8},"vec2<u32>":{align:8,size:8},"vec2<f32>":{align:8,size:8},"vec2<f16>":{align:4,size:4},"vec3<i32>":{align:16,size:12},"vec3<u32>":{align:16,size:12},"vec3<f32>":{align:16,size:12},"vec3<f16>":{align:8,size:6},"vec4<i32>":{align:16,size:16},"vec4<u32>":{align:16,size:16},"vec4<f32>":{align:16,size:16},"vec4<f16>":{align:8,size:8},"mat2x2<f32>":{align:8,size:16},"mat2x2<f16>":{align:4,size:8},"mat3x2<f32>":{align:8,size:24},"mat3x2<f16>":{align:4,size:12},"mat4x2<f32>":{align:8,size:32},"mat4x2<f16>":{align:4,size:16},"mat2x3<f32>":{align:16,size:32},"mat2x3<f16>":{align:8,size:16},"mat3x3<f32>":{align:16,size:48},"mat3x3<f16>":{align:8,size:24},"mat4x3<f32>":{align:16,size:64},"mat4x3<f16>":{align:8,size:32},"mat2x4<f32>":{align:16,size:32},"mat2x4<f16>":{align:8,size:16},"mat3x4<f32>":{align:16,size:48},"mat3x4<f16>":{align:8,size:24},"mat4x4<f32>":{align:16,size:64},"mat4x4<f16>":{align:8,size:32}};function su(e){let t=e.map(e=>({data:e,offset:0,size:0})),n=0;for(let e=0;e<t.length;e++){let r=t[e],i=ou[r.data.type].size,a=ou[r.data.type].align;if(!ou[r.data.type])throw Error(`[Pixi.js] WebGPU UniformBuffer: Unknown type ${r.data.type}`);r.data.size>1&&(i=Math.max(i,a)*r.data.size),n=Math.ceil(n/a)*a,r.size=i,r.offset=n,n+=i}return n=Math.ceil(n/16)*16,{uboElements:t,size:n}}function cu(e,t){let{size:n,align:r}=ou[e.data.type],i=(r-n)/4,a=e.data.type.indexOf(`i32`)>=0?`dataInt32`:`data`;return`
         v = uv.${e.data.name};
         ${t===0?``:`offset += ${t};`}

         arrayOffset = offset;

         t = 0;

         for(var i=0; i < ${e.data.size*(n/4)}; i++)
         {
             for(var j = 0; j < ${n/4}; j++)
             {
                 ${a}[arrayOffset++] = v[t++];
             }
             ${i===0?``:`arrayOffset += ${i};`}
         }
     `}function lu(e){return Je(e,$e,cu)}var uu=class extends Ze{constructor(){super({createUboElements:su,generateUboSync:lu})}};uu.extension={type:[D.WebGPUSystem],name:`ubo`};var du=128,fu=class{constructor(e){this._bindGroupHash=Object.create(null),this._buffers=[],this._bindGroups=[],this._bufferResources=[],this._renderer=e,this._batchBuffer=new eu({minUniformOffsetAlignment:du});let t=256/du;for(let e=0;e<t;e++){let t=N.UNIFORM|N.COPY_DST;e===0&&(t|=N.COPY_SRC),this._buffers.push(new A({data:this._batchBuffer.data,usage:t}))}}renderEnd(){this._uploadBindGroups(),this._resetBindGroups()}_resetBindGroups(){this._bindGroupHash=Object.create(null),this._batchBuffer.clear()}getUniformBindGroup(e,t){if(!t&&this._bindGroupHash[e.uid])return this._bindGroupHash[e.uid];this._renderer.ubo.ensureUniformGroup(e);let n=e.buffer.data,r=this._batchBuffer.addEmptyGroup(n.length);return this._renderer.ubo.syncUniformGroup(e,this._batchBuffer.data,r/4),this._bindGroupHash[e.uid]=this._getBindGroup(r/du),this._bindGroupHash[e.uid]}getUboResource(e){this._renderer.ubo.updateUniformGroup(e);let t=e.buffer.data,n=this._batchBuffer.addGroup(t);return this._getBufferResource(n/du)}getArrayBindGroup(e){let t=this._batchBuffer.addGroup(e);return this._getBindGroup(t/du)}getArrayBufferResource(e){let t=this._batchBuffer.addGroup(e)/du;return this._getBufferResource(t)}_getBufferResource(e){if(!this._bufferResources[e]){let t=this._buffers[e%2];this._bufferResources[e]=new tt({buffer:t,offset:(e/2|0)*256,size:du})}return this._bufferResources[e]}_getBindGroup(e){if(!this._bindGroups[e]){let t=new ae({0:this._getBufferResource(e)});this._bindGroups[e]=t}return this._bindGroups[e]}_uploadBindGroups(){let e=this._renderer.buffer,t=this._buffers[0];t.update(this._batchBuffer.byteIndex),e.updateBuffer(t);let n=this._renderer.gpu.device.createCommandEncoder();for(let r=1;r<this._buffers.length;r++){let i=this._buffers[r];n.copyBufferToBuffer(e.getGPUBuffer(t),du,e.getGPUBuffer(i),0,this._batchBuffer.byteIndex)}this._renderer.gpu.device.queue.submit([n.finish()])}destroy(){for(let e=0;e<this._bindGroups.length;e++)this._bindGroups[e]?.destroy();this._bindGroups=null,this._bindGroupHash=null;for(let e=0;e<this._buffers.length;e++)this._buffers[e].destroy();this._buffers=null;for(let e=0;e<this._bufferResources.length;e++)this._bufferResources[e].destroy();this._bufferResources=null,this._batchBuffer.destroy(),this._renderer=null}};fu.extension={type:[D.WebGPUPipes],name:`uniformBatch`};var pu={"point-list":0,"line-list":1,"line-strip":2,"triangle-list":3,"triangle-strip":4},mu=new x({}),hu={"depth24plus-stencil8":{depth:!0,stencil:!0,index:1},depth24plus:{depth:!0,stencil:!1,index:2},depth32float:{depth:!0,stencil:!1,index:3},"depth32float-stencil8":{depth:!0,stencil:!0,index:4},depth16unorm:{depth:!0,stencil:!1,index:5},stencil8:{depth:!1,stencil:!0,index:6}},gu={depth:!1,stencil:!1,index:0};function _u(e,t){for(let[n,r]of Object.entries(t)){let t=RegExp(`override\\s+${n}\\s*:\\s*(\\w+)\\s*(?:=[^;]*)?;`);e=e.replace(t,(e,t)=>{let i;return i=t===`u32`?`${Math.trunc(r)}u`:t===`i32`?`${Math.trunc(r)}`:Number.isInteger(r)?`${r}.0`:`${r}`,`const ${n}: ${t} = ${i};`})}return e}function vu(e,t,n,r,i,a){return e*35184372088832+t*536870912+a*16384+(n<<8)+(r<<3)+i}var yu=Object.create(null),bu=0;function xu(e){let t=yu[e];return t===void 0&&(t=yu[e]=bu++),t}function Su(e,t,n,r,i,a,o,s){return s<<20|a<<16|i<<13|n<<9|e<<6|o<<5|r<<1|t}var Cu=class{constructor(e){this._moduleCache=Object.create(null),this._bufferLayoutsCache=Object.create(null),this._bindingNamesCache=Object.create(null),this._pipeCache=new Map,this._pipeStateCaches=Object.create(null),this._colorMask=15,this._multisampleCount=1,this._colorTargetCount=1,this._colorFormat=`bgra8unorm`,this._colorFormatId=xu(`bgra8unorm`),this._depthStencilFormat=`depth24plus-stencil8`,this._depthStencilFormatData=gu,this._depthReadOnly=!1,this._invertFrontFace=!1,this._renderer=e}contextChange(e){this._gpu=e,this.setStencilMode(ze.DISABLED),this._updatePipeHash()}setMultisampleCount(e){this._multisampleCount!==e&&(this._multisampleCount=e,this._updatePipeHash())}setRenderTarget(e){let t=e.colorAttachments[0]?.texture;this._multisampleCount=t?.source.antialias?4:1,this._colorTargetCount=e.colorAttachments.length,this._colorFormat=t?.format??`bgra8unorm`,this._colorFormatId=xu(this._colorFormat),this._depthStencilFormat=e.depthStencilAttachment?.texture.format,this._depthStencilFormatData=hu[this._depthStencilFormat]||gu,this._depthReadOnly=e.depthStencilAttachment?.depthReadOnly??!1,this._invertFrontFace=!!e.flipY,this._updatePipeHash()}setColorMask(e){this._colorMask!==e&&(this._colorMask=e,this._updatePipeHash())}setStencilMode(e){this._stencilMode!==e&&(this._stencilMode=e,this._stencilState=et[e],this._updatePipeHash())}getBundleDescriptor(){let e=[];for(let t=0;t<this._colorTargetCount;t++)e.push(this._colorFormat);let t={colorFormats:e,sampleCount:this._multisampleCount};return(this._depthStencilFormatData.depth||this._depthStencilFormatData.stencil)&&(t.depthStencilFormat=this._depthStencilFormat),t}setPipeline(e,t,n,r){let i=this.getPipeline(e,t,n);r.setPipeline(i)}getPipelineKey(e,t,n,r,i){return e._layoutKey||(Ge(e,t.attributeData),this._generateBufferKey(e)),vu(e._layoutKey,t._layoutKey,n.data,n._blendModeId,pu[r],i.id)}getPipeline(e,t,n,r,i){e._layoutKey||(Ge(e,t.attributeData),this._generateBufferKey(e)),r||=e.topology,i||=mu;let a=vu(e._layoutKey,t._layoutKey,n.data,n._blendModeId,pu[r],i.id),o=this._pipeCache.get(a);return o||(o=this._createPipeline(e,t,n,r,i),this._pipeCache.set(a,o)),o}_createPipeline(e,t,n,r,i){let a=this._gpu.device,o=this._createVertexBufferLayouts(e,t),s=this._renderer.state.getColorTargets(n,this._colorTargetCount,this._colorFormat),c=this._stencilMode===ze.RENDERING_MASK_ADD?0:this._colorMask;for(let e=0;e<s.length;e++)s[e].writeMask=c;let l=this._renderer.shader.getProgramData(t).pipeline,u=Object.keys(i.data).length>0,d=t.vertex.source,f=t.fragment.source,p;u&&(this._renderer.limits.supportsOverrideConstants?p=i.data:(d=_u(d,i.data),f=_u(f,i.data)));let m={vertex:{module:this._getModule(d),entryPoint:t.vertex.entryPoint,constants:p,buffers:o},fragment:{module:this._getModule(f),entryPoint:t.fragment.entryPoint,targets:s,constants:p},primitive:{topology:r,cullMode:n.culling?`back`:`none`,frontFace:n.clockwiseFrontFace===this._invertFrontFace?`ccw`:`cw`},layout:l,multisample:{count:this._multisampleCount},label:t.name?`PIXI Pipeline (${t.name})`:`PIXI Pipeline`};if(this._depthStencilFormatData.depth||this._depthStencilFormatData.stencil){let e=this._depthStencilFormatData;m.depthStencil={...this._stencilState,format:this._depthStencilFormat,depthWriteEnabled:e.depth?n.depthMask&&!this._depthReadOnly:!1,depthCompare:e.depth&&n.depthTest?`less`:`always`}}return a.createRenderPipeline(m)}_getModule(e){return this._moduleCache[e]||this._createModule(e)}_createModule(e){let t=this._gpu.device;return this._moduleCache[e]=t.createShaderModule({code:e}),this._moduleCache[e]}_generateBufferKey(e){let t=[],n=0,r=Object.keys(e.attributes).sort();for(let i=0;i<r.length;i++){let a=e.attributes[r[i]];t[n++]=a.offset,t[n++]=a.format,t[n++]=a.stride,t[n++]=a.instance}return e._layoutKey=T(t.join(`|`),`geometry`),e._layoutKey}_generateAttributeLocationsKey(e){let t=[],n=0,r=Object.keys(e.attributeData).sort();for(let i=0;i<r.length;i++){let a=e.attributeData[r[i]];t[n++]=a.location}return e._attributeLocationsKey=T(t.join(`|`),`programAttributes`),e._attributeLocationsKey}getBufferNamesToBind(e,t){let n=e._layoutKey<<16|t._attributeLocationsKey;if(this._bindingNamesCache[n])return this._bindingNamesCache[n];let r=this._createVertexBufferLayouts(e,t),i=Object.create(null),a=t.attributeData;for(let e=0;e<r.length;e++){let t=Object.values(r[e].attributes)[0].shaderLocation;for(let n in a)if(a[n].location===t){i[e]=n;break}}return this._bindingNamesCache[n]=i,i}_createVertexBufferLayouts(e,t){t._attributeLocationsKey||this._generateAttributeLocationsKey(t);let n=e._layoutKey<<16|t._attributeLocationsKey;if(this._bufferLayoutsCache[n])return this._bufferLayoutsCache[n];let r=[];return e.buffers.forEach(n=>{let i={arrayStride:0,stepMode:`vertex`,attributes:[]},a=i.attributes;for(let r in t.attributeData){let o=e.attributes[r];(o.divisor??1)!==1&&u(`Attribute ${r} has an invalid divisor value of '${o.divisor}'. WebGPU only supports a divisor value of 1`),o.buffer===n&&(i.arrayStride=o.stride,i.stepMode=o.instance?`instance`:`vertex`,a.push({shaderLocation:t.attributeData[r].location,offset:o.offset,format:o.format}))}a.length&&r.push(i)}),this._bufferLayoutsCache[n]=r,r}_updatePipeHash(){var e;let t=Su(this._stencilMode,this._multisampleCount===1?0:1,this._colorMask,this._colorTargetCount,this._depthStencilFormatData.index,this._colorFormatId,+!!this._depthReadOnly,+!!this._invertFrontFace);this._pipeCache=(e=this._pipeStateCaches)[t]??(e[t]=new Map)}destroy(){this._bufferLayoutsCache=null,this._pipeCache=null,this._gpu=null,this._renderer=null,this._bindingNamesCache=null,this._pipeStateCaches=null,this._moduleCache=null}};Cu.extension={type:[D.WebGPUSystem],name:`pipeline`};var wu=class{constructor(){this.contexts=[],this.msaaTextures=[],this.msaaSamples=1}},Tu={bgra8unorm:!0,rgba8unorm:!0,rgba16float:!0};function Eu(e){if(Tu[e])return e;let t=navigator.gpu.getPreferredCanvasFormat();return u(`[WebGPU] CanvasSource format '${e}' is not a valid GPUCanvasContext format. Falling back to '${t}'. Allowed formats are: bgra8unorm, rgba8unorm, rgba16float.`),t}var Du=class{constructor(){this._activePass=null}init(e,t){this._renderer=e,this._renderTargetSystem=t}copyToTexture(e,t,n,r,i){let a=this._renderer;this.finishRenderPass();let o=this._getGpuColorTexture(e),s=a.texture.getGpuSource(t.source);return a.encoder.commandEncoder.copyTextureToTexture({texture:o,origin:n},{texture:s,origin:i},r),t}copyDepthTexture(e,t,n,r,i){let a=this._renderer;this.finishRenderPass();let o=e.depthStencilAttachment.texture,s=a.texture.getGpuSource(o),c=a.texture.getGpuSource(t.source),l=a.encoder.commandEncoder===null,u=l?a.gpu.device.createCommandEncoder():a.encoder.commandEncoder;u.copyTextureToTexture({texture:s,origin:n},{texture:c,origin:i},{width:r.width,height:r.height}),l&&a.gpu.device.queue.submit([u.finish()])}startRenderPass(e,t=!0,n,r,i=0,a=0){let o=this._renderTargetSystem.getGpuRenderTarget(e);if(a!==0&&o.msaaTextures?.length)throw Error(`[RenderTargetSystem] Rendering to array layers is not supported with MSAA render targets.`);if(i>0&&o.msaaTextures?.length)throw Error(`[RenderTargetSystem] Rendering to mip levels is not supported with MSAA render targets.`);let s=t;typeof s==`boolean`&&(s=s?R.ALL:R.NONE),(e.stencil||e.depth)&&!e.depthStencilAttachment&&e.ensureDepthStencilTexture();let c=!!e.depthStencilAttachment,l=this._activePass;if(l!==null&&l.renderTarget===e&&l.mipLevel===i&&l.layer===a&&l.depthStencil===c&&this._renderer.encoder.renderPassEncoder!==null&&s===R.NONE){this._renderer.encoder.setViewport(r);return}o.descriptor=this.getDescriptor(e,t,n,i,a),this._renderer.pipeline.setRenderTarget(e),this._renderer.encoder.beginRenderPass(o),this._renderer.encoder.setViewport(r),this._activePass={renderTarget:e,mipLevel:i,layer:a,depthStencil:c}}finishRenderPass(){this._renderer.encoder.endRenderPass(),this._activePass=null}_getGpuColorTexture(e){if(e.colorAttachments.length===0)throw Error(`[GpuRenderTargetAdaptor] cannot get gpu color texture from a depth-only render target`);let t=e.colorAttachments[0].texture;return t instanceof se&&t._gpuContext?t._gpuContext.getCurrentTexture():this._renderer.texture.getGpuSource(t)}getDescriptor(e,t,n,r=0,i=0){typeof t==`boolean`&&(t=t?R.ALL:R.NONE);let a=this._renderTargetSystem,o=a.getGpuRenderTarget(e),s=e.colorAttachments.map((e,s)=>{let c=e.texture,l=c instanceof se?c._gpuContext:null,u,d;if(l){if(i!==0)throw Error(`[RenderTargetSystem] Rendering to array layers is not supported for canvas targets.`);u=l.getCurrentTexture().createView(e.viewDescriptor)}else u=this._renderer.texture.getTextureRenderTargetView(e.texture,r,i,e.viewDescriptor);let f=!1;o.msaaTextures[s]&&(d=u,u=this._renderer.texture.getTextureView(o.msaaTextures[s]),f=o.msaaTextures[s].transient);let p=e.loadOp;t!==void 0&&(p=t&R.COLOR?`clear`:`load`),n??=a.defaultClearColor;let m=e.storeOp??`store`,h={view:u,resolveTarget:d,storeOp:f?`discard`:m,loadOp:p};p===`clear`&&(n??=e.clearValue??a.defaultClearColor,h.clearValue=n);for(let t in e)t!==`texture`&&t!==`viewDescriptor`&&t!==`clearValue`&&t!==`loadOp`&&t!==`storeOp`&&(h[t]=e[t]);return h}),c;if(e.depthStencilAttachment){o.msaa&&(e.depthStencilAttachment.texture.sampleCount=4),e.depthStencilAttachment.texture.transient=!!o.msaaTextures[0]?.transient;let n=e.depthStencilAttachment,a=n.texture.format.includes(`stencil`),s=n.texture.format.includes(`depth`),l=n.texture.transient?`discard`:`store`;c={view:this._renderer.texture.getTextureRenderTargetView(n.texture,r,i,n.viewDescriptor)};let u=n.depthReadOnly??!1,d=n.stencilReadOnly??u;a&&!d?(c.stencilLoadOp=t&R.STENCIL?`clear`:n.stencilLoadOp??`load`,c.stencilStoreOp=n.stencilStoreOp??l,c.stencilLoadOp===`clear`&&(c.stencilClearValue=n.stencilClearValue??0)):a&&d&&(c.stencilReadOnly=!0),s&&!u?(c.depthLoadOp=t&R.DEPTH?`clear`:n.depthLoadOp??`load`,c.depthStoreOp=n.depthStoreOp??l,c.depthLoadOp===`clear`&&(c.depthClearValue=n.depthClearValue??1)):s&&u&&(c.depthReadOnly=!0);for(let e in n)e!==`texture`&&e!==`viewDescriptor`&&e!==`stencilLoadOp`&&e!==`stencilStoreOp`&&e!==`stencilClearValue`&&e!==`stencilReadOnly`&&e!==`depthLoadOp`&&e!==`depthStoreOp`&&e!==`depthClearValue`&&e!==`depthReadOnly`&&(c[e]=n[e])}return{colorAttachments:s,depthStencilAttachment:c,label:e.label}}clear(e,t=!0,n,r,i=0,a=0){if(!t)return;let{gpu:o,encoder:s}=this._renderer,c=o.device;if(s.commandEncoder===null){let o=c.createCommandEncoder(),s=this.getDescriptor(e,t,n,i,a),l=o.beginRenderPass(s);l.setViewport(r.x,r.y,r.width,r.height,0,1),l.end();let u=o.finish();c.queue.submit([u])}else this.startRenderPass(e,t,n,r,i,a)}initGpuRenderTarget(e){e.isRoot=!0;let t=new wu;return e.colorAttachments.forEach((e,n)=>{let r=e.texture;if(r instanceof se){if(!r._gpuContext){let e=r.resource.getContext(`webgpu`),t=r.transparent?`premultiplied`:`opaque`,n=Eu(r.format);try{e.configure({device:this._renderer.gpu.device,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC,format:n,alphaMode:t,...n===`rgba16float`?{toneMapping:{mode:`extended`}}:{}})}catch(e){console.error(e)}r._gpuContext=e}t.contexts[n]=r._gpuContext}if(t.msaa=r.source.antialias,r.antialias){let e=new p({width:0,height:0,sampleCount:4,transient:r.transient,arrayLayerCount:r.arrayLayerCount,format:r.format});t.msaaTextures[n]=e}}),t.msaa&&(t.msaaSamples=4,e.depthStencilAttachment&&(e.depthStencilAttachment.texture.sampleCount=4,e.depthStencilAttachment.texture.transient=!!t.msaaTextures[0]?.transient)),t}destroyGpuRenderTarget(e){e.contexts.forEach(e=>{e.unconfigure()}),e.msaaTextures.forEach(e=>{e.destroy()}),e.msaaTextures.length=0,e.contexts.length=0}ensureDepthStencilTexture(e){let t=this._renderTargetSystem.getGpuRenderTarget(e);e.depthStencilAttachment&&t.msaa&&(e.depthStencilAttachment.texture.sampleCount=4)}resizeGpuRenderTarget(e){let t=this._renderTargetSystem.getGpuRenderTarget(e);t.width=e.width,t.height=e.height,t.msaa&&e.colorAttachments.forEach((e,n)=>{let r=e.texture;t.msaaTextures[n]?.resize(r.width,r.height,r._resolution)})}},Ou=class extends Ie{constructor(e){super(e),this.adaptor=new Du,this.adaptor.init(e,this)}};Ou.extension={type:[D.WebGPUSystem],name:`renderTarget`};var ku=class{constructor(){this._gpuProgramData=Object.create(null)}contextChange(e){this._gpu=e}getProgramData(e){return this._gpuProgramData[e._layoutKey]||this._createGPUProgramData(e)}_createGPUProgramData(e){let t=this._gpu.device,n=e.gpuLayout.map(e=>t.createBindGroupLayout({entries:e})),r={bindGroupLayouts:n};return this._gpuProgramData[e._layoutKey]={bindGroups:n,pipeline:t.createPipelineLayout(r)},this._gpuProgramData[e._layoutKey]}destroy(){this._gpu=null,this._gpuProgramData=null}};ku.extension={type:[D.WebGPUSystem],name:`shader`};var Y={};Y.normal={alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`},color:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`}},Y.add={alpha:{srcFactor:`src-alpha`,dstFactor:`one-minus-src-alpha`,operation:`add`},color:{srcFactor:`one`,dstFactor:`one`,operation:`add`}},Y.multiply={alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`},color:{srcFactor:`dst`,dstFactor:`one-minus-src-alpha`,operation:`add`}},Y.screen={alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`},color:{srcFactor:`one`,dstFactor:`one-minus-src`,operation:`add`}},Y.overlay={alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`},color:{srcFactor:`one`,dstFactor:`one-minus-src`,operation:`add`}},Y.none={alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`},color:{srcFactor:`zero`,dstFactor:`zero`,operation:`add`}},Y[`normal-npm`]={alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`},color:{srcFactor:`src-alpha`,dstFactor:`one-minus-src-alpha`,operation:`add`}},Y[`add-npm`]={alpha:{srcFactor:`one`,dstFactor:`one`,operation:`add`},color:{srcFactor:`src-alpha`,dstFactor:`one`,operation:`add`}},Y[`screen-npm`]={alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`},color:{srcFactor:`src-alpha`,dstFactor:`one-minus-src`,operation:`add`}},Y.erase={alpha:{srcFactor:`zero`,dstFactor:`one-minus-src-alpha`,operation:`add`},color:{srcFactor:`zero`,dstFactor:`one-minus-src`,operation:`add`}},Y.min={alpha:{srcFactor:`one`,dstFactor:`one`,operation:`min`},color:{srcFactor:`one`,dstFactor:`one`,operation:`min`}},Y.max={alpha:{srcFactor:`one`,dstFactor:`one`,operation:`max`},color:{srcFactor:`one`,dstFactor:`one`,operation:`max`}};var Au=class{constructor(){this.defaultState=new j,this.defaultState.blend=!0}contextChange(e){this.gpu=e}getColorTargets(e,t,n){let r=e.blend?Y[e.blendMode]||Y.normal:void 0,i=[];for(let e=0;e<t;e++)i[e]={format:n,writeMask:0,blend:r};return i}destroy(){this.gpu=null}};Au.extension={type:[D.WebGPUSystem],name:`state`};var ju={type:`image`,upload(e,t,n,r=0){let i=e.resource,a=(e.pixelWidth|0)*(e.pixelHeight|0),o=i.byteLength/a;n.device.queue.writeTexture({texture:t,origin:{x:0,y:0,z:r}},i,{offset:0,rowsPerImage:e.pixelHeight,bytesPerRow:e.pixelWidth*o},{width:e.pixelWidth,height:e.pixelHeight,depthOrArrayLayers:1})}},Mu={"bc1-rgba-unorm":{blockBytes:8,blockWidth:4,blockHeight:4},"bc2-rgba-unorm":{blockBytes:16,blockWidth:4,blockHeight:4},"bc3-rgba-unorm":{blockBytes:16,blockWidth:4,blockHeight:4},"bc7-rgba-unorm":{blockBytes:16,blockWidth:4,blockHeight:4},"etc1-rgb-unorm":{blockBytes:8,blockWidth:4,blockHeight:4},"etc2-rgba8unorm":{blockBytes:16,blockWidth:4,blockHeight:4},"astc-4x4-unorm":{blockBytes:16,blockWidth:4,blockHeight:4}},Nu={blockBytes:4,blockWidth:1,blockHeight:1},Pu={type:`compressed`,upload(e,t,n,r=0){let i=e.pixelWidth,a=e.pixelHeight,o=Mu[e.format]||Nu;for(let s=0;s<e.resource.length;s++){let c=e.resource[s],l=Math.ceil(i/o.blockWidth)*o.blockBytes;n.device.queue.writeTexture({texture:t,mipLevel:s,origin:{x:0,y:0,z:r}},c,{offset:0,bytesPerRow:l},{width:Math.ceil(i/o.blockWidth)*o.blockWidth,height:Math.ceil(a/o.blockHeight)*o.blockHeight,depthOrArrayLayers:1}),i=Math.max(i>>1,1),a=Math.max(a>>1,1)}}},Fu=[`right`,`left`,`top`,`bottom`,`front`,`back`];function Iu(e){return{type:`cube`,upload(t,n,r){let i=t.faces;for(let t=0;t<Fu.length;t++){let a=i[Fu[t]];(e[a.uploadMethodId]||e.image).upload(a,n,r,t)}}}}var Lu={type:`image`,upload(e,t,n,r=0){let i=e.resource;if(!i)return;if(globalThis.HTMLImageElement&&i instanceof HTMLImageElement){let t=b.get().createCanvas(i.width,i.height);t.getContext(`2d`).drawImage(i,0,0,i.width,i.height),e.resource=t,u(`ImageSource: Image element passed, converting to canvas and replacing resource.`)}let a=Math.min(t.width,e.resourceWidth||e.pixelWidth),o=Math.min(t.height,e.resourceHeight||e.pixelHeight),s=e.alphaMode===`premultiply-alpha-on-upload`;n.device.queue.copyExternalImageToTexture({source:i},{texture:t,origin:{x:0,y:0,z:r},premultipliedAlpha:s},{width:a,height:o})}},Ru={type:`video`,upload(e,t,n,r){Lu.upload(e,t,n,r)}},zu=class{constructor(e){this.device=e,this.sampler=e.createSampler({minFilter:`linear`}),this.pipelines={}}_getMipmapPipeline(e){let t=this.pipelines[e];return t||(this.mipmapShaderModule||=this.device.createShaderModule({code:`
                        var<private> pos : array<vec2<f32>, 3> = array<vec2<f32>, 3>(
                        vec2<f32>(-1.0, -1.0), vec2<f32>(-1.0, 3.0), vec2<f32>(3.0, -1.0));

                        struct VertexOutput {
                        @builtin(position) position : vec4<f32>,
                        @location(0) texCoord : vec2<f32>,
                        };

                        @vertex
                        fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
                        var output : VertexOutput;
                        output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);
                        output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
                        return output;
                        }

                        @group(0) @binding(0) var imgSampler : sampler;
                        @group(0) @binding(1) var img : texture_2d<f32>;

                        @fragment
                        fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {
                        return textureSample(img, imgSampler, texCoord);
                        }
                    `}),t=this.device.createRenderPipeline({layout:`auto`,vertex:{module:this.mipmapShaderModule,entryPoint:`vertexMain`},fragment:{module:this.mipmapShaderModule,entryPoint:`fragmentMain`,targets:[{format:e}]}}),this.pipelines[e]=t),t}generateMipmap(e){let t=this._getMipmapPipeline(e.format);if(e.dimension===`3d`||e.dimension===`1d`)throw Error(`Generating mipmaps for non-2d textures is currently unsupported!`);let n=e,r=e.depthOrArrayLayers||1,i=e.usage&GPUTextureUsage.RENDER_ATTACHMENT;if(!i){let t={size:{width:Math.ceil(e.width/2),height:Math.ceil(e.height/2),depthOrArrayLayers:r},format:e.format,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.RENDER_ATTACHMENT,mipLevelCount:e.mipLevelCount-1};n=this.device.createTexture(t)}let a=this.device.createCommandEncoder({}),o=t.getBindGroupLayout(0);for(let s=0;s<r;++s){let r=e.createView({baseMipLevel:0,mipLevelCount:1,dimension:`2d`,baseArrayLayer:s,arrayLayerCount:1}),c=+!!i;for(let i=1;i<e.mipLevelCount;++i){let e=n.createView({baseMipLevel:c++,mipLevelCount:1,dimension:`2d`,baseArrayLayer:s,arrayLayerCount:1}),i=a.beginRenderPass({colorAttachments:[{view:e,storeOp:`store`,loadOp:`clear`,clearValue:{r:0,g:0,b:0,a:0}}]}),l=this.device.createBindGroup({layout:o,entries:[{binding:0,resource:this.sampler},{binding:1,resource:r}]});i.setPipeline(t),i.setBindGroup(0,l),i.draw(3,1,0,0),i.end(),r=e}}if(!i){let t={width:Math.ceil(e.width/2),height:Math.ceil(e.height/2),depthOrArrayLayers:r};for(let r=1;r<e.mipLevelCount;++r)a.copyTextureToTexture({texture:n,mipLevel:r-1},{texture:e,mipLevel:r},t),t.width=Math.ceil(t.width/2),t.height=Math.ceil(t.height/2)}return this.device.queue.submit([a.finish()]),i||n.destroy(),e}},Bu=class{constructor(e){this.textureView=null,this.textureViews=Object.create(null),this.gpuTexture=e}destroy(){this.gpuTexture.destroy(),this.textureView=null,this.textureViews=null,this.gpuTexture=null}};function Vu(e){return`${e.format||``}.${e.dimension||``}.${e.aspect||``}.${e.baseMipLevel||0}.${e.mipLevelCount||``}.${e.baseArrayLayer||0}.${e.arrayLayerCount||``}`}var Hu=class e{constructor(t){this._gpuSamplers=Object.create(null),this._bindGroupHash=Object.create(null),this._renderer=t,t.gc.addCollection(this,`_bindGroupHash`,`hash`),this._managedTextures=new Ce({renderer:t,type:`resource`,onUnload:this.onSourceUnload.bind(this),name:`gpuTextureSource`});let n={image:Lu,buffer:ju,video:Ru,compressed:Pu,...e.uploadExtensions};this._uploads={...n,cube:Iu(n)}}get managedTextures(){return Object.values(this._managedTextures.items)}contextChange(e){this._gpu=e}initSource(e){return e._gpuData[this._renderer.uid]?.gpuTexture||this._initSource(e)}_initSource(e){if(e.autoGenerateMipmaps){let t=Math.max(e.pixelWidth,e.pixelHeight);e.mipLevelCount=Math.floor(Math.log2(t))+1}let t;e.sampleCount>1?(t=GPUTextureUsage.RENDER_ATTACHMENT,e.transient&&this._renderer.device.extensions.transientAttachment&&(t|=GPUTextureUsage.TRANSIENT_ATTACHMENT)):(t=GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST,e.uploadMethodId!==`compressed`&&(t|=GPUTextureUsage.RENDER_ATTACHMENT,t|=GPUTextureUsage.COPY_SRC));let n=Mu[e.format]||{blockBytes:4,blockWidth:1,blockHeight:1},r=Math.ceil(e.pixelWidth/n.blockWidth)*n.blockWidth,i=Math.ceil(e.pixelHeight/n.blockHeight)*n.blockHeight,a={label:e.label,size:{width:r,height:i,depthOrArrayLayers:e.arrayLayerCount},format:e.format,sampleCount:e.sampleCount,mipLevelCount:e.mipLevelCount,dimension:e.dimension,usage:t},o=this._gpu.device.createTexture(a);return e._gpuData[this._renderer.uid]=new Bu(o),this._managedTextures.add(e)&&(e.on(`update`,this.onSourceUpdate,this),e.on(`resize`,this.onSourceResize,this),e.on(`updateMipmaps`,this.onUpdateMipmaps,this)),this.onSourceUpdate(e),o}onSourceUpdate(e){let t=this.getGpuSource(e);t&&(this._uploads[e.uploadMethodId]&&this._uploads[e.uploadMethodId].upload(e,t,this._gpu),e.autoGenerateMipmaps&&e.mipLevelCount>1&&this.onUpdateMipmaps(e))}onUpdateMipmaps(e){this._mipmapGenerator||=new zu(this._gpu.device);let t=this.getGpuSource(e);this._mipmapGenerator.generateMipmap(t)}onSourceUnload(e){e.off(`update`,this.onSourceUpdate,this),e.off(`resize`,this.onSourceResize,this),e.off(`updateMipmaps`,this.onUpdateMipmaps,this)}onSourceResize(e){e._gcLastUsed=this._renderer.gc.now;let t=e._gpuData[this._renderer.uid],n=t?.gpuTexture;n?(n.width!==e.pixelWidth||n.height!==e.pixelHeight)&&(t.destroy(),this._bindGroupHash[e.uid]=null,e._gpuData[this._renderer.uid]=null,this.initSource(e)):this.initSource(e)}_initSampler(e){return this._gpuSamplers[e._resourceId]=this._gpu.device.createSampler(e),this._gpuSamplers[e._resourceId]}getGpuSampler(e){return this._gpuSamplers[e._resourceId]||this._initSampler(e)}getGpuSource(e){return e._gcLastUsed=this._renderer.gc.now,e._gpuData[this._renderer.uid]?.gpuTexture||this.initSource(e)}getTextureBindGroup(e){return this._bindGroupHash[e.uid]||this._createTextureBindGroup(e)}_createTextureBindGroup(e){let t=e.source;return this._bindGroupHash[e.uid]=new ae({0:t,1:t.style,2:new S({uTextureMatrix:{type:`mat3x3<f32>`,value:e.textureMatrix.mapCoord}})}),this._bindGroupHash[e.uid]}getTextureView(e,t){var n;let r=e.source;r._gcLastUsed=this._renderer.gc.now;let i=r._gpuData[this._renderer.uid];i||=(this.initSource(r),r._gpuData[this._renderer.uid]);let a=t?Vu(t):0;return(n=i.textureViews)[a]||(n[a]=i.gpuTexture.createView({dimension:r.viewDimension,...t})),i.textureViews[a]}getTextureRenderTargetView(e,t=0,n=0,r){var i;let a=e.source;a._gcLastUsed=this._renderer.gc.now;let o=a._gpuData[this._renderer.uid];o||=(this.initSource(a),a._gpuData[this._renderer.uid]);let s=n*(a.mipLevelCount||1)+t+1;return r&&(s=`${s}.${Vu(r)}`),(i=o.textureViews)[s]||(i[s]=o.gpuTexture.createView({dimension:`2d`,baseMipLevel:t,mipLevelCount:1,baseArrayLayer:n,arrayLayerCount:1,...r})),o.textureViews[s]}generateCanvas(e){let t=this._renderer,n=t.gpu.device.createCommandEncoder(),r=b.get().createCanvas();r.width=e.source.pixelWidth,r.height=e.source.pixelHeight;let i=r.getContext(`webgpu`);return i.configure({device:t.gpu.device,usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC,format:b.get().getNavigator().gpu.getPreferredCanvasFormat(),alphaMode:`premultiplied`}),n.copyTextureToTexture({texture:t.texture.getGpuSource(e.source),origin:{x:0,y:0}},{texture:i.getCurrentTexture()},{width:r.width,height:r.height}),t.gpu.device.queue.submit([n.finish()]),r}getPixels(e){let t=this.generateCanvas(e),n=Ue.getOptimalCanvasAndContext(t.width,t.height),r=n.context;r.drawImage(t,0,0);let{width:i,height:a}=t,o=r.getImageData(0,0,i,a),s=new Uint8ClampedArray(o.data.buffer);return Ue.returnCanvasAndContext(n),{pixels:s,width:i,height:a}}destroy(){this._managedTextures.destroy();for(let e of Object.keys(this._bindGroupHash)){let t=Number(e);this._bindGroupHash[t]?.destroy()}this._renderer=null,this._gpu=null,this._mipmapGenerator=null,this._gpuSamplers=null,this._bindGroupHash=null}};Hu.extension={type:[D.WebGPUSystem],name:`texture`},Hu.uploadExtensions=Object.create(null);var Uu=Hu;y.handleByMap(D.TextureUploaderWebGPU,Uu.uploadExtensions);var Wu=class{constructor(){this._maxTextures=0}contextChange(e){let t=new S({uTransformMatrix:{value:new C,type:`mat3x3<f32>`},uColor:{value:new Float32Array([1,1,1,1]),type:`vec4<f32>`},uRound:{value:0,type:`f32`}});this._maxTextures=e.limits.maxBatchableTextures,this.shader=new ne({gpuProgram:Be({name:`graphics`,bits:[Re,Te(this._maxTextures),Qe,Ae]}),resources:{localUniforms:t}})}execute(e,t){let n=t.context,r=n.customShader||this.shader,i=e.renderer,{batcher:a,instructions:o}=i.graphicsContext.getContextRenderData(n),s=i.encoder;s.setGeometry(a.geometry,r.gpuProgram);let c=i.globalUniforms.bindGroup;s.setBindGroup(0,c,r.gpuProgram);let l=i.renderPipes.uniformBatch.getUniformBindGroup(r.resources.localUniforms,!0);s.setBindGroup(2,l,r.gpuProgram);let u=o.instructions,d=null;for(let t=0;t<o.instructionSize;t++){let n=u[t];if(n.topology!==d&&(d=n.topology,s.setPipelineFromGeometryProgramAndState(a.geometry,r.gpuProgram,e.state,n.topology,r._overrides)),r.groups[1]=n.bindGroup,!n.gpuBindGroup){let e=n.textures;n.bindGroup=He(e.textures,e.count,this._maxTextures),n.gpuBindGroup=i.bindGroup.getBindGroup(n.bindGroup,r.gpuProgram,1)}s.setBindGroup(1,n.bindGroup,r.gpuProgram),s.renderPassEncoder.drawIndexed(n.size,1,n.start)}}destroy(){this.shader.destroy(!0),this.shader=null}};Wu.extension={type:[D.WebGPUPipesAdaptor],name:`graphics`};var Gu=class{init(){this._shader=new ne({gpuProgram:Be({name:`mesh`,bits:[Ke,Ye,Ae]}),resources:{uTexture:f.EMPTY._source,uSampler:f.EMPTY._source.style,textureUniforms:{uTextureMatrix:{type:`mat3x3<f32>`,value:new C}}}})}execute(e,t){let n=e.renderer,r=t._shader;if(!r)r=this._shader,r.groups[2]=n.texture.getTextureBindGroup(t.texture);else if(!r.gpuProgram){u(`Mesh shader has no gpuProgram`,t.shader);return}let i=r.gpuProgram;if(i.autoAssignGlobalUniforms&&(r.groups[0]=n.globalUniforms.bindGroup),i.autoAssignLocalUniforms){let t=e.localUniforms;r.groups[1]=n.renderPipes.uniformBatch.getUniformBindGroup(t,!0)}n.encoder.draw({geometry:t._geometry,shader:r,state:t.state})}destroy(){this._shader.destroy(!0),this._shader=null}};Gu.extension={type:[D.WebGPUPipesAdaptor],name:`mesh`};var Ku=[...Pe,uu,ru,nu,iu,$l,Uu,Ou,ku,Au,Cu,tu,au,Zl],qu=[...je,fu],Ju=[Ps,Gu,Wu],Yu=[],Xu=[],Zu=[];y.handleByNamedList(D.WebGPUSystem,Yu),y.handleByNamedList(D.WebGPUPipes,Xu),y.handleByNamedList(D.WebGPUPipesAdaptor,Zu),y.add(...Ku,...qu,...Ju);var Qu=class extends he{constructor(){let e={name:`webgpu`,type:O.WEBGPU,systems:Yu,renderPipes:Xu,renderPipeAdaptors:Zu};super(e)}};y.add(vi,yi),y.add(de,le);var $u=`
in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

void main(void) {
  vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
  position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
  position.y = position.y * (2.0 * uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;
  gl_Position = vec4(position, 0.0, 1.0);
  vTextureCoord = aPosition * (uOutputFrame.zw * uInputSize.zw);
}
`,ed=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uBackTexture;
uniform highp vec4 uInputSize;
uniform highp vec4 uInputClamp;
uniform float uColorMatrix[20];
uniform vec4 uWave;
uniform vec4 uSprite;

vec4 sampleSprite(void) {
  float amp = uWave.x;
  float length = uWave.y;
  float phase = uWave.z;
  float padding = uWave.w;
  float localY = vTextureCoord.y * uInputSize.y - padding;
  if (localY < 0.0 || localY >= uSprite.x) return vec4(0.0);

  float angleRadians = radians(phase + floor(localY) * 360.0 / length);
  float offset = floor(sin(angleRadians) * amp + 0.5);
  vec2 sampleUv = vec2(vTextureCoord.x - offset * uInputSize.z, vTextureCoord.y);
  vec4 front = texture(uTexture, clamp(sampleUv, uInputClamp.xy, uInputClamp.zw));

  if (floor(localY) >= uSprite.x - uSprite.y) {
    front *= uSprite.z;
  }
  return front;
}

vec4 applyEffects(vec4 front) {
  vec4 source = front;
  if (source.a > 0.0) source.rgb /= source.a;

  vec3 effected;
  effected.r = uColorMatrix[0] * source.r
    + uColorMatrix[1] * source.g
    + uColorMatrix[2] * source.b
    + uColorMatrix[3] * source.a
    + uColorMatrix[4];
  effected.g = uColorMatrix[5] * source.r
    + uColorMatrix[6] * source.g
    + uColorMatrix[7] * source.b
    + uColorMatrix[8] * source.a
    + uColorMatrix[9];
  effected.b = uColorMatrix[10] * source.r
    + uColorMatrix[11] * source.g
    + uColorMatrix[12] * source.b
    + uColorMatrix[13] * source.a
    + uColorMatrix[14];

  return vec4(clamp(effected, 0.0, 1.0) * front.a, front.a);
}
`,td=`
void main(void) {
  finalColor = applyEffects(sampleSprite());
}
`,nd=`
void main(void) {
  vec4 front = applyEffects(sampleSprite());
  vec4 back = texture(uBackTexture, vTextureCoord);
  float alpha = front.a + back.a * (1.0 - front.a);
  finalColor = vec4(max(vec3(0.0), back.rgb - front.rgb), alpha);
}
`,rd=(e,t=!1)=>{let n=new S({uColorMatrix:{value:e.matrix,type:`f32`,size:20},uWave:{value:ad(e),type:`vec4<f32>`},uSprite:{value:od(e),type:`vec4<f32>`}}),r=E.from({gl:{vertex:$u,fragment:ed+(t?nd:td),name:t?`rgss-subtract-sprite-effect-filter`:`rgss-sprite-effect-filter`},resources:{effectUniforms:n},blendRequired:t});return r.padding=Math.ceil(e.waveAmp),r},id=(e,t)=>{e.resources.effectUniforms.uniforms.uColorMatrix=t.matrix,e.resources.effectUniforms.uniforms.uWave=ad(t),e.resources.effectUniforms.uniforms.uSprite=od(t),e.resources.effectUniforms.update(),e.padding=Math.ceil(t.waveAmp)},ad=e=>new Float32Array([e.waveAmp,Math.max(1,e.waveLength),e.wavePhase,Math.ceil(e.waveAmp)]),od=e=>new Float32Array([e.height,Math.min(Math.max(0,e.bushDepth),e.height),e.bushOpacity/255,0]),sd=class extends Ci{static extension={name:`rgss-subtract`,type:D.BlendMode};constructor(){super({gl:{functions:``,main:`
          finalColor = vec4(max(vec3(0.0), back.rgb - front.rgb), blendedAlpha) * uBlend;
        `},gpu:{functions:``,main:`
          out = vec4<f32>(max(vec3<f32>(0.0), back.rgb - front.rgb), blendedAlpha)
            * blendUniforms.uBlend;
        `}})}};y.add(sd);var cd=`rgss-subtract`,ld=e=>Math.trunc(Number(e)||0),ud=e=>{switch(ld(e)){case 1:return`add`;case 2:return cd;default:return`normal`}},dd=e=>{let t=Number(e);return Number.isFinite(t)?t:1},fd=e=>({red:G(e.red),green:G(e.green),blue:G(e.blue),alpha:G(e.alpha)}),pd=e=>({red:yr(e.red,-255,255),green:yr(e.green,-255,255),blue:yr(e.blue,-255,255),gray:G(e.gray)}),md=e=>({x:Number(e.x)||0,y:Number(e.y)||0,width:Math.max(0,Number(e.width)||0),height:Math.max(0,Number(e.height)||0)}),hd=(e,t,n)=>{let r=br(e.gray/255),i=1-r,a=.299,o=.587,s=.114,c=[[i+a*r,o*r,s*r],[a*r,i+o*r,s*r],[a*r,o*r,i+s*r]],l=[e.red/255,e.green/255,e.blue/255];return gd(c,l,t),gd(c,l,n),[c[0][0],c[0][1],c[0][2],0,l[0],c[1][0],c[1][1],c[1][2],0,l[1],c[2][0],c[2][1],c[2][2],0,l[2],0,0,0,1,0]},gd=(e,t,n)=>{let r=br(n.alpha/255);if(r===0)return;let i=1-r;for(let t=0;t<3;t+=1)for(let n=0;n<3;n+=1)e[t][n]*=i;t[0]=t[0]*i+n.red/255*r,t[1]=t[1]*i+n.green/255*r,t[2]=t[2]*i+n.blue/255*r},_d=new WeakSet,vd=0,yd=0,X={texture:f.EMPTY,ownership:`shared`},bd=e=>{let t=new se({resource:e});return _d.add(t),vd+=1,t},xd=e=>{let t=bd(e);return{texture:new f({source:t}),ownership:`source`,source:t}},Sd=(e,t=null)=>({texture:new f({source:e,frame:t??void 0}),ownership:`view`}),Cd=e=>{if(!e||e.ownership===`shared`||e.texture.destroyed)return;let t=e.texture.source,n=e.ownership===`source`&&!t.destroyed&&_d.has(t);e.texture.destroy(e.ownership===`source`),n&&(yd+=1)},wd=e=>{e.destroyed||(e.destroy(),_d.has(e)&&(yd+=1))},Td=()=>({canvasSourceCreatedCount:vd,canvasSourceDestroyedCount:yd,canvasSourceLiveCount:vd-yd}),Ed=e=>{e.removeChildren().forEach(e=>{e.destroy({children:!0,texture:!0,textureSource:!1})})},Dd=class extends r{_baseSprite;_effectFilter;_subtractEffectFilter;_displayTexture;_displayTextureCacheKey;_displayTextureCache;_unsubscribeBitmapChange;_bitmap;_ox;_oy;_angle;_zoomX;_zoomY;_mirror;_srcRect;_opacity;_bushDepth;_bushOpacity;_color;_tone;_flashColor;_flashDuration;_flashRemaining;_waveAmp;_waveLength;_waveSpeed;_wavePhase;_blendType;constructor(){super(),this._baseSprite=new F(f.EMPTY),this._displayTexture=X,this._displayTextureCacheKey=null,this._displayTextureCache=new Map,this._unsubscribeBitmapChange=null,this._bitmap=null,this._ox=0,this._oy=0,this._angle=0,this._zoomX=1,this._zoomY=1,this._mirror=!1,this._srcRect={x:0,y:0,width:0,height:0},this._opacity=255,this._bushDepth=0,this._bushOpacity=128,this._color={red:0,green:0,blue:0,alpha:0},this._tone={red:0,green:0,blue:0,gray:0},this._flashColor={red:0,green:0,blue:0,alpha:0},this._flashDuration=0,this._flashRemaining=0,this._waveAmp=0,this._waveLength=180,this._waveSpeed=360,this._wavePhase=0,this._blendType=0;let e=this._effectState(this._flashColor);this._effectFilter=rd(e),this._subtractEffectFilter=rd(e,!0),this.addChild(this._baseSprite)}get bitmap(){return this._bitmap}set bitmap(e){this._bitmap!==e&&(this._unsubscribeBitmapChange?.(),this._unsubscribeBitmapChange=null,this._bitmap=e,e&&(this._srcRect={x:0,y:0,width:e.width,height:e.height}),this._unsubscribeBitmapChange=e?.onChange(()=>{this._clearDisplayTextureCache(),this._refreshTexture()})??null,this._clearDisplayTextureCache(),this._refreshTexture())}get rgssWidth(){return this._logicalTextureSize().width}get rgssHeight(){return this._logicalTextureSize().height}get ox(){return this._ox}set ox(e){this._ox=e,this._refreshAnchor()}get oy(){return this._oy}set oy(e){this._oy=e,this._refreshAnchor()}get angle(){return this._angle}set angle(e){this._angle=e,this.rotation=this._angle*Math.PI/180}get zoomX(){return this._zoomX}set zoomX(e){this._zoomX=dd(e),this._refreshScale()}get zoomY(){return this._zoomY}set zoomY(e){this._zoomY=dd(e),this._refreshScale()}get mirror(){return this._mirror}set mirror(e){this._mirror=!!e,this._refreshScale()}get opacity(){return this._opacity}set opacity(e){let t=G(e);this._opacity!==t&&(this._opacity=t,this.alpha=this._opacity/255)}get blendMode(){return this._baseSprite.blendMode}get blendType(){return this._blendType}set blendType(e){this._blendType=ld(e),this._refreshBlendMode()}get bushDepth(){return this._bushDepth}set bushDepth(e){let t=Math.max(0,Math.trunc(Number(e)||0));this._bushDepth!==t&&(this._bushDepth=t,this._refreshEffects())}get bushOpacity(){return this._bushOpacity}set bushOpacity(e){let t=G(e);this._bushOpacity!==t&&(this._bushOpacity=t,this._refreshEffects())}get waveAmp(){return this._waveAmp}set waveAmp(e){this._waveAmp=Math.max(0,Number(e)||0),this._refreshWaveEffect()}get waveLength(){return this._waveLength}set waveLength(e){this._waveLength=Math.max(1,Number(e)||0),this._refreshWaveEffect()}get waveSpeed(){return this._waveSpeed}set waveSpeed(e){this._waveSpeed=Number(e)||0}get wavePhase(){return this._wavePhase}set wavePhase(e){this._wavePhase=Number(e)||0,this._refreshWaveEffect()}set color(e){this._color=fd(e),this._refreshEffects()}set tone(e){this._tone=pd(e),this._refreshEffects()}get srcRect(){return this._srcRect}set srcRect(e){let t=kd(e);Ad(this._srcRect,t)||(this._srcRect=t,this._refreshTexture())}flash(e,t){this._flashColor=e?fd(e):{red:0,green:0,blue:0,alpha:0},this._flashDuration=Math.max(0,Math.trunc(Number(t)||0)),this._flashRemaining=this._flashDuration,this._refreshFlashEffect()}advanceEffects(){return this._waveAmp>0&&this._waveSpeed!==0&&(this._wavePhase=Od(this._wavePhase+this._waveSpeed/this._waveLength),this._refreshWaveEffect()),this._flashRemaining>0&&(--this._flashRemaining,this._refreshFlashEffect()),this._wavePhase}_refreshAnchor(){let e=this._baseSprite.texture;e!==f.EMPTY&&e.width>0&&e.height>0?(this._baseSprite.anchor.x=this._ox/e.width,this._baseSprite.anchor.y=this._oy/e.height):(this._baseSprite.anchor.x=0,this._baseSprite.anchor.y=0)}_logicalTextureSize(){return this._srcRect.width>0&&this._srcRect.height>0?{width:this._srcRect.width,height:this._srcRect.height}:{width:this._bitmap?.width??0,height:this._bitmap?.height??0}}_refreshScale(){this.scale.x=this._mirror?-this._zoomX:this._zoomX,this.scale.y=this._zoomY}_refreshTexture(){if(!this._bitmap){this._setDisplayTexture(X),this._refreshAnchor(),this._refreshEffects();return}let e=this._srcRect,t=jd(e),n=Md(e),r=this._displayTextureFor(e,t,n);this._setDisplayTexture(r,r.cacheKey),this._refreshAnchor(),this._refreshEffects()}_displayTextureFor(e,t,n){if(!this._bitmap)return{...X,cacheKey:null};let r=[this._bitmap.revision,n].join(`|`),i=this._displayTextureCache.get(r);if(i)return{...i,cacheKey:r};let a=Nd(this._bitmap,e,t);return this._displayTextureCache.set(r,a),{...a,cacheKey:r}}_refreshEffects(){this._refreshFlashEffect()}_refreshFlashEffect(){let e=this._flashDuration>0?this._flashRemaining/this._flashDuration:0,t={...this._flashColor,alpha:this._color.alpha>0?0:this._flashColor.alpha*e},n=this._tone.red!==0||this._tone.green!==0||this._tone.blue!==0||this._tone.gray!==0||this._color.alpha!==0||t.alpha!==0,r=this._bushDepth>0&&this._bushOpacity<255,i=this._effectState(t);id(this._effectFilter,i),id(this._subtractEffectFilter,i),this._refreshBlendMode(n||r||this._waveAmp>0)}_effectState(e){return{matrix:hd(this._tone,this._color,e),waveAmp:this._waveAmp,waveLength:this._waveLength,wavePhase:this._wavePhase,height:this._logicalTextureSize().height,bushDepth:this._bushDepth,bushOpacity:this._bushOpacity}}_refreshBlendMode(e=!!this._baseSprite.filters?.length){let t=ud(this._blendType);e?this._blendType===2?(this._baseSprite.filters=[this._subtractEffectFilter],this._baseSprite.blendMode=`normal`):(this._baseSprite.filters=[this._effectFilter],this._baseSprite.blendMode=`normal`,this._effectFilter.blendMode=t):(this._baseSprite.filters=[],this._baseSprite.blendMode=t)}_refreshWaveEffect(){this.skew.x=0,this._refreshEffects()}_setDisplayTexture(e,t=null){this._displayTexture.texture===e.texture&&this._displayTextureCacheKey===t||(this._displayTextureCacheKey===null&&Cd(this._displayTexture),this._displayTexture=e,this._displayTextureCacheKey=t,this._baseSprite.texture=e.texture)}_clearDisplayTextureCache(){this._displayTextureCacheKey!==null&&(this._displayTexture=X,this._displayTextureCacheKey=null,this._baseSprite.texture=f.EMPTY),this._displayTextureCache.forEach(e=>{Cd(e)}),this._displayTextureCache.clear()}destroy(e){this._unsubscribeBitmapChange?.(),this._unsubscribeBitmapChange=null,this._clearDisplayTextureCache(),this._setDisplayTexture(X),this._effectFilter.destroy(),this._subtractEffectFilter.destroy(),super.destroy(e)}},Od=e=>((Number(e)||0)%360+360)%360,kd=e=>({x:Math.trunc(Number(e.x)||0),y:Math.trunc(Number(e.y)||0),width:Math.trunc(Number(e.width)||0),height:Math.trunc(Number(e.height)||0)}),Ad=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,jd=e=>e.width<=0||e.height<=0?null:new l(e.x,e.y,e.width,e.height),Md=e=>`${e.x},${e.y},${e.width},${e.height}`,Nd=(e,t,n)=>{let r=t.width,i=t.height;if(r<=0||i<=0)return X;if(!(t.x<0||t.y<0||t.x+r>e.width||t.y+i>e.height))return Sd(e.textureSource,n);let a=document.createElement(`canvas`);a.width=r,a.height=i;let o=a.getContext(`2d`);if(!o)return X;let s=Math.max(0,t.x),c=Math.max(0,t.y),l=Math.min(e.width,t.x+r),u=Math.min(e.height,t.y+i),d=Math.max(0,l-s),f=Math.max(0,u-c);return d>0&&f>0&&o.drawImage(e.canvas,s,c,d,f,Math.max(0,-t.x),Math.max(0,-t.y),d,f),xd(a)},Pd=[[[2,4],[1,4],[2,3],[1,3]],[[2,0],[1,4],[2,3],[1,3]],[[2,4],[3,0],[2,3],[1,3]],[[2,0],[3,0],[2,3],[1,3]],[[2,4],[1,4],[2,3],[3,1]],[[2,0],[1,4],[2,3],[3,1]],[[2,4],[3,0],[2,3],[3,1]],[[2,0],[3,0],[2,3],[3,1]],[[2,4],[1,4],[2,1],[1,3]],[[2,0],[1,4],[2,1],[1,3]],[[2,4],[3,0],[2,1],[1,3]],[[2,0],[3,0],[2,1],[1,3]],[[2,4],[1,4],[2,1],[3,1]],[[2,0],[1,4],[2,1],[3,1]],[[2,4],[3,0],[2,1],[3,1]],[[2,0],[3,0],[2,1],[3,1]],[[0,4],[1,4],[0,3],[1,3]],[[0,4],[3,0],[0,3],[1,3]],[[0,4],[1,4],[0,3],[3,1]],[[0,4],[3,0],[0,3],[3,1]],[[2,2],[1,2],[2,3],[1,3]],[[2,2],[1,2],[2,3],[3,1]],[[2,2],[1,2],[2,1],[1,3]],[[2,2],[1,2],[2,1],[3,1]],[[2,4],[3,4],[2,3],[3,3]],[[2,4],[3,4],[2,1],[3,3]],[[2,0],[3,4],[2,3],[3,3]],[[2,0],[3,4],[2,1],[3,3]],[[2,4],[1,4],[2,5],[1,5]],[[2,0],[1,4],[2,5],[1,5]],[[2,4],[3,0],[2,5],[1,5]],[[2,0],[3,0],[2,5],[1,5]],[[0,4],[3,4],[0,3],[3,3]],[[2,2],[1,2],[2,5],[1,5]],[[0,2],[1,2],[0,3],[1,3]],[[0,2],[1,2],[0,3],[3,1]],[[2,2],[3,2],[2,3],[3,3]],[[2,2],[3,2],[2,1],[3,3]],[[2,4],[3,4],[2,5],[3,5]],[[2,0],[3,4],[2,5],[3,5]],[[0,4],[1,4],[0,5],[1,5]],[[0,4],[3,0],[0,5],[1,5]],[[0,2],[3,2],[0,3],[3,3]],[[0,2],[1,2],[0,5],[1,5]],[[0,4],[3,4],[0,5],[3,5]],[[2,2],[3,2],[2,5],[3,5]],[[0,2],[3,2],[0,5],[3,5]],[[0,0],[1,0],[0,1],[1,1]]],Fd=[[[2,2],[1,2],[2,1],[1,1]],[[0,2],[1,2],[0,1],[1,1]],[[2,0],[1,0],[2,1],[1,1]],[[0,0],[1,0],[0,1],[1,1]],[[2,2],[3,2],[2,1],[3,1]],[[0,2],[3,2],[0,1],[3,1]],[[2,0],[3,0],[2,1],[3,1]],[[0,0],[3,0],[0,1],[3,1]],[[2,2],[1,2],[2,3],[1,3]],[[0,2],[1,2],[0,3],[1,3]],[[2,0],[1,0],[2,3],[1,3]],[[0,0],[1,0],[0,3],[1,3]],[[2,2],[3,2],[2,3],[3,3]],[[0,2],[3,2],[0,3],[3,3]],[[2,0],[3,0],[2,3],[3,3]],[[0,0],[3,0],[0,3],[3,3]]],Id=[[[2,0],[1,0],[2,1],[1,1]],[[0,0],[1,0],[0,1],[1,1]],[[2,0],[3,0],[2,1],[3,1]],[[0,0],[3,0],[0,1],[3,1]]],Z=32,Ld=1536,Rd=2048,zd=2816,Bd=4352,Vd=5888,Hd=8192,Ud=3,Wd=2,Gd=.45,Kd=30,qd=[0,1,2,1],Jd=16,Yd=class extends F{_canvas;_ctx;_canvasTexture;_upperCanvas;_upperCtx;_upperCanvasTexture;_upperSprite;_bitmaps;_mapData;_flags;_viewportWidth;_viewportHeight;_ox;_oy;_animationFrame;_tileCacheDirty;_tileCacheStartX;_tileCacheStartY;_tileCacheAnimationStep;_tileCacheBitmapRevisionKey;_tileCacheCols;_tileCacheRows;_tileCacheHasAnimatedAutotile;_renderedContent;_renderingMetrics;constructor(e,t){let n=document.createElement(`canvas`);n.width=e,n.height=t;let r=xd(n);r.texture.dynamic=!0,super(r.texture);let i=n.getContext(`2d`);if(!i)throw Error(`failed to create 2d context`);let a=document.createElement(`canvas`);a.width=e,a.height=t;let o=xd(a),s=a.getContext(`2d`);if(!s)throw Error(`failed to create upper tilemap context`);o.texture.dynamic=!0;let c=new F(o.texture);this._canvas=n,this._ctx=i,this._canvasTexture=r,this._upperCanvas=a,this._upperCtx=s,this._upperCanvasTexture=o,this._upperSprite=c,this._bitmaps=[],this._mapData=null,this._flags=null,this._viewportWidth=e,this._viewportHeight=t,this._ox=0,this._oy=0,this._animationFrame=0,this._tileCacheDirty=!0,this._tileCacheStartX=null,this._tileCacheStartY=null,this._tileCacheAnimationStep=null,this._tileCacheBitmapRevisionKey=null,this._tileCacheCols=0,this._tileCacheRows=0,this._tileCacheHasAnimatedAutotile=!1,this._renderedContent=!1,this._renderingMetrics=null,this.roundPixels=!0,this.zIndex=0,this._upperSprite.roundPixels=!0,this._upperSprite.zIndex=200}get upperLayer(){return this._upperSprite}set bitmaps(e){this._bitmaps=e,this._invalidateTileCache()}set mapData(e){this._mapData=e,this._invalidateTileCache()}set flags(e){this._flags=e,this._invalidateTileCache()}get ox(){return this._ox}set ox(e){this._ox=e}get oy(){return this._oy}set oy(e){this._oy=e}resize(e,t){let n=Math.max(1,Math.trunc(Number(e)||0)),r=Math.max(1,Math.trunc(Number(t)||0));this._viewportWidth===n&&this._viewportHeight===r||(this._viewportWidth=n,this._viewportHeight=r,this._invalidateTileCache(),this.update())}beginRenderingMetrics(){this._renderingMetrics=of()}endRenderingMetrics(){let e={...this._renderingMetrics??of()};return this._renderingMetrics=null,e}update(){this._animationFrame+=1,this._paint()}_paint(){let e=this._renderingMetrics;if(e&&(e.updateCount+=1),!this.visible){e&&(e.skippedUpdateCount+=1);return}if(!this._mapData){if(!this._renderedContent){e&&(e.skippedUpdateCount+=1);return}let t=e?performance.now():0;this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height),this._upperCtx.clearRect(0,0,this._upperCanvas.width,this._upperCanvas.height),e&&(e.lowerCanvasPaintCount+=1,e.upperCanvasPaintCount+=1,e.canvasPaintMs+=performance.now()-t),this.position.set(0,0),this._upperSprite.position.set(0,0),this._updateCanvasTexture(this._canvasTexture,this._canvas,e),this._updateCanvasTexture(this._upperCanvasTexture,this._upperCanvas,e),this._renderedContent=!1;return}let t=this._mapData.xsize,n=this._mapData.ysize,r=Math.ceil(this._viewportWidth/Z)+1,i=Math.ceil(this._viewportHeight/Z)+1,a=Math.floor(this._ox/Z),o=Math.floor(this._oy/Z),s=a*Z-this._ox,c=o*Z-this._oy,l=this._autotileAnimationStep(),u=this._bitmapRevisionKey(),d=this.x!==s||this.y!==c,f=this._refreshTileCache(t,n,r,i,a,o,l,u);this.position.set(s,c),this._upperSprite.position.set(s,c),f?(this._updateCanvasTexture(this._canvasTexture,this._canvas,e),this._updateCanvasTexture(this._upperCanvasTexture,this._upperCanvas,e)):e&&(d?e.positionOnlyUpdateCount+=1:e.skippedUpdateCount+=1),this._renderedContent=!0}_ensureRenderCanvasSize(e,t){this._canvas.width===e&&this._canvas.height===t||(this._canvas.width=e,this._canvas.height=t,this._upperCanvas.width=e,this._upperCanvas.height=t,this._canvasTexture.source.resize(e,t),this._upperCanvasTexture.source.resize(e,t),this._renderedContent=!1)}_updateCanvasTexture(e,t,n){let r=n?performance.now():0;e.source.update(),n&&(n.textureUpdateCount+=1,n.updatedPixelCount+=t.width*t.height,n.textureUpdateMs+=performance.now()-r)}destroy(e){this._upperSprite.parent?.removeChild(this._upperSprite),this.texture=f.EMPTY,this._upperSprite.texture=f.EMPTY,Cd(this._canvasTexture),Cd(this._upperCanvasTexture),this._upperSprite.destroy(e),super.destroy(e)}_refreshTileCache(e,t,n,r,i,a,o,s){let c=n*Z,l=r*Z;if(this._ensureRenderCanvasSize(c,l),!(this._tileCacheDirty||!this._renderedContent||this._tileCacheStartX!==i||this._tileCacheStartY!==a||this._tileCacheHasAnimatedAutotile&&this._tileCacheAnimationStep!==o||this._tileCacheBitmapRevisionKey!==s||this._tileCacheCols!==n||this._tileCacheRows!==r)||!this._mapData)return!1;let u=this._renderingMetrics,d=u?performance.now():0,f=this._mapData.zsize,p=!1;this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height),this._upperCtx.clearRect(0,0,this._upperCanvas.width,this._upperCanvas.height);for(let s=0;s<r;s+=1)for(let r=0;r<n;r+=1){let n=i+r,c=a+s;if(n<0||n>=e||c<0||c>=t)continue;let l=r*Z,u=s*Z;for(let e=0;e<Math.min(f,Wd+1);e+=1)Qd(this._readTile(n,c,e))&&(p=!0);this._drawTilemapLayer(`ground0`,this._ctx,l,u,n,c,f,o),this._drawTableEdge(this._ctx,l,u,n,c,0),this._drawTilemapLayer(`ground1`,this._ctx,l,u,n,c,f,o),this._drawTableEdge(this._ctx,l,u,n,c,1),this._drawTilemapLayer(`shadow`,this._ctx,l,u,n,c,f,o),this._drawTilemapLayer(`normal`,this._ctx,l,u,n,c,f,o),this._drawTilemapLayer(`upper`,this._upperCtx,l,u,n,c,f,o)}if(this._tileCacheDirty=!1,this._tileCacheStartX=i,this._tileCacheStartY=a,this._tileCacheAnimationStep=o,this._tileCacheBitmapRevisionKey=s,this._tileCacheCols=n,this._tileCacheRows=r,this._tileCacheHasAnimatedAutotile=p,u){u.tileCachePaintCount+=1;let e=performance.now()-d;u.tileCachePaintMs+=e,u.lowerCanvasPaintCount+=1,u.upperCanvasPaintCount+=1,u.canvasPaintMs+=e}return!0}_drawTilemapLayer(e,t,n,r,i,a,o,s){if(e===`ground0`){this._drawTile(t,this._readTile(i,a,0),n,r,s);return}if(e===`ground1`){o>1&&this._drawTile(t,this._readTile(i,a,1),n,r,s);return}if(e===`shadow`){o>Ud&&this._drawShadow(t,this._readTile(i,a,Ud),n,r);return}if(e===`normal`){if(o<=Wd)return;let e=this._readTile(i,a,Wd);this._isUpperTile(e)||this._drawTile(t,e,n,r,s);return}if(e===`upper`){if(Wd>=o)return;let e=this._readTile(i,a,Wd);this._isUpperTile(e)&&this._drawTile(t,e,n,r,s)}}_drawTableEdge(e,t,n,r,i,a){if(i<=0||!this._mapData||a>=this._mapData.zsize)return;let o=this._readTile(r,i-1,a);this._isTableTile(o)&&this._drawAutotileTableEdge(e,o,t,n)}_drawShadow(e,t,n,r){let i=t&15;if(i===0)return;let a=Z/2;e.fillStyle=`rgba(0, 0, 0, ${Gd})`,i&1&&e.fillRect(n,r,a,a),i&2&&e.fillRect(n+a,r,a,a),i&4&&e.fillRect(n,r+a,a,a),i&8&&e.fillRect(n+a,r+a,a,a)}_drawTile(e,t,n,r,i){Xd(t)&&(Zd(t)?this._drawAutotile(e,t,n,r,i):this._drawNormalTile(e,t,n,r))}_drawNormalTile(e,t,n,r){let i=nf(t)?4:5+Math.floor(t/256),a=this._bitmaps[i];if(!a){this._drawDebugTile(e,t,n,r);return}let o=(Math.floor(t/128)%2*8+t%8)*Z,s=Math.floor(t%256/8)%16*Z;e.drawImage(a.canvas,o,s,Z,Z,n,r,Z,Z)}_drawAutotile(e,t,n,r,i){let a=rf(t),o=af(t),s=a%8,c=Math.floor(a/8),l=qd[i%qd.length],u=0,d=0,f=0,p=Pd,m=!1;Qd(t)?(u=0,a===0?(d=l*2,f=0):a===1?(d=l*2,f=3):a===2?(d=6,f=0):a===3?(d=6,f=3):(d=Math.floor(s/4)*8,f=c*6+Math.floor(s/2)%2*3,a%2==0?d+=l*2:(d+=6,p=Id,f+=i%3))):$d(t)?(u=1,d=s*2,f=(c-2)*3,m=this._isTableTile(t)):ef(t)?(u=2,d=s*2,f=(c-6)*2,p=Fd):tf(t)&&(u=3,d=s*2,f=Math.floor((c-10)*2.5+(c%2==1?.5:0)),c%2==1&&(p=Fd));let h=this._bitmaps[u];if(!h){this._drawDebugTile(e,t,n,r);return}let g=p[o],_=Z/2;for(let t=0;t<4;t+=1){let[i,a]=g[t],o=(d*2+i)*_,s=(f*2+a)*_,c=n+t%2*_,l=r+Math.floor(t/2)*_;if(m&&(a===1||a===5)){let t=a===1?(4-i)%4:i,n=(d*2+t)*_,r=(f*2+3)*_;e.drawImage(h.canvas,n,r,_,_,c,l,_,_),e.drawImage(h.canvas,o,s,_,_/2,c,l+_/2,_,_/2)}else e.drawImage(h.canvas,o,s,_,_,c,l,_,_)}}_drawAutotileTableEdge(e,t,n,r){let i=rf(t),a=af(t),o=i%8,s=Math.floor(i/8),c=o*2,l=(s-2)*3,u=this._bitmaps[1];if(!u)return;let d=Pd[a],f=Z/2;for(let t=2;t<4;t+=1){let[i,a]=d[t];if(a!==1&&a!==5)continue;let o=(c*2+i)*f,s=(l*2+a)*f,p=n+t%2*f;e.drawImage(u.canvas,o,s+f/2,f,f/2,p,r,f,f/2)}}_drawDebugTile(e,t,n,r){let i=t*37%360,a=this._readFlag(t);e.fillStyle=`hsl(${i}, 55%, 42%)`,e.fillRect(n,r,Z,Z),e.strokeStyle=`rgba(255, 255, 255, 0.16)`,e.strokeRect(n+.5,r+.5,Z-1,Z-1),e.fillStyle=`rgba(255, 255, 255, 0.9)`,e.font=`10px monospace`,e.fillText(String(t),n+4,r+12,Z-8),(a&Jd)!==0&&(e.strokeStyle=`rgba(255, 240, 120, 0.9)`,e.strokeRect(n+2.5,r+2.5,Z-5,Z-5))}_invalidateTileCache(){this._tileCacheDirty=!0}_autotileAnimationStep(){return Math.floor(Math.max(0,this._animationFrame-1)/Kd)}_bitmapRevisionKey(){return this._bitmaps.map(e=>e?.revision??`nil`).join(`,`)}_readTile(e,t,n){if(!this._mapData)return 0;let r=e+t*this._mapData.xsize+n*this._mapData.xsize*this._mapData.ysize;return Number(this._mapData.data[r]??0)}_readFlag(e){return this._flags?Number(this._flags.data[e]??0):0}_isTableTile(e){return $d(e)&&(this._readFlag(e)&128)!=0}_isUpperTile(e){return Xd(e)&&(this._readFlag(e)&Jd)!==0}};function Xd(e){return e>0&&e<Hd}function Zd(e){return e>=Rd}function Qd(e){return e>=Rd&&e<zd}function $d(e){return e>=zd&&e<Bd}function ef(e){return e>=Bd&&e<Vd}function tf(e){return e>=Vd&&e<Hd}function nf(e){return e>=Ld&&e<Rd}function rf(e){return Math.floor((e-Rd)/48)}function af(e){return(e-Rd)%48}function of(){return{updateCount:0,skippedUpdateCount:0,positionOnlyUpdateCount:0,tileCachePaintCount:0,lowerCanvasPaintCount:0,upperCanvasPaintCount:0,textureUpdateCount:0,updatedPixelCount:0,tileCachePaintMs:0,canvasPaintMs:0,textureUpdateMs:0}}var sf=class{_rootLayer;_resolveViewport;_objects;_nextCreationOrder;_nextEntryOrder;_dirty;constructor(e,t){this._rootLayer=e,this._resolveViewport=t,this._objects=new Map,this._nextCreationOrder=0,this._nextEntryOrder=0,this._dirty=!0}registerObject(e){let t=this._nextCreationOrder++,n={objectId:e.objectId,rgssType:e.rgssType,creationOrder:t,viewportId:e.rgssType===`viewport`?null:e.viewportId??null,disposed:!1,renderEntries:this._createEntries(e,t)};this._objects.set(e.objectId,n);for(let e of n.renderEntries)this._parentFor(n).addChild(e.pixiObject);this.markDirty()}moveObjectToViewport(e,t){let n=this._objects.get(e);if(!(!n||n.disposed||n.rgssType===`viewport`)&&n.viewportId!==t){for(let e of n.renderEntries)e.pixiObject.parent?.removeChild(e.pixiObject);n.viewportId=t;for(let e of n.renderEntries)this._parentFor(n).addChild(e.pixiObject);this.markDirty()}}moveViewportChildrenToRoot(e){for(let t of this._objects.values())t.viewportId===e&&this.moveObjectToViewport(t.objectId,null)}unregisterObject(e){let t=this._objects.get(e);if(t){t.disposed=!0;for(let e of t.renderEntries)e.pixiObject.parent?.removeChild(e.pixiObject);this._objects.delete(e),this.markDirty()}}markDirty(){this._dirty=!0}sync(){if(this._refreshSortKeys(),this._dirty){this._sortLayer(this._rootLayer,null);for(let e of this._objects.values())e.rgssType!==`viewport`||e.disposed||this._sortLayer(this._resolveViewport(e.objectId).content,e.objectId);this._dirty=!1}}_createEntries(e,t){return e.rgssType===`tilemap`&&e.pixiObject instanceof Yd?[this._createEntry(e,t,`tilemapLower`,e.pixiObject),this._createEntry(e,t,`tilemapUpper`,e.pixiObject.upperLayer)]:[this._createEntry(e,t,e.rgssType===`viewport`?`viewportRoot`:`main`,e.pixiObject)]}_createEntry(e,t,n,r){return{ownerObjectId:e.objectId,ownerType:e.rgssType,layerKind:n,pixiObject:r,creationOrder:t,entryOrder:this._nextEntryOrder++,rgssZ:0,rgssY:0}}_refreshSortKeys(){for(let e of this._objects.values())for(let t of e.renderEntries){let e=this._rgssZ(t),n=this._rgssY(t);(t.rgssZ!==e||t.rgssY!==n)&&(t.rgssZ=e,t.rgssY=n,this.markDirty())}}_rgssZ(e){return e.layerKind===`tilemapLower`?0:e.layerKind===`tilemapUpper`?200:Number(e.pixiObject.zIndex??0)||0}_rgssY(e){return e.ownerType===`sprite`&&e.pixiObject instanceof Dd&&Number(e.pixiObject.y??0)||0}_sortLayer(e,t){[...this._objects.values()].filter(e=>!e.disposed&&e.viewportId===t).flatMap(e=>e.renderEntries).sort(cf).forEach((t,n)=>{t.pixiObject.parent!==e&&(t.pixiObject.parent?.removeChild(t.pixiObject),e.addChild(t.pixiObject)),e.getChildIndex(t.pixiObject)!==n&&e.setChildIndex(t.pixiObject,n)})}_parentFor(e){return e.viewportId==null?this._rootLayer:this._resolveViewport(e.viewportId).content}},cf=(e,t)=>e.rgssZ===t.rgssZ?e.rgssY===t.rgssY?e.creationOrder===t.creationOrder?e.entryOrder-t.entryOrder:e.creationOrder-t.creationOrder:e.rgssY-t.rgssY:e.rgssZ-t.rgssZ,lf=`
in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 vMaskCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

void main(void) {
  vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
  position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
  position.y = position.y * (2.0 * uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;
  gl_Position = vec4(position, 0.0, 1.0);
  vTextureCoord = aPosition * (uOutputFrame.zw * uInputSize.zw);
  vMaskCoord = aPosition;
}
`,uf=`
in vec2 vTextureCoord;
in vec2 vMaskCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMaskTexture;
uniform vec2 uTransition;

void main(void) {
  vec4 frozen = texture(uTexture, vTextureCoord);
  vec4 mask = texture(uMaskTexture, vMaskCoord);
  if (mask.a > 0.0) mask.rgb /= mask.a;

  float luminance = (mask.r + mask.g + mask.b) / 3.0;
  float keepFrozen = clamp((luminance - uTransition.x) / uTransition.y, 0.0, 1.0);
  finalColor = frozen * keepFrozen;
}
`,df=(e,t,n)=>{let r=new S({uTransition:{value:pf(t,n),type:`vec2<f32>`}});return E.from({gl:{vertex:lf,fragment:uf,name:`rgss-transition-filter`},resources:{transitionUniforms:r,uMaskTexture:e}})},ff=(e,t,n)=>{e.resources.transitionUniforms.uniforms.uTransition=pf(t,n),e.resources.transitionUniforms.update()},pf=(e,t)=>new Float32Array([e,Math.max(1,t)/255]),mf=class e{_element;_objects;_metrics;_pixiApp;_playerElement;_screenElement;_rootContainer;_displayList;_brightnessOverlay;_frozenSprite;_frozenTexture=null;_frozenCanvas=null;_transitionMaskCanvas=null;_transitionMaskTexture=null;_transitionFilter=null;_nextUpdateAt=null;_brightness=255;_renderObserver=null;constructor(e,t){this._element=e.element,this._objects=e.objects,this._metrics=e.metrics,this._pixiApp=t,this._playerElement=document.createElement(`div`),this._playerElement.className=`game-player`,this._element.appendChild(this._playerElement),this._screenElement=document.createElement(`div`),this._screenElement.className=`game-screen`,this._playerElement.appendChild(this._screenElement),this._screenElement.appendChild(this._pixiApp.canvas),this._pixiApp.stage.sortableChildren=!1;let n=new r;n.sortableChildren=!1,this._rootContainer=new r,this._rootContainer.sortableChildren=!1,this._displayList=new sf(this._rootContainer,e=>this._objects.require(`viewport`,e)),this._brightnessOverlay=new os,this._frozenSprite=new F(f.EMPTY),this._frozenSprite.visible=!1,n.addChild(this._rootContainer),n.addChild(this._brightnessOverlay),this._pixiApp.stage.addChild(n),this._pixiApp.stage.addChild(this._frozenSprite),this._applyViewSize(this._pixiApp.screen.width,this._pixiApp.screen.height),this._refreshBrightnessOverlay(),this._refreshFrozenSpriteLayout(),this.refreshLayout(),window.addEventListener(`resize`,this.refreshLayout)}static async create(t){let n=new Pi;return await n.init({width:t.width,height:t.height,autoStart:!1,preserveDrawingBuffer:!0,preference:`webgl`,skipExtensionImports:!0,useBackBuffer:!1}),new e(t,n)}get pixiApp(){return this._pixiApp}get screenElement(){return this._screenElement}get width(){return this._pixiApp.screen.width}get height(){return this._pixiApp.screen.height}registerObject(e,t,n,r){this._displayList.registerObject({objectId:t,rgssType:e,pixiObject:n,viewportId:r})}markDisplayListDirty(){this._displayList.markDirty()}moveObjectToViewport(e,t){this._displayList.moveObjectToViewport(e,t)}disposeObject(e,t,n){if(e===`bitmap`){n.destroy();return}if(e===`viewport`){this._displayList.moveViewportChildrenToRoot(t),this._displayList.unregisterObject(t);let e=n;for(;e.content.children.length>0;){let t=e.content.children[0];e.content.removeChild(t),this._rootContainer.addChild(t)}e.destroy();return}this._displayList.unregisterObject(t);let r=n;r.parent?.removeChild(r),r.destroy({children:!0})}async update(e,t){let n=1e3/_f(e),r=this._nextUpdateAt??performance.now()+n;this.renderNow(),t(),await this._metrics.pace(()=>gf(r-performance.now()));let i=r+n,a=performance.now();this._nextUpdateAt=i<a-n?a+n:i}resetFramePacing(){this._nextUpdateAt=null}setBrightness(e){this._brightness=G(e),this._refreshBrightnessOverlay()}resize(e,t){let n=Math.max(1,Math.trunc(Number(e)||0)),r=Math.max(1,Math.trunc(Number(t)||0));this._pixiApp.renderer.resize(n,r),this._applyViewSize(n,r),this._refreshBrightnessOverlay(),this._refreshFrozenSpriteLayout(),this._objects.forEach(`tilemap`,e=>e.resize(n,r)),this._objects.forEach(`plane`,e=>e.resize(n,r)),this.renderNow()}freeze(){let e=this._extractScreenCanvas(!1);this._replaceFrozenTexture(e),this._frozenSprite.alpha=1,this._frozenSprite.visible=!0,this.renderNow()}setFrozenOpacity(e){let t=br(Number(e)||0);this._frozenSprite.alpha=t,this._frozenSprite.visible=t>0&&this._frozenTexture!=null}prepareTransition(e,t=40){if(this._destroyTransitionMask(),!e)return;let n=vf(e,this.width,this.height),r=xd(n);this._transitionMaskCanvas=n,this._transitionMaskTexture=r,this._transitionFilter=df(r.texture.source,0,t),this._frozenSprite.filters=[this._transitionFilter]}setTransitionProgress(e,t=40){let n=br(Number(e)||0);if(!this._transitionFilter||!this._frozenTexture){this.setFrozenOpacity(1-n);return}ff(this._transitionFilter,n,Math.max(1,Math.trunc(Number(t)||0))),this._frozenSprite.texture=this._frozenTexture.texture,this._frozenSprite.alpha=1,this._frozenSprite.visible=n<1}clearFrozen(){this._destroyFrozenTexture(),this.renderNow()}copyScreenToBitmap(e){e.replaceWithCanvas(this._extractScreenCanvas(!0))}renderNow(){this._metrics.render({updateWindows:()=>this._objects.forEach(`window`,e=>e.update()),syncDisplayList:()=>this._displayList.sync(),syncBackBuffer:()=>this._syncBackBufferUsage(),renderPixi:()=>this._pixiApp.render(),noteWindowsPresented:()=>this._objects.forEach(`window`,e=>e.notePresented())}),this._renderObserver?.()}setRenderObserver(e){this._renderObserver=e}refreshLayout=()=>{let e=this.width,t=this.height,n=Math.max(1,window.innerWidth||e),r=Math.max(1,window.innerHeight||t),i=Math.min(n/e,r/t),a=Math.floor(e*i),o=Math.floor(t*i);this._screenElement.style.transform=`scale(${i})`,this._playerElement.style.width=`${a}px`,this._playerElement.style.height=`${o}px`};debugState(){return{pixiApp:this._pixiApp,rootContainer:this._rootContainer,brightness:this._brightness,frozenSprite:this._frozenSprite,frozenCanvas:this._frozenCanvas,frozenTexture:this._frozenTexture,transitionMaskCanvas:this._transitionMaskCanvas,transitionMaskTexture:this._transitionMaskTexture,transitionFilter:this._transitionFilter}}_refreshBrightnessOverlay(){let e=br((255-this._brightness)/255);if(this._brightnessOverlay.clear(),e<=0||this.width<=0||this.height<=0){this._brightnessOverlay.visible=!1;return}this._brightnessOverlay.rect(0,0,this.width,this.height).fill({color:0,alpha:e}),this._brightnessOverlay.visible=!0}_refreshFrozenSpriteLayout(){this._frozenSprite.x=0,this._frozenSprite.y=0,this._frozenSprite.width=this.width,this._frozenSprite.height=this.height}_extractScreenCanvas(e){let t=this._frozenSprite.visible,n=this._frozenSprite.alpha;try{e||(this._frozenSprite.visible=!1),this.renderNow();let t=this._pixiApp.renderer.extract;if(!t?.canvas)throw Error(`renderer extract is unavailable`);return t.canvas({target:this._pixiApp.stage,frame:this._pixiApp.screen,clearColor:[0,0,0,1]})}finally{e||(this._frozenSprite.visible=t,this._frozenSprite.alpha=n,this.renderNow())}}_replaceFrozenTexture(e){this._destroyFrozenTexture(),this._frozenCanvas=e,this._frozenTexture=xd(e),this._frozenSprite.texture=this._frozenTexture.texture,this._refreshFrozenSpriteLayout()}_destroyFrozenTexture(){this._frozenSprite.visible=!1,this._frozenSprite.alpha=0,this._frozenSprite.texture=f.EMPTY,this._destroyTransitionMask(),Cd(this._frozenTexture),this._frozenTexture=null,this._frozenCanvas=null}_destroyTransitionMask(){this._frozenSprite.filters=[],this._transitionFilter?.destroy(),Cd(this._transitionMaskTexture),this._transitionFilter=null,this._transitionMaskTexture=null,this._transitionMaskCanvas=null}_applyViewSize(e,t){this._pixiApp.canvas.style.width=`${e}px`,this._pixiApp.canvas.style.height=`${t}px`,this._screenElement.style.width=`${e}px`,this._screenElement.style.height=`${t}px`,this.refreshLayout()}_syncBackBufferUsage(){let e=this._pixiApp.renderer.backBuffer;e&&(e.useBackBuffer=hf(this._objects.values(`sprite`))||hf(this._objects.values(`plane`))||Array.from(this._objects.values(`viewport`)).some(e=>e.requiresBackBuffer))}},hf=e=>{for(let t of e)if(t.blendType===2&&t.visible!==!1&&t.renderable!==!1)return!0;return!1},gf=e=>new Promise(t=>{window.setTimeout(t,Math.max(0,e))}),_f=e=>{let t=Math.trunc(Number(e)||0);return t>0?t:60},vf=(e,t,n)=>{let r=document.createElement(`canvas`);r.width=Math.max(1,Math.trunc(t)),r.height=Math.max(1,Math.trunc(n));let i=r.getContext(`2d`);if(!i)throw Error(`failed to create transition mask canvas context`);return i.drawImage(e,0,0,r.width,r.height),r},yf=[`LEFT`,`RIGHT`,`UP`,`DOWN`,`A`,`B`,`C`,`X`,`Y`,`Z`,`L`,`R`,`SHIFT`,`CTRL`,`ALT`,`F5`,`F6`,`F7`,`F8`,`F9`],bf=e=>{let t={};for(let n of yf)t[n]=e;return t},xf={ArrowLeft:[`LEFT`],ArrowRight:[`RIGHT`],ArrowUp:[`UP`],ArrowDown:[`DOWN`],ShiftLeft:[`A`,`SHIFT`],ShiftRight:[`A`,`SHIFT`],KeyX:[`B`],Esc:[`B`],Escape:[`B`],KeyZ:[`C`],Space:[`C`],Enter:[`C`],KeyA:[`X`],KeyS:[`Y`],KeyD:[`Z`],KeyQ:[`L`],KeyW:[`R`],ControlLeft:[`CTRL`],ControlRight:[`CTRL`],AltLeft:[`ALT`],AltRight:[`ALT`],F5:[`F5`],F6:[`F6`],F7:[`F7`],F8:[`F8`],F9:[`F9`]},Sf=[`A`,`B`,`C`,`X`,`Y`,`Z`,`L`,`R`],Cf={A:6,B:1,C:0,X:2,Y:3,Z:7,L:4,R:5},wf=[[12,`UP`],[13,`DOWN`],[14,`LEFT`],[15,`RIGHT`]],Tf=.5,Ef=`vxace-web:gamepad-bindings`,Df=()=>typeof navigator.getGamepads==`function`?navigator.getGamepads():[],Of=()=>{try{return window.localStorage}catch{return null}},kf=e=>`${e.id.trim().replace(/\s+/g,` `)}|${e.mapping}|${e.buttons.length}|${e.axes.length}`,Af=e=>({axesCount:e.axes.length,buttonsCount:e.buttons.length,fingerprint:kf(e),id:e.id,index:e.index,mapping:e.mapping}),jf=e=>!!(e&&(e.pressed||e.value>=Tf)),Mf=class{_keyboardMap=bf(!1);_virtualMap=bf(!1);_gamepadMap=bf(!1);_state=bf(0);_vkState=new Uint8Array(256);_pressedVirtualKeys=new Map;_capsLock=!1;_getGamepads;_storage;_gamepadProfiles;_awaitingGamepadRelease=!1;_suspended=!1;_windowFocused=!0;constructor(e=Df,t=Of()){this._getGamepads=e,this._storage=t,this._gamepadProfiles=this._loadGamepadProfiles(),document.addEventListener(`keydown`,this._onKeyDown),document.addEventListener(`keyup`,this._onKeyUp),document.addEventListener(`visibilitychange`,this._onVisibilityChange),window.addEventListener(`blur`,this._onWindowBlur),window.addEventListener(`focus`,this._onWindowFocus)}get state(){return this._state}dispose(){document.removeEventListener(`keydown`,this._onKeyDown),document.removeEventListener(`keyup`,this._onKeyUp),document.removeEventListener(`visibilitychange`,this._onVisibilityChange),window.removeEventListener(`blur`,this._onWindowBlur),window.removeEventListener(`focus`,this._onWindowFocus)}setVirtualKey(e,t){this._suspended||(this._virtualMap[e]=t)}setSuspended(e){this._suspended!==e&&(this._suspended=e,this._awaitingGamepadRelease=!e,this.clear())}get suspended(){return this._suspended}getConnectedGamepads(){return this._readGamepads().filter(e=>!!e?.connected).map(Af)}getGamepadButtonBinding(e,t){let n=this._gamepadProfiles[e.fingerprint]?.buttons[t];return n===void 0?e.mapping===`standard`?Cf[t]:null:n!=null&&n<e.buttonsCount?n:null}setGamepadButtonBinding(e,t,n){let r=Math.trunc(n);if(r<0||r>=e.buttonsCount)throw RangeError(`gamepad button index is out of range: ${n}`);let i=this._gamepadProfiles[e.fingerprint]??{buttons:{}};for(let t of Sf)this.getGamepadButtonBinding(e,t)===r&&(i.buttons[t]=null);i.buttons[t]=r,this._gamepadProfiles[e.fingerprint]=i,this._saveGamepadProfiles()}resetGamepadBindings(e){delete this._gamepadProfiles[e.fingerprint],this._saveGamepadProfiles()}clear(){yf.forEach(e=>{this._keyboardMap[e]=!1,this._virtualMap[e]=!1,this._gamepadMap[e]=!1,this._state[e]=0}),this._pressedVirtualKeys.clear(),this._vkState.fill(0)}update(){if(this._suspended){this.clear();return}this._updateGamepadMap(),yf.forEach(e=>{this._keyboardMap[e]||this._virtualMap[e]||this._gamepadMap[e]?this._state[e]+=1:this._state[e]=0})}_onKeyDown=e=>{this._updateVirtualKeyState(e,!0);let t=xf[e.code];t&&(e.preventDefault(),!this._suspended&&t.forEach(e=>this._keyboardMap[e]=!0))};_onKeyUp=e=>{this._updateVirtualKeyState(e,!1);let t=xf[e.code];t&&(e.preventDefault(),t.forEach(e=>this._keyboardMap[e]=!1))};_updateVirtualKeyState(e,t){let n=e.code||e.key||String(e.keyCode||0);if(typeof e.getModifierState==`function`)try{this._capsLock=!!e.getModifierState(`CapsLock`)}catch{}t?this._pressedVirtualKeys.set(n,this._virtualKeyCodes(e)):this._pressedVirtualKeys.delete(n),this._refreshVirtualKeyState()}_virtualKeyCodes(e){let t=[];Number.isInteger(e.keyCode)&&e.keyCode>0&&e.keyCode<256&&t.push(e.keyCode);switch(e.code){case`ShiftLeft`:t.push(160);break;case`ShiftRight`:t.push(161);break;case`ControlLeft`:t.push(162);break;case`ControlRight`:t.push(163);break;case`AltLeft`:t.push(164);break;case`AltRight`:t.push(165);break;case`Semicolon`:t.push(186);break;case`Equal`:t.push(187);break;case`Comma`:t.push(188);break;case`Minus`:t.push(189);break;case`Period`:t.push(190);break;case`Slash`:t.push(191);break;case`Backquote`:t.push(192);break;case`BracketLeft`:t.push(219);break;case`Backslash`:t.push(220);break;case`BracketRight`:t.push(221);break;case`Quote`:t.push(222);break;case`IntlBackslash`:t.push(226)}return[...new Set(t)]}_refreshVirtualKeyState(){this._vkState.fill(0);for(let e of this._pressedVirtualKeys.values())for(let t of e)this._vkState[t]=128}getKeyState(e){let t=Math.trunc(Number(e)||0);if(t<0||t>255)return 0;let n=(this._vkState[t]&128)!==0,r=t===20?this._capsLock:!1;return(n?-32768:0)|(r?1:0)}getKeyboardState(){let e=new Array(256);for(let t=0;t<256;t++){let n=(this._vkState[t]&128)!==0,r=t===20?this._capsLock:!1;e[t]=(n?128:0)|(r?1:0)}return e}_onWindowBlur=()=>{this._windowFocused=!1,this.clear()};_onWindowFocus=()=>{this._windowFocused=!0};_onVisibilityChange=()=>{document.visibilityState===`hidden`&&this.clear()};_updateGamepadMap(){if(yf.forEach(e=>this._gamepadMap[e]=!1),!this._windowFocused||document.visibilityState===`hidden`)return;let e=this._readGamepads();if(this._awaitingGamepadRelease){if(e.some(Nf))return;this._awaitingGamepadRelease=!1}for(let t of e){if(!t?.connected)continue;let e=Af(t);for(let n of Sf){let r=this.getGamepadButtonBinding(e,n);if(r==null)continue;let i=t.buttons[r];jf(i)&&(this._gamepadMap[n]=!0)}if(t.mapping!==`standard`)continue;for(let[e,n]of wf){let r=t.buttons[e];jf(r)&&(this._gamepadMap[n]=!0)}let n=t.axes[0]??0,r=t.axes[1]??0;n<=-Tf&&(this._gamepadMap.LEFT=!0),n>=Tf&&(this._gamepadMap.RIGHT=!0),r<=-Tf&&(this._gamepadMap.UP=!0),r>=Tf&&(this._gamepadMap.DOWN=!0)}}_readGamepads(){try{return this._getGamepads()}catch{return[]}}_loadGamepadProfiles(){if(!this._storage)return{};try{let e=this._storage.getItem(Ef);if(!e)return{};let t=JSON.parse(e);return t.version!==1||!t.profiles||typeof t.profiles!=`object`?{}:Pf(t.profiles)}catch{return{}}}_saveGamepadProfiles(){if(this._storage)try{let e={version:1,profiles:this._gamepadProfiles};this._storage.setItem(Ef,JSON.stringify(e))}catch{}}},Nf=e=>!!(e?.connected&&(e.buttons.some(jf)||e.axes.some(e=>Math.abs(e)>=Tf))),Pf=e=>{let t={};for(let[n,r]of Object.entries(e)){if(!r||typeof r!=`object`||!r.buttons||typeof r.buttons!=`object`)continue;let e={};for(let t of Sf){let n=r.buttons[t];(n===null||typeof n==`number`&&Number.isInteger(n)&&n>=0)&&(e[t]=n)}t[n]={buttons:e}}return t},Ff=(()=>{let e=0;return()=>++e})(),If=class{_records={bitmap:new Map,sprite:new Map,plane:new Map,tilemap:new Map,viewport:new Map,window:new Map};reserveId(){return Ff()}set(e,t,n){this._records[e].set(t,n)}add(e,t){let n=this.reserveId();return this.set(e,n,t),n}get(e,t){return this._records[e].get(t)}require(e,t){let n=this.get(e,t);if(!n)throw`not found ${e}: ${t}`;return n}has(e,t){return this._records[e].has(t)}delete(e,t){return this._records[e].delete(t)}forEach(e,t){this._records[e].forEach(t)}values(e){return this._records[e].values()}count(e){return this._records[e].size}visibleCount(e){let t=0;return this._records[e].forEach(e=>{e.visible!==!1&&(t+=1)}),t}},Lf=class e{_canvas;_ctx;_textureSource;_revision=0;_changeListeners=new Set;_destroyListeners=new Set;constructor(e=1,t=1){this._createCanvas(e,t)}get context(){return this._ctx}get canvas(){return this._canvas}get width(){return this._canvas.width}get height(){return this._canvas.height}get textureSource(){return this._textureSource}get revision(){return this._revision}drawText(e,t,n,r,i,a,o,s,c,l,u,d,f){Rf(`TkBitmap.drawText`),this._ctx.save(),this._ctx.font=e;let p=Bf(this._ctx.measureText(d),a),m=Vf(p,l),h=p*m,g=f===0?s:f===1?s+(l-h)/2:s+l-h,_=Wf,v=Math.max(1,Math.ceil((l+8)*_)),y=Math.max(1,Math.ceil((u+8)*_)),b=document.createElement(`canvas`);b.width=v,b.height=y;let x=b.getContext(`2d`);x.scale(_,_),x.font=e;let S=zf(x,d,u,4);x.textBaseline=S.kind,x.textAlign=`left`,x.lineJoin=`round`,x.beginPath(),x.rect(4,4,l,u),x.clip();let C=g-s+4,w=S.y;x.translate(C,w),x.scale(m,1),o&&(x.fillStyle=i,x.fillText(d,2/m,2)),a&&(x.strokeStyle=r,x.lineWidth=2.5,x.strokeText(d,0,0)),x.fillStyle=n,x.fillText(d,0,0),this._ctx.imageSmoothingEnabled=!0,this._ctx.imageSmoothingQuality=`high`,this._ctx.drawImage(b,s-4,c-4,v/_,y/_),this._ctx.restore(),this._markChanged()}clear(){this.context.clearRect(0,0,this._canvas.width,this._canvas.height),this._markChanged()}clearRect(e,t,n,r){this.context.clearRect(e,t,n,r),this._markChanged()}fillRect(e,t,n,r,i){this._ctx.fillStyle=i,this._ctx.fillRect(e,t,n,r),this._markChanged()}gradientFillRect(e,t,n,r,i,a,o){let s=o?this._ctx.createLinearGradient(e,t,e,t+r):this._ctx.createLinearGradient(e,t,e+n,t);s.addColorStop(0,i),s.addColorStop(1,a),this._ctx.fillStyle=s,this._ctx.fillRect(e,t,n,r),this._markChanged()}blt(e,t,n,r,i,a,o,s=255){this._drawBitmap(e,t,n,a,o,r,i,a,o,s)}stretchBlt(e,t,n,r,i,a,o,s,c,l=255){this._drawBitmap(e,t,n,r,i,a,o,s,c,l)}measureText(e,t){return Rf(`TkBitmap.measureText`),this._ctx.font=e,this._ctx.measureText(t).width}getPixel(e,t){let n=Math.trunc(Number(e)||0),r=Math.trunc(Number(t)||0);if(n<0||r<0||n>=this._canvas.width||r>=this._canvas.height)return{red:0,green:0,blue:0,alpha:0};let i=this._ctx.getImageData(n,r,1,1).data;return{red:i[0],green:i[1],blue:i[2],alpha:i[3]}}setPixel(e,t,n,r,i,a){let o=Math.trunc(Number(e)||0),s=Math.trunc(Number(t)||0);if(o<0||s<0||o>=this._canvas.width||s>=this._canvas.height)return;let c=this._ctx.createImageData(1,1);c.data[0]=G(n),c.data[1]=G(r),c.data[2]=G(i),c.data[3]=G(a),this._ctx.putImageData(c,o,s),this._markChanged()}getRgbaPixelsBase64(){return Kf(this._ctx.getImageData(0,0,this._canvas.width,this._canvas.height).data)}putRgbaPixelsBase64(e){let t=this._ctx.createImageData(this._canvas.width,this._canvas.height),n=atob(String(e)),r=Math.min(n.length,t.data.length);for(let e=0;e<r;e+=1)t.data[e]=n.charCodeAt(e);this._ctx.putImageData(t,0,0),this._markChanged()}blur(){let e=this._canvas.width,t=this._canvas.height;if(e<=0||t<=0)return;let n=this._ctx.getImageData(0,0,e,t),r=this._ctx.createImageData(e,t),i=n.data,a=r.data;for(let n=0;n<t;n+=1)for(let r=0;r<e;r+=1){let o=0,s=0,c=0,l=0,u=0;for(let a=-1;a<=1;a+=1)for(let d=-1;d<=1;d+=1){let f=r+d,p=n+a;if(f<0||p<0||f>=e||p>=t)continue;let m=(p*e+f)*4;o+=i[m],s+=i[m+1],c+=i[m+2],l+=i[m+3],u+=1}let d=(n*e+r)*4;a[d]=Math.round(o/u),a[d+1]=Math.round(s/u),a[d+2]=Math.round(c/u),a[d+3]=Math.round(l/u)}this._ctx.putImageData(r,0,0),this._markChanged()}radialBlur(e,t){let n=this._canvas.width,r=this._canvas.height,i=Math.max(2,Math.trunc(Number(t)||0));if(n<=0||r<=0)return;let a=document.createElement(`canvas`);a.width=n,a.height=r;let o=a.getContext(`2d`);if(!o)return;o.drawImage(this._canvas,0,0);let s=document.createElement(`canvas`);s.width=n,s.height=r;let c=s.getContext(`2d`);if(!c)return;let l=(Number(e)||0)*Math.PI/180,u=n/2,d=r/2;c.globalCompositeOperation=`lighter`,c.globalAlpha=1/i,c.imageSmoothingEnabled=!0,c.imageSmoothingQuality=`high`;for(let e=0;e<i;e+=1){let t=l*(i===1?0:e/(i-1)-.5);c.save(),c.translate(u,d),c.rotate(t),c.translate(-u,-d),c.drawImage(a,0,0),c.restore()}this._ctx.clearRect(0,0,n,r),this._ctx.drawImage(s,0,0),this._markChanged()}hueChange(e){let t=this._canvas.width,n=this._canvas.height,r=qf(e);if(t<=0||n<=0||r===0)return;let i=this._ctx.getImageData(0,0,t,n),a=i.data;for(let e=0;e<a.length;e+=4){let t=a[e+3],[n,i,o]=Jf(a[e],a[e+1],a[e+2],r);a[e]=n,a[e+1]=i,a[e+2]=o,a[e+3]=t}this._ctx.putImageData(i,0,0),this._markChanged()}resize(e,t){let n=Math.max(1,Math.trunc(Number(e)||0)),r=Math.max(1,Math.trunc(Number(t)||0));this._canvas.width===n&&this._canvas.height===r||(this._canvas.width=n,this._canvas.height=r,this._textureSource.resize(n,r),this._markChanged())}replaceWithCanvas(e){this.resize(e.width,e.height),this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height),this._ctx.drawImage(e,0,0),this._markChanged()}clone(){let t=new e(this.width,this.height);return t.context.drawImage(this._canvas,0,0),t._markChanged(),t}destroy(){this._destroyListeners.forEach(e=>e()),this._destroyListeners.clear(),wd(this._textureSource),this._changeListeners.clear()}onChange(e){return this._changeListeners.add(e),()=>{this._changeListeners.delete(e)}}onDestroy(e){return this._destroyListeners.add(e),()=>{this._destroyListeners.delete(e)}}_drawBitmap(e,t,n,r,i,a,o,s,c,l){if(!e||s<=0||c<=0||r<=0||i<=0)return;let u=br((Number(l)||0)/255);u<=0||(this._ctx.save(),this._ctx.globalAlpha=u,this._ctx.drawImage(e.canvas,Math.trunc(Number(a)||0),Math.trunc(Number(o)||0),Math.trunc(Number(s)||0),Math.trunc(Number(c)||0),Math.trunc(Number(t)||0),Math.trunc(Number(n)||0),Math.trunc(Number(r)||0),Math.trunc(Number(i)||0)),this._ctx.restore(),this._markChanged())}_createCanvas(e,t){return this._canvas?this._canvas:(this._canvas=document.createElement(`canvas`),this._canvas.width=e,this._canvas.height=t,this._ctx=this._canvas.getContext(`2d`),this._textureSource=bd(this._canvas),this._canvas)}_markChanged(){this._revision+=1,this._textureSource.update(),this._changeListeners.forEach(e=>e())}static fromImage(t){let n=new e(t.width,t.height);return n.context.drawImage(t,0,0),n._markChanged(),n}},Rf=e=>{window.rubyBridge?.app.recordDebugEvent(e)},zf=(e,t,n,r)=>{let i=e.measureText(t),a=i.fontBoundingBoxAscent,o=i.fontBoundingBoxDescent;return Number.isFinite(a)&&Number.isFinite(o)&&a+o>0?{kind:`alphabetic`,y:r+n/2+(a-o)/2+Hf}:{kind:`middle`,y:r+n/2+Hf}},Bf=(e,t)=>{let n=e.actualBoundingBoxLeft+e.actualBoundingBoxRight,r=t?2:0;return Number.isFinite(n)&&n>0?Math.max(e.width,n+r):e.width+r},Vf=(e,t)=>e<=0||t<=0||e<=t?1:Math.max(Uf,t/e),Hf=0,Uf=.6,Wf=2,Gf=32768,Kf=e=>{let t=``;for(let n=0;n<e.length;n+=Gf){let r=e.subarray(n,n+Gf),i=Array.from({length:r.length},(e,t)=>String.fromCharCode(r[t]));t+=i.join(``)}return btoa(t)},qf=e=>{let t=Math.trunc(Number(e)||0)%360;return t<0?t+360:t},Jf=(e,t,n,r)=>{let[i,a,o]=Yf(e,t,n);return Xf((i+r)%360,a,o)},Yf=(e,t,n)=>{let r=e/255,i=t/255,a=n/255,o=Math.max(r,i,a),s=Math.min(r,i,a),c=(o+s)/2;if(o===s)return[0,0,c];let l=o-s,u=c>.5?l/(2-o-s):l/(o+s),d;return d=o===r?(i-a)/l+(i<a?6:0):o===i?(a-r)/l+2:(r-i)/l+4,[d*60,u,c]},Xf=(e,t,n)=>{if(t===0){let e=Math.round(n*255);return[e,e,e]}let r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,a=e/360;return[Math.round(Zf(i,r,a+1/3)*255),Math.round(Zf(i,r,a)*255),Math.round(Zf(i,r,a-1/3)*255)]},Zf=(e,t,n)=>{let r=n;return r<0&&(r+=1),r>1&&--r,r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e},Qf=`
in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

void main(void) {
  vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
  position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
  position.y = position.y * (2.0 * uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;
  gl_Position = vec4(position, 0.0, 1.0);
  vTextureCoord = aPosition * (uOutputFrame.zw * uInputSize.zw);
}
`,$f=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uBackTexture;
uniform float uColorMatrix[20];

void main(void) {
  vec4 front = texture(uTexture, vTextureCoord);
  vec4 back = texture(uBackTexture, vTextureCoord);
  vec4 source = front;
  if (source.a > 0.0) source.rgb /= source.a;

  vec3 effected;
  effected.r = uColorMatrix[0] * source.r
    + uColorMatrix[1] * source.g
    + uColorMatrix[2] * source.b
    + uColorMatrix[3] * source.a
    + uColorMatrix[4];
  effected.g = uColorMatrix[5] * source.r
    + uColorMatrix[6] * source.g
    + uColorMatrix[7] * source.b
    + uColorMatrix[8] * source.a
    + uColorMatrix[9];
  effected.b = uColorMatrix[10] * source.r
    + uColorMatrix[11] * source.g
    + uColorMatrix[12] * source.b
    + uColorMatrix[13] * source.a
    + uColorMatrix[14];

  vec3 premultiplied = clamp(effected, 0.0, 1.0) * front.a;
  float alpha = front.a + back.a * (1.0 - front.a);
  finalColor = vec4(max(vec3(0.0), back.rgb - premultiplied), alpha);
}
`,ep=e=>{let t=new S({uColorMatrix:{value:e,type:`f32`,size:20}});return E.from({gl:{vertex:Qf,fragment:$f,name:`rgss-subtract-effect-filter`},resources:{effectUniforms:t},blendRequired:!0})},tp=(e,t)=>{e.resources.effectUniforms.uniforms.uColorMatrix=t,e.resources.effectUniforms.update()},np=class extends r{_baseSprite;_effectFilter;_subtractEffectFilter;_baseTexture;_unsubscribeBitmapChange;_bitmap;_ox;_oy;_opacity;_zoomX;_zoomY;_color;_tone;_blendType;constructor(e,t){super(),this._baseSprite=new Os({texture:f.EMPTY,width:e,height:t}),this._effectFilter=new Qo,this._subtractEffectFilter=ep(this._effectFilter.matrix),this._baseTexture=X,this._unsubscribeBitmapChange=null,this._bitmap=null,this._ox=0,this._oy=0,this._opacity=255,this._zoomX=1,this._zoomY=1,this._color={red:0,green:0,blue:0,alpha:0},this._tone={red:0,green:0,blue:0,gray:0},this._blendType=0,this.addChild(this._baseSprite),this._refreshEffects(),this._refreshTileTransform()}get bitmap(){return this._bitmap}get texture(){return this._baseTexture.texture}get tilePosition(){return this._baseSprite.tilePosition}get tileScale(){return this._baseSprite.tileScale}set bitmap(e){this._bitmap!==e&&(this._unsubscribeBitmapChange?.(),this._unsubscribeBitmapChange=null,this._bitmap=e,this._unsubscribeBitmapChange=e?.onChange(()=>{this._refreshBaseTexture()})??null,this._refreshBaseTexture())}get ox(){return this._ox}set ox(e){this._ox=Math.trunc(Number(e)||0),this._refreshTileTransform()}get oy(){return this._oy}set oy(e){this._oy=Math.trunc(Number(e)||0),this._refreshTileTransform()}get zoomX(){return this._zoomX}set zoomX(e){this._zoomX=dd(e),this._refreshTileTransform()}get zoomY(){return this._zoomY}set zoomY(e){this._zoomY=dd(e),this._refreshTileTransform()}get opacity(){return this._opacity}set opacity(e){this._opacity=G(e),this.alpha=this._opacity/255}get blendMode(){return this._baseSprite.blendMode}get blendType(){return this._blendType}set blendType(e){this._blendType=ld(e),this._refreshBlendMode()}get color(){return this._color}set color(e){this._color=fd(e),this._refreshEffects()}get tone(){return this._tone}set tone(e){this._tone=pd(e),this._refreshEffects()}resize(e,t){let n=Math.max(1,Math.trunc(Number(e)||0)),r=Math.max(1,Math.trunc(Number(t)||0));this._baseSprite.width=n,this._baseSprite.height=r,this._refreshTileTransform()}_refreshTileTransform(){this._baseSprite.tilePosition.x=-this._ox,this._baseSprite.tilePosition.y=-this._oy,this._baseSprite.tileScale.x=this._zoomX,this._baseSprite.tileScale.y=this._zoomY}_refreshEffects(){let e=this._tone.red!==0||this._tone.green!==0||this._tone.blue!==0||this._tone.gray!==0||this._color.alpha!==0;this._effectFilter.matrix=hd(this._tone,this._color,rp),tp(this._subtractEffectFilter,this._effectFilter.matrix),this._refreshBlendMode(e)}_refreshBlendMode(e=!!this._baseSprite.filters?.length){let t=ud(this._blendType);e?this._blendType===2?(this._baseSprite.filters=[this._subtractEffectFilter],this._baseSprite.blendMode=`normal`):(this._baseSprite.filters=[this._effectFilter],this._baseSprite.blendMode=`normal`,this._effectFilter.blendMode=t):(this._baseSprite.filters=[],this._baseSprite.blendMode=t)}_refreshBaseTexture(){this._setBaseTexture(this._bitmap?Sd(this._bitmap.textureSource):X)}_setBaseTexture(e){let t=this._baseTexture;this._baseTexture=e,this._baseSprite.texture=e.texture,Cd(t)}destroy(e){this._unsubscribeBitmapChange?.(),this._unsubscribeBitmapChange=null,this._setBaseTexture(X),this._effectFilter.destroy(),this._subtractEffectFilter.destroy(),super.destroy(e)}},rp={red:0,green:0,blue:0,alpha:0},ip=`
in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

void main(void) {
  vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
  position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
  position.y = position.y * (2.0 * uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;
  gl_Position = vec4(position, 0.0, 1.0);
  vTextureCoord = aPosition * (uOutputFrame.zw * uInputSize.zw);
}
`,ap=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uBackTexture;
uniform float uColorMatrix[20];

void main(void) {
  vec4 back = texture(uBackTexture, vTextureCoord);
  vec4 source = back;
  if (source.a > 0.0) source.rgb /= source.a;

  vec3 effected;
  effected.r = uColorMatrix[0] * source.r
    + uColorMatrix[1] * source.g
    + uColorMatrix[2] * source.b
    + uColorMatrix[3] * source.a
    + uColorMatrix[4];
  effected.g = uColorMatrix[5] * source.r
    + uColorMatrix[6] * source.g
    + uColorMatrix[7] * source.b
    + uColorMatrix[8] * source.a
    + uColorMatrix[9];
  effected.b = uColorMatrix[10] * source.r
    + uColorMatrix[11] * source.g
    + uColorMatrix[12] * source.b
    + uColorMatrix[13] * source.a
    + uColorMatrix[14];

  // RGSS3 truncates its viewport effect channels while the normalized WebGL
  // framebuffer rounds them. Bias by one channel step before storage.
  vec3 quantized = max(vec3(0.0), clamp(effected, 0.0, 1.0) - vec3(1.0 / 255.0));
  finalColor = vec4(quantized * back.a, back.a);
}
`,op=e=>{let t=new S({uColorMatrix:{value:e,type:`f32`,size:20}});return E.from({gl:{vertex:ip,fragment:ap,name:`rgss-backdrop-effect-filter`},resources:{effectUniforms:t},blendRequired:!0})},sp=(e,t)=>{e.resources.effectUniforms.uniforms.uColorMatrix=t,e.resources.effectUniforms.update()},cp=class{_root;_content;_mask;_effectOverlay;_effectFilter;_rect;_color;_tone;_visible;_zIndex;_ox;_oy;_flashColor;_flashDuration;_flashRemaining;_flashHidesContent;constructor(e,t){this._root=new r,this._root.sortableChildren=!1,this._content=new r,this._content.sortableChildren=!1,this._mask=new os,this._effectOverlay=new os,this._rect={x:0,y:0,width:e,height:t},this._color={red:0,green:0,blue:0,alpha:0},this._tone={red:0,green:0,blue:0,gray:0},this._visible=!0,this._zIndex=0,this._ox=0,this._oy=0,this._flashColor={red:0,green:0,blue:0,alpha:0},this._flashDuration=0,this._flashRemaining=0,this._flashHidesContent=!1,this._effectFilter=op(hd(this._tone,this._color,this._flashColor)),this._content.mask=this._mask,this._effectOverlay.filters=[this._effectFilter],this._root.addChild(this._content),this._root.addChild(this._effectOverlay),this._root.addChild(this._mask),this._refresh()}get displayObject(){return this._root}get content(){return this._content}get requiresBackBuffer(){return this._visible&&this._effectOverlay.visible}get visible(){return this._visible}set visible(e){this._visible=!!e,this._refreshVisibility()}get zIndex(){return this._zIndex}set zIndex(e){this._zIndex=Number(e)||0,this._root.zIndex=this._zIndex}get ox(){return this._ox}set ox(e){this._ox=Number(e)||0,this._refreshScroll()}get oy(){return this._oy}set oy(e){this._oy=Number(e)||0,this._refreshScroll()}set rect(e){this._rect=md(e),this._refreshLayout()}set color(e){this._color=fd(e),this._refreshEffects()}set tone(e){this._tone=pd(e),this._refreshEffects()}flash(e,t){this._flashColor=e?fd(e):{red:0,green:0,blue:0,alpha:0},this._flashDuration=Math.max(0,Math.trunc(Number(t)||0)),this._flashRemaining=this._flashDuration,this._flashHidesContent=e==null&&this._flashDuration>0,this._refreshEffects(),this._refreshFlashVisibility()}advanceEffects(){this._flashRemaining>0&&(--this._flashRemaining,this._refreshEffects(),this._refreshFlashVisibility())}destroy(){this._effectFilter.destroy(),this._root.parent?.removeChild(this._root),this._root.destroy({children:!0})}_refresh(){this._refreshLayout(),this._refreshScroll(),this._refreshEffects(),this._refreshVisibility(),this._root.zIndex=this._zIndex}_refreshLayout(){this._root.x=this._rect.x,this._root.y=this._rect.y,this._mask.clear(),this._mask.rect(0,0,this._rect.width,this._rect.height).fill({color:16777215,alpha:1}),this._effectOverlay.clear(),this._rect.width>0&&this._rect.height>0&&this._effectOverlay.rect(0,0,this._rect.width,this._rect.height).fill({color:16777215,alpha:1}),this._refreshEffects(),this._refreshVisibility()}_refreshScroll(){this._content.x=-this._ox,this._content.y=-this._oy}_refreshVisibility(){this._root.visible=this._visible&&this._rect.width>0&&this._rect.height>0}_refreshEffects(){let e=this._flashDuration>0?this._flashRemaining/this._flashDuration:0,t={...this._flashColor,alpha:this._flashColor.alpha*e},n=this._tone.red!==0||this._tone.green!==0||this._tone.blue!==0||this._tone.gray!==0||this._color.alpha!==0||t.alpha!==0;sp(this._effectFilter,hd(this._tone,this._color,t)),this._effectOverlay.visible=n&&this._rect.width>0&&this._rect.height>0}_refreshFlashVisibility(){this._content.visible=!(this._flashHidesContent&&this._flashRemaining>0)}},lp=class extends r{_opennessMask;_backgroundSprite;_contentsSprite;_contentsMask;_cursor;_arrows;_pauseSign;_frame;_windowskin;_windowWidth;_windowHeight;_padding;_paddingBottom;_opacity;_backOpacity;_contentsOpacity;_openness;_active;_cursorRect;_tone;_ox;_oy;_arrowsVisible;_pause;_contentsBitmap;_contentsTexture;_backgroundCompositeTexture;_backgroundCompositeKey;_scrollArrowState;_requestedVisible;_closedContentsRevision;_hideContentsUntilRefresh;_hasPresentedOpenContents;_unsubscribeWindowskinChange;_unsubscribeContentsChange;_animationCount;constructor(){super(),this._opennessMask=new os,this._backgroundSprite=new F(f.EMPTY),this._contentsSprite=new F(f.EMPTY),this._contentsMask=new os,this._cursor=new r,this._arrows=new os,this._pauseSign=new os,this._frame=new r,this._windowskin=null,this._windowWidth=96,this._windowHeight=96,this._padding=12,this._paddingBottom=12,this._opacity=255,this._backOpacity=192,this._contentsOpacity=255,this._openness=255,this._active=!0,this._cursorRect={x:0,y:0,width:0,height:0},this._tone={red:0,green:0,blue:0,gray:0},this._ox=0,this._oy=0,this._arrowsVisible=!0,this._pause=!1,this._contentsBitmap=null,this._contentsTexture=X,this._backgroundCompositeTexture=X,this._backgroundCompositeKey=null,this._scrollArrowState={up:!1,down:!1,left:!1,right:!1},this._requestedVisible=!0,this._closedContentsRevision=0,this._hideContentsUntilRefresh=!1,this._hasPresentedOpenContents=!1,this._unsubscribeWindowskinChange=null,this._unsubscribeContentsChange=null,this._animationCount=0,this.addChild(this._backgroundSprite),this.addChild(this._contentsSprite),this.addChild(this._cursor),this.addChild(this._frame),this.addChild(this._arrows),this.addChild(this._pauseSign),this.addChild(this._contentsMask),this.addChild(this._opennessMask),this._refresh()}get windowVisible(){return this._requestedVisible}set windowVisible(e){this._requestedVisible=!!e,this._refreshAlpha()}get windowWidth(){return this._windowWidth}set windowWidth(e){this._windowWidth=Math.max(e,1),this._refresh()}get windowHeight(){return this._windowHeight}set windowHeight(e){this._windowHeight=Math.max(e,1),this._refresh()}get padding(){return this._padding}set padding(e){this._padding=Math.max(e,0),this._refresh()}get paddingBottom(){return this._paddingBottom}set paddingBottom(e){this._paddingBottom=Math.max(e,0),this._refresh()}get opacity(){return this._opacity}set opacity(e){this._opacity=G(e),this._refreshAlpha()}get backOpacity(){return this._backOpacity}set backOpacity(e){this._backOpacity=G(e),this._refreshAlpha()}get contentsOpacity(){return this._contentsOpacity}set contentsOpacity(e){this._contentsOpacity=G(e),this._refreshAlpha()}get openness(){return this._openness}set openness(e){let t=this._openness;this._openness=G(e),this._openness<=0?this._hasPresentedOpenContents&&(this._closedContentsRevision=this._contentsBitmap?.revision??0,this._hideContentsUntilRefresh=!0):t<=0&&!this._hideContentsUntilRefresh&&(this._closedContentsRevision=this._contentsBitmap?.revision??0),this._refreshOpennessMask(),this._refreshAlpha()}get active(){return this._active}set active(e){this._active=!!e,this._refreshCursorAlpha()}get arrowsVisible(){return this._arrowsVisible}set arrowsVisible(e){this._arrowsVisible=!!e,this._refreshArrows()}get pause(){return this._pause}set pause(e){this._pause=!!e,this._refreshPauseSign()}get ox(){return this._ox}set ox(e){this._ox=Math.trunc(Number(e)||0),this._refreshContentsPosition(),this._refreshCursor(),this._refreshArrows()}get oy(){return this._oy}set oy(e){this._oy=Math.trunc(Number(e)||0),this._refreshContentsPosition(),this._refreshCursor(),this._refreshArrows()}set windowskin(e){this._unsubscribeWindowskinChange?.(),this._windowskin=e,this._backgroundCompositeKey=null,this._unsubscribeWindowskinChange=e?.onChange(()=>{this._backgroundCompositeKey=null,this._refreshBackgroundTexture()})??null,this._refresh()}set contents(e){this._unsubscribeContentsChange?.(),this._contentsBitmap=e,this._setContentsTexture(e?Sd(e.textureSource):X),this._closedContentsRevision=e?.revision??0,this._hideContentsUntilRefresh=!1,this._unsubscribeContentsChange=e?.onChange(()=>{this._refreshContentsMaskUsage(),this._refreshAlpha()})??null,this._refresh()}set cursorRect(e){this._cursorRect=e,this._refreshCursor()}set tone(e){this._tone=pd(e),this._refreshTone()}destroy(e){this._unsubscribeWindowskinChange?.(),this._unsubscribeContentsChange?.(),this._unsubscribeWindowskinChange=null,this._unsubscribeContentsChange=null,this._setContentsTexture(X),this._setBackgroundTexture(X),Ed(this._frame),Ed(this._cursor),super.destroy(e)}notePresented(){this.visible&&this._openness>0&&this._contentsSprite.alpha>0&&(this._hasPresentedOpenContents=!0)}update(){this._animationCount+=1,this._refreshCursorAlpha()}_refresh(){this._refreshLayout(),this._refreshOpennessMask(),this._refreshFrame(),this._refreshCursor(),this._refreshArrows(),this._refreshPauseSign(),this._refreshTone(),this._refreshAlpha()}_refreshLayout(){let e=Math.max(this._windowWidth-4,1),t=Math.max(this._windowHeight-4,1),n=Math.max(this._windowWidth-this._padding*2,1),r=Math.max(this._windowHeight-this._padding-this._paddingBottom,1);this._backgroundSprite.x=2,this._backgroundSprite.y=2,this._backgroundSprite.width=e,this._backgroundSprite.height=t,this._refreshContentsPosition(),this._contentsMask.clear(),this._contentsMask.rect(this._padding,this._padding,n,r).fill({color:16777215,alpha:1}),this._refreshContentsMaskUsage()}_refreshOpennessMask(){let e=this._openness/255,t=this._windowHeight*e,n=(this._windowHeight-t)/2;if(this._opennessMask.clear(),t<=0){this._setMaskUsage(this,this._opennessMask,!1);return}this._opennessMask.rect(0,n,this._windowWidth,t).fill({color:16777215,alpha:1}),this._setMaskUsage(this,this._opennessMask,this._openness<255)}_refreshContentsPosition(){this._contentsSprite.x=this._padding-this._ox,this._contentsSprite.y=this._padding-this._oy,this._refreshContentsMaskUsage()}_refreshContentsMaskUsage(){let e=this._contentsBitmap;if(!e){this._setMaskUsage(this._contentsSprite,this._contentsMask,!1);return}let t=this._padding,n=this._padding,r=this._contentsSprite.x,i=this._contentsSprite.y,a=r<t||i<n||r+e.width>t+this._contentsViewWidth()||i+e.height>n+this._contentsViewHeight();this._setMaskUsage(this._contentsSprite,this._contentsMask,a)}_setMaskUsage(e,t,n){if(t.renderable=n,n){e.mask!==t&&(e.mask=t);return}e.mask===t&&(e.mask=null),t.includeInBuild=!1,t.measurable=!1}_refreshBackgroundTexture(){if(!this._windowskin){if(this._backgroundCompositeKey===`none`)return;this._backgroundCompositeKey=`none`,this._setBackgroundTexture(X);return}let e=Math.max(this._windowWidth-4,1),t=Math.max(this._windowHeight-4,1),n=this._createBackgroundCompositeKey(e,t);if(this._backgroundCompositeKey===n)return;let r=document.createElement(`canvas`);r.width=e,r.height=t;let i=r.getContext(`2d`);if(!i){this._setBackgroundTexture(X);return}i.imageSmoothingEnabled=!0,i.drawImage(this._windowskin.canvas,0,0,64,64,0,0,e,t);let a=document.createElement(`canvas`);a.width=64,a.height=64;let o=a.getContext(`2d`);if(o){o.drawImage(this._windowskin.canvas,0,64,64,64,0,0,64,64);let n=i.createPattern(a,`repeat`);n&&(i.fillStyle=n,i.fillRect(0,0,e,t))}this._applyToneToImageData(i,e,t),this._setBackgroundTexture(xd(r)),this._backgroundCompositeKey=n}_refreshFrame(){let e=this._windowWidth,t=this._windowHeight;Ed(this._frame),!(!this._windowskin||e<=0||t<=0)&&this._addNineSlice(this._frame,64,0,64,64,16,0,0,e,t)}_refreshCursor(){let e=this._cursorRect;if(Ed(this._cursor),e.width<=0||e.height<=0)return;let t=this._padding+e.x-this._ox,n=this._padding+e.y-this._oy,r=Math.max(e.width,1),i=Math.max(e.height,1);if(!this._windowskin){let e=new os;e.roundRect(t,n,r,i,8).fill({color:16777215,alpha:.12}).stroke({width:2,color:16250871,alpha:.85}),this._cursor.addChild(e);return}this._addNineSlice(this._cursor,64,64,32,32,2,t,n,r,i,{fillCenter:!0,tileVerticalEdges:!1})}_refreshArrows(){let e=this._windowWidth,t=this._windowHeight,n=e/2,r=t/2,i=Math.max(0,(this._contentsBitmap?.width??0)-this._contentsViewWidth()),a=Math.max(0,(this._contentsBitmap?.height??0)-this._contentsViewHeight()),o=this._oy>0,s=this._oy<a,c=this._ox>0,l=this._ox<i;if(this._scrollArrowState={up:o,down:s,left:c,right:l},this._arrows.clear(),!this._arrowsVisible||e<=24||t<=24||!o&&!s&&!c&&!l){this._arrows.visible=!1;return}let u=e=>this._arrows.poly(e).fill({color:16777215,alpha:.75});o&&u([n,8,n-5,13,n+5,13]),s&&u([n,t-8,n-5,t-8-5,n+5,t-8-5]),c&&u([8,r,13,r-5,13,r+5]),l&&u([e-8,r,e-8-5,r-5,e-8-5,r+5]),this._arrows.visible=!0}_refreshPauseSign(){let e=this._windowWidth,t=this._windowHeight,n=e/2,r=t-12;if(this._pauseSign.clear(),!this._pause||e<=24||t<=24){this._pauseSign.visible=!1;return}this._pauseSign.poly([n-8,r,n+8,r,n,r+7]).fill({color:16777215,alpha:.85}),this._pauseSign.visible=!0}_refreshTone(){this._refreshBackgroundTexture()}_refreshAlpha(){let e=this._openness/255,t=this._opacity/255*e,n=this._backOpacity/255*t,r=this._contentsBitmap?.revision??0;this._hideContentsUntilRefresh&&r!==this._closedContentsRevision&&(this._hideContentsUntilRefresh=!1);let i=+!this._hideContentsUntilRefresh,a=this._contentsOpacity/255*e*i;this.visible=this._requestedVisible&&e>0,this._frame.alpha=t,this._backgroundSprite.alpha=n,this._contentsSprite.alpha=a,this._arrows.alpha=t,this._pauseSign.alpha=t,this._refreshCursorAlpha()}_refreshCursorAlpha(){let e=this._animationCount%40,t=this._contentsOpacity;this._active?e<20?t-=e*8:t-=(40-e)*8:t-=160,this._cursor.alpha=G(t)/255,this._cursor.visible=this._openness>0}_contentsViewWidth(){return Math.max(this._windowWidth-this._padding*2,1)}_contentsViewHeight(){return Math.max(this._windowHeight-this._padding-this._paddingBottom,1)}_addNineSlice(e,t,n,r,i,a,o,s,c,l,u={}){let{fillCenter:d=!1,tileVerticalEdges:f=!0}=u,p=Math.max(r-a*2,1),m=Math.max(i-a*2,1),h=Math.min(a,c/2),g=Math.min(a,l/2),_=Math.max(c-h*2,0),v=Math.max(l-g*2,0),y=o+Math.max(c-h,0),b=s+Math.max(l-g,0);this._addSkinSprite(e,t,n,a,a,o,s,h,g),this._addSkinSprite(e,t+a,n,p,a,o+h,s,_,g),this._addSkinSprite(e,t+a+p,n,a,a,y,s,h,g),f?(this._addSkinTilingSprite(e,t,n+a,a,m,o,s+g,h,v),this._addSkinTilingSprite(e,t+a+p,n+a,a,m,y,s+g,h,v)):(this._addSkinSprite(e,t,n+a,a,m,o,s+g,h,v),this._addSkinSprite(e,t+a+p,n+a,a,m,y,s+g,h,v)),d&&this._addSkinSprite(e,t+a,n+a,p,m,o+h,s+g,_,v),this._addSkinSprite(e,t,n+a+m,a,a,o,b,h,g),this._addSkinSprite(e,t+a,n+a+m,p,a,o+h,b,_,g),this._addSkinSprite(e,t+a+p,n+a+m,a,a,y,b,h,g)}_addSkinSprite(e,t,n,r,i,a,o,s,c){if(!this._windowskin||r<=0||i<=0||s<=0||c<=0)return;let l=new F(this._skinTexture(t,n,r,i));l.x=a,l.y=o,l.width=s,l.height=c,e.addChild(l)}_addSkinTilingSprite(e,t,n,r,i,a,o,s,c){if(!this._windowskin||r<=0||i<=0||s<=0||c<=0)return;let l=new Os({texture:this._skinTexture(t,n,r,i),width:s,height:c});l.x=a,l.y=o,e.addChild(l)}_skinTexture(e,t,n,r){return Sd(this._windowskin.textureSource,new l(e,t,n,r)).texture}_setContentsTexture(e){let t=this._contentsTexture;this._contentsTexture=e,this._contentsSprite.texture=e.texture,Cd(t)}_setBackgroundTexture(e){let t=this._backgroundCompositeTexture;this._backgroundCompositeTexture=e,this._backgroundSprite.texture=e.texture,Cd(t)}_createBackgroundCompositeKey(e,t){return[this._windowskin?.revision??0,e,t,this._tone.red,this._tone.green,this._tone.blue,this._tone.gray].join(`:`)}_applyToneToImageData(e,t,n){if(this._tone.red===0&&this._tone.green===0&&this._tone.blue===0&&this._tone.gray===0)return;let r=e.getImageData(0,0,t,n),i=r.data,a=this._tone.gray/255,o=1-a;for(let e=0;e<i.length;e+=4){let t=i[e],n=i[e+1],r=i[e+2];if(a>0){let e=t*.299+n*.587+r*.114;t=e*a+t*o,n=e*a+n*o,r=e*a+r*o}i[e]=G(t+this._tone.red),i[e+1]=G(n+this._tone.green),i[e+2]=G(r+this._tone.blue)}e.putImageData(r,0,0)}},up=Symbol(`App.testSupport`),dp=class e{_element;_graphics;_presenter;_objects;_assetProvider;_gameManifest;_fontRenderMetrics;_keyManager;_lastKeyState;_lastBridgeEvent;_bridgeMetrics;_audio;_hostSuspended;_hostResumeWaiters;constructor(e){this._element=e.element,this._assetProvider=e.assetProvider,this._gameManifest=e.assetProvider.manifest,this._fontRenderMetrics=e.fontRenderMetrics??new ar,this._presenter=e.presenter,this._objects=new If,this._keyManager=new Mf,this._lastKeyState={},this._lastBridgeEvent=`init`,this._bridgeMetrics=new di,this._audio=new ci(e.assetProvider,(e,t,n)=>{this._lastBridgeEvent=`playAudio(${e},${t}) failed: ${n instanceof Error?n.message:String(n)}`}),this._hostSuspended=!1,this._hostResumeWaiters=[]}static async create(t){let n=new e(t);return await n._setupApplication(),n}get pixiApp(){return this._graphics.pixiApp}get keyManager(){return this._keyManager}get screenElement(){return this._graphics.screenElement}[up](){let e=()=>this._audio.debugState(),t=()=>this._graphics.debugState();return{assetProvider:this._assetProvider,get audio(){return e()},get graphics(){return t()},objects:e=>[...this._objects.values(e)],renderNow:()=>this._graphics.renderNow(),setRenderObserver:e=>this._graphics.setRenderObserver(e)}}setHostSuspended(e){if(this._hostSuspended!==e){if(this._hostSuspended=e,this._keyManager.setSuspended(e),e){this._audio.suspend();return}this._graphics.resetFramePacing(),this._hostResumeWaiters.splice(0).forEach(e=>e()),this._audio.resume()}}beginBridgeMetrics(){this._bridgeMetrics.begin()}endBridgeMetrics(){return this._bridgeMetrics.end()}bridgeProbe(e){return this._withBridgeTrace(`bridgeProbe`,()=>e)}async loadBitmapFromImage(e){let t=this._resolveManifestAsset(e,`image`),n=this._assetProvider.createCacheKey(t);return this._withBridgeTrace(`loadBitmapFromImage(${e} -> ${n})`,async()=>{let n=this._objects.reserveId(),r=await rr({kind:`image`,label:e},()=>this._assetProvider.loadImage(t,{kind:`image`})),i=Lf.fromImage(r);return this._objects.set(`bitmap`,n,i),n})}createBitmapFromSize(e,t){return this._withBridgeTrace(`createBitmapFromSize(${e},${t})`,()=>{let n=new Lf(e,t);return this._objects.add(`bitmap`,n)})}cloneBitmap(e){return this._withBridgeTrace(`cloneBitmap(${e})`,()=>{let t=this._objects.require(`bitmap`,e);return this._objects.add(`bitmap`,t.clone())})}createSprite(e){return this._withBridgeTrace(`createSprite`,()=>{let t=new Dd,n=this._objects.add(`sprite`,t);return this._graphics.registerObject(`sprite`,n,t,e),n})}createPlane(e){return this._withBridgeTrace(`createPlane`,()=>{let t=new np(this._graphics.width,this._graphics.height),n=this._objects.add(`plane`,t);return this._graphics.registerObject(`plane`,n,t,e),n})}createTilemap(e){return this._withBridgeTrace(`createTilemap`,()=>{let t=new Yd(this._graphics.width,this._graphics.height),n=this._objects.add(`tilemap`,t);return this._graphics.registerObject(`tilemap`,n,t,e),n})}createViewport(){return this._withBridgeTrace(`createViewport`,()=>{let e=new cp(this._graphics.width,this._graphics.height),t=this._objects.add(`viewport`,e);return this._graphics.registerObject(`viewport`,t,e.displayObject),t})}createWindow(e){return this._withBridgeTrace(`createWindow`,()=>{let t=new lp,n=this._objects.add(`window`,t);return this._graphics.registerObject(`window`,n,t,e),n})}getObject(e,t){return this._objects.get(e,t)}fontExists(e){return this._gameManifest.fontExists(String(e))}resolveFontFamilies(e){let t=Q(`font families`,e);return Array.isArray(t)?JSON.stringify(this._gameManifest.resolveFontFamilies(t.map(e=>String(e)))):`[]`}resolveFontRenderMetrics(e,t){let n=Q(`font render metrics`,e);if(!Array.isArray(n))return JSON.stringify(or);let r=t?fp(t):{},i=this._gameManifest.resolveFontFamilies(n.map(e=>String(e)));return JSON.stringify(this._fontRenderMetrics.resolve(i.length>0?i:n,r))}getProperty(e,t,n){return this._withBridgeTrace(`getProperty(${e},${t},${n})`,()=>{let r=this._objects.get(e,t);return r?e===`window`&&n===`visible`?r.windowVisible:r[n]:null})}setProperty(e,t,n,r){return this._withBridgeTrace(`setProperty(${e},${t},${n})`,()=>{let i=this._objects.get(e,t);if(!i)return null;if(e===`window`&&n===`visible`)return i.windowVisible=!!r,null;if(e===`tilemap`&&n===`visible`){let e=i;return e.visible=!!r,e.upperLayer.visible=!!r,null}return i[n]=r,(n===`zIndex`||n===`y`)&&this._graphics.markDisplayListDirty(),null})}disposeObject(e,t){this._withBridgeTrace(`disposeObject(${e},${t})`,()=>{let n=this._objects.get(e,t);n&&(this._objects.delete(e,t),this._graphics.disposeObject(e,t,n))})}setBitmapToSprite(e,t){this._withBridgeTrace(`setBitmapToSprite(${e},${t})`,()=>{let n=this._objects.require(`sprite`,e),r=t==null?null:this._objects.get(`bitmap`,t);if(t!=null&&!r)throw`not found bitmap: ${t}`;n.bitmap=r??null})}setBitmapToPlane(e,t){this._withBridgeTrace(`setBitmapToPlane(${e},${t??`nil`})`,()=>{let n=this._objects.require(`plane`,e);n.bitmap=t==null?null:this._objects.get(`bitmap`,t)??null})}setDataToTilemap(e,t){this._withBridgeTrace(`setDataToTilemap(${e})`,()=>{let n=this._objects.require(`tilemap`,e),r=Q(`tilemap payload`,t);n.mapData=r.mapData,n.flags=r.flags,n.update()})}setBitmapsToTilemap(e,t){this._withBridgeTrace(`setBitmapsToTilemap(${e})`,()=>{let n=this._objects.require(`tilemap`,e),r=Q(`tilemap bitmap ids`,t);if(!Array.isArray(r))throw Error(`tilemap bitmap ids must be an array`);n.bitmaps=r.map(e=>e==null?null:this._objects.get(`bitmap`,Number(e))??null),n.update()})}setContentsToWindow(e,t){this._withBridgeTrace(`setContentsToWindow(${e},${t??`nil`})`,()=>{let n=this._objects.require(`window`,e);n.contents=t?this._objects.get(`bitmap`,t)??null:null})}setWindowskinToWindow(e,t){this._withBridgeTrace(`setWindowskinToWindow(${e},${t??`nil`})`,()=>{let n=this._objects.require(`window`,e);n.windowskin=t?this._objects.get(`bitmap`,t)??null:null})}setCursorRectToWindow(e,t,n,r,i){this._withBridgeTrace(`setCursorRectToWindow(${e},${t},${n},${r},${i})`,()=>{let a=this._objects.require(`window`,e);a.cursorRect={x:t,y:n,width:r,height:i}})}setToneToWindow(e,t){this._withBridgeTrace(`setToneToWindow(${e})`,()=>{let n=this._objects.require(`window`,e);n.tone=Q(`window tone`,t)})}setSrcRectToSprite(e,t,n,r,i){this._withBridgeTrace(`setSrcRectToSprite(${e},${t},${n},${r},${i})`,()=>{let a=this._objects.require(`sprite`,e);a.srcRect={x:t,y:n,width:r,height:i}})}setColorToSprite(e,t){this._withBridgeTrace(`setColorToSprite(${e})`,()=>{let n=this._objects.require(`sprite`,e);n.color=Q(`sprite color`,t)})}setToneToSprite(e,t){this._withBridgeTrace(`setToneToSprite(${e})`,()=>{let n=this._objects.require(`sprite`,e);n.tone=Q(`sprite tone`,t)})}setColorToPlane(e,t){this._withBridgeTrace(`setColorToPlane(${e})`,()=>{let n=this._objects.require(`plane`,e);n.color=Q(`plane color`,t)})}setToneToPlane(e,t){this._withBridgeTrace(`setToneToPlane(${e})`,()=>{let n=this._objects.require(`plane`,e);n.tone=Q(`plane tone`,t)})}setFlashToSprite(e,t,n){this._withBridgeTrace(`setFlashToSprite(${e},${n})`,()=>{let r=this._objects.require(`sprite`,e),i=t===`null`?null:Q(`sprite flash color`,t);r.flash(i,n)})}setFlashToViewport(e,t,n){this._withBridgeTrace(`setFlashToViewport(${e},${n})`,()=>{let r=this._objects.require(`viewport`,e),i=t===`null`?null:Q(`viewport flash color`,t);r.flash(i,n)})}updateSpriteEffects(e){return this._withBridgeTrace(`updateSpriteEffects(${e})`,()=>this._objects.require(`sprite`,e).advanceEffects())}updateViewportEffects(e){this._withBridgeTrace(`updateViewportEffects(${e})`,()=>{this._objects.require(`viewport`,e).advanceEffects()})}setRectToViewport(e,t,n,r,i){this._withBridgeTrace(`setRectToViewport(${e},${t},${n},${r},${i})`,()=>{let a=this._objects.require(`viewport`,e);a.rect={x:t,y:n,width:r,height:i}})}setColorToViewport(e,t){this._withBridgeTrace(`setColorToViewport(${e})`,()=>{let n=this._objects.require(`viewport`,e);n.color=Q(`viewport color`,t)})}setToneToViewport(e,t){this._withBridgeTrace(`setToneToViewport(${e})`,()=>{let n=this._objects.require(`viewport`,e);n.tone=Q(`viewport tone`,t)})}setViewport(e,t,n){this._withBridgeTrace(`setViewport(${e},${t},${n??`nil`})`,()=>{if(!this._objects.get(e,t))throw`not found ${e}: ${t}`;if(n!=null&&!this._objects.has(`viewport`,n))throw`not found viewport: ${n}`;this._graphics.moveObjectToViewport(t,n??null)})}updateTilemap(e){this._withBridgeTrace(`updateTilemap(${e})`,()=>{this._objects.require(`tilemap`,e).update()})}async updateGraphics(e){await this._waitForHostResume();let t=pp(e),n=`updateGraphics(${t})`;this._lastBridgeEvent=n;try{await this._bridgeMetrics.traceAsync(n,async()=>{await this._graphics.update(t,()=>{this._presenter.completeBoot(),ir()})})}catch(e){throw this._lastBridgeEvent=`${n} failed: ${String(e)}`,e}}resetGraphicsFramePacing(){this._graphics.resetFramePacing()}setGraphicsBrightness(e){this._withBridgeTrace(`setGraphicsBrightness(${e})`,()=>this._graphics.setBrightness(e))}resizeScreen(e,t){this._withBridgeTrace(`resizeScreen(${e},${t})`,()=>this._graphics.resize(e,t))}freezeGraphics(){this._withBridgeTrace(`freezeGraphics`,()=>this._graphics.freeze())}setFrozenGraphicsOpacity(e){this._withBridgeTrace(`setFrozenGraphicsOpacity(${e})`,()=>this._graphics.setFrozenOpacity(e))}async prepareGraphicsTransition(e,t=40){let n=e==null||String(e).length===0?null:String(e);if(this._lastBridgeEvent=`prepareGraphicsTransition(${n??`nil`},${t})`,!n)return this._graphics.prepareTransition(null,t),!1;let r=this._resolveManifestAsset(n,`image`);try{let e=await rr({kind:`image`,label:n},()=>this._assetProvider.loadImage(r,{kind:`image`}));return this._graphics.prepareTransition(e,t),this._lastBridgeEvent=`prepareGraphicsTransition(${n} -> ${this._assetProvider.createCacheKey(r)})`,!0}catch(e){return this._graphics.prepareTransition(null,t),this._lastBridgeEvent=`prepareGraphicsTransition(${n}) fallback: ${e instanceof Error?e.message:String(e)}`,!1}}setFrozenGraphicsTransitionProgress(e,t=40){this._withBridgeTrace(`setFrozenGraphicsTransitionProgress(${e},${t})`,()=>this._graphics.setTransitionProgress(e,t))}clearFrozenGraphics(){this._withBridgeTrace(`clearFrozenGraphics`,()=>this._graphics.clearFrozen())}playMovie(e){this._withBridgeTrace(`playMovie(${e})`,()=>{let t=this._assetProvider.resolveAsset(e,`movie`);this._lastBridgeEvent=t?`playMovie(${e} -> ${this._assetProvider.createCacheKey(t)}) fallback`:`playMovie(${e}) unsupported`})}copyScreenToBitmap(e){this._withBridgeTrace(`copyScreenToBitmap(${e})`,()=>{let t=this._objects.require(`bitmap`,e);this._graphics.copyScreenToBitmap(t)})}setupMidi(){this._audio.setupMidi()}playAudio(e,t,n=100,r=100,i=null){this._withBridgeTrace(`playAudio(${e},${t})`,()=>{this._audio.play(e,t,n,r,i)})}stopAudio(e){this._withBridgeTrace(`stopAudio(${e})`,()=>{this._audio.stop(e)})}fadeAudio(e,t){this._withBridgeTrace(`fadeAudio(${e},${t})`,()=>{this._audio.fade(e,t)})}audioPos(e){return this._withBridgeTrace(`audioPos(${e})`,()=>this._audio.position(e))}updateKey(){return this._keyManager.update(),this._lastKeyState={...this._keyManager.state},this._keyManager.state}getKeyState(e){return this._keyManager.getKeyState(e)}getKeyboardState(){return this._keyManager.getKeyboardState()}showRuntimeError(e){this._presenter.showRuntimeError({message:e})}recordDebugEvent(e){this._lastBridgeEvent=e}debugSnapshot(){let e=this._presenter.snapshot();return{...Td(),bitmapCount:this._objects.count(`bitmap`),spriteCount:this._objects.count(`sprite`),visibleSpriteCount:this._objects.visibleCount(`sprite`),planeCount:this._objects.count(`plane`),visiblePlaneCount:this._objects.visibleCount(`plane`),tilemapCount:this._objects.count(`tilemap`),visibleTilemapCount:this._objects.visibleCount(`tilemap`),windowCount:this._objects.count(`window`),visibleWindowCount:this._objects.visibleCount(`window`),runtimeErrorOpen:e.runtimeErrorOpen,resourceErrorOpen:e.resourceErrorOpen,resourceLoadingOpen:e.resourceLoadingOpen,documentHasFocus:document.hasFocus(),activeElementTag:document.activeElement?.tagName??``,keyState:{...this._lastKeyState},lastBridgeEvent:this._lastBridgeEvent,hostSuspended:this._hostSuspended}}async _setupApplication(){this._graphics=await mf.create({element:this._element,width:this._gameManifest.screen.width,height:this._gameManifest.screen.height,objects:this._objects,metrics:this._bridgeMetrics}),window.addEventListener(`pointerdown`,()=>this._resumeAudioIfActive(),{passive:!0}),window.addEventListener(`keydown`,()=>this._resumeAudioIfActive()),window.addEventListener(`touchstart`,()=>this._resumeAudioIfActive(),{passive:!0})}_withBridgeTrace(e,t){this._lastBridgeEvent=e;try{return this._bridgeMetrics.trace(e,t)}catch(t){throw this._lastBridgeEvent=`${e} failed: ${String(t)}`,t}}_resolveManifestAsset(e,t){let n=this._assetProvider.resolveAsset(e,t);if(!n)throw Error(`asset not found in manifest: ${e}`);return n}_resumeAudioIfActive(){this._hostSuspended||this._audio.resume()}_waitForHostResume(){return this._hostSuspended?new Promise(e=>this._hostResumeWaiters.push(e)):Promise.resolve()}},Q=(e,t)=>{try{return JSON.parse(t)}catch(t){let n=t instanceof Error?t.message:String(t);throw Error(`invalid ${e}: ${n}`)}},fp=e=>{let t=Q(`font render metrics descriptor`,e);if(!t||typeof t!=`object`)return{};let n=t;return{style:typeof n.style==`string`?n.style:void 0,weight:typeof n.weight==`string`?n.weight:void 0}},pp=e=>{let t=Math.trunc(Number(e)||0);return t>0?t:60},mp={en:{boot:{loadingManifest:`Loading game manifest...`,loadingFonts:`Loading fonts...`,loadingRubyRuntime:`Loading Ruby runtime...`,initializingRubyVm:`Initializing Ruby VM...`,startingGame:`Starting game...`},presenter:{resourceErrorContent:`Failed to load the file.
Check your network connection and try again.`,resourceErrorTitle:e=>`Loading Error: ${e}`,resourceLoading:`Loading...`,retry:`Retry`,runtimeErrorTitle:`Runtime Error`},settings:{openSettings:`Settings`,title:`Player Settings`,close:`Close`,generalTab:`General`,controlsTab:`Gamepad`,readmeTab:`README`,aboutTab:`About`,settingsUiLanguage:`Settings UI language`,localeAuto:`Auto`,runtimeAboutHeading:`About VX Ace Web Runtime`,runtimeDescription:`This game is powered by VX Ace Web Runtime.`,runtimeDisclaimer:`VX Ace Web Runtime is an independently developed, unofficial product and is not provided by the RPG Maker team.`,legalNoticesHeading:`Legal notices`,legalNoticesLoading:`Loading legal notices...`,legalNoticesLoadFailed:`Could not load the legal notices.`,ossLicensesHeading:`Open-source licenses`,midiLibraryLicense:`MIDI playback libraries`,midiSoundFontLicense:`Soundfont (FluidR3Mono_GM)`,connectedGamepad:`Connected gamepad`,resetBindings:`Reset to defaults`,noGamepad:`Connect a gamepad and press any button.`,standardGamepadHelp:`Direction input uses the standard D-pad and left stick.`,rawGamepadHelp:`Only assigned buttons are available for this gamepad. Direction input is not supported.`,waitingForButton:`Press a button...`,readmeLoading:`Loading README...`,readmeLoadFailed:`Could not load the README.`,licenseLoading:`Loading license information...`,licenseLoadFailed:`Could not load license information.`},input:{actionLabels:{A:`A — Dash`,B:`B — Cancel / Menu`,C:`C — Confirm`,X:`X — Extra action`,Y:`Y — Extra action`,Z:`Z — Extra action`,L:`L — Previous page`,R:`R — Next page`},button:e=>`Button ${e}`,unassigned:`Unassigned`}},ja:{boot:{loadingManifest:`ゲーム情報を読み込んでいます...`,loadingFonts:`フォントを読み込んでいます...`,loadingRubyRuntime:`Rubyランタイムを読み込んでいます...`,initializingRubyVm:`Ruby VMを初期化しています...`,startingGame:`ゲームを開始しています...`},presenter:{resourceErrorContent:`ファイルの読み込みに失敗しました。
ネットワーク状況を確認して、リトライしてください。`,resourceErrorTitle:e=>`読み込みエラー: ${e}`,resourceLoading:`読み込み中...`,retry:`リトライする`,runtimeErrorTitle:`ランタイムエラー`},settings:{openSettings:`設定`,title:`プレイヤー設定`,close:`閉じる`,generalTab:`全般`,controlsTab:`ゲームパッド`,readmeTab:`README`,aboutTab:`バージョン情報`,settingsUiLanguage:`設定UIの言語`,localeAuto:`自動`,runtimeAboutHeading:`VX Ace Web Runtime について`,runtimeDescription:`このゲームはVX Ace Web Runtimeで動作しています。`,runtimeDisclaimer:`VX Ace Web Runtimeは個人開発の非公式プロダクトであり、RPGツクール公式が提供するものではありません。`,legalNoticesHeading:`権利表示`,legalNoticesLoading:`権利表示を読み込んでいます…`,legalNoticesLoadFailed:`権利表示を読み込めませんでした。`,ossLicensesHeading:`OSSライセンス`,midiLibraryLicense:`MIDI 再生ライブラリ`,midiSoundFontLicense:`サウンドフォント（FluidR3Mono_GM）`,connectedGamepad:`接続中のゲームパッド`,resetBindings:`標準設定に戻す`,noGamepad:`ゲームパッドを接続し、いずれかのボタンを押してください。`,standardGamepadHelp:`方向入力には標準のD-padと左スティックを使用します。`,rawGamepadHelp:`このパッドでは割り当てたボタンのみ利用できます。方向入力は未対応です。`,waitingForButton:`ボタンを押してください…`,readmeLoading:`READMEを読み込んでいます…`,readmeLoadFailed:`READMEを読み込めませんでした。`,licenseLoading:`ライセンス情報を読み込んでいます…`,licenseLoadFailed:`ライセンス情報を読み込めませんでした。`},input:{actionLabels:{A:`A — ダッシュ`,B:`B — キャンセル / メニュー`,C:`C — 決定`,X:`X — 拡張操作`,Y:`Y — 拡張操作`,Z:`Z — 拡張操作`,L:`L — 前のページ`,R:`R — 次のページ`},button:e=>`Button ${e}`,unassigned:`未設定`}}},hp=[`en`,`ja`],gp=`vxace-web:player-locale`,_p=class{_browserLanguages;_documentElement;_listeners=new Set;_storage;_locale;_preference;constructor(e={}){this._browserLanguages=e.browserLanguages??bp,this._documentElement=e.documentElement===void 0?document.documentElement:e.documentElement,this._storage=e.storage===void 0?xp():e.storage,this._preference=this._loadPreference(),this._locale=this._resolveLocale(this._preference),this._applyDocumentLanguage()}get locale(){return this._locale}get preference(){return this._preference}get copy(){return mp[this._locale]}setPreference(e){if(!yp(e))return;let t=this._preference,n=this._locale;this._preference=e,this._locale=this._resolveLocale(e),this._savePreference(),this._applyDocumentLanguage(),(t!==this._preference||n!==this._locale)&&this._listeners.forEach(e=>e())}subscribe(e){return this._listeners.add(e),()=>this._listeners.delete(e)}_resolveLocale(e){if(e!==`auto`)return e;for(let e of this._browserLanguages()){let t=e.toLowerCase().split(`-`)[0];if(vp(t))return t}return`en`}_loadPreference(){if(!this._storage)return`auto`;try{let e=this._storage.getItem(gp);return yp(e)?e:`auto`}catch{return`auto`}}_savePreference(){if(this._storage)try{this._storage.setItem(gp,this._preference)}catch{}}_applyDocumentLanguage(){this._documentElement&&(this._documentElement.lang=this._locale)}},vp=e=>typeof e==`string`&&hp.includes(e),yp=e=>e===`auto`||vp(e),bp=()=>[...navigator.languages?.length?navigator.languages:[navigator.language]].filter(Boolean),xp=()=>{try{return window.localStorage}catch{return null}},Sp={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`},Cp=([e,t,n])=>{let r=document.createElementNS(`http://www.w3.org/2000/svg`,e);return Object.keys(t).forEach(e=>{r.setAttribute(e,String(t[e]))}),n?.length&&n.forEach(e=>{let t=Cp(e);r.appendChild(t)}),r},wp=(e,t={})=>Cp([`svg`,{...Sp,...t},e]),Tp=[[`path`,{d:`M12 5v14`}],[`path`,{d:`m19 12-7 7-7-7`}]],Ep=[[`path`,{d:`m12 19-7-7 7-7`}],[`path`,{d:`M19 12H5`}]],Dp=[[`path`,{d:`M5 12h14`}],[`path`,{d:`m12 5 7 7-7 7`}]],Op=[[`path`,{d:`m5 12 7-7 7 7`}],[`path`,{d:`M12 19V5`}]],kp=[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`}],[`circle`,{cx:`12`,cy:`12`,r:`3`}]],Ap=[[`path`,{d:`M18 6 6 18`}],[`path`,{d:`m6 6 12 12`}]],jp={name:`@vxace-web/player-runtime`,version:`0.1.0`,private:!0,license:`UNLICENSED`,files:[`dist/**/*`],type:`module`,types:`./dist/index.d.mts`,exports:{".":{types:`./dist/index.d.mts`,import:`./dist/index.mjs`}},scripts:{dev:`vite --port 8080`,build:`run-s build:*`,"build:tsgo":`tsdown src/index.ts`,"build:vite":`vite build`,preview:`vite preview`,test:`run-s test:unit test:browser`,"test:unit":`vitest run`,"test:unit:watch":`vitest`,"test:browser":`playwright test`,"test:performance":`playwright test --config playwright.performance.config.ts`,"test:browser:headed":`playwright test --headed`,"test:browser:debug":`playwright test --debug`,lint:`run-s lint:*`,"lint:oxlint":`oxlint src --type-aware`,"lint:oxfmt":`oxfmt --check`,"lint:ts":`tsgo --noEmit`,format:`run-s format:*`,"format:oxfmt":`oxfmt -c ../../.oxfmtrc.json`,"format:oxlint":`oxlint --fix`},dependencies:{"@ruby/4.0-wasm-wasi":`2.9.3-2.9.4`,"@vxace-web/game-manifest":`workspace:*`,lucide:`^1.37.0`,"pixi.js":`8.20.1`,spessasynth_core:`4.3.22`,spessasynth_lib:`4.3.14`},engines:{node:`>=24.0.0`},packageManager:`pnpm@10.33.1`},Mp=[{key:`UP`,label:`↑`,className:`virtual-gamepad__dpad-button virtual-gamepad__dpad-button--up`,icon:Op},{key:`LEFT`,label:`←`,className:`virtual-gamepad__dpad-button virtual-gamepad__dpad-button--left`,icon:Ep},{key:`RIGHT`,label:`→`,className:`virtual-gamepad__dpad-button virtual-gamepad__dpad-button--right`,icon:Dp},{key:`DOWN`,label:`↓`,className:`virtual-gamepad__dpad-button virtual-gamepad__dpad-button--down`,icon:Tp}],Np={normal:[{key:`L`,label:`L`,className:`virtual-gamepad__shoulder virtual-gamepad__shoulder--left`},{key:`R`,label:`R`,className:`virtual-gamepad__shoulder virtual-gamepad__shoulder--right`},{key:`A`,label:`A`,className:`virtual-gamepad__face-button virtual-gamepad__face-button--a`},{key:`X`,label:`X`,className:`virtual-gamepad__face-button virtual-gamepad__face-button--x`},{key:`Y`,label:`Y`,className:`virtual-gamepad__face-button virtual-gamepad__face-button--y`},{key:`B`,label:`B`,className:`virtual-gamepad__face-button virtual-gamepad__face-button--b`},{key:`C`,label:`C`,className:`virtual-gamepad__face-button virtual-gamepad__face-button--c`}],"normal-swap":[{key:`L`,label:`L`,className:`virtual-gamepad__shoulder virtual-gamepad__shoulder--left`},{key:`R`,label:`R`,className:`virtual-gamepad__shoulder virtual-gamepad__shoulder--right`},{key:`A`,label:`A`,className:`virtual-gamepad__face-button virtual-gamepad__face-button--a`},{key:`X`,label:`X`,className:`virtual-gamepad__face-button virtual-gamepad__face-button--y`},{key:`Y`,label:`Y`,className:`virtual-gamepad__face-button virtual-gamepad__face-button--x`},{key:`B`,label:`B`,className:`virtual-gamepad__face-button virtual-gamepad__face-button--c`},{key:`C`,label:`C`,className:`virtual-gamepad__face-button virtual-gamepad__face-button--b`}],simple:[{key:`B`,label:`B`,className:`virtual-gamepad__face-button virtual-gamepad__face-button--simple-b`},{key:`C`,label:`C`,className:`virtual-gamepad__face-button virtual-gamepad__face-button--simple-c`}],none:[]},Pp={normal:`virtual-gamepad--normal`,"normal-swap":`virtual-gamepad--normal-swap`,simple:`virtual-gamepad--simple`,none:`virtual-gamepad--disabled`},Fp=class{_keyManager;_gameManifest;_virtualGamepadElement;_virtualPointerKeys;_virtualDpadPointerIds;constructor(e){let{keyManager:t,gameManifest:n}=e;this._keyManager=t,this._gameManifest=n,this._virtualPointerKeys=new Map,this._virtualDpadPointerIds=new Set;let r=n.metadata.input.virtualGamepad;this._virtualGamepadElement=document.createElement(`div`),this._virtualGamepadElement.className=[`virtual-gamepad`,Pp[r]].join(` `),this._virtualGamepadElement.hidden=!0;let i=document.createElement(`div`);i.className=`virtual-gamepad__dpad`,i.setAttribute(`aria-label`,`D-pad`),i.addEventListener(`pointerdown`,e=>this._pressVirtualDpad(e)),i.addEventListener(`pointermove`,e=>this._moveVirtualDpad(e)),i.addEventListener(`pointerup`,e=>this._releaseVirtualDpad(e)),i.addEventListener(`pointercancel`,e=>this._releaseVirtualDpad(e)),i.addEventListener(`lostpointercapture`,e=>this._releaseVirtualDpad(e));let a=document.createElement(`div`);a.className=`virtual-gamepad__shoulders`;let o=document.createElement(`div`);o.className=`virtual-gamepad__face-buttons`;for(let e of Mp){let t=document.createElement(`button`);t.type=`button`,t.className=e.className,t.appendChild(wp(e.icon,{"aria-hidden":`true`,class:`virtual-gamepad__dpad-icon`})),t.setAttribute(`aria-label`,`${e.label} button`),t.tabIndex=-1,t.setAttribute(`aria-hidden`,`true`),i.appendChild(t)}let s=r?Np[r]:[];for(let e of s){let t=document.createElement(`button`);t.type=`button`,t.className=e.className,t.textContent=e.label,t.setAttribute(`aria-label`,`${e.label} button`),t.addEventListener(`pointerdown`,t=>this._pressVirtualButton(t,e.key)),t.addEventListener(`pointerup`,e=>this._releaseVirtualButton(e)),t.addEventListener(`pointercancel`,e=>this._releaseVirtualButton(e)),t.addEventListener(`lostpointercapture`,e=>this._releaseVirtualButton(e)),Ip(e)?a.appendChild(t):o.appendChild(t)}this._virtualGamepadElement.appendChild(a),this._virtualGamepadElement.appendChild(i),this._virtualGamepadElement.appendChild(o),window.addEventListener(`pointerdown`,this._onWindowPointerDown,{passive:!0})}dispose(){window.removeEventListener(`pointerdown`,this._onWindowPointerDown);for(let e of this._virtualPointerKeys.values())this._keyManager.setVirtualKey(e,!1);this.hideVirtualGamepad(),this._virtualGamepadElement.remove()}_onWindowPointerDown=e=>{e.pointerType===`mouse`?this.hideVirtualGamepad():e.pointerType===`touch`&&this.showVirtualGamepad()};get element(){return this._virtualGamepadElement}showVirtualGamepad(){this._gameManifest.metadata.input.virtualGamepad!==`none`&&this._virtualGamepadElement.hidden&&(this._virtualGamepadElement.hidden=!1)}hideVirtualGamepad(){this._gameManifest.metadata.input.virtualGamepad!==`none`&&(this._virtualGamepadElement.hidden||(this._virtualGamepadElement.hidden=!0,this._virtualPointerKeys.clear(),this._virtualDpadPointerIds.clear()))}_pressVirtualButton(e,t){if(this._gameManifest.metadata.input.virtualGamepad===`none`)return;e.preventDefault();let n=e.currentTarget;if(n.hasPointerCapture&&!n.hasPointerCapture(e.pointerId))try{n.setPointerCapture(e.pointerId)}catch{}this.showVirtualGamepad(),this._virtualPointerKeys.set(e.pointerId,t),this._keyManager.setVirtualKey(t,!0)}_pressVirtualDpad(e){if(this._gameManifest.metadata.input.virtualGamepad===`none`)return;e.preventDefault();let t=e.currentTarget;if(t.hasPointerCapture&&!t.hasPointerCapture(e.pointerId))try{t.setPointerCapture(e.pointerId)}catch{}this.showVirtualGamepad(),this._virtualDpadPointerIds.add(e.pointerId),this._updateVirtualDpadDirection(e)}_moveVirtualDpad(e){this._virtualDpadPointerIds.has(e.pointerId)&&(e.preventDefault(),this._updateVirtualDpadDirection(e))}_releaseVirtualDpad(e){this._virtualDpadPointerIds.has(e.pointerId)&&(this._virtualDpadPointerIds.delete(e.pointerId),this._releaseVirtualButton(e))}_releaseVirtualButton(e){let t=this._virtualPointerKeys.get(e.pointerId);t&&(e.preventDefault(),this._virtualPointerKeys.delete(e.pointerId),this._keyManager.setVirtualKey(t,!1))}_updateVirtualDpadDirection(e){let t=this._resolveVirtualDpadDirection(e),n=this._virtualPointerKeys.get(e.pointerId);n!==t&&(n&&this._keyManager.setVirtualKey(n,!1),t?(this._virtualPointerKeys.set(e.pointerId,t),this._keyManager.setVirtualKey(t,!0)):this._virtualPointerKeys.delete(e.pointerId))}_resolveVirtualDpadDirection(e){let t=e.currentTarget.getBoundingClientRect(),n=t.left+t.width/2,r=t.top+t.height/2,i=e.clientX-n,a=e.clientY-r,o=Math.min(t.width,t.height)*.16;return Math.hypot(i,a)<o?null:Math.abs(i)>Math.abs(a)?i>0?`RIGHT`:`LEFT`:a>0?`DOWN`:`UP`}},Ip=e=>e.className.includes(`__shoulder`),Lp=1e3,Rp=jp.version,zp=class{_app;_assetProvider;_keyManager;_localeController;_virtualGamepad;_touchTrigger;_dialog;_title;_closeButton;_languageLabel;_languageSelect;_autoLocaleOption;_deviceLabel;_gamepadSelect;_gamepadStatus;_bindingsElement;_resetButton;_readmeContent;_runtimeAboutHeading;_runtimeDescription;_runtimeDisclaimer;_legalNoticesHeading;_legalNoticesContent;_ossLicensesHeading;_licenseContent;_midiLicenses=[];_settingsTabs;_panels;_tabs;_unsubscribeLocale;_menuHoldStartedAt=new Map;_menuHoldLatched=new Set;_selectedGamepad=null;_capturingKey=null;_captureArmed=!1;_legalNoticesLocale=null;_legalNoticesRequest=0;_licenseState=`idle`;_readmeState=`idle`;_animationFrameId=0;_dialogPressedButtons=new Set;constructor(e){this._app=e.app,this._assetProvider=e.assetProvider,this._keyManager=e.app.keyManager,this._localeController=e.localeController,this._settingsTabs=e.assetProvider.manifest.readme?[`general`,`controls`,`readme`,`about`]:[`general`,`controls`,`about`],this._virtualGamepad=new Fp({keyManager:this._keyManager,gameManifest:this._assetProvider.manifest}),e.appElement.appendChild(this._virtualGamepad.element),this._touchTrigger=document.createElement(`button`),this._touchTrigger.className=`player-settings-trigger`,this._touchTrigger.type=`button`,this._touchTrigger.appendChild(wp(kp,{"aria-hidden":`true`,class:`player-settings-trigger__icon`})),this._touchTrigger.addEventListener(`click`,()=>this.open()),e.appElement.appendChild(this._touchTrigger),this._dialog=document.createElement(`dialog`),this._dialog.className=`player-settings`,this._dialog.setAttribute(`aria-labelledby`,`player-settings-title`);let t=document.createElement(`div`);t.className=`player-settings__frame`,this._dialog.appendChild(t);let n=document.createElement(`header`);n.className=`player-settings__header`,t.appendChild(n),this._title=document.createElement(`h1`),this._title.id=`player-settings-title`,this._title.className=`player-settings__title`,n.appendChild(this._title),this._closeButton=document.createElement(`button`),this._closeButton.className=`player-settings__close`,this._closeButton.type=`button`,this._closeButton.appendChild(wp(Ap,{"aria-hidden":`true`,class:`player-settings__close-icon`})),this._closeButton.addEventListener(`click`,()=>this.close()),n.appendChild(this._closeButton);let r=document.createElement(`div`);r.className=`player-settings__tabs`,r.setAttribute(`role`,`tablist`),t.appendChild(r),this._tabs={};for(let e of this._settingsTabs)this._tabs[e]=this._createTabButton(r,e);let i=document.createElement(`div`);i.className=`player-settings__content`,t.appendChild(i);let a=document.createElement(`section`);a.id=`player-settings-panel-general`,a.className=`player-settings__panel`,a.setAttribute(`role`,`tabpanel`),i.appendChild(a),this._languageLabel=document.createElement(`label`),this._languageLabel.className=`player-settings__field-label`,this._languageLabel.htmlFor=`player-settings-language`,a.appendChild(this._languageLabel),this._languageSelect=document.createElement(`select`),this._languageSelect.id=`player-settings-language`,this._languageSelect.className=`player-settings__select`,this._languageSelect.addEventListener(`change`,()=>{this._localeController.setPreference(this._languageSelect.value)}),a.appendChild(this._languageSelect),this._autoLocaleOption=document.createElement(`option`),this._autoLocaleOption.value=`auto`,this._languageSelect.appendChild(this._autoLocaleOption);let o=document.createElement(`option`);o.value=`en`,o.textContent=`English`,this._languageSelect.appendChild(o);let s=document.createElement(`option`);s.value=`ja`,s.textContent=`日本語`,this._languageSelect.appendChild(s);let c=document.createElement(`section`);c.id=`player-settings-panel-controls`,c.className=`player-settings__panel`,c.setAttribute(`role`,`tabpanel`),i.appendChild(c),this._deviceLabel=document.createElement(`label`),this._deviceLabel.className=`player-settings__field-label`,this._deviceLabel.htmlFor=`player-settings-gamepad`,c.appendChild(this._deviceLabel),this._gamepadSelect=document.createElement(`select`),this._gamepadSelect.id=`player-settings-gamepad`,this._gamepadSelect.className=`player-settings__select`,this._gamepadSelect.addEventListener(`change`,()=>{this._selectedGamepad=this._findGamepad(Number(this._gamepadSelect.value)),this._cancelCapture(),this._renderBindings()}),c.appendChild(this._gamepadSelect),this._gamepadStatus=document.createElement(`p`),this._gamepadStatus.className=`player-settings__status`,c.appendChild(this._gamepadStatus),this._bindingsElement=document.createElement(`div`),this._bindingsElement.className=`player-settings__bindings`,c.appendChild(this._bindingsElement);let l=document.createElement(`div`);l.className=`player-settings__panel-footer`,c.appendChild(l),this._resetButton=document.createElement(`button`),this._resetButton.type=`button`,this._resetButton.addEventListener(`click`,()=>{this._selectedGamepad&&(this._keyManager.resetGamepadBindings(this._selectedGamepad),this._renderBindings())}),l.appendChild(this._resetButton);let u=document.createElement(`section`);u.id=`player-settings-panel-readme`,u.className=`player-settings__panel player-settings__readme`,u.setAttribute(`role`,`tabpanel`),u.hidden=!0,i.appendChild(u),this._readmeContent=document.createElement(`pre`),this._readmeContent.className=`player-settings__readme-content`,u.appendChild(this._readmeContent);let d=document.createElement(`section`);d.id=`player-settings-panel-about`,d.className=`player-settings__panel player-settings__about`,d.setAttribute(`role`,`tabpanel`),d.hidden=!0,i.appendChild(d);let f=document.createElement(`section`);f.className=`player-settings__about-section`,d.appendChild(f),this._runtimeAboutHeading=document.createElement(`h2`),this._runtimeAboutHeading.className=`player-settings__section-title`,f.appendChild(this._runtimeAboutHeading);let p=document.createElement(`p`);p.className=`player-settings__runtime-version`,p.textContent=`VX Ace Web Runtime v.${Rp}`,f.appendChild(p),this._runtimeDescription=document.createElement(`p`),f.appendChild(this._runtimeDescription),this._runtimeDisclaimer=document.createElement(`p`),f.appendChild(this._runtimeDisclaimer);let m=document.createElement(`section`);m.className=`player-settings__about-section`,d.appendChild(m),this._legalNoticesHeading=document.createElement(`h2`),this._legalNoticesHeading.className=`player-settings__section-title`,m.appendChild(this._legalNoticesHeading),this._legalNoticesContent=document.createElement(`pre`),this._legalNoticesContent.className=`player-settings__license-content player-settings__legal-notices-content`,m.appendChild(this._legalNoticesContent);let h=document.createElement(`section`);if(h.className=`player-settings__about-section`,d.appendChild(h),this._ossLicensesHeading=document.createElement(`h2`),this._ossLicensesHeading.className=`player-settings__section-title`,h.appendChild(this._ossLicensesHeading),this._licenseContent=document.createElement(`pre`),this._licenseContent.className=`player-settings__license-content player-settings__oss-license-content`,h.appendChild(this._licenseContent),ai())for(let e of[{title:`midiLibraryLicense`,path:`third-party-license.md`},{title:`midiSoundFontLicense`,path:`FluidR3Mono-LICENSE.txt`}]){let t=document.createElement(`section`);t.className=`player-settings__midi-license`;let n=document.createElement(`h3`);n.className=`player-settings__section-title`;let r=document.createElement(`pre`);r.className=`player-settings__license-content`,t.append(n,r),h.appendChild(t),this._midiLicenses.push({...e,heading:n,content:r,state:`idle`})}this._panels={general:a,controls:c,readme:u,about:d},this._applyCopy(),this._setActiveTab(`general`),this._unsubscribeLocale=this._localeController.subscribe(()=>this._applyCopy()),this._dialog.addEventListener(`cancel`,e=>{e.preventDefault(),this.close()}),this._dialog.addEventListener(`close`,()=>this._resumeGame()),e.appElement.appendChild(this._dialog),document.addEventListener(`keydown`,this._onKeyDown,!0),window.addEventListener(`gamepadconnected`,this._onGamepadConnectionChange),window.addEventListener(`gamepaddisconnected`,this._onGamepadConnectionChange),this._animationFrameId=requestAnimationFrame(this._pollGamepads)}open(){if(!this._dialog.open){this._refreshGamepads(),this._app.setHostSuspended(!0);try{this._dialog.showModal()}catch(e){throw this._app.setHostSuspended(!1),e}this._tabs.general?.focus()}}close(){this._dialog.open&&(this._cancelCapture(),this._dialog.close())}dispose(){cancelAnimationFrame(this._animationFrameId),document.removeEventListener(`keydown`,this._onKeyDown,!0),window.removeEventListener(`gamepadconnected`,this._onGamepadConnectionChange),window.removeEventListener(`gamepaddisconnected`,this._onGamepadConnectionChange),this._unsubscribeLocale(),this._dialog.open&&this._dialog.close(),this._virtualGamepad.dispose(),this._touchTrigger.remove(),this._dialog.remove()}_createTabButton(e,t){let n=document.createElement(`button`);return n.className=`player-settings__tab`,n.type=`button`,n.id=`player-settings-tab-${t}`,n.setAttribute(`role`,`tab`),n.setAttribute(`aria-controls`,`player-settings-panel-${t}`),n.addEventListener(`click`,()=>this._setActiveTab(t)),e.appendChild(n),n}_setActiveTab(e){for(let t of this._settingsTabs){let n=t===e,r=this._tabs[t];r.classList.toggle(`player-settings__tab--active`,n),r.setAttribute(`aria-selected`,String(n)),r.tabIndex=n?0:-1,this._panels[t].hidden=!n}if(e===`readme`&&this._loadReadme(),e===`about`){this._loadLegalNotices(),this._loadLicenses();for(let e of this._midiLicenses)this._loadMidiLicense(e)}}_refreshGamepads(){let e=this._selectedGamepad?.index,t=this._keyManager.getConnectedGamepads();this._gamepadSelect.replaceChildren();for(let e of t){let t=document.createElement(`option`);t.value=String(e.index),t.textContent=e.id||`Gamepad ${e.index+1}`,this._gamepadSelect.appendChild(t)}this._selectedGamepad=t.find(t=>t.index===e)??t.at(0)??null,this._selectedGamepad&&(this._gamepadSelect.value=String(this._selectedGamepad.index)),this._renderBindings()}_renderBindings(){let e=this._localeController.copy;this._bindingsElement.replaceChildren();let t=this._selectedGamepad;if(this._gamepadSelect.disabled=!t,!t){this._gamepadStatus.textContent=e.settings.noGamepad;return}this._gamepadStatus.textContent=t.mapping===`standard`?e.settings.standardGamepadHelp:e.settings.rawGamepadHelp;for(let n of Sf){let r=document.createElement(`div`);r.className=`player-settings__binding`;let i=document.createElement(`span`);i.className=`player-settings__binding-label`,i.textContent=e.input.actionLabels[n],r.appendChild(i);let a=document.createElement(`button`);a.type=`button`,a.dataset.bindingKey=n;let o=this._keyManager.getGamepadButtonBinding(t,n);a.textContent=this._capturingKey===n?e.settings.waitingForButton:o==null?e.input.unassigned:e.input.button(o),a.addEventListener(`click`,()=>this._beginCapture(n)),r.appendChild(a),this._bindingsElement.appendChild(r)}}_beginCapture(e){this._selectedGamepad&&(this._capturingKey=e,this._captureArmed=!1,this._renderBindings())}_cancelCapture(){this._capturingKey&&(this._capturingKey=null,this._captureArmed=!1,this._renderBindings())}async _loadLicenses(){if(!(this._licenseState===`loading`||this._licenseState===`loaded`)){this._licenseState=`loading`,this._licenseContent.textContent=this._localeController.copy.settings.licenseLoading;try{let e=await fetch(new URL(`third-party-license.md`,document.baseURI));if(!e.ok)throw Error(`HTTP ${e.status}`);this._licenseContent.textContent=await e.text(),this._licenseState=`loaded`}catch{this._licenseState=`failed`,this._licenseContent.textContent=this._localeController.copy.settings.licenseLoadFailed}}}async _loadMidiLicense(e){if(!(e.state===`loading`||e.state===`loaded`)){e.state=`loading`,e.content.textContent=this._localeController.copy.settings.licenseLoading;try{e.content.textContent=await Kr(new URL(`features/midi/${e.path}`,document.baseURI),void 0,{retryOnFailure:!1}),e.state=`loaded`}catch{e.state=`failed`,e.content.textContent=this._localeController.copy.settings.licenseLoadFailed}}}async _loadReadme(){if(this._readmeState===`loading`||this._readmeState===`loaded`)return;let e=this._assetProvider.manifest.readme;if(e){this._readmeState=`loading`,this._readmeContent.textContent=this._localeController.copy.settings.readmeLoading;try{let t=await this._assetProvider.loadBytes(e,{label:`${e.logicalPath}${e.extension?`.${e.extension}`:``}`,retryOnFailure:!1});this._readmeContent.textContent=new TextDecoder(e.encoding,{fatal:!0}).decode(t),this._readmeState=`loaded`}catch{this._readmeState=`failed`,this._readmeContent.textContent=this._localeController.copy.settings.readmeLoadFailed}}}async _loadLegalNotices(){let e=this._localeController.locale;if(this._legalNoticesLocale===e)return;let t=++this._legalNoticesRequest;this._legalNoticesContent.textContent=this._localeController.copy.settings.legalNoticesLoading;try{let n=await fetch(new URL(`RPG_MAKER_NOTICE.${e}.md`,document.baseURI));if(!n.ok)throw Error(`HTTP ${n.status}`);let r=await n.text();if(t!==this._legalNoticesRequest)return;this._legalNoticesContent.textContent=r,this._legalNoticesLocale=e}catch{if(t!==this._legalNoticesRequest)return;this._legalNoticesContent.textContent=this._localeController.copy.settings.legalNoticesLoadFailed}}_applyCopy(){let e=this._localeController.copy;this._touchTrigger.setAttribute(`aria-label`,e.settings.openSettings),this._title.textContent=e.settings.title,this._closeButton.setAttribute(`aria-label`,e.settings.close),this._languageLabel.textContent=e.settings.settingsUiLanguage,this._languageSelect.value=this._localeController.preference,this._autoLocaleOption.textContent=e.settings.localeAuto,this._tabs.general.textContent=e.settings.generalTab,this._tabs.controls.textContent=e.settings.controlsTab,this._tabs.readme&&(this._tabs.readme.textContent=e.settings.readmeTab),this._tabs.about.textContent=e.settings.aboutTab,this._runtimeAboutHeading.textContent=e.settings.runtimeAboutHeading,this._runtimeDescription.textContent=e.settings.runtimeDescription,this._runtimeDisclaimer.textContent=e.settings.runtimeDisclaimer,this._legalNoticesHeading.textContent=e.settings.legalNoticesHeading,this._ossLicensesHeading.textContent=e.settings.ossLicensesHeading;for(let t of this._midiLicenses)t.heading.textContent=e.settings[t.title],t.state===`idle`||t.state===`loading`?t.content.textContent=e.settings.licenseLoading:t.state===`failed`&&(t.content.textContent=e.settings.licenseLoadFailed);this._deviceLabel.textContent=e.settings.connectedGamepad,this._resetButton.textContent=e.settings.resetBindings,this._licenseState===`idle`||this._licenseState===`loading`?this._licenseContent.textContent=e.settings.licenseLoading:this._licenseState===`failed`&&(this._licenseContent.textContent=e.settings.licenseLoadFailed),this._readmeState===`idle`||this._readmeState===`loading`?this._readmeContent.textContent=e.settings.readmeLoading:this._readmeState===`failed`&&(this._readmeContent.textContent=e.settings.readmeLoadFailed),!this._panels.about.hidden&&this._legalNoticesLocale!==this._localeController.locale&&this._loadLegalNotices(),this._renderBindings()}_onKeyDown=e=>{if(e.code===`F1`){e.preventDefault(),e.stopImmediatePropagation(),this._dialog.open?this.close():this.open();return}this._dialog.open&&e.stopImmediatePropagation()};_onGamepadConnectionChange=()=>{this._dialog.open&&this._refreshGamepads()};_pollGamepads=e=>{let t=Bp();this._dialog.open?this._capturingKey?this._captureGamepadButton(t):this._handleDialogGamepad(t):this._detectMenuChord(t,e),this._animationFrameId=requestAnimationFrame(this._pollGamepads)};_detectMenuChord(e,t){for(let n of e){if(!n?.connected||n.mapping!==`standard`)continue;let e=`${n.index}:${n.id}`;if(!(n.buttons[8]?.pressed&&n.buttons[9]?.pressed)){this._menuHoldStartedAt.delete(e),this._menuHoldLatched.delete(e);continue}let r=this._menuHoldStartedAt.get(e);if(r==null)this._menuHoldStartedAt.set(e,t);else if(t-r>=Lp&&!this._menuHoldLatched.has(e)){this._menuHoldLatched.add(e),this.open();return}}}_captureGamepadButton(e){let t=this._selectedGamepad,n=this._capturingKey;if(!t||!n)return;let r=e.find(e=>e?.connected&&e.index===t.index);if(!r)return;let i=r.buttons.flatMap((e,t)=>e.pressed||e.value>=.5?[t]:[]);if(!this._captureArmed){this._captureArmed=i.length===0;return}i.length!==0&&(this._keyManager.setGamepadButtonBinding(t,n,i[0]),this._dialogPressedButtons=new Set(i),this._capturingKey=null,this._captureArmed=!1,this._renderBindings())}_handleDialogGamepad(e){let t=this._selectedGamepad,n=e.find(e=>e?.connected&&e.mapping===`standard`&&e.index===t?.index);if(!n||!t){this._dialogPressedButtons.clear();return}let r=new Set(n.buttons.flatMap((e,t)=>e.pressed||e.value>=.5?[t]:[])),i=[...r].filter(e=>!this._dialogPressedButtons.has(e));this._dialogPressedButtons=r;let a=this._keyManager.getGamepadButtonBinding(t,`B`);if(a!=null&&i.includes(a)){this.close();return}i.some(e=>e===12||e===14)&&this._moveDialogFocus(-1),i.some(e=>e===13||e===15)&&this._moveDialogFocus(1);let o=this._keyManager.getGamepadButtonBinding(t,`C`);if(o!=null&&i.includes(o)){let e=document.activeElement;e instanceof HTMLButtonElement&&e.click()}}_moveDialogFocus(e){let t=[...this._dialog.querySelectorAll(`button:not([disabled]), select:not([disabled]), a[href]`)].filter(e=>!e.closest(`[hidden]`));t.length!==0&&t[(t.indexOf(document.activeElement)+e+t.length)%t.length].focus()}_findGamepad(e){return this._keyManager.getConnectedGamepads().find(t=>t.index===e)??null}_resumeGame(){this._dialogPressedButtons.clear(),this._app.setHostSuspended(!1)}},Bp=()=>{try{return typeof navigator.getGamepads==`function`?navigator.getGamepads():[]}catch{return[]}};function Vp(e){return new Hp(e)}var Hp=class{_screenElement=null;_bootStatusElement;_bootStatusMessageElement;_runtimeErrorElement=null;_runtimeErrorTitleElement=null;_runtimeErrorContentElement=null;_resourceErrorElement=null;_resourceErrorTitleElement=null;_resourceErrorContentElement=null;_resourceErrorRetryButton=null;_resourceLoadingElement=null;_resourceLoadingLabelElement=null;_localeController;_unsubscribeLocale;_bootStatusPhase=null;_bootErrorMessage=null;_resourceErrorPresentation=null;constructor(e){this._localeController=e.localeController??new _p,this._unsubscribeLocale=this._localeController.subscribe(()=>this._applyCopy()),this._bootStatusElement=e.bootStatusElement??e.appElement.querySelector(`.boot-status`),this._bootStatusMessageElement=e.bootStatusMessageElement??this._bootStatusElement?.querySelector(`.boot-status__message`)??e.appElement.querySelector(`.boot-status__message`),this._applyCopy()}mount(e){this._screenElement!==e.screenElement&&(this.disposeScreenPresentation(),this._screenElement=e.screenElement,this._createRuntimeErrorElements(e.screenElement),this._createResourceLoadingElements(e.screenElement),this._createResourceErrorElements(e.screenElement))}dispose(){this.disposeScreenPresentation(),this._bootStatusElement=null,this._bootStatusMessageElement=null,this._unsubscribeLocale()}showBootStatus(e){this._bootStatusPhase=e.phase,this._bootErrorMessage=null,this._bootStatusMessageElement&&(this._bootStatusMessageElement.classList.remove(`boot-status__message--error`),this._bootStatusMessageElement.textContent=this._localeController.copy.boot[e.phase])}showBootError(e){this._bootErrorMessage=e,this._bootStatusMessageElement&&(this._bootStatusMessageElement.classList.add(`boot-status__message--error`),this._bootStatusMessageElement.textContent=e)}completeBoot(){this._bootStatusElement?.remove(),this._bootStatusElement=null,this._bootStatusMessageElement=null,this._bootStatusPhase=null,this._bootErrorMessage=null}showRuntimeError(e){!this._runtimeErrorElement||!this._runtimeErrorContentElement||(this.completeBoot(),this._runtimeErrorTitleElement&&(this._runtimeErrorTitleElement.textContent=this._localeController.copy.presenter.runtimeErrorTitle),this._runtimeErrorContentElement.textContent=e.message,this._runtimeErrorElement.hidden=!1)}showResourceLoadError(e){if(this._resourceErrorPresentation=e,!this._resourceErrorElement||!this._resourceErrorTitleElement||!this._resourceErrorContentElement||!this._resourceErrorRetryButton)return;this.completeBoot(),this.hideResourceLoading();let t=this._localeController.copy.presenter;this._resourceErrorTitleElement.textContent=t.resourceErrorTitle(e.label),this._resourceErrorContentElement.textContent=t.resourceErrorContent,this._resourceErrorRetryButton.textContent=t.retry,this._resourceErrorRetryButton.onclick=()=>e.retry(),this._resourceErrorElement.hidden=!1}hideResourceLoadError(){!this._resourceErrorElement||!this._resourceErrorTitleElement||!this._resourceErrorContentElement||!this._resourceErrorRetryButton||(this._resourceErrorElement.hidden=!0,this._resourceErrorPresentation=null,this._resourceErrorTitleElement.textContent=``,this._resourceErrorContentElement.textContent=``,this._resourceErrorRetryButton.onclick=null)}showResourceLoading(e){!this._resourceLoadingElement||!this._resourceLoadingLabelElement||this._resourceErrorElement&&!this._resourceErrorElement.hidden||(this.completeBoot(),this._resourceLoadingLabelElement.textContent=this._localeController.copy.presenter.resourceLoading,this._resourceLoadingElement.hidden=!1)}hideResourceLoading(){!this._resourceLoadingElement||!this._resourceLoadingLabelElement||(this._resourceLoadingElement.hidden=!0,this._resourceLoadingLabelElement.textContent=``)}snapshot(){return{runtimeErrorOpen:this._runtimeErrorElement?!this._runtimeErrorElement.hidden:!1,resourceErrorOpen:this._resourceErrorElement?!this._resourceErrorElement.hidden:!1,resourceLoadingOpen:this._resourceLoadingElement?!this._resourceLoadingElement.hidden:!1}}disposeScreenPresentation(){this._runtimeErrorElement?.remove(),this._resourceLoadingElement?.remove(),this._resourceErrorRetryButton&&(this._resourceErrorRetryButton.onclick=null),this._resourceErrorElement?.remove(),this._screenElement=null,this._runtimeErrorElement=null,this._runtimeErrorTitleElement=null,this._runtimeErrorContentElement=null,this._resourceErrorElement=null,this._resourceErrorTitleElement=null,this._resourceErrorContentElement=null,this._resourceErrorRetryButton=null,this._resourceLoadingElement=null,this._resourceLoadingLabelElement=null}_createRuntimeErrorElements(e){this._runtimeErrorElement=document.createElement(`div`),this._runtimeErrorElement.className=`runtime-error`,this._runtimeErrorElement.hidden=!0,this._runtimeErrorTitleElement=document.createElement(`div`),this._runtimeErrorTitleElement.className=`runtime-error__title`,this._runtimeErrorTitleElement.textContent=this._localeController.copy.presenter.runtimeErrorTitle,this._runtimeErrorElement.appendChild(this._runtimeErrorTitleElement),this._runtimeErrorContentElement=document.createElement(`pre`),this._runtimeErrorContentElement.className=`runtime-error__content`,this._runtimeErrorElement.appendChild(this._runtimeErrorContentElement),e.appendChild(this._runtimeErrorElement)}_createResourceLoadingElements(e){this._resourceLoadingElement=document.createElement(`div`),this._resourceLoadingElement.className=`resource-loading`,this._resourceLoadingElement.hidden=!0;let t=document.createElement(`div`);t.className=`resource-loading__inner`,this._resourceLoadingElement.appendChild(t);let n=document.createElement(`div`);n.className=`resource-loading__spinner`,t.appendChild(n),this._resourceLoadingLabelElement=document.createElement(`div`),this._resourceLoadingLabelElement.className=`resource-loading__label`,t.appendChild(this._resourceLoadingLabelElement),e.appendChild(this._resourceLoadingElement)}_createResourceErrorElements(e){this._resourceErrorElement=document.createElement(`div`),this._resourceErrorElement.className=`resource-error`,this._resourceErrorElement.hidden=!0;let t=document.createElement(`div`);t.className=`resource-error__inner`,this._resourceErrorElement.appendChild(t),this._resourceErrorTitleElement=document.createElement(`div`),this._resourceErrorTitleElement.className=`resource-error__title`,t.appendChild(this._resourceErrorTitleElement),this._resourceErrorContentElement=document.createElement(`div`),this._resourceErrorContentElement.className=`resource-error__content`,t.appendChild(this._resourceErrorContentElement),this._resourceErrorRetryButton=document.createElement(`button`),this._resourceErrorRetryButton.className=`resource-error__retry`,this._resourceErrorRetryButton.type=`button`,this._resourceErrorRetryButton.textContent=this._localeController.copy.presenter.retry,t.appendChild(this._resourceErrorRetryButton),e.appendChild(this._resourceErrorElement)}_applyCopy(){let e=this._localeController.copy;this._runtimeErrorTitleElement&&(this._runtimeErrorTitleElement.textContent=e.presenter.runtimeErrorTitle),this._resourceLoadingLabelElement&&(this._resourceLoadingLabelElement.textContent=e.presenter.resourceLoading),this._bootStatusMessageElement&&(this._bootErrorMessage==null?this._bootStatusPhase&&(this._bootStatusMessageElement.textContent=e.boot[this._bootStatusPhase]):this._bootStatusMessageElement.textContent=this._bootErrorMessage),this._resourceErrorPresentation&&this._resourceErrorTitleElement&&this._resourceErrorContentElement&&this._resourceErrorRetryButton&&(this._resourceErrorTitleElement.textContent=e.presenter.resourceErrorTitle(this._resourceErrorPresentation.label),this._resourceErrorContentElement.textContent=e.presenter.resourceErrorContent,this._resourceErrorRetryButton.textContent=e.presenter.retry)}};function Up(e){let t=[],n=new Uint8Array(e);for(let e=0;e<n.byteLength;e+=1)t.push(String.fromCharCode(n[e]));return btoa(t.join(``))}async function Wp(e,t){let n=URL.createObjectURL(e);try{let e=new Image;return e.src=n,await Gp(e),e}catch(e){let n=e instanceof Error?e.message:String(e);throw Error(`failed to decode image: ${t}: ${n}`)}finally{URL.revokeObjectURL(n)}}function Gp(e){return typeof e.decode==`function`?e.decode():new Promise((t,n)=>{e.onload=()=>t(),e.onerror=e=>n(e)})}var Kp=class{_manifest;_packCache=new Map;constructor(e){this._manifest=e}get manifest(){return this._manifest}resolveAsset(e,t){return this._manifest.resolveAsset(e,t)}resolveResource(e){return this._manifest.resolveResource(e)}resourceExists(e){return this.resolveResource(e)!==null}createCacheKey(e){return this._createDataCacheKey(e.data)}createAudioSource(e,t={}){let n=e.data;return{key:this.createCacheKey(e),extension:e.extension,label:t.label??this._formatSourceLabel(e),loadBytes:()=>this.loadBytes(e,t),...n.kind===`file`?{loadChunks:e=>this._loadFileChunks(n.path,t,e)}:{}}}async loadBytes(e,t={}){let n=e.data;switch(n.kind){case`file`:return qr(this._toPublicUrl(n.path),void 0,{kind:t.kind??`data`,label:t.label??this._formatSourceLabel(e),retryOnFailure:t.retryOnFailure});case`pack`:return(await this._loadPack(n.packId,t)).slice(n.offset,n.offset+n.length)}}async loadBlob(e,t={}){let n=e.data;switch(n.kind){case`file`:return Jr(this._toPublicUrl(n.path),void 0,{kind:t.kind??`data`,label:t.label??this._formatSourceLabel(e),retryOnFailure:t.retryOnFailure});case`pack`:{let r=await this.loadBytes(e,t);return new Blob([r],{type:n.contentType??``})}}}async loadBase64(e,t={}){return Up(await this.loadBytes(e,t))}async loadImage(e,t={}){return Wp(await this.loadBlob(e,{...t,kind:t.kind??`image`}),t.label??this._formatSourceLabel(e))}_toPublicUrl(e){return Wn(this._manifest.gameDir,e)}async _loadFileChunks(e,t,n){let r=await Yr(this._toPublicUrl(e),void 0,{kind:t.kind??`data`,label:t.label??e,retryOnFailure:t.retryOnFailure}),i=r.body?.getReader();if(!i){n(new Uint8Array(await r.arrayBuffer()));return}for(;;){let e=await i.read();if(e.done)return;e.value.byteLength>0&&n(e.value)}}_createDataCacheKey(e){switch(e.kind){case`file`:return`file:${this._toPublicUrl(e.path)}`;case`pack`:return`pack:${e.packId}:${e.offset}:${e.length}:${e.sha256??``}`}}_loadPack(e,t){let n=`${e}:${t.retryOnFailure===!1?`no-retry`:`retry`}`,r=this._packCache.get(n);if(r)return r;let i=this._manifest.getPack(e);if(!i)throw Error(`pack not found in manifest: ${e}`);let a=qr(this._toPublicUrl(i.path),void 0,{kind:`data`,label:i.path,retryOnFailure:t.retryOnFailure});return this._packCache.set(n,a),a.catch(()=>this._packCache.delete(n)),a}_formatSourceLabel(e){return`logicalPath`in e?e.extension?`${e.logicalPath}.${e.extension}`:e.logicalPath:e.families.find(e=>e.trim())??this.createCacheKey(e)}},qp=async e=>{let t=Qt(e),n=encodeURI(`${t}/manifest.json`),r=await fetch(n);if(r.ok){let e=await r.json();return Zn.fromJson(t,e)}let i=r.statusText?` ${r.statusText}`:``;throw Error(`manifest fetch failed for ${n}: HTTP ${r.status}${i}`)},Jp=async e=>{let t=new ar;if(typeof FontFace>`u`||!(`fonts`in document))return t;let n=new Map,r=new Set,{manifest:i}=e;for(let t of i.fonts)for(let i of t.families){let a=i.trim();if(!a)continue;let o=`${a}|${e.createCacheKey(t)}|${t.style}|${t.weight}`;if(r.has(o))continue;r.add(o);let s=e.createCacheKey(t),c=n.get(s)??[];c.push({font:t,family:a}),n.set(s,c)}return await Promise.all([...n.entries()].map(([n,r])=>Yp(e,n,r,t))),t},Yp=async(e,t,n,r)=>{let i=n[0]?.font;if(!i)return;let a=null;try{let o=await e.loadBytes(i,{kind:`data`,label:n[0].family}),s=sr(o);s&&new Set(n.map(({font:e})=>e)).forEach(e=>r.register(e,s)),a=URL.createObjectURL(new Blob([o],{type:Zp(i.extension)})),await Promise.all(n.map(async e=>{try{await Xp(e,a)}catch(n){console.warn(`font face preload failed for ${e.family} (${t})`,n)}}))}catch(e){let r=n.map(({family:e})=>e).join(`, `);console.warn(`font preload failed for ${r} (${t})`,e)}finally{a&&URL.revokeObjectURL(a)}},Xp=async({font:e,family:t},n)=>{let r=await new FontFace(t,`url(${JSON.stringify(n)})`,{style:e.style,weight:e.weight}).load();document.fonts.add(r)},Zp=e=>{switch(e.toLowerCase()){case`otf`:return`font/otf`;case`ttc`:return`font/collection`;case`ttf`:return`font/ttf`;case`woff`:return`font/woff`;case`woff2`:return`font/woff2`;default:return`application/octet-stream`}},Qp=[`# 内部的に必要な処理

require 'js'

module RPGVXAceWeb
  # Runtime internal namespace. This is intentionally not a public compatibility API.
  module Internal
    def self.game_dir
      raise 'game dir not set' unless @game_dir
      @game_dir
    end

    def self.game_dir=(value)
      raise 'invalid game dir' unless value.match(/\\A[A-Za-z0-9\\-_]+\\z/)

      @game_dir = value
    end

    def self.game_id
      raise 'game id not set' unless @game_id
      @game_id
    end

    def self.game_id=(value)
      @game_id = value
    end
  end
end
`,`require 'js'
begin
  require 'base64'
rescue LoadError
  module Base64
    TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    DECODE_TABLE = TABLE.chars.each_with_index.to_h

    class << self
      def encode64(value)
        strict_encode64(value).scan(/.{1,60}/).join("\\n") + "\\n"
      end

      def decode64(value)
        clean = value.to_s.gsub(/[^A-Za-z0-9+\\/=]/, '')
        bytes = []
        clean.scan(/.{1,4}/).each do |chunk|
          chars = chunk.ljust(4, '=').chars
          nums = chars.map { |char| char == '=' ? 0 : DECODE_TABLE.fetch(char) }
          triple = (nums[0] << 18) | (nums[1] << 12) | (nums[2] << 6) | nums[3]
          bytes << ((triple >> 16) & 0xff)
          bytes << ((triple >> 8) & 0xff) unless chars[2] == '='
          bytes << (triple & 0xff) unless chars[3] == '='
        end
        bytes.pack('C*')
      end

      def strict_encode64(value)
        bytes = value.to_s.bytes
        output = +''
        bytes.each_slice(3) do |slice|
          b0 = slice[0] || 0
          b1 = slice[1] || 0
          b2 = slice[2] || 0
          triple = (b0 << 16) | (b1 << 8) | b2
          output << TABLE[(triple >> 18) & 0x3f]
          output << TABLE[(triple >> 12) & 0x3f]
          output << (slice.length > 1 ? TABLE[(triple >> 6) & 0x3f] : '=')
          output << (slice.length > 2 ? TABLE[triple & 0x3f] : '=')
        end
        output
      end
    end
  end
end

`,`require 'js'

module RPGVXAceWeb
  module Internal
    class IniFile
      MISSING_BINARY_BASE64 = '__RPGVXACE_WEB_MISSING_BINARY_BASE64__'

      def initialize(raw)
        @raw = raw
        @sections = {}
        @section_order = []
        parse_text
      end

      def read(section, key)
        entry = section_entry(section, create: false)
        return nil unless entry

        value = entry[:entries][normalize_name(key)]
        value && value[:value]
      end

      def write(section, key, value)
        return false if section.nil?

        if key.nil?
          delete_section(section)
          return true
        end

        entry = section_entry(section, create: true)
        normalized_key = normalize_name(key)
        if value.nil?
          entry[:key_order].delete(normalized_key)
          entry[:entries].delete(normalized_key)
          return true
        end

        unless entry[:entries].key?(normalized_key)
          entry[:key_order] << normalized_key
        end
        entry[:entries][normalized_key] = {
          name: key.to_s,
          value: value.to_s
        }
        true
      end

      def save(filename)
        normalized_filename = self.class.normalize_filename(filename)
        return false unless normalized_filename

        JS.global[:rubyBridge][:utils].saveBinaryBase64(
          RPGVXAceWeb::Internal.game_id,
          normalized_filename,
          Base64.strict_encode64(to_s)
        ).await
        self.class.cache(normalized_filename, self)
        true
      end

      def to_s
        lines = []
        @section_order.each do |normalized_section|
          section = @sections[normalized_section]
          next unless section

          lines << "[#{section[:name]}]" unless section[:name].empty?
          section[:key_order].each do |normalized_key|
            entry = section[:entries][normalized_key]
            lines << "#{entry[:name]}=#{entry[:value]}" if entry
          end
        end
        lines.join("\\n") + (lines.empty? ? '' : "\\n")
      end

      private

      def parse_text
        current_section = section_entry('', create: true)

        @raw.to_s.split(/\\r?\\n/).each do |line|
          stripped = line.strip
          next if stripped.empty? || stripped.start_with?(';')

          if stripped.match?(/\\A\\[.*\\]\\z/)
            current_section = section_entry(stripped[1...-1].strip, create: true)
            next
          end

          key, value = line.split('=', 2)
          next if value.nil?

          normalized_key = normalize_name(key)
          unless current_section[:entries].key?(normalized_key)
            current_section[:key_order] << normalized_key
          end
          current_section[:entries][normalized_key] = {
            name: key.strip,
            value: value.strip
          }
        end
      end

      def section_entry(section, create:)
        normalized_section = normalize_name(section)
        entry = @sections[normalized_section]
        return entry if entry || !create

        @section_order << normalized_section
        @sections[normalized_section] = {
          name: section.to_s,
          entries: {},
          key_order: []
        }
      end

      def delete_section(section)
        normalized_section = normalize_name(section)
        @section_order.delete(normalized_section)
        @sections.delete(normalized_section)
      end

      def normalize_name(value)
        value.to_s.strip.downcase
      end

      class << self
        def load(filename = 'Game.ini')
          normalized_filename = normalize_filename(filename)
          return IniFile.new('') unless normalized_filename

          cached = cached(normalized_filename)
          return cached if cached

          ini = IniFile.new(load_text(normalized_filename).to_s)
          cache(normalized_filename, ini)
          ini
        end

        def normalize_filename(filename)
          normalized = filename.to_s.gsub('\\\\', '/').sub(%r{\\A\\./}, '').sub(%r{\\A/+}, '')
          game_dir_prefix = "#{RPGVXAceWeb::Internal.game_dir}/"
          normalized = normalized[game_dir_prefix.length..] if normalized.downcase.start_with?(game_dir_prefix.downcase)
          return nil if normalized.empty?
          return nil if normalized.match?(%r{\\A[A-Za-z]:/})
          return nil if normalized.split('/').include?('..')

          normalized
        end

        def cache(filename, ini)
          ini_cache[cache_key(filename)] = ini
        end

        private

        def cached(filename)
          ini_cache[cache_key(filename)]
        end

        def load_text(filename)
          base64 = JS.global[:rubyBridge][:utils].loadVirtualBinaryBase64(RPGVXAceWeb::Internal.game_id, filename).await
          return Base64.decode64(base64.to_s) unless base64.to_s == MISSING_BINARY_BASE64

          JS.global[:rubyBridge][:utils].fetchText("#{RPGVXAceWeb::Internal.game_dir}/#{filename}").await.to_s
        rescue StandardError
          ''
        end

        def ini_cache
          @ini_cache ||= {}
        end

        def cache_key(filename)
          filename.to_s.downcase
        end
      end
    end
  end
end
`,`require 'js'
require 'stringio'
require 'time'

module RPGVXAceWeb
  module Internal
    module SaveFileStorage
      MISSING_BINARY_BASE64 = '__RPGVXACE_WEB_MISSING_BINARY_BASE64__'

      class SaveFileIO < StringIO
        def initialize(filename, mode, initial_value = ''.b)
          super(initial_value, mode)
          @filename = filename
          @closed_to_storage = false
        end

        def close
          return if @closed_to_storage

          @closed_to_storage = true
          JS.global[:rubyBridge][:utils].saveBinaryBase64(
            RPGVXAceWeb::Internal.game_id,
            @filename,
            Base64.strict_encode64(string)
          ).await
          super
        end
      end

      class << self
        def virtual_filename(path)
          filename = path.to_s.gsub('\\\\', '/')
          return nil if filename.match?(%r{\\A(?:[A-Za-z]:)?/})

          filename = filename.sub(%r{\\A\\./}, '')
          return nil if filename.empty?
          return nil if filename.split('/').include?('..')

          filename
        end

        def open(filename, mode)
          normalized_mode = normalize_mode(mode)
          if normalized_mode.include?('r') && !writable_mode?(normalized_mode)
            return StringIO.new(load_binary(filename), normalized_mode)
          end

          if normalized_mode.include?('r')
            return SaveFileIO.new(filename, normalized_mode, load_binary(filename, saved_only: true))
          end

          if normalized_mode.include?('w')
            return SaveFileIO.new(filename, normalized_mode)
          end

          if normalized_mode.include?('a')
            initial_value =
              begin
                load_binary(filename, saved_only: true)
              rescue StandardError
                ''.b
              end
            io = SaveFileIO.new(filename, normalized_mode, initial_value)
            io.seek(0, IO::SEEK_END)
            return io
          end

          raise ArgumentError, "unsupported virtual file mode: #{mode}"
        end

        def delete(filename)
          JS.global[:rubyBridge][:utils].deleteSavedData(RPGVXAceWeb::Internal.game_id, filename).await
          1
        end

        def mtime(filename)
          info = JS.global[:rubyBridge][:utils].getSavedDataInfo(RPGVXAceWeb::Internal.game_id, filename).await
          raise Errno::ENOENT, filename unless info

          Time.iso8601(info[:updatedAt].to_s)
        end

        def exist?(filename)
          JS.global[:rubyBridge][:utils].virtualFileExists(RPGVXAceWeb::Internal.game_id, filename).await.to_s == 'true'
        end

        def glob(pattern)
          normalized_pattern = virtual_filename(pattern)
          return [] unless normalized_pattern

          JS.global[:rubyBridge][:utils]
            .listSavedData(RPGVXAceWeb::Internal.game_id)
            .await
            .to_a
            .map { |info| info[:filename].to_s }
            .select { |filename| File.fnmatch?(normalized_pattern, filename) }
        end

        private

        def normalize_mode(mode)
          normalized_mode = mode.to_s.empty? ? 'r' : mode.to_s
          return normalized_mode if normalized_mode.include?('b')

          "#{normalized_mode}b"
        end

        def writable_mode?(mode)
          mode.include?('w') || mode.include?('a') || mode.include?('+')
        end

        def load_binary(filename, saved_only: false)
          base64 =
            if saved_only
              JS.global[:rubyBridge][:utils].loadSavedBinaryBase64ForRuby(RPGVXAceWeb::Internal.game_id, filename).await
            else
              JS.global[:rubyBridge][:utils].loadVirtualBinaryBase64(RPGVXAceWeb::Internal.game_id, filename).await
            end
          raise Errno::ENOENT, filename if base64.to_s == MISSING_BINARY_BASE64

          Base64.decode64(base64.to_s)
        end
      end
    end
  end
end

`,`require 'js'

module RPGVXAceWeb
  module Internal
    module RGSSObjectLifecycle
      module_function

      def register_finalizer(owner, type, id)
        ObjectSpace.define_finalizer(owner, finalizer(type.to_s, id.to_i))
      end

      def collect
        GC.start
      rescue StandardError
        nil
      end

      def finalizer(type, id)
        proc do
          begin
            JS.global[:rubyBridge][:app].disposeObject(type, id)
          rescue StandardError
            nil
          end
        end
      end
    end
  end
end
`].join(`
`),$p=[`begin
  require 'js'
rescue LoadError
  # Native smoke scripts provide no JS bridge and only need class definitions.
end

module Audio
  class << self
    def setup_midi
      app&.setupMidi
      nil
    end

    def bgm_play(filename, volume = 100, pitch = 100, *pos)
      if pos.empty?
        app&.playAudio('bgm', filename.to_s, volume.to_i, pitch.to_i)
      else
        app&.playAudio('bgm', filename.to_s, volume.to_i, pitch.to_i, pos.first.to_f)
      end
    end

    def bgm_stop
      app&.stopAudio('bgm')
    end

    def bgm_fade(time)
      app&.fadeAudio('bgm', time.to_i)
    end

    def bgm_pos
      app&.audioPos('bgm').to_f
    end

    def bgs_play(filename, volume = 100, pitch = 100, *pos)
      if pos.empty?
        app&.playAudio('bgs', filename.to_s, volume.to_i, pitch.to_i)
      else
        app&.playAudio('bgs', filename.to_s, volume.to_i, pitch.to_i, pos.first.to_f)
      end
    end

    def bgs_stop
      app&.stopAudio('bgs')
    end

    def bgs_fade(time)
      app&.fadeAudio('bgs', time.to_i)
    end

    def bgs_pos
      app&.audioPos('bgs').to_f
    end

    def me_play(filename, volume = 100, pitch = 100)
      app&.playAudio('me', filename.to_s, volume.to_i, pitch.to_i, 0)
    end

    def me_stop
      app&.stopAudio('me')
    end

    def me_fade(time)
      app&.fadeAudio('me', time.to_i)
    end

    def se_play(filename, volume = 100, pitch = 100)
      app&.playAudio('se', filename.to_s, volume.to_i, pitch.to_i, 0)
    end

    def se_stop
      app&.stopAudio('se')
    end

    private

    def app
      return nil unless defined?(JS)

      JS.global[:rubyBridge][:app]
    end
  end
end
`,`require 'js'

class Bitmap
  attr_reader :__bitmap_id
  attr_accessor :font

  def initialize(*args)
    @__bitmap_id =
      if args.size == 1
        JS.global[:rubyBridge][:app].loadBitmapFromImage("#{RPGVXAceWeb::Internal.game_dir}/#{args[0]}").await.to_i
      else
        width = args[0].to_i
        height = args[1].to_i
        raise RGSSError, 'failed to create bitmap' if width <= 0 || height <= 0

        JS.global[:rubyBridge][:app].createBitmapFromSize(width, height).to_i
      end

    @font = Font.new
    @disposed = false
    RPGVXAceWeb::Internal::RGSSObjectLifecycle.register_finalizer(self, 'bitmap', @__bitmap_id)
  end

  def initialize_copy(source)
    super
    @__bitmap_id = JS.global[:rubyBridge][:app].cloneBitmap(source.__bitmap_id).to_i
    @font = source.font.clone
    @disposed = false
    RPGVXAceWeb::Internal::RGSSObjectLifecycle.register_finalizer(self, 'bitmap', @__bitmap_id)
  end

  def dispose
    return if @disposed

    DL.__release_bitmap(self) if defined?(DL)
    JS.global[:rubyBridge][:app].disposeObject('bitmap', @__bitmap_id)
    @disposed = true
  end

  def disposed?
    @disposed
  end

  def width
    read_property('width').to_i
  end

  def height
    read_property('height').to_i
  end

  def draw_text(*args)
    x, y, width, height, str, align =
      if args.size > 3
        [args[0], args[1], args[2], args[3], args[4].to_s, args[5] || 0]
      else
        [args[0].x, args[0].y, args[0].width, args[0].height, args[1].to_s, args[2] || 0]
      end

    get_object.drawText(
      self.font.__to_css_font,
      self.font.size.to_i,
      self.font.__to_css_color,
      self.font.__to_css_out_color,
      self.font.__to_css_shadow_color,
      !!self.font.outline,
      !!self.font.shadow,
      x,
      y,
      width,
      height,
      str,
      align
    )
  end

  def rect
    Rect.new(0, 0, width, height)
  end

  def clear
    get_object.clear
  end

  def clear_rect(*args)
    x, y, width, height = __extract_rect_args(args)
    get_object.clearRect(x, y, width, height)
  end

  def fill_rect(*args)
    color = args.pop
    x, y, width, height = __extract_rect_args(args)
    get_object.fillRect(x, y, width, height, color.__to_css_color)
  end

  def gradient_fill_rect(*args)
    if args.size == 3 || args.size == 4
      x, y, width, height = __extract_rect_args([args[0]])
      color1 = args[1]
      color2 = args[2]
      vertical = args[3] || false
    else
      x, y, width, height = __extract_rect_args(args.first(4))
      color1 = args[4]
      color2 = args[5]
      vertical = args[6] || false
    end

    get_object.gradientFillRect(
      x,
      y,
      width,
      height,
      color1.__to_css_color,
      color2.__to_css_color,
      !!vertical
    )
  end

  def blt(x, y, src_bitmap, src_rect, opacity = 255)
    return unless src_bitmap

    get_object.blt(
      src_bitmap.__send__(:get_object),
      x.to_i,
      y.to_i,
      src_rect.x.to_i,
      src_rect.y.to_i,
      src_rect.width.to_i,
      src_rect.height.to_i,
      __clamp_opacity(opacity)
    )
  end

  def stretch_blt(dest_rect, src_bitmap, src_rect, opacity = 255)
    return unless src_bitmap

    get_object.stretchBlt(
      src_bitmap.__send__(:get_object),
      dest_rect.x.to_i,
      dest_rect.y.to_i,
      dest_rect.width.to_i,
      dest_rect.height.to_i,
      src_rect.x.to_i,
      src_rect.y.to_i,
      src_rect.width.to_i,
      src_rect.height.to_i,
      __clamp_opacity(opacity)
    )
  end

  def blur
    get_object.blur
    self
  end

  def radial_blur(angle, division)
    get_object.radialBlur(angle.to_i, division.to_i)
    self
  end

  def hue_change(hue)
    get_object.hueChange(hue.to_i)
    self
  end

  def text_size(str)
    text_width = get_object.measureText(self.font.__to_css_font, str.to_s).to_i
    Rect.new(0, 0, text_width, self.font.size.to_i)
  end

  def get_pixel(x, y)
    data = get_object.getPixel(x.to_i, y.to_i)
    Color.new(data[:red].to_i, data[:green].to_i, data[:blue].to_i, data[:alpha].to_i)
  end

  def set_pixel(x, y, color)
    get_object.setPixel(
      x.to_i,
      y.to_i,
      color.red.to_i,
      color.green.to_i,
      color.blue.to_i,
      color.alpha.to_i
    )
  end

  def __rgba_pixel_data
    Base64.decode64(get_object.getRgbaPixelsBase64.to_s)
  end

  def __rgba_pixel_data=(data)
    get_object.putRgbaPixelsBase64(Base64.strict_encode64(data.to_s))
  end

  private

  def get_object
    JS.global[:rubyBridge][:app].getObject('bitmap', @__bitmap_id)
  end

  def read_property(prop)
    JS.global[:rubyBridge][:app].getProperty('bitmap', @__bitmap_id, prop)
  end

  def __extract_rect_args(args)
    if args.size == 1
      [args[0].x.to_i, args[0].y.to_i, args[0].width.to_i, args[0].height.to_i]
    else
      [args[0].to_i, args[1].to_i, args[2].to_i, args[3].to_i]
    end
  end

  def __clamp_opacity(value)
    [[value.to_i, 0].max, 255].min
  end
end
`,`class Color
  attr_writer :__on_change

  def initialize(*args)
    if args.empty?
      @red = 0
      @green = 0
      @blue = 0
      @alpha = 0
    else
      self.red = args[0]
      self.green = args[1]
      self.blue = args[2]
      self.alpha = args[3] || 255
    end
  end

  [:red, :green, :blue, :alpha].each do |c|
    define_method(c) do
      instance_variable_get("@#{c}")
    end

    define_method("#{c}=") do |value|
      value = [[0, value].max, 255].min
      unless instance_variable_get("@#{c}") == value
        instance_variable_set("@#{c}", value)
        __notify_change
      end
    end
  end

  def set(*args)
    if args.size == 1
      self.red = args[0].red
      self.green = args[0].green
      self.blue = args[0].blue
      self.alpha = args[0].alpha
    else
      self.red = args[0]
      self.green = args[1]
      self.blue = args[2]
      self.alpha = args[3] || 255
    end
  end

  class << self
    def _load(obj)
      Color.new(*obj.unpack('E4'))
    end
  end

  def _dump(_level)
    [@red, @green, @blue, @alpha].pack('E4')
  end

  def __to_css_color
    "rgba(#{red}, #{green}, #{blue}, #{alpha / 255.0})"
  end

  private

  def __notify_change
    @__on_change&.call(self)
  end
end
`,`class RGSSError < StandardError
end

class RGSSReset < Exception
end
`,`require 'json'

class Font
  CSS_FONT_SIZE_RATIO = 0.75

  class << self
    def exist?(name)
      JS.global[:rubyBridge][:app].fontExists(name.to_s).to_s == 'true'
    end

    def default_name
      @default_name ||= 'VL Gothic'
    end

    def default_name=(value)
      @default_name = value.is_a?(Array) ? value.map(&:to_s) : value.to_s
    end

    def default_size
      @default_size ||= 24
    end

    def default_size=(value)
      @default_size = [value.to_i, 1].max
    end

    def default_bold
      @default_bold ||= false
    end

    def default_bold=(value)
      @default_bold = !!value
    end

    def default_italic
      @default_italic ||= false
    end

    def default_italic=(value)
      @default_italic = !!value
    end

    def default_outline
      @default_outline = true if @default_outline.nil?
      @default_outline
    end

    def default_outline=(value)
      @default_outline = !!value
    end

    def default_shadow
      @default_shadow ||= false
    end

    def default_shadow=(value)
      @default_shadow = !!value
    end

    def default_color
      @default_color ||= Color.new(255, 255, 255, 255)
    end

    def default_color=(value)
      @default_color = __clone_color(value || Color.new(255, 255, 255, 255))
    end

    def default_out_color
      @default_out_color ||= Color.new(0, 0, 0, 128)
    end

    def default_out_color=(value)
      @default_out_color = __clone_color(value || Color.new(0, 0, 0, 128))
    end

    private

    def __clone_color(color)
      Color.new(color.red, color.green, color.blue, color.alpha)
    end
  end

  def initialize(name = nil, size = nil)
    @name = name.nil? ? self.class.default_name : name
    @size = size.nil? ? self.class.default_size : size
    @bold = self.class.default_bold
    @italic = self.class.default_italic
    @outline = self.class.default_outline
    @shadow = self.class.default_shadow
    @color = Color.new(
      self.class.default_color.red,
      self.class.default_color.green,
      self.class.default_color.blue,
      self.class.default_color.alpha
    )
    @out_color = Color.new(
      self.class.default_out_color.red,
      self.class.default_out_color.green,
      self.class.default_out_color.blue,
      self.class.default_out_color.alpha
    )
  end

  attr_accessor :name, :size, :bold, :italic, :outline, :shadow, :color, :out_color

  def __to_css_font
    [
      __css_font_style == 'italic' ? 'italic' : nil,
      __css_font_weight == '700' ? 'bold' : nil,
      "#{__to_css_font_size}px",
      __to_css_font_family
    ].compact.join(' ')
  end

  def __to_css_color
    "rgba(#{self.color.red}, #{self.color.green}, #{self.color.blue}, #{self.color.alpha / 255.0})"
  end

  def __to_css_out_color
    alpha = (self.out_color.alpha / 255.0) * (self.color.alpha / 255.0)
    "rgba(#{self.out_color.red}, #{self.out_color.green}, #{self.out_color.blue}, #{alpha})"
  end

  def __to_css_shadow_color
    "rgba(0, 0, 0, #{self.color.alpha / 255.0})"
  end

  private

  def __to_css_font_size
    ratio = __font_render_metrics['cssSizeRatio'] || CSS_FONT_SIZE_RATIO
    [(self.size.to_i * ratio.to_f).round(2), 1].max
  end

  def __to_css_font_family
    families = JSON.parse(
      JS.global[:rubyBridge][:app].resolveFontFamilies(JSON.generate(__font_names.map(&:to_s))).to_s
    )

    families = __font_names if families.empty?

    families
      .map { |family| "\\"#{family.to_s.gsub('"', '\\"')}\\"" }
      .join(', ')
  end

  def __font_render_metrics
    key = __font_render_metrics_key
    return @__font_render_metrics_cache if @__font_render_metrics_cache_key == key && @__font_render_metrics_cache

    @__font_render_metrics_cache_key = key
    @__font_render_metrics_cache =
      JSON.parse(
        JS.global[:rubyBridge][:app].resolveFontRenderMetrics(
          JSON.generate(key[0]),
          JSON.generate({ style: key[1], weight: key[2] })
        ).to_s
      )
  rescue StandardError
    @__font_render_metrics_cache_key = key
    @__font_render_metrics_cache = { 'cssSizeRatio' => CSS_FONT_SIZE_RATIO }
  end

  def __font_render_metrics_key
    [__font_names.map(&:to_s), __css_font_style, __css_font_weight]
  end

  def __css_font_style
    self.italic ? 'italic' : 'normal'
  end

  def __css_font_weight
    self.bold ? '700' : '400'
  end

  def __font_names
    if self.name.is_a?(Array)
      self.name
    else
      [self.name]
    end
  end
end
`,`require 'js'

module Graphics
  class << self
    def frame_rate
      @frame_rate ||= 60
    end

    def frame_rate=(value)
      @frame_rate = [value.to_i, 1].max
    end

    def frame_count
      @frame_count ||= 0
    end

    def frame_count=(value)
      @frame_count = value
    end

    def brightness
      @brightness ||= 255
    end

    def brightness=(value)
      @brightness = [[value.to_i, 0].max, 255].min
      JS.global[:rubyBridge][:app].setGraphicsBrightness(@brightness)
    end

    def update
      @frame_count = frame_count + 1
      JS.global[:rubyBridge][:app].updateGraphics(frame_rate).await
    end

    def wait(duration)
      [duration.to_i, 0].max.times { update }
    end

    def fadeout(duration)
      apply_fade(0, duration)
    end

    def fadein(duration)
      apply_fade(255, duration)
    end

    def freeze
      JS.global[:rubyBridge][:app].freezeGraphics
      RPGVXAceWeb::Internal::RGSSObjectLifecycle.collect
    end

    def transition(duration = 10, filename = nil, vague = 40)
      steps = [duration.to_i, 0].max
      if steps == 0
        JS.global[:rubyBridge][:app].clearFrozenGraphics
      else
        JS.global[:rubyBridge][:app].prepareGraphicsTransition(filename&.to_s, vague.to_i).await
        start_brightness = brightness
        steps.times do |index|
          progress = (index + 1).to_f / steps
          JS.global[:rubyBridge][:app].setFrozenGraphicsTransitionProgress(progress, vague.to_i)
          self.brightness = (start_brightness + ((255 - start_brightness) * progress)).round
          update
        end
        JS.global[:rubyBridge][:app].clearFrozenGraphics
        self.brightness = 255
      end

      # Call GC here to allow collecting the now-unreferenced Sprites after the transition is complete.
      RPGVXAceWeb::Internal::RGSSObjectLifecycle.collect
    end

    def snap_to_bitmap
      bitmap = Bitmap.new(self.width, self.height)
      JS.global[:rubyBridge][:app].copyScreenToBitmap(bitmap.__bitmap_id)
      bitmap
    end

    def frame_reset
      # frame_count を 0 にするメソッドではなく、フレームスキップを抑止するためのメソッド
      # Web版では次の Graphics.update の待機基準だけを現在時刻へ戻す
      JS.global[:rubyBridge][:app].resetGraphicsFramePacing
    end

    def width
      @width ||= 544
    end

    def height
      @height ||= 416
    end

    def resize_screen(width, height)
      @width = [width.to_i, 1].max
      @height = [height.to_i, 1].max
      JS.global[:rubyBridge][:app].resizeScreen(@width, @height)
    end

    def play_movie(filename)
      JS.global[:rubyBridge][:app].playMovie(filename.to_s)
    end

    private

    def apply_fade(target_brightness, duration)
      steps = [duration.to_i, 0].max
      start_brightness = brightness
      if steps == 0
        self.brightness = target_brightness
        return
      end

      steps.times do |index|
        ratio = (index + 1).to_f / steps
        next_brightness = start_brightness + ((target_brightness - start_brightness) * ratio)
        self.brightness = next_brightness.round
        update
      end
    end
  end
end
`,`require 'js'

module Input
  DOWN = :DOWN
  LEFT = :LEFT
  RIGHT = :RIGHT
  UP = :UP
  A = :A
  B = :B
  C = :C
  X = :X
  Y = :Y
  Z = :Z
  L = :L
  R = :R
  SHIFT = :SHIFT
  CTRL = :CTRL
  ALT = :ALT
  F5 = :F5
  F6 = :F6
  F7 = :F7
  F8 = :F8
  F9 = :F9

  class << self
    def __state
      @__state ||= {}
    end

    def update
      @__state = JS.global[:rubyBridge][:app].updateKey()
    end

    def press?(key)
      __key_value(key) > 0
    end

    def trigger?(key)
      __key_value(key) == 1
    end

    def repeat?(key)
      value = __key_value(key)
      value == 1 || (value >= 24 && value % 6 == 0)
    end

    def dir4
      case
      when __key_value(:DOWN) > 0
        2
      when __key_value(:LEFT) > 0
        4
      when __key_value(:RIGHT) > 0
        6
      when __key_value(:UP) > 0
        8
      else
        0
      end
    end

    def dir8
      x =
        if __key_value(:LEFT) > 0
          -1
        elsif __key_value(:RIGHT) > 0
          1
        else
          0
        end

      y =
        if __key_value(:DOWN) > 0
          1
        elsif __key_value(:UP) > 0
          -1
        else
          0
        end

      x == 0 && y == 0 ? 0 : 5 + x - y * 3
    end

    def __key_value(key)
      __state[key].to_i.nonzero? || __state[key.to_s].to_i
    end
  end
end
`,`require 'js'

module Kernel
  MISSING_BINARY_BASE64 = '__RPGVXACE_WEB_MISSING_BINARY_BASE64__'

  def rgss_main(&block)
    block.call
  rescue StandardError => error
    detail = ["#{error.class}: #{error.message}", *Array(error.backtrace)].join("\\n")
    raise error.exception(detail), detail, error.backtrace
  end

  def rgss_stop
    loop do
      Graphics.update
    end
  end

  def load_data(filename)
    normalized_filename = normalize_data_filename(filename)
    base64 = JS.global[:rubyBridge][:utils].loadVirtualBinaryBase64(RPGVXAceWeb::Internal.game_id, normalized_filename).await
    raise Errno::ENOENT, normalized_filename if base64.to_s == MISSING_BINARY_BASE64

    binary = Base64.decode64(base64.to_s)
    Marshal.load(binary)
  end

  def save_data(obj, filename)
    normalized_filename = normalize_data_filename(filename)
    base64 = Base64.strict_encode64(Marshal.dump(obj))
    JS.global[:rubyBridge][:utils].saveBinaryBase64(RPGVXAceWeb::Internal.game_id, normalized_filename, base64).await
    nil
  end

  def msgbox(*args)
    puts args.map(&:to_s)
  end

  def msgbox_p(*args)
    puts args.map(&:inspect)
  end

  private

  def normalize_data_filename(filename)
    filename.to_s.gsub('\\\\', '/').sub(%r{\\A\\./}, '').sub(%r{\\A/+}, '')
  end
end
`,`module DL
  POINTER_SIZE = 4
  ADDRESS_ALIGNMENT = 0x100
  BASE_ADDRESS = 0x10000

  @next_address = BASE_ADDRESS
  @bitmap_layouts = {}
  @pointer_cells = {}
  @bitmap_data_addresses = {}

  class CPtr
    attr_reader :size

    def initialize(address, size = nil)
      @address = address.to_i
      @size = size&.to_i
    end

    def [](offset, length = nil)
      normalized_offset = offset.to_i
      normalized_length = length ? length.to_i : 1
      DL.__read_memory(@address + normalized_offset, normalized_length)
    end

    def []=(offset, length, value)
      normalized_offset = offset.to_i
      normalized_length = length.to_i
      DL.__write_memory(@address + normalized_offset, normalized_length, value.to_s)
    end

    def free
      nil
    end
  end

  class << self
    def dlwrap(object)
      return __bitmap_layout(object)[:base] if defined?(Bitmap) && object.is_a?(Bitmap)

      __allocate_address
    end

    def __read_memory(address, length)
      bitmap_data = __bitmap_data_for_address(address)
      if bitmap_data
        offset = address - bitmap_data[:address]
        bitmap = __bitmap_from_entry(bitmap_data)
        return ''.b unless bitmap

        return bitmap.__rgba_pixel_data.byteslice(offset, length) || ''.b
      end

      pointer_value = @pointer_cells[address.to_i]
      return [pointer_value || 0].pack('l<') if length == POINTER_SIZE

      ''.b.ljust(length, "\\x00")
    end

    def __write_memory(address, length, value)
      bitmap_data = __bitmap_data_for_address(address)
      return value unless bitmap_data

      bitmap = __bitmap_from_entry(bitmap_data)
      return value unless bitmap

      offset = address - bitmap_data[:address]
      write_length = [length, bitmap_data[:byte_length] - offset].min
      return value if write_length <= 0

      data = bitmap.__rgba_pixel_data
      replacement = value.byteslice(0, write_length) || ''.b
      replacement = replacement.ljust(write_length, "\\x00")
      data[offset, write_length] = replacement
      bitmap.__rgba_pixel_data = data
      value
    end

    def __release_bitmap(bitmap)
      __release_bitmap_by_object_id(bitmap.object_id)
    end

    def __release_bitmap_by_object_id(object_id)
      layout = @bitmap_layouts.delete(object_id.to_i)
      return unless layout

      @bitmap_data_addresses.delete(layout[:data])
      layout[:pointer_cells].each { |address| @pointer_cells.delete(address) }
    end

    private

    def __bitmap_layout(bitmap)
      @bitmap_layouts[bitmap.object_id] ||= begin
        base = __allocate_address(32)
        level1 = __allocate_address(32)
        level2 = __allocate_address(32)
        data = __allocate_address(bitmap.width * bitmap.height * 4)

        @pointer_cells[base + 16] = level1 - 8
        @pointer_cells[level1] = level2 - 16
        @pointer_cells[level2] = data
        bitmap_data = {
          address: data,
          bitmap_object_id: bitmap.object_id,
          byte_length: bitmap.width * bitmap.height * 4,
        }
        @bitmap_data_addresses[data] = bitmap_data
        ObjectSpace.define_finalizer(bitmap, __bitmap_finalizer(bitmap.object_id))

        { base: base, data: data, pointer_cells: [base + 16, level1, level2] }
      end
    end

    def __bitmap_from_entry(entry)
      ObjectSpace._id2ref(entry[:bitmap_object_id])
    rescue RangeError
      __release_bitmap_by_object_id(entry[:bitmap_object_id])
      nil
    end

    def __bitmap_finalizer(object_id)
      proc { DL.__release_bitmap_by_object_id(object_id) }
    end

    def __allocate_address(size = ADDRESS_ALIGNMENT)
      address = @next_address
      reserved_size = [size.to_i, ADDRESS_ALIGNMENT].max
      @next_address += ((reserved_size + ADDRESS_ALIGNMENT - 1) / ADDRESS_ALIGNMENT) * ADDRESS_ALIGNMENT
      address
    end

    def __bitmap_data_for_address(address)
      normalized_address = address.to_i

      @bitmap_data_addresses.each_value do |entry|
        return entry if normalized_address >= entry[:address] && normalized_address < entry[:address] + entry[:byte_length]
      end

      nil
    end
  end
end
`,`class << File
  alias __vxace_web_open open
  alias __vxace_web_delete delete
  alias __vxace_web_mtime mtime
  alias __vxace_web_exist? exist?
  alias __vxace_web_exists? exists? if method_defined?(:exists?)
  alias __vxace_web_file? file?

  def open(path, mode = 'r', *args)
    filename = RPGVXAceWeb::Internal::SaveFileStorage.virtual_filename(path)
    return __vxace_web_open(path, mode, *args) unless filename

    io = RPGVXAceWeb::Internal::SaveFileStorage.open(filename, mode)
    return io unless block_given?

    begin
      yield io
    ensure
      io.close
    end
  end

  def delete(path)
    filename = RPGVXAceWeb::Internal::SaveFileStorage.virtual_filename(path)
    return __vxace_web_delete(path) unless filename

    RPGVXAceWeb::Internal::SaveFileStorage.delete(filename)
  end

  def mtime(path)
    filename = RPGVXAceWeb::Internal::SaveFileStorage.virtual_filename(path)
    return __vxace_web_mtime(path) unless filename

    RPGVXAceWeb::Internal::SaveFileStorage.mtime(filename)
  end

  def exist?(path)
    filename = RPGVXAceWeb::Internal::SaveFileStorage.virtual_filename(path)
    return __vxace_web_exist?(path) unless filename

    RPGVXAceWeb::Internal::SaveFileStorage.exist?(filename)
  end

  if method_defined?(:exists?)
    def exists?(path)
      filename = RPGVXAceWeb::Internal::SaveFileStorage.virtual_filename(path)
      return __vxace_web_exists?(path) unless filename

      RPGVXAceWeb::Internal::SaveFileStorage.exist?(filename)
    end
  else
    alias exists? exist?
  end

  def file?(path)
    filename = RPGVXAceWeb::Internal::SaveFileStorage.virtual_filename(path)
    return __vxace_web_file?(path) unless filename

    RPGVXAceWeb::Internal::SaveFileStorage.exist?(filename)
  end
end

class << Dir
  alias __vxace_web_glob glob

  def glob(pattern, *args)
    return __vxace_web_glob(pattern, *args) unless args.empty?

    saved_files = RPGVXAceWeb::Internal::SaveFileStorage.glob(pattern)
    saved_files.empty? ? __vxace_web_glob(pattern) : saved_files
  end
end

class << FileTest
  alias __vxace_web_exist? exist?
  alias __vxace_web_exists? exists? if method_defined?(:exists?)
  alias __vxace_web_file? file?

  def exist?(path)
    filename = RPGVXAceWeb::Internal::SaveFileStorage.virtual_filename(path)
    return __vxace_web_exist?(path) unless filename

    RPGVXAceWeb::Internal::SaveFileStorage.exist?(filename)
  end

  if method_defined?(:exists?)
    def exists?(path)
      filename = RPGVXAceWeb::Internal::SaveFileStorage.virtual_filename(path)
      return __vxace_web_exists?(path) unless filename

      RPGVXAceWeb::Internal::SaveFileStorage.exist?(filename)
    end
  else
    alias exists? exist?
  end

  def file?(path)
    filename = RPGVXAceWeb::Internal::SaveFileStorage.virtual_filename(path)
    return __vxace_web_file?(path) unless filename

    RPGVXAceWeb::Internal::SaveFileStorage.exist?(filename)
  end
end
`,`class Rect
  attr_writer :__on_change

  def initialize(x = 0, y = 0, width = 0, height = 0)
    @x = x
    @y = y
    @width = width
    @height = height
  end

  def x
    @x
  end

  def x=(value)
    return if @x == value

    @x = value
    __notify_change
  end

  def y
    @y
  end

  def y=(value)
    return if @y == value

    @y = value
    __notify_change
  end

  def width
    @width
  end

  def width=(value)
    return if @width == value

    @width = value
    __notify_change
  end

  def height
    @height
  end

  def height=(value)
    return if @height == value

    @height = value
    __notify_change
  end

  def set(*args)
    old_values = [@x, @y, @width, @height]
    if args.size == 1
      @x = args[0].x
      @y = args[0].y
      @width = args[0].width
      @height = args[0].height
    else
      @x = args[0]
      @y = args[1]
      @width = args[2]
      @height = args[3]
    end
    return if old_values == [@x, @y, @width, @height]

    __notify_change
  end

  def empty
    return if @x == 0 && @y == 0 && @width == 0 && @height == 0

    @x = 0
    @y = 0
    @width = 0
    @height = 0
    __notify_change
  end

  private

  def __notify_change
    @__on_change&.call(self)
  end
end
`,`module RPG
  class Map
    attr_accessor :tileset_id, :width, :height, :scroll_type,
                  :specify_battleback, :battleback1_name, :battleback2_name,
                  :autoplay_bgm, :bgm, :autoplay_bgs, :bgs, :disable_dashing,
                  :encounter_list, :encounter_step, :parallax_name,
                  :parallax_loop_x, :parallax_loop_y, :parallax_sx, :parallax_sy,
                  :parallax_show, :data, :events, :note, :display_name

    def initialize(width, height)
      @display_name = ''
      @tileset_id = 1
      @width = width
      @height = height
      @scroll_type = 0
      @specify_battleback = false
      @battleback1_name = ''
      @battleback2_name = ''
      @autoplay_bgm = false
      @bgm = RPG::BGM.new
      @autoplay_bgs = false
      @bgs = RPG::BGS.new('', 80)
      @disable_dashing = false
      @encounter_list = []
      @encounter_step = 30
      @parallax_name = ''
      @parallax_loop_x = false
      @parallax_loop_y = false
      @parallax_sx = 0
      @parallax_sy = 0
      @parallax_show = false
      @note = ''
      @data = Table.new(width, height, 4)
      @events = {}
    end
  end

  class Map::Encounter
    attr_accessor :troop_id, :weight, :region_set

    def initialize
      @troop_id = 1
      @weight = 10
      @region_set = []
    end
  end

  class MapInfo
    attr_accessor :name, :parent_id, :order, :expanded, :scroll_x, :scroll_y

    def initialize
      @name = ''
      @parent_id = 0
      @order = 0
      @expanded = false
      @scroll_x = 0
      @scroll_y = 0
    end
  end

  class Event
    attr_accessor :id, :name, :x, :y, :pages

    def initialize(x, y)
      @id = 0
      @name = ''
      @x = x
      @y = y
      @pages = [RPG::Event::Page.new]
    end
  end

  class Event::Page
    attr_accessor :condition, :graphic, :move_type, :move_speed, :move_frequency,
                  :move_route, :walk_anime, :step_anime, :direction_fix, :through,
                  :priority_type, :trigger, :list

    def initialize
      @condition = RPG::Event::Page::Condition.new
      @graphic = RPG::Event::Page::Graphic.new
      @move_type = 0
      @move_speed = 3
      @move_frequency = 3
      @move_route = RPG::MoveRoute.new
      @walk_anime = true
      @step_anime = false
      @direction_fix = false
      @through = false
      @priority_type = 0
      @trigger = 0
      @list = [RPG::EventCommand.new]
    end
  end

  class Event::Page::Condition
    attr_accessor :switch1_valid, :switch2_valid, :variable_valid,
                  :self_switch_valid, :item_valid, :actor_valid,
                  :switch1_id, :switch2_id, :variable_id, :variable_value,
                  :self_switch_ch, :item_id, :actor_id

    def initialize
      @switch1_valid = false
      @switch2_valid = false
      @variable_valid = false
      @self_switch_valid = false
      @item_valid = false
      @actor_valid = false
      @switch1_id = 1
      @switch2_id = 1
      @variable_id = 1
      @variable_value = 0
      @self_switch_ch = 'A'
      @item_id = 1
      @actor_id = 1
    end
  end

  class Event::Page::Graphic
    attr_accessor :tile_id, :character_name, :character_index, :direction, :pattern

    def initialize
      @tile_id = 0
      @character_name = ''
      @character_index = 0
      @direction = 2
      @pattern = 0
    end
  end

  class EventCommand
    attr_accessor :code, :indent, :parameters

    def initialize(code = 0, indent = 0, parameters = [])
      @code = code
      @indent = indent
      @parameters = parameters
    end
  end

  class MoveRoute
    attr_accessor :repeat, :skippable, :wait, :list

    def initialize
      @repeat = true
      @skippable = false
      @wait = false
      @list = [RPG::MoveCommand.new]
    end
  end

  class MoveCommand
    attr_accessor :code, :parameters

    def initialize(code = 0, parameters = [])
      @code = code
      @parameters = parameters
    end
  end

  class BaseItem
    attr_accessor :id, :name, :icon_index, :description, :note, :features

    def initialize
      @id = 0
      @name = ''
      @icon_index = 0
      @description = ''
      @features = []
      @note = ''
    end
  end

  class Actor < BaseItem
    attr_accessor :id, :name, :nickname, :class_id, :initial_level, :max_level,
                  :character_name, :character_index, :face_name, :face_index,
                  :equips, :description, :features, :note

    def initialize
      super
      @nickname = ''
      @class_id = 1
      @initial_level = 1
      @max_level = 99
      @character_name = ''
      @character_index = 0
      @face_name = ''
      @face_index = 0
      @equips = [0, 0, 0, 0, 0]
    end
  end

  class Class < BaseItem
    attr_accessor :id, :name, :learnings, :features, :note, :params,
                  :exp_params, :icon_index, :description

    def initialize
      super
      @exp_params = [30, 20, 30, 30]
      @params = Table.new(8, 100)
      (1..99).each do |i|
        @params[0, i] = 400 + i * 50
        @params[1, i] = 80 + i * 10
        (2..5).each { |j| @params[j, i] = 15 + i * 5 / 4 }
        (6..7).each { |j| @params[j, i] = 30 + i * 5 / 2 }
      end
      @learnings = []
      @features.push(RPG::BaseItem::Feature.new(23, 0, 1))
      @features.push(RPG::BaseItem::Feature.new(22, 0, 0.95))
      @features.push(RPG::BaseItem::Feature.new(22, 1, 0.05))
      @features.push(RPG::BaseItem::Feature.new(22, 2, 0.04))
      @features.push(RPG::BaseItem::Feature.new(41, 1))
      @features.push(RPG::BaseItem::Feature.new(51, 1))
      @features.push(RPG::BaseItem::Feature.new(52, 1))
    end

    def exp_for_level(level)
      return 0 if level.to_i <= 1

      basis = @exp_params&.[](0).to_i
      extra = @exp_params&.[](1).to_i
      acc_a = @exp_params&.[](2).to_i
      acc_b = [@exp_params&.[](3).to_i, 1].max
      n = level.to_f

      (basis * ((n - 1) ** (0.9 + acc_a / 250.0)) * n * (n + 1) /
        (6 + n**2 / 50.0 / acc_b) + (n - 1) * extra).round
    end
  end

  class UsableItem < BaseItem
    attr_accessor :scope, :occasion, :speed, :success_rate, :repeats,
                  :tp_gain, :hit_type, :animation_id, :damage, :effects

    def initialize
      super
      @scope = 0
      @occasion = 0
      @speed = 0
      @success_rate = 100
      @repeats = 1
      @tp_gain = 0
      @hit_type = 0
      @animation_id = 0
      @damage = RPG::UsableItem::Damage.new
      @effects = []
    end

    def for_opponent?
      [1, 2, 3, 4, 5, 6].include?(@scope)
    end

    def for_friend?
      [7, 8, 9, 10, 11].include?(@scope)
    end

    def for_dead_friend?
      [9, 10].include?(@scope)
    end

    def for_user?
      @scope == 11
    end

    def for_one?
      [1, 3, 7, 9, 11].include?(@scope)
    end

    def for_random?
      [3, 4, 5, 6].include?(@scope)
    end

    def number_of_targets
      for_random? ? @scope - 2 : 0
    end

    def for_all?
      [2, 8, 10].include?(@scope)
    end

    def need_selection?
      [1, 7, 9].include?(@scope)
    end

    def battle_ok?
      [0, 1].include?(@occasion)
    end

    def menu_ok?
      [0, 2].include?(@occasion)
    end

    def certain?
      @hit_type == 0
    end

    def physical?
      @hit_type == 1
    end

    def magical?
      @hit_type == 2
    end
  end

  class Skill < UsableItem
    attr_accessor :stype_id, :mp_cost, :tp_cost, :message1, :message2,
                  :required_wtype_id1, :required_wtype_id2

    def initialize
      super
      @scope = 1
      @stype_id = 1
      @mp_cost = 0
      @tp_cost = 0
      @message1 = ''
      @message2 = ''
      @required_wtype_id1 = 0
      @required_wtype_id2 = 0
    end
  end

  class Item < UsableItem
    attr_accessor :price, :consumable, :itype_id

    def initialize
      super
      @scope = 7
      @itype_id = 1
      @price = 0
      @consumable = true
    end

    def key_item?
      @itype_id == 2
    end
  end

  class EquipItem < BaseItem
    attr_accessor :price, :params, :etype_id

    def initialize
      super
      @price = 0
      @etype_id = 0
      @params = [0] * 8
    end
  end

  class Weapon < EquipItem
    attr_accessor :wtype_id, :animation_id

    def initialize
      super
      @wtype_id = 0
      @animation_id = 0
      @features.push(RPG::BaseItem::Feature.new(31, 1, 0))
      @features.push(RPG::BaseItem::Feature.new(22, 0, 0))
    end

    def performance
      params[2] + params[4] + params.inject(0) {|r, v| r += v }
    end
  end

  class Armor < EquipItem
    attr_accessor :atype_id

    def initialize
      super
      @atype_id = 0
      @etype_id = 1
      @features.push(RPG::BaseItem::Feature.new(22, 1, 0))
    end

    def performance
      params[3] + params[5] + params.inject(0) {|r, v| r += v }
    end
  end

  class Enemy < BaseItem
    attr_accessor :id, :name, :battler_name, :battler_hue, :params, :exp,
                  :gold, :drop_items, :actions, :features, :note

    def initialize
      super
      @battler_name = ''
      @battler_hue = 0
      @params = [100,0,10,10,10,10,10,10]
      @exp = 0
      @gold = 0
      @drop_items = Array.new(3) { RPG::Enemy::DropItem.new }
      @actions = [RPG::Enemy::Action.new]
      @features.push(RPG::BaseItem::Feature.new(22, 0, 0.95))
      @features.push(RPG::BaseItem::Feature.new(22, 1, 0.05))
      @features.push(RPG::BaseItem::Feature.new(31, 1, 0))
    end
  end

  class State < BaseItem
    attr_accessor :id, :name, :icon_index, :restriction, :priority,
                  :remove_at_battle_end, :remove_by_restriction,
                  :auto_removal_timing, :min_turns, :max_turns,
                  :remove_by_damage, :chance_by_damage, :remove_by_walking,
                  :steps_to_remove, :message1, :message2, :message3, :message4,
                  :features, :note

    def initialize
      super
      @restriction = 0
      @priority = 50
      @remove_at_battle_end = false
      @remove_by_restriction = false
      @auto_removal_timing = 0
      @min_turns = 1
      @max_turns = 1
      @remove_by_damage = false
      @chance_by_damage = 100
      @remove_by_walking = false
      @steps_to_remove = 100
      @message1 = ''
      @message2 = ''
      @message3 = ''
      @message4 = ''
    end
  end

  class BaseItem::Feature
    attr_accessor :code, :data_id, :value

    def initialize(code = 0, data_id = 0, value = 0)
      @code = code
      @data_id = data_id
      @value = value
    end
  end

  class UsableItem::Damage
    attr_accessor :type, :element_id, :formula, :variance, :critical

    def initialize
      @type = 0
      @element_id = 0
      @formula = '0'
      @variance = 20
      @critical = false
    end

    def none?
      @type == 0
    end

    def to_hp?
      [1, 3, 5].include?(@type)
    end

    def to_mp?
      [2, 4, 6].include?(@type)
    end

    def recover?
      [3, 4].include?(@type)
    end

    def drain?
      [5, 6].include?(@type)
    end

    def sign
      recover? ? -1 : 1
    end

    def eval(a, b, v)
      [Kernel.eval(@formula), 0].max * sign
    rescue
      0
    end
  end

  class UsableItem::Effect
    attr_accessor :code, :data_id, :value1, :value2

    def initialize(code = 0, data_id = 0, value1 = 0, value2 = 0)
      @code = code
      @data_id = data_id
      @value1 = value1
      @value2 = value2
    end
  end

  class Class::Learning
    attr_accessor :level, :skill_id, :note

    def initialize
      @level = 1
      @skill_id = 1
      @note = ''
    end
  end

  class Enemy::DropItem
    attr_accessor :kind, :data_id, :denominator

    def initialize
      @kind = 0
      @data_id = 1
      @denominator = 1
    end
  end

  class Enemy::Action
    attr_accessor :condition_type, :condition_param1, :condition_param2,
                  :rating, :skill_id

    def initialize
      @skill_id = 1
      @condition_type = 0
      @condition_param1 = 0
      @condition_param2 = 0
      @rating = 5
    end
  end

  class Troop
    attr_accessor :id, :name, :members, :pages

    def initialize
      @id = 0
      @name = ''
      @members = []
      @pages = [RPG::Troop::Page.new]
    end
  end

  class Troop::Member
    attr_accessor :enemy_id, :x, :y, :hidden

    def initialize
      @enemy_id = 1
      @x = 0
      @y = 0
      @hidden = false
    end
  end

  class Troop::Page
    attr_accessor :condition, :span, :list

    def initialize
      @condition = RPG::Troop::Page::Condition.new
      @span = 0
      @list = [RPG::EventCommand.new]
    end
  end

  class Troop::Page::Condition
    attr_accessor :turn_ending, :turn_valid, :enemy_valid, :actor_valid,
                  :switch_valid, :turn_a, :turn_b, :enemy_index, :enemy_hp,
                  :actor_id, :actor_hp, :switch_id

    def initialize
      @turn_ending = false
      @turn_valid = false
      @enemy_valid = false
      @actor_valid = false
      @switch_valid = false
      @turn_a = 0
      @turn_b = 0
      @enemy_index = 0
      @enemy_hp = 50
      @actor_id = 1
      @actor_hp = 50
      @switch_id = 1
    end
  end

  class Animation
    attr_accessor :id, :name, :animation1_name, :animation1_hue,
                  :animation2_name, :animation2_hue, :position, :frame_max,
                  :frames, :timings

    def initialize
      @id = 0
      @name = ''
      @animation1_name = ''
      @animation1_hue = 0
      @animation2_name = ''
      @animation2_hue = 0
      @position = 1
      @frame_max = 1
      @frames = [RPG::Animation::Frame.new]
      @timings = []
    end

    def to_screen?
      @position == 3
    end
  end

  class Animation::Frame
    attr_accessor :cell_max, :cell_data

    def initialize
      @cell_max = 0
      @cell_data = Table.new(0, 0)
    end
  end

  class Animation::Timing
    attr_accessor :frame, :se, :flash_scope, :flash_color, :flash_duration

    def initialize
      @frame = 0
      @se = RPG::SE.new('', 80)
      @flash_scope = 0
      @flash_color = Color.new(255, 255, 255, 255)
      @flash_duration = 5
    end
  end

  class Tileset
    attr_accessor :id, :name, :mode, :tileset_names, :flags, :note

    def initialize
      @id = 0
      @mode = 1
      @name = ''
      @tileset_names = Array.new(9).collect { '' }
      @flags = Table.new(8192)
      @flags[0] = 0x0010
      (2048..2815).each { |i| @flags[i] = 0x000F }
      (4352..8191).each { |i| @flags[i] = 0x000F }
      @note = ''
    end
  end

  class CommonEvent
    attr_accessor :id, :name, :trigger, :switch_id, :list

    def initialize
      @id = 0
      @name = ''
      @trigger = 0
      @switch_id = 1
      @list = [RPG::EventCommand.new]
    end

    def autorun?
      @trigger.to_i == 1
    end

    def parallel?
      @trigger.to_i == 2
    end
  end

  class System
    def initialize
      @game_title = ''
      @version_id = 0
      @japanese = true
      @party_members = [1]
      @currency_unit = ''
      @elements = [nil, '']
      @skill_types = [nil, '']
      @weapon_types = [nil, '']
      @armor_types = [nil, '']
      @switches = [nil, '']
      @variables = [nil, '']
      @boat = RPG::System::Vehicle.new
      @ship = RPG::System::Vehicle.new
      @airship = RPG::System::Vehicle.new
      @title1_name = ''
      @title2_name = ''
      @opt_draw_title = true
      @opt_use_midi = false
      @opt_transparent = false
      @opt_followers = true
      @opt_slip_death = false
      @opt_floor_death = false
      @opt_display_tp = true
      @opt_extra_exp = false
      @window_tone = Tone.new(0, 0, 0)
      @title_bgm = RPG::BGM.new
      @battle_bgm = RPG::BGM.new
      @battle_end_me = RPG::ME.new
      @gameover_me = RPG::ME.new
      @sounds = Array.new(24) { RPG::SE.new }
      @test_battlers = []
      @test_troop_id = 1
      @start_map_id = 1
      @start_x = 0
      @start_y = 0
      @terms = RPG::System::Terms.new
      @battleback1_name = ''
      @battleback2_name = ''
      @battler_name = ''
      @battler_hue = 0
      @edit_map_id = 1
    end

    attr_accessor :game_title, :version_id, :japanese, :party_members, :currency_unit, :skill_types, :weapon_types, :armor_types, :elements, :switches, :variables, :boat, :ship, :airship, :title1_name, :title2_name, :opt_draw_title, :opt_use_midi, :opt_transparent, :opt_followers, :opt_slip_death, :opt_floor_death, :opt_display_tp, :opt_extra_exp, :window_tone, :title_bgm, :battle_bgm, :battle_end_me, :gameover_me, :sounds, :test_battlers, :test_troop_id, :start_map_id, :start_x, :start_y, :terms, :battleback1_name, :battleback2_name, :battler_name, :battler_hue, :edit_map_id

    class Vehicle
      def initialize
        @character_name = ''
        @character_index = 0
        @bgm = RPG::BGM.new
        @start_map_id = 0
        @start_x = 0
        @start_y = 0
      end

      attr_accessor :character_name, :character_index, :bgm, :start_map_id, :start_x, :start_y
    end

    class Terms
      def initialize
        @basic = Array.new(8) {''}
        @params = Array.new(8) {''}
        @etypes = Array.new(5) {''}
        @commands = Array.new(23) {''}
      end
      attr_accessor :basic, :params, :etypes, :commands
    end

    class TestBattler
      attr_accessor :actor_id, :level, :equips

      def initialize
        @actor_id = 1
        @level = 1
        @equips = [0, 0, 0, 0, 0]
      end
    end
  end

  class AudioFile
    def initialize(name = '', volume = 100, pitch = 100)
      @name = name
      @volume = volume
      @pitch = pitch
    end

    attr_accessor :name, :volume, :pitch
  end

  class BGM < AudioFile
    @@last = RPG::BGM.new
    attr_accessor :pos

    def play(*pos)
      if @name.empty?
        Audio.bgm_stop
        @@last = RPG::BGM.new
      else
        if pos.empty?
          Audio.bgm_play('Audio/BGM/' + @name, @volume, @pitch)
        else
          Audio.bgm_play('Audio/BGM/' + @name, @volume, @pitch, pos.first)
        end
        @@last = self.clone
      end
    end

    def replay
      play(@pos || 0)
    end

    class << self
      def stop
        Audio.bgm_stop
        @@last = RPG::BGM.new
      end

      def fade(time)
        Audio.bgm_fade(time)
        @@last = RPG::BGM.new
      end

      def last
        @@last.tap { |last| last.pos = Audio.bgm_pos }
      end
    end
  end

  class BGS < AudioFile
    @@last = RPG::BGS.new
    attr_accessor :pos

    def play(*pos)
      if @name.empty?
        Audio.bgs_stop
        @@last = RPG::BGS.new
      else
        if pos.empty?
          Audio.bgs_play("Audio/BGS/#{@name}", @volume, @pitch)
        else
          Audio.bgs_play("Audio/BGS/#{@name}", @volume, @pitch, pos.first)
        end
        @@last = self.clone
      end
    end

    def replay
      play(@pos || 0)
    end

    class << self
      def stop
        Audio.bgs_stop
        @@last = RPG::BGS.new
      end

      def fade(time)
        Audio.bgs_fade(time)
        @@last = RPG::BGS.new
      end

      def last
        @@last.tap {|last| last.pos = Audio.bgs_pos }
      end
    end
  end

  class ME < AudioFile
    def play
      if @name.empty?
        Audio.me_stop
      else
        Audio.me_play("Audio/ME/#{@name}", @volume, @pitch)
      end
    end

    class << self
      def stop
        Audio.me_stop
      end

      def fade(time)
        Audio.me_fade(time)
      end
    end
  end

  class SE < AudioFile
    def play
      Audio.se_play("Audio/SE/#{@name}", @volume, @pitch) unless @name.empty?
    end

    class << self
      def stop
        Audio.se_stop
      end
    end
  end
end
`,`require 'js'
require 'json'

class Sprite
  attr_reader :bitmap
  attr_reader :viewport

  def initialize(viewport = nil)
    @viewport = viewport
    @__sprite_id = JS.global[:rubyBridge][:app].createSprite(viewport&.__viewport_id).to_i
    @src_rect = Rect.new
    @src_rect.__on_change = proc { sync_src_rect }
    @color = Color.new
    @tone = Tone.new
    bind_color(@color)
    bind_tone(@tone)
    @wave_amp = 0
    @wave_length = 180
    @wave_speed = 360
    @wave_phase = 0
    @bush_opacity = 128
    @disposed = false
    RPGVXAceWeb::Internal::RGSSObjectLifecycle.register_finalizer(self, 'sprite', @__sprite_id)
  end

  def bitmap=(bitmap)
    return if @bitmap == bitmap

    @bitmap = bitmap
    JS.global[:rubyBridge][:app].setBitmapToSprite(@__sprite_id, @bitmap&.__bitmap_id)
    @src_rect.set(0, 0, @bitmap.width, @bitmap.height) if @bitmap
  end

  def x = read_property('x').to_i

  def x=(value)
    write_property('x', value.to_i)
  end

  def y = read_property('y').to_i

  def y=(value)
    write_property('y', value.to_i)
  end

  def z = read_property('zIndex').to_i

  def z=(value)
    write_property('zIndex', value.to_i)
  end

  def width = read_property('rgssWidth').to_i

  def height = read_property('rgssHeight').to_i

  def ox = read_property('ox').to_i

  def ox=(value)
    write_property('ox', value.to_i)
  end

  def oy = read_property('oy').to_i

  def oy=(value)
    write_property('oy', value.to_i)
  end

  def angle = read_property('angle').to_f

  def angle=(value)
    write_property('angle', value.to_f)
  end

  def zoom_x = read_property('zoomX').to_f

  def zoom_x=(value)
    write_property('zoomX', value.to_f)
  end

  def zoom_y = read_property('zoomY').to_f

  def zoom_y=(value)
    write_property('zoomY', value.to_f)
  end

  def mirror
    read_property('mirror').to_s == 'true'
  end

  def mirror=(value)
    write_property('mirror', !!value)
  end

  def visible
    read_property('visible')
  end

  def visible=(value)
    write_property('visible', !!value)
  end

  def viewport=(value)
    @viewport = value
    JS.global[:rubyBridge][:app].setViewport('sprite', @__sprite_id, value&.__viewport_id)
  end

  attr_reader :src_rect, :color, :tone

  def src_rect=(rect)
    @src_rect = rect || Rect.new
    @src_rect.__on_change = proc { sync_src_rect }
    sync_src_rect
  end

  def color=(value)
    @color = value || Color.new
    bind_color(@color)
    sync_color
  end

  def tone=(value)
    @tone = value || Tone.new
    bind_tone(@tone)
    sync_tone
  end

  def dispose
    return if @disposed

    JS.global[:rubyBridge][:app].disposeObject('sprite', @__sprite_id)
    @disposed = true
  end

  def disposed?
    @disposed
  end

  def opacity = read_property('opacity').to_i

  def opacity=(value)
    write_property('opacity', [[value.to_i, 0].max, 255].min)
  end

  def blend_type = read_property('blendType').to_i

  def blend_type=(value)
    write_property('blendType', value.to_i)
  end

  def bush_depth = read_property('bushDepth').to_i

  def bush_depth=(value)
    write_property('bushDepth', [value.to_i, 0].max)
  end

  def bush_opacity
    @bush_opacity
  end

  def bush_opacity=(value)
    value = [[value.to_i, 0].max, 255].min
    return if @bush_opacity == value

    @bush_opacity = value
    write_property('bushOpacity', @bush_opacity)
  end

  def wave_amp
    @wave_amp
  end

  def wave_amp=(value)
    value = value.to_i
    return if @wave_amp == value

    @wave_amp = value
    write_property('waveAmp', @wave_amp)
  end

  def wave_length
    @wave_length
  end

  def wave_length=(value)
    value = [value.to_i, 1].max
    return if @wave_length == value

    @wave_length = value
    write_property('waveLength', @wave_length)
  end

  def wave_speed
    @wave_speed
  end

  def wave_speed=(value)
    value = value.to_i
    return if @wave_speed == value

    @wave_speed = value
    write_property('waveSpeed', @wave_speed)
  end

  def wave_phase
    @wave_phase
  end

  def wave_phase=(value)
    value = value.to_f
    return if @wave_phase == value

    @wave_phase = value
    write_property('wavePhase', @wave_phase)
  end

  def flash(color, duration)
    payload =
      if color
        {
          red: color.red.to_i,
          green: color.green.to_i,
          blue: color.blue.to_i,
          alpha: color.alpha.to_i
        }
      end
    JS.global[:rubyBridge][:app].setFlashToSprite(@__sprite_id, JSON.generate(payload), duration.to_i)
  end

  def update
    @wave_phase = JS.global[:rubyBridge][:app].updateSpriteEffects(@__sprite_id).to_f
  end

  private

  def read_property(prop)
    return @__property_cache[prop] if @__property_cache&.key?(prop)

    JS.global[:rubyBridge][:app].getProperty('sprite', @__sprite_id, prop)
  end

  def write_property(prop, value)
    @__property_cache ||= {}
    return if @__property_cache.key?(prop) && @__property_cache[prop] == value

    @__property_cache[prop] = value
    JS.global[:rubyBridge][:app].setProperty('sprite', @__sprite_id, prop, value)
  end

  def sync_src_rect
    return unless @src_rect

    src_rect = [@src_rect.x.to_i, @src_rect.y.to_i, @src_rect.width.to_i, @src_rect.height.to_i]
    return if @__last_src_rect == src_rect

    @__last_src_rect = src_rect
    JS.global[:rubyBridge][:app].setSrcRectToSprite(
      @__sprite_id,
      src_rect[0],
      src_rect[1],
      src_rect[2],
      src_rect[3]
    )
  end

  def sync_color
    color = [@color.red.to_i, @color.green.to_i, @color.blue.to_i, @color.alpha.to_i]
    return if @__last_color == color

    @__last_color = color
    JS.global[:rubyBridge][:app].setColorToSprite(
      @__sprite_id,
      JSON.generate({
        red: color[0],
        green: color[1],
        blue: color[2],
        alpha: color[3]
      })
    )
  end

  def sync_tone
    tone = [@tone.red.to_i, @tone.green.to_i, @tone.blue.to_i, @tone.gray.to_i]
    return if @__last_tone == tone

    @__last_tone = tone
    JS.global[:rubyBridge][:app].setToneToSprite(
      @__sprite_id,
      JSON.generate({
        red: tone[0],
        green: tone[1],
        blue: tone[2],
        gray: tone[3]
      })
    )
  end

  def bind_color(color)
    color.__on_change = proc { sync_color }
  end

  def bind_tone(tone)
    tone.__on_change = proc { sync_tone }
  end
end
`,`require 'js'
require 'json'

class Plane
  attr_reader :bitmap, :viewport

  def initialize(viewport = nil)
    @viewport = viewport
    @__plane_id = JS.global[:rubyBridge][:app].createPlane(viewport&.__viewport_id).to_i
    @bitmap = nil
    @color = Color.new
    @tone = Tone.new
    bind_color(@color)
    bind_tone(@tone)
    @disposed = false
    RPGVXAceWeb::Internal::RGSSObjectLifecycle.register_finalizer(self, 'plane', @__plane_id)
  end

  def bitmap=(bitmap)
    return if @bitmap == bitmap

    @bitmap = bitmap
    JS.global[:rubyBridge][:app].setBitmapToPlane(@__plane_id, bitmap&.__bitmap_id)
  end

  def viewport=(value)
    @viewport = value
    JS.global[:rubyBridge][:app].setViewport('plane', @__plane_id, value&.__viewport_id)
  end

  def x = read_property('x').to_i

  def x=(value)
    write_property('x', value.to_i)
  end

  def y = read_property('y').to_i

  def y=(value)
    write_property('y', value.to_i)
  end

  def z = read_property('zIndex').to_i

  def z=(value)
    write_property('zIndex', value.to_i)
  end

  def ox = read_property('ox').to_i

  def ox=(value)
    write_property('ox', value.to_i)
  end

  def oy = read_property('oy').to_i

  def oy=(value)
    write_property('oy', value.to_i)
  end

  def zoom_x = read_property('zoomX').to_f

  def zoom_x=(value)
    write_property('zoomX', value.to_f)
  end

  def zoom_y = read_property('zoomY').to_f

  def zoom_y=(value)
    write_property('zoomY', value.to_f)
  end

  def visible
    read_property('visible')
  end

  def visible=(value)
    write_property('visible', !!value)
  end

  def opacity = read_property('opacity').to_i

  def opacity=(value)
    write_property('opacity', [[value.to_i, 0].max, 255].min)
  end

  def blend_type = read_property('blendType').to_i

  def blend_type=(value)
    write_property('blendType', value.to_i)
  end

  attr_reader :color, :tone

  def color=(value)
    @color = value || Color.new
    bind_color(@color)
    sync_color
  end

  def tone=(value)
    @tone = value || Tone.new
    bind_tone(@tone)
    sync_tone
  end

  def dispose
    return if @disposed

    JS.global[:rubyBridge][:app].disposeObject('plane', @__plane_id)
    @disposed = true
  end

  def disposed?
    @disposed
  end

  private

  def read_property(prop)
    return @__property_cache[prop] if @__property_cache&.key?(prop)

    JS.global[:rubyBridge][:app].getProperty('plane', @__plane_id, prop)
  end

  def write_property(prop, value)
    @__property_cache ||= {}
    return if @__property_cache.key?(prop) && @__property_cache[prop] == value

    @__property_cache[prop] = value
    JS.global[:rubyBridge][:app].setProperty('plane', @__plane_id, prop, value)
  end

  def sync_color
    color = [@color.red.to_i, @color.green.to_i, @color.blue.to_i, @color.alpha.to_i]
    return if @__last_color == color

    @__last_color = color
    JS.global[:rubyBridge][:app].setColorToPlane(
      @__plane_id,
      JSON.generate({
        red: color[0],
        green: color[1],
        blue: color[2],
        alpha: color[3]
      })
    )
  end

  def sync_tone
    tone = [@tone.red.to_i, @tone.green.to_i, @tone.blue.to_i, @tone.gray.to_i]
    return if @__last_tone == tone

    @__last_tone = tone
    JS.global[:rubyBridge][:app].setToneToPlane(
      @__plane_id,
      JSON.generate({
        red: tone[0],
        green: tone[1],
        blue: tone[2],
        gray: tone[3]
      })
    )
  end

  def bind_color(color)
    color.__on_change = proc { sync_color }
  end

  def bind_tone(tone)
    tone.__on_change = proc { sync_tone }
  end
end
`,`class Table
  def initialize(xsize, ysize = 1, zsize = 1)
    @xsize = xsize
    @ysize = ysize
    @zsize = zsize
    @data = Array.new(@xsize * @ysize * @zsize, 0)
  end

  attr_reader :xsize, :ysize, :zsize

  def to_a
    @data.dup
  end

  def resize(xsize, ysize = 1, zsize = 1)
    old_xsize = @xsize
    old_ysize = @ysize
    old_zsize = @zsize
    old_data = @data

    @xsize = xsize.to_i
    @ysize = ysize.to_i
    @zsize = zsize.to_i
    @data = Array.new(@xsize * @ysize * @zsize, 0)

    [old_zsize, @zsize].min.times do |z|
      [old_ysize, @ysize].min.times do |y|
        [old_xsize, @xsize].min.times do |x|
          old_index = x + y * old_xsize + z * old_xsize * old_ysize
          @data[calc_index(x, y, z)] = old_data[old_index]
        end
      end
    end
    self
  end

  def [](*args)
    index = calc_index(*args)
    return nil unless index

    @data[index]
  end

  def []=(*args)
    value = args.pop
    index = calc_index(*args)
    return nil unless index

    @data[index] = value.to_i
  end

  class << self
    def _load(obj)
      xsize, ysize, zsize, size, body = unpack_table(obj)

      table = Table.new(xsize, ysize, zsize)
      table.instance_variable_set(:@data, body.unpack('s<*'))
      raise "unexpected table size: #{size}" unless table.__size == size

      table
    end
  end

  def _dump(_level)
    [dimension_size, @xsize, @ysize, @zsize, @data.size].pack('V5') +
      @data.pack('s<*')
  end

  def __size
    @data.size
  end

  private

  def calc_index(x, y = 0, z = 0)
    x = x.to_i
    y = y.to_i
    z = z.to_i

    return nil if x < 0 || x >= @xsize
    return nil if y < 0 || y >= @ysize
    return nil if z < 0 || z >= @zsize

    x + y * @xsize + z * @xsize * @ysize
  end

  def dimension_size
    if @zsize > 1
      3
    elsif @ysize > 1
      2
    else
      1
    end
  end

  def self.unpack_table(obj)
    header = obj.byteslice(0, 20)
    body = obj.byteslice(20..)
    dimension, xsize, ysize, zsize, size = header.unpack('V5')

    raise "invalid table dimension: #{dimension}" unless (1..3).cover?(dimension)
    raise "unexpected table payload size" unless body.bytesize == size * 2

    [xsize, ysize, zsize, size, body]
  end
end
`,`require 'js'
require 'json'

class Tilemap
  class BitmapList < Array
    def initialize(&on_change)
      super()
      @on_change = on_change
    end

    def []=(*args)
      result = super
      changed
      result
    end

    def <<(value)
      result = super
      changed
      result
    end

    def push(*values)
      result = super
      changed
      result
    end

    def concat(values)
      result = super
      changed
      result
    end

    def replace(values)
      result = super
      changed
      result
    end

    def clear
      result = super
      changed
      result
    end

    private

    def changed
      @on_change&.call
    end
  end

  attr_reader :map_data, :flags, :bitmaps
  attr_accessor :flash_data

  def initialize(viewport = nil)
    @viewport = viewport
    @__tilemap_id = JS.global[:rubyBridge][:app].createTilemap(viewport&.__viewport_id).to_i
    @bitmaps = BitmapList.new { sync_bitmaps }
    @flash_data = nil
    @map_data = nil
    @flags = nil
    @visible = true
    @ox = 0
    @oy = 0
    @disposed = false
    RPGVXAceWeb::Internal::RGSSObjectLifecycle.register_finalizer(self, 'tilemap', @__tilemap_id)
  end

  def bitmaps=(value)
    @bitmaps.replace(Array(value))
  end

  def map_data=(value)
    return if @map_data.equal?(value)

    @map_data = value
    sync_data
  end

  def flags=(value)
    return if @flags.equal?(value)

    @flags = value
    sync_data
  end

  def visible
    @visible
  end

  def visible=(value)
    value = !!value
    return if @visible == value

    @visible = value
    write_property('visible', @visible)
  end

  def ox
    @ox
  end

  def ox=(value)
    value = value.to_i
    return if @ox == value

    @ox = value
    write_property('ox', @ox)
  end

  def oy
    @oy
  end

  def oy=(value)
    value = value.to_i
    return if @oy == value

    @oy = value
    write_property('oy', @oy)
  end

  def viewport
    @viewport
  end

  def viewport=(value)
    @viewport = value
    JS.global[:rubyBridge][:app].setViewport('tilemap', @__tilemap_id, value&.__viewport_id)
  end

  def update
    JS.global[:rubyBridge][:app].updateTilemap(@__tilemap_id)
  end

  def refresh
    update
  end

  def dispose
    return if @disposed

    JS.global[:rubyBridge][:app].disposeObject('tilemap', @__tilemap_id)
    @disposed = true
  end

  def disposed?
    @disposed
  end

  private

  def sync_bitmaps
    bitmap_ids = Array(@bitmaps).map { |bitmap| bitmap&.__bitmap_id }
    JS.global[:rubyBridge][:app].setBitmapsToTilemap(@__tilemap_id, JSON.generate(bitmap_ids))
  end

  def sync_data
    return unless @map_data && @flags

    payload = {
      mapData: serialize_table(@map_data),
      flags: serialize_table(@flags)
    }
    JS.global[:rubyBridge][:app].setDataToTilemap(@__tilemap_id, JSON.generate(payload))
  end

  def write_property(prop, value)
    @__property_cache ||= {}
    return if @__property_cache.key?(prop) && @__property_cache[prop] == value

    @__property_cache[prop] = value
    JS.global[:rubyBridge][:app].setProperty('tilemap', @__tilemap_id, prop, value)
  end

  def serialize_table(table)
    unless table.respond_to?(:xsize) && table.respond_to?(:ysize) && table.respond_to?(:zsize) && table.respond_to?(:to_a)
      raise TypeError, "expected Table-compatible object, got #{table.class}"
    end

    {
      xsize: table.xsize.to_i,
      ysize: table.ysize.to_i,
      zsize: table.zsize.to_i,
      data: table.to_a
    }
  end
end
`,`class Tone
  attr_writer :__on_change

  def initialize(*args)
    if args.empty?
      @red = 0
      @green = 0
      @blue = 0
      @gray = 0
    else
      self.red = args[0]
      self.green = args[1]
      self.blue = args[2]
      self.gray = args[3] || 0
    end
  end

  [:red, :green, :blue, :gray].each do |c|
    define_method(c) do
      instance_variable_get("@#{c}")
    end

    define_method("#{c}=") do |value|
      min, max =
        if c == :gray
          [0, 255]
        else
          [-255, 255]
        end

      value = [[min, value].max, max].min
      unless instance_variable_get("@#{c}") == value
        instance_variable_set("@#{c}", value)
        __notify_change
      end
    end
  end

  def set(*args)
    if args.size == 1
      if args[0].nil?
        @red = 0
        @green = 0
        @blue = 0
        @gray = 0
      else
        self.red = args[0].red
        self.green = args[0].green
        self.blue = args[0].blue
        self.gray = args[0].gray
      end
    else
      self.red = args[0]
      self.green = args[1]
      self.blue = args[2]
      self.gray = args[3] || 0
    end
  end

  class << self
    def _load(obj)
      Tone.new(*obj.unpack('E4'))
    end
  end

  def _dump(_level)
    [@red, @green, @blue, @gray].pack('E4')
  end

  private

  def __notify_change
    @__on_change&.call(self)
  end
end
`,`require 'js'
require 'json'

class Viewport
  def initialize(*args)
    @__viewport_id = JS.global[:rubyBridge][:app].createViewport.to_i
    if args.size == 0
      @rect = Rect.new(0, 0, Graphics.width, Graphics.height)
    elsif args.size == 1
      @rect = args[0]
    else
      @rect = Rect.new(args[0], args[1], args[2], args[3])
    end
    @color = Color.new
    @tone = Tone.new
    bind_rect(@rect)
    bind_color(@color)
    bind_tone(@tone)
    @visible = true
    @z = 0
    @ox = 0
    @oy = 0
    @disposed = false
    RPGVXAceWeb::Internal::RGSSObjectLifecycle.register_finalizer(self, 'viewport', @__viewport_id)
    sync_all
  end

  attr_reader :__viewport_id, :rect, :color, :tone

  def rect=(value)
    @rect = value || Rect.new
    bind_rect(@rect)
    sync_rect
  end

  def visible
    @visible
  end

  def visible=(value)
    @visible = !!value
    write_property('visible', @visible)
  end

  def z
    @z
  end

  def z=(value)
    @z = value.to_i
    write_property('zIndex', @z)
  end

  def ox
    @ox
  end

  def ox=(value)
    @ox = value.to_i
    write_property('ox', @ox)
  end

  def oy
    @oy
  end

  def oy=(value)
    @oy = value.to_i
    write_property('oy', @oy)
  end

  def color=(value)
    @color = value || Color.new
    bind_color(@color)
    sync_color
  end

  def tone=(value)
    @tone = value || Tone.new
    bind_tone(@tone)
    sync_tone
  end

  def dispose
    return if @disposed

    JS.global[:rubyBridge][:app].disposeObject('viewport', @__viewport_id)
    @disposed = true
  end

  def disposed?
    @disposed
  end

  def flash(color, duration)
    payload =
      if color
        {
          red: color.red.to_i,
          green: color.green.to_i,
          blue: color.blue.to_i,
          alpha: color.alpha.to_i
        }
      end
    JS.global[:rubyBridge][:app].setFlashToViewport(@__viewport_id, JSON.generate(payload), duration.to_i)
  end

  def update
    JS.global[:rubyBridge][:app].updateViewportEffects(@__viewport_id)
  end

  private

  def sync_all
    sync_rect
    self.visible = @visible
    self.z = @z
    self.ox = @ox
    self.oy = @oy
    sync_color
    sync_tone
  end

  def sync_rect
    rect = [@rect.x.to_i, @rect.y.to_i, @rect.width.to_i, @rect.height.to_i]
    return if @__last_rect == rect

    @__last_rect = rect
    JS.global[:rubyBridge][:app].setRectToViewport(
      @__viewport_id,
      rect[0],
      rect[1],
      rect[2],
      rect[3]
    )
  end

  def sync_color
    color = [@color.red.to_i, @color.green.to_i, @color.blue.to_i, @color.alpha.to_i]
    return if @__last_color == color

    @__last_color = color
    JS.global[:rubyBridge][:app].setColorToViewport(
      @__viewport_id,
      JSON.generate({
        red: color[0],
        green: color[1],
        blue: color[2],
        alpha: color[3]
      })
    )
  end

  def sync_tone
    tone = [@tone.red.to_i, @tone.green.to_i, @tone.blue.to_i, @tone.gray.to_i]
    return if @__last_tone == tone

    @__last_tone = tone
    JS.global[:rubyBridge][:app].setToneToViewport(
      @__viewport_id,
      JSON.generate({
        red: tone[0],
        green: tone[1],
        blue: tone[2],
        gray: tone[3]
      })
    )
  end

  def write_property(prop, value)
    @__property_cache ||= {}
    return if @__property_cache.key?(prop) && @__property_cache[prop] == value

    @__property_cache[prop] = value
    JS.global[:rubyBridge][:app].setProperty('viewport', @__viewport_id, prop, value)
  end

  def bind_rect(rect)
    rect.__on_change = proc { sync_rect }
  end

  def bind_color(color)
    color.__on_change = proc { sync_color }
  end

  def bind_tone(tone)
    tone.__on_change = proc { sync_tone }
  end
end
`,`require 'js'
require 'json'

class Window
  def initialize(x = 0, y = 0, width = 0, height = 0, viewport = nil)
    @viewport = viewport
    @__window_id = JS.global[:rubyBridge][:app].createWindow(viewport&.__viewport_id).to_i
    @z = 100
    @ox = 0
    @oy = 0
    @windowskin = nil
    @contents = Bitmap.new(1, 1)
    @cursor_rect = Rect.new
    @active = true
    @visible = true
    @arrows_visible = true
    @pause = false
    @padding = 12
    @padding_bottom = 12
    @opacity = 255
    @back_opacity = 192
    @contents_opacity = 255
    @openness = 255
    @tone = Tone.new
    bind_tone(@tone)
    @disposed = false
    RPGVXAceWeb::Internal::RGSSObjectLifecycle.register_finalizer(self, 'window', @__window_id)
    write_property('x', x.to_i)
    write_property('y', y.to_i)
    write_property('windowWidth', width.to_i)
    write_property('windowHeight', height.to_i)
    write_property('zIndex', @z)
    write_property('active', @active)
    write_property('visible', @visible)
    write_property('padding', @padding)
    write_property('paddingBottom', @padding_bottom)
    write_property('arrowsVisible', @arrows_visible)
    write_property('pause', @pause)
    write_property('opacity', @opacity)
    write_property('backOpacity', @back_opacity)
    write_property('contentsOpacity', @contents_opacity)
    write_property('openness', @openness)
    self.ox = @ox
    self.oy = @oy
    sync_cursor_rect
    sync_tone
    JS.global[:rubyBridge][:app].setContentsToWindow(@__window_id, @contents.__bitmap_id)
  end

  def viewport
    @viewport
  end

  def viewport=(value)
    @viewport = value
    JS.global[:rubyBridge][:app].setViewport('window', @__window_id, value&.__viewport_id)
  end

  def x = read_property('x').to_i

  def x=(value)
    write_property('x', value.to_i)
  end

  def y = read_property('y').to_i

  def y=(value)
    write_property('y', value.to_i)
  end

  def z = read_property('zIndex').to_i

  def z=(value)
    write_property('zIndex', value.to_i)
  end

  def ox
    @ox
  end

  def ox=(value)
    value = value.to_i
    return if @ox == value

    @ox = value
    write_property('ox', @ox)
    sync_cursor_rect
  end

  def oy
    @oy
  end

  def oy=(value)
    value = value.to_i
    return if @oy == value

    @oy = value
    write_property('oy', @oy)
    sync_cursor_rect
  end

  def width = read_property('windowWidth').to_i

  def width=(value)
    write_property('windowWidth', value.to_i)
    sync_cursor_rect
  end

  def height = read_property('windowHeight').to_i

  def height=(value)
    write_property('windowHeight', value.to_i)
    sync_cursor_rect
  end

  attr_reader :windowskin, :contents, :cursor_rect

  def windowskin=(bitmap)
    @windowskin = bitmap
    bitmap_id = bitmap&.__bitmap_id
    JS.global[:rubyBridge][:app].setWindowskinToWindow(@__window_id, bitmap_id)
  end

  def contents=(bitmap)
    @contents = bitmap
    bitmap_id = bitmap&.__bitmap_id
    JS.global[:rubyBridge][:app].setContentsToWindow(@__window_id, bitmap_id)
  end

  def cursor_rect=(rect)
    @cursor_rect = rect || Rect.new
    @cursor_rect.__on_change = proc { sync_cursor_rect }
    sync_cursor_rect
  end

  def tone
    @tone
  end

  def tone=(value)
    @tone = value || Tone.new
    bind_tone(@tone)
    sync_tone
  end

  def active
    @active
  end

  def active=(value)
    value = !!value
    return if @active == value

    @active = value
    write_property('active', @active)
  end

  def visible
    @visible
  end

  def visible=(value)
    value = !!value
    return if @visible == value

    @visible = value
    write_property('visible', @visible)
  end

  def padding
    @padding
  end

  def padding=(value)
    value = value.to_i
    return if @padding == value

    @padding = value
    write_property('padding', @padding)
    sync_cursor_rect
  end

  def padding_bottom
    @padding_bottom
  end

  def padding_bottom=(value)
    value = value.to_i
    return if @padding_bottom == value

    @padding_bottom = value
    write_property('paddingBottom', @padding_bottom)
  end

  def arrows_visible
    @arrows_visible
  end

  def arrows_visible=(value)
    value = !!value
    return if @arrows_visible == value

    @arrows_visible = value
    write_property('arrowsVisible', @arrows_visible)
  end

  def pause
    @pause
  end

  def pause=(value)
    value = !!value
    return if @pause == value

    @pause = value
    write_property('pause', @pause)
  end

  def opacity
    @opacity
  end

  def opacity=(value)
    value = clamp_channel(value)
    return if @opacity == value

    @opacity = value
    write_property('opacity', @opacity)
  end

  def back_opacity
    @back_opacity
  end

  def back_opacity=(value)
    value = clamp_channel(value)
    return if @back_opacity == value

    @back_opacity = value
    write_property('backOpacity', @back_opacity)
  end

  def contents_opacity
    @contents_opacity
  end

  def contents_opacity=(value)
    value = clamp_channel(value)
    return if @contents_opacity == value

    @contents_opacity = value
    write_property('contentsOpacity', @contents_opacity)
  end

  def openness
    @openness
  end

  def openness=(value)
    value = clamp_channel(value)
    return if @openness == value

    @openness = value
    write_property('openness', @openness)
  end

  def dispose
    return if @disposed

    JS.global[:rubyBridge][:app].disposeObject('window', @__window_id)
    @disposed = true
  end

  def disposed?
    @disposed
  end

  def update
    sync_cursor_rect
  end

  def move(x, y, width, height)
    self.x = x
    self.y = y
    self.width = width
    self.height = height
  end

  def open?
    self.openness == 255
  end

  def close?
    self.openness == 0
  end

  def open
    self.openness = 255
  end

  def close
    self.openness = 0
  end

  def show
    self.visible = true
  end

  def hide
    self.visible = false
  end

  def activate
    self.active = true
  end

  def deactivate
    self.active = false
  end

  def contents_width
    [self.width - @padding * 2, 1].max
  end

  def contents_height
    [self.height - @padding - @padding_bottom, 1].max
  end

  private

  def sync_cursor_rect
    return unless @cursor_rect

    cursor_rect = [@cursor_rect.x.to_i, @cursor_rect.y.to_i, @cursor_rect.width.to_i, @cursor_rect.height.to_i]
    return if @__last_cursor_rect == cursor_rect

    @__last_cursor_rect = cursor_rect
    JS.global[:rubyBridge][:app].setCursorRectToWindow(
      @__window_id,
      cursor_rect[0],
      cursor_rect[1],
      cursor_rect[2],
      cursor_rect[3]
    )
  end

  def sync_tone
    tone = [@tone.red.to_i, @tone.green.to_i, @tone.blue.to_i, @tone.gray.to_i]
    return if @__last_tone == tone

    @__last_tone = tone
    JS.global[:rubyBridge][:app].setToneToWindow(
      @__window_id,
      JSON.generate({
        red: tone[0],
        green: tone[1],
        blue: tone[2],
        gray: tone[3]
      })
    )
  end

  def read_property(prop)
    return @__property_cache[prop] if @__property_cache&.key?(prop)

    JS.global[:rubyBridge][:app].getProperty('window', @__window_id, prop)
  end

  def write_property(prop, value)
    @__property_cache ||= {}
    return if @__property_cache.key?(prop) && @__property_cache[prop] == value

    @__property_cache[prop] = value
    JS.global[:rubyBridge][:app].setProperty('window', @__window_id, prop, value)
  end

  def clamp_channel(value)
    [[value.to_i, 0].max, 255].min
  end

  def bind_tone(tone)
    tone.__on_change = proc { sync_tone }
  end
end
`,`# Win32API class のモック
# 実際の挙動をすることはできないが、最小限の振る舞いをして可能な限りの互換性を保つ
class Win32API
  HANDLED_FUNC_NAMES = %w[
    findwindow
    getclientrect
    getcurrentdirectory
    getkeyboardstate
    getkeystate
    getasynckeystate
    getprivateprofilestring
    getusername
    getwindowrect
    movewindow
    multibytetowidechar
    shellexecute
    shgetfolderpath
    widechartomultibyte
    writeprivateprofilestring
  ].freeze

  MOCK_CURRENT_DIRECTORY = 'C:\\game'.freeze
  MOCK_USER_NAME = 'VXAceWeb'.freeze

  def initialize(dll, func, param_types, return_type)
    @dll = dll.to_s.downcase
    @func = func.to_s
    @param_types = param_types
    @return_type = return_type.to_s.downcase
  end

  def call(*args)
    case normalized_func_name
    when 'getprivateprofilestring'
      get_private_profile_string(*args)
    when 'writeprivateprofilestring'
      write_private_profile_string(*args)
    when 'multibytetowidechar', 'widechartomultibyte'
      convert_string_buffer(*args)
    when 'findwindow'
      find_window(*args)
    when 'getwindowrect'
      get_window_rect(*args)
    when 'movewindow'
      move_window(*args)
    when 'getclientrect'
      get_client_rect(*args)
    when 'shellexecute'
      shell_execute(*args)
    when 'getcurrentdirectory'
      get_current_directory(*args)
    when 'shgetfolderpath'
      sh_get_folder_path(*args)
    when 'getusername'
      get_user_name(*args)
    when 'getkeyboardstate'
      get_keyboard_state(*args)
    when 'getkeystate', 'getasynckeystate'
      get_key_state(*args)
    else
      default_return_value
    end
  end

  private

  def get_private_profile_string(section, key, default_value, buffer, length, filename)
    value =
      begin
        RPGVXAceWeb::Internal::IniFile.load(filename).read(section, key)
      rescue StandardError
        nil
      end
    write_string_buffer(value.nil? ? default_value.to_s : value.to_s, buffer, length)
  end

  def write_private_profile_string(section, key, value, filename)
    ini = RPGVXAceWeb::Internal::IniFile.load(filename)
    return 0 unless ini.write(section, key, value)

    ini.save(filename) ? 1 : 0
  rescue StandardError
    0
  end

  def convert_string_buffer(_code_page, _flags, source, _source_length, dest, dest_length, *_rest)
    text = source.to_s
    if dest.nil?
      text.bytesize + 1
    else
      write_string_buffer(text, dest, dest_length)
    end
  end

  def find_window(*_args)
    0
  end

  def get_window_rect(_hwnd, buffer)
    write_rect_buffer(buffer) ? 1 : 0
  end

  def move_window(*_args)
    0
  end

  def get_client_rect(_hwnd, buffer)
    write_rect_buffer(buffer) ? 1 : 0
  end

  def shell_execute(*_args)
    0
  end

  def get_current_directory(length, buffer)
    write_string_buffer(MOCK_CURRENT_DIRECTORY, buffer, length)
  end

  def sh_get_folder_path(*args)
    buffer = args[4] || args[-1]
    return 1 unless writable_buffer?(buffer)

    write_string_buffer(MOCK_CURRENT_DIRECTORY, buffer, buffer_capacity(buffer))
    0
  end

  def get_user_name(buffer, length_buffer)
    capacity = read_int32_le(length_buffer)
    required = MOCK_USER_NAME.bytesize + 1

    if capacity < required || buffer_capacity(buffer) < required
      write_int32_le(length_buffer, required)
      return 0
    end

    written = write_string_buffer(MOCK_USER_NAME, buffer, capacity)
    return 0 unless written == MOCK_USER_NAME.bytesize

    write_int32_le(length_buffer, written)
    1
  end

  def get_key_state(vk)
    JS.global[:rubyBridge][:app].getKeyState(vk.to_i).to_s.to_i
  rescue StandardError
    default_return_value
  end

  def get_keyboard_state(buffer)
    bytes = Array.new(256) do |vk|
      state = get_key_state(vk)
      state < 0 ? 0x80 | (state & 1) : (state & 1)
    end
    write_binary_buffer(bytes.pack('C*'), buffer) ? 1 : 0
  end

  def write_string_buffer(value, buffer, length)
    capacity = [length.to_i, buffer_capacity(buffer)].min
    return 0 if capacity <= 0
    return 0 unless writable_buffer?(buffer)

    copied = value.to_s.byteslice(0, [capacity - 1, 0].max).to_s
    bytes = copied + "\\0"
    capacity.times do |index|
      buffer.setbyte(index, bytes.getbyte(index) || 0)
    end
    copied.bytesize
  rescue StandardError
    0
  end

  def write_rect_buffer(buffer)
    write_binary_buffer([0, 0, Graphics.width, Graphics.height].pack('l<l<l<l<'), buffer)
  end

  def write_binary_buffer(bytes, buffer)
    return false unless writable_buffer?(buffer)
    return false if buffer.bytesize < bytes.bytesize

    bytes.bytes.each_with_index do |byte, index|
      buffer.setbyte(index, byte)
    end
    true
  rescue StandardError
    false
  end

  def read_int32_le(buffer)
    return buffer.to_i unless buffer.respond_to?(:bytesize)
    return 0 if buffer.bytesize < 4

    buffer.byteslice(0, 4).unpack1('l<')
  rescue StandardError
    0
  end

  def write_int32_le(buffer, value)
    return false unless buffer.respond_to?(:bytesize) && buffer.respond_to?(:setbyte)
    return false if buffer.bytesize < 4

    [value.to_i].pack('l<').bytes.each_with_index do |byte, index|
      buffer.setbyte(index, byte)
    end
    true
  rescue StandardError
    false
  end

  def writable_buffer?(buffer)
    buffer.respond_to?(:bytesize) && buffer.respond_to?(:setbyte)
  end

  def buffer_capacity(buffer)
    buffer.respond_to?(:bytesize) ? buffer.bytesize : 0
  end

  def normalized_func_name
    name = @func.downcase
    return name if HANDLED_FUNC_NAMES.include?(name)

    suffixed_name = name.sub(/[aw]\\z/, '')
    HANDLED_FUNC_NAMES.include?(suffixed_name) ? suffixed_name : name
  end

  def default_return_value
    case @return_type
    when 'i', 'l'
      0
    else
      nil
    end
  end
end
`].join(`
`),em=[`begin
  require 'js'
rescue LoadError
  # Native smoke scripts provide no JS bridge and only need class definitions.
end

module RPGVXAceWeb
  class << self
    def open_url(url)
      JS.global[:window].open(url.to_s)
      return nil
    end
  end
end
`].join(`
`),tm=`require 'js'
require 'zlib'

game_dir = JS.global[:rubyBridge][:gameDir].to_s
RPGVXAceWeb::Internal.game_dir = game_dir unless game_dir.empty? || game_dir == 'null' || game_dir == 'undefined'
game_id = JS.global[:rubyBridge][:gameId].to_s
RPGVXAceWeb::Internal.game_id = game_id unless game_id.empty? || game_id == 'null' || game_id == 'undefined'

ini = RPGVXAceWeb::Internal::IniFile.load
scripts_path = ini.read('Game', 'Scripts')
load_data(scripts_path).each do |item|
  code = Zlib.inflate(item.last)
  label = item[1].to_s
  JS.global[:rubyBridge][:rubyManager].pushNamed(label, code)
end
`,nm=[Qp,$p,em].join(`
`),rm=[nm,tm].join(`
`),im=`rpgvxace-web-save`,am=1,om=`files`,sm=`__RPGVXACE_WEB_MISSING_BINARY_BASE64__`,cm=null,lm=bm();function um(e){cm=e}function dm(e){xm(e),lm=e}async function fm(e,t,n){let r=Em(e),i=Dm(t);await lm.saveBinaryBase64(r,i,n)}async function pm(e,t){let n=Em(e),r=Dm(t);return lm.loadSavedBinaryBase64(n,r)}async function mm(e,t){return await pm(e,t)??sm}async function hm(e,t){let n=Em(e),r=await pm(n,t);if(r!==null)return r;let i=cm;if(i?.manifest.id===n){let e=i.resolveResource(t);if(e)return rr({kind:`data`,label:t},()=>i.loadBase64(e,{kind:`data`,label:t}))}return sm}async function gm(e,t){let n=Em(e);return await pm(n,t)===null?cm?.manifest.id===n&&cm.resourceExists(t):!0}async function _m(e,t){let n=Em(e),r=Dm(t),i=await lm.getSavedDataInfo(n,r);return i?{filename:r,updatedAt:i.updatedAt}:null}async function vm(e){let t=Em(e);return(await lm.listSavedData(t)).map(e=>({filename:Dm(e.filename),updatedAt:e.updatedAt})).sort((e,t)=>e.filename.localeCompare(t.filename))}async function ym(e,t){let n=Em(e),r=Dm(t);await lm.deleteSavedData(n,r)}function bm(){return{async saveBinaryBase64(e,t,n){let r=await Sm();try{let i={key:wm(e,t),gameId:e,filename:t,base64:n,updatedAt:new Date().toISOString()};await Cm(r,`readwrite`,e=>e.put(i))}finally{r.close()}},async loadSavedBinaryBase64(e,t){let n=await Sm();try{return(await Cm(n,`readonly`,n=>n.get(wm(e,t))))?.base64??null}finally{n.close()}},async getSavedDataInfo(e,t){let n=await Sm();try{let r=await Cm(n,`readonly`,n=>n.get(wm(e,t)));return r?Tm(r):null}finally{n.close()}},async listSavedData(e){let t=await Sm();try{return(await Cm(t,`readonly`,e=>e.getAll())).filter(t=>t.gameId===e).map(Tm).sort((e,t)=>e.filename.localeCompare(t.filename))}finally{t.close()}},async deleteSavedData(e,t){let n=await Sm();try{await Cm(n,`readwrite`,n=>n.delete(wm(e,t)))}finally{n.close()}}}}function xm(e){for(let t of[`saveBinaryBase64`,`loadSavedBinaryBase64`,`getSavedDataInfo`,`listSavedData`,`deleteSavedData`])if(typeof e[t]!=`function`)throw TypeError(`invalid save storage adapter: missing ${t}`)}var Sm=()=>typeof indexedDB>`u`?Promise.reject(Error(`IndexedDB is not available`)):new Promise((e,t)=>{let n=indexedDB.open(im,am);n.onupgradeneeded=()=>{let e=n.result;e.objectStoreNames.contains(om)||e.createObjectStore(om,{keyPath:`key`})},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error??Error(`failed to open save database`)),n.onblocked=()=>t(Error(`save database open was blocked`))}),Cm=(e,t,n)=>new Promise((r,i)=>{let a=e.transaction(om,t),o=n(a.objectStore(om)),s;o.onsuccess=()=>{s=o.result},o.onerror=()=>i(o.error??Error(`save storage request failed`)),a.oncomplete=()=>r(s),a.onerror=()=>i(a.error??Error(`save storage transaction failed`)),a.onabort=()=>i(a.error??Error(`save storage transaction aborted`))}),wm=(e,t)=>`v1:${encodeURIComponent(e)}:${encodeURIComponent(t)}`,Tm=e=>({filename:e.filename,updatedAt:e.updatedAt}),Em=e=>{if(!dn(e))throw Error(`invalid game id: ${e}`);return e},Dm=e=>{let t=e.replace(/\\/g,`/`).replace(/^\.\//,``).replace(/^\/+/,``);if(!t||t.split(`/`).includes(`..`))throw Error(`invalid save filename: ${e}`);return t},Om=M({BlockingResourceWaitManager:()=>er,ResourceRetryManager:()=>Br,RetryableResourceLoadError:()=>zr,blockingResourceWaitManager:()=>tr,completeBlockingResourceWaitIfIdle:()=>ir,configureBlockingResourceWaitPresenter:()=>nr,configureResourceFetchAdapter:()=>Gr,configureResourceLoadErrorPresenter:()=>Hr,configureSaveStorageAdapter:()=>dm,configureSaveStorageAssetProvider:()=>um,deleteSavedData:()=>ym,fetchArrayBuffer:()=>qr,fetchBlob:()=>Jr,fetchResponse:()=>Yr,fetchText:()=>Kr,getSavedDataInfo:()=>_m,listSavedData:()=>vm,loadSavedBinaryBase64:()=>pm,loadSavedBinaryBase64ForRuby:()=>mm,loadVirtualBinaryBase64:()=>hm,resourceRetryManager:()=>Vr,saveBinaryBase64:()=>fm,trackBlockingResourceWait:()=>rr,virtualFileExists:()=>gm}),km=class extends Error{label;cause;constructor(e,t){super(`ruby eval failed in ${e}`),this.name=`RubyEvalError`,this.label=e,this.cause=t}},Am=class extends Error{currentLabel;requestedLabel;constructor(e,t){super(`ruby vm is already evaluating ${e}; cannot evaluate ${t}`),this.name=`RubyVmBusyError`,this.currentLabel=e,this.requestedLabel=t}},jm=class{#e;_code=[];_currentLabel=null;constructor(e){this.#e=e}push(e,t=`anonymous`){this.pushNamed(t,e)}pushNamed(e,t){this._code.push({label:e,code:t})}hasCode(){return this._code.length}isEvaluating(){return this._currentLabel!==null}async evalAsync(e,t=`anonymous`){if(this._currentLabel!==null)throw new Am(this._currentLabel,t);this._currentLabel=t;try{return await this.#e.evalAsync(e)}catch(e){throw new km(t,e)}finally{this._currentLabel=null}}async evalAsyncCode(){if(this._currentLabel!==null)throw new Am(this._currentLabel,`queued-code`);let e=this._code.shift();return e?this.evalAsync(e.code,e.label):Promise.resolve()}},Mm=document.querySelector(`#app`),Nm=new _p,$=Vp({appElement:Mm,localeController:Nm}),Pm=null,Fm=null;$.mount({screenElement:Mm}),Hr({showResourceLoadError:e=>$.showResourceLoadError(e),hideResourceLoadError:()=>$.hideResourceLoadError()}),nr({showBlockingResourceWait:e=>$.showResourceLoading(e),hideBlockingResourceWait:()=>$.hideResourceLoading()});function Im(e){return`game`}function Lm(e){return new URLSearchParams(e).get(`guest`)!==`0`}var Rm=e=>{let t=zm(e);if(console.error(e),Pm){Pm.showRuntimeError(t);return}$.showBootError(t)};window.addEventListener(`error`,e=>{Rm(e.error??e.message)}),window.addEventListener(`unhandledrejection`,e=>{Rm(e.reason)}),(async()=>{try{$.showBootStatus({phase:`loadingManifest`});let e=Im(window.location.search),t=window.RPGVXAceWeb?.resolveManifest?Zn.fromJson(e,await window.RPGVXAceWeb.resolveManifest(e)):await qp(e),n=new Kp(t);um(n);let r=window.RPGVXAceWeb?.resourceFetchAdapter;r&&Gr(r);let i=window.RPGVXAceWeb?.saveStorageAdapter;i&&dm(i),t.metadata.title&&(document.title=t.metadata.title),$.showBootStatus({phase:`loadingFonts`});let a=await Jp(n);$.showBootStatus({phase:`loadingRubyRuntime`});let o=await fetch(Qn);if(!o.ok){let e=o.statusText?` ${o.statusText}`:``;throw Error(`Ruby runtime fetch failed: HTTP ${o.status}${e}`)}let s=await o.arrayBuffer(),c=await WebAssembly.compile(s);$.showBootStatus({phase:`initializingRubyVm`});let{vm:l}=await Yt(c);l.printVersion();let u=new jm(l);Pm=await dp.create({assetProvider:n,element:Mm,fontRenderMetrics:a,presenter:$}),$.mount({screenElement:Pm.screenElement}),Fm=new zp({app:Pm,appElement:Mm,assetProvider:n,localeController:Nm}),window.rubyBridge={rubyManager:u,app:Pm,playerShell:Fm,localeController:Nm,gameDir:e,gameId:t.id,utils:Om},$.showBootStatus({phase:`startingGame`});let d=`Graphics.resize_screen(${t.screen.width}, ${t.screen.height})`,f=[nm,`RPGVXAceWeb::Internal.game_dir = ${JSON.stringify(e)}`,`RPGVXAceWeb::Internal.game_id = ${JSON.stringify(t.id)}`,d].join(`
`),p=Lm(window.location.search)?[rm,d].join(`
`):f;for(u.push(p,`runtime-bootstrap`);u.hasCode();)await u.evalAsyncCode()}catch(e){Rm(e)}})();function zm(e){if(e instanceof km){let t=Bm(e.cause);return`[${e.label}]\n${t}`}return Bm(e)}function Bm(e){return e instanceof Error?e.stack||`${e.name}: ${e.message}`:String(e)}export{Xl as n,pc as r,Qu as t};
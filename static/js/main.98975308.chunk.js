(this.webpackJsonpcurdlist=this.webpackJsonpcurdlist||[]).push([[0],{13:function(e,t,r){},14:function(e,t,r){"use strict";r.r(t);var n=r(0),s=r(1),u=r.n(s),c=r(7),o=r.n(c),a=(r(13),r(2)),i=r(3),d=r(5),l=r(4),p=function(e){return Object(n.jsxs)("form",{onSubmit:e.addCourse,children:[Object(n.jsx)("input",{type:"text",value:e.current,onChange:e.updateCourse,placeholder:"Enter Your Course"}),Object(n.jsx)("button",{children:"Add Course"})]})},j=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(a.a)(this,r);for(var s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];return(e=t.call.apply(t,[this].concat(u))).state={isEdit:!1},e.renderCourse=function(){return Object(n.jsxs)("li",{children:[Object(n.jsxs)("span",{children:[" ",e.props.details.name]}),Object(n.jsx)("button",{onClick:function(){return e.toggleState()},children:"Edit Course"}),Object(n.jsx)("button",{onClick:function(){return e.props.deleteCourse(e.props.index)},children:"Delete Course"})]})},e.toggleState=function(){var t=e.state.isEdit;e.setState({isEdit:!t})},e.updateCourseItem=function(t){t.preventDefault(),e.input.value?(e.props.editCourse(e.props.index,e.input.value),e.toggleState()):e.input.placeholder="Must enter course in this field"},e.renderUpdateForm=function(){return Object(n.jsxs)("form",{onSubmit:e.updateCourseItem,children:[Object(n.jsx)("input",{type:"text",ref:function(t){return e.input=t},defaultValue:e.props.details.name}),Object(n.jsx)("button",{children:"Update Course"})]})},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this.state.isEdit;return Object(n.jsx)(n.Fragment,{children:e?this.renderUpdateForm():this.renderCourse()})}}]),r}(s.Component),h=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,s=new Array(n),u=0;u<n;u++)s[u]=arguments[u];return(e=t.call.apply(t,[this].concat(s))).state={courses:[{name:"HTML"},{name:"CSS"},{name:"JAVASCRIPT"}],current:""},e.updateCourse=function(t){e.setState({current:t.target.value})},e.addCourse=function(t){t.preventDefault();var r=e.state.courses,n=e.state.current;n&&(r.push({name:n}),e.setState({courses:r,current:""}))},e.deleteCourse=function(t){var r=e.state.courses;r.splice(t,1),e.setState({courses:r})},e.editCourse=function(t,r){var n=e.state.courses;n[t].name=r,e.setState({courses:n})},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this,t=this.state.courses.map((function(t,r){return Object(n.jsx)(j,{details:t,index:r,deleteCourse:e.deleteCourse,editCourse:e.editCourse},r)}));return Object(n.jsxs)("section",{className:"App",children:[Object(n.jsx)("h2",{children:"Add Course"}),Object(n.jsx)(p,{current:this.state.current,updateCourse:this.updateCourse,addCourse:this.addCourse}),Object(n.jsx)("ul",{children:this.state.courses.length>0?t:Object(n.jsx)("h2",{children:"All Courses Deleted"})})]})}}]),r}(s.Component),C=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,15)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,u=t.getLCP,c=t.getTTFB;r(e),n(e),s(e),u(e),c(e)}))};o.a.render(Object(n.jsx)(u.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root")),C()}},[[14,1,2]]]);
//# sourceMappingURL=main.98975308.chunk.js.map
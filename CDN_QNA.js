<!--
////////////////////////////////////////////////////////////////////////////////
///////////////////////////[COMMENTS START]/////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Requires Bootstrap
// Webkit browsers prefered (Chrome,Fireforx,Safari)
// This code is not supported, use at your own risk and discretion
////////////////////////////////////////////////////////////////////////////////
///////////////////////////[COMMENTS END]///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
-->


<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
<!-- Optional theme -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossorigin="anonymous">
<!-- Latest compiled and minified JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>

<script type="text/javascript" charset="utf-8">

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////[START FN Prototypes]///////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//Fix for IE Trim
// Adding trim function to String object
if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g, '');
  }
}
/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////[END FN Prototypes]///////////////////////////
/////////////////////////////////////////////////////////////////////////////////
</script>	

</head>

	<body id='main_body'>

		<div id='modal_report_running'class="modal fade" tabindex="-1" role="dialog">
		  <div class="modal-dialog">
			<div class="modal-content">
			  <div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title"><span class="glyphicon glyphicon-refresh"></span> Hold on for a bit... </h4>
			  </div>
			  <div class="modal-body">
				<p>A Query or Report is running in the background. Your browser may seem to be unresponsive while queries are running. This is normal until all queries have completed. Once all queries have completed, your browser will return responsive control. If you are asked to kill active running javascripts, select NO, and allow the scripts to continue to run. Forcing scripts to end will cause unpredictable behavior.</p>
			  </div>
			  <div class="modal-footer">
				<!--<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>-->
				
					<div class="progress">
					  <div  class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
							Query in progress
					  </div>
					</div>
			  </div>
			</div><!-- /.modal-content -->
		  </div><!-- /.modal-dialog -->
		</div><!-- /.modal -->

		<div class='tab1_container'>
			<div class="well">
				<div class="panel panel-primary">
					<div class="panel-heading">
						<i class="fa fa-dashboard fa-fw"></i>
						<span class="panel-title"><font size="2"><b>Bigfix QNA Util POC</b></font><br><font size="1"> * POC *</font></span>
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-lg-12">			
								<ul class="nav nav-tabs">
								 <li id='tab5'><a data-toggle="tab" href="#tab5target"><span class="glyphicon glyphicon-cog"></span> QNA</a></li>
								  <li id='tab4'><a data-toggle="tab" href="#tab4target" class="debugdivs"><span class="glyphicon glyphicon-cog"></span> Debug</a></li>
								</ul>

								<div class="tab-content">

								  
								  <!--Tab Contents Start-->
								  <div id="tab4target" class="tab-pane fade debugdivs">
									<h4 align="center"><span class="glyphicon glyphicon-cog"></span> Debug Information</h4>
									<br>
										<div class="well">
											<div id='div_debug' style="height:400px;overflow:scroll;padding:5px;border:1px dashed #DEBB07;"></div>
											<br>
											<a id='run_test_report_btn' class="btn btn-default report_launch_button" role="button"><span class="glyphicon glyphicon-play"></span>Test Fn</a>
										</div>
								   </div>	
								  <!--Tab Contents End-->	

								  <!-- Tab Contents Start-->
									 <div id="tab5target" class="tab-pane fade">
										<h4 align="center"><span class="glyphicon glyphicon-th-list"></span> QNA</h4>
										<br>
										<form role="form">
											<fieldset id="ui_reportype_qna_wrapper" align="left" class="form-group">
												<div class="well">
													<div class="panel panel-primary">
														<div class="panel-heading">
															<i class="fa fa-dashboard fa-fw"></i>
															<span class="glyphicon glyphicon-cog"></span>
															<label class="customtooltip_onload" data-original-title="Enter your sesssion relevance query here.">QNA Utility: </label>
														</div>
														<div class="panel-body">
															<div class="row">
																<div class="col-md-8">
																	<div class="panel panel-primary">
																		<div style="height:300px" class="well">
																			<div class="row">
																				<div class="col-md-12">
																					<textarea id='qna_query' rows="10" class="form-control"></textarea>
																				</div>	
																			</div>
																			<br>
																			<div class="row">
																				<div class="col-md-12">
																					<div class="input-group">	
																						<a id='run_qna_btn' class="btn btn-default" role="button"><span class="glyphicon glyphicon-play"></span> Run Query</a>
																						 <span> </span>
																					</div>	
																				</div>	
																			</div>
																		</div>
																	</div>
																</div>	
																<div class="col-md-4">	
																	<div class="panel panel-primary">
																		<div class="panel-body">
																			<div style="height:293px;overflow: auto;">
																				<div id='query_qna_queue' class="list-group">
																				</div>
																			</div>
																		</div>	
																	</div>	
																</div>																			
															</div>
															<div class="row">
																<div id='qna_result_div_wrapper'>
																	<div class="col-md-12">
																		<div class="panel panel-primary">
																			<div class="panel-heading">Query Results</div>
																			<div class="panel-body">
																				<div id='qna_result_div_active'>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>				
															</div>
														</div>	
													</div>	
												</div>	
											</fieldset>	
										</form>	
									</div><!--Tab End-->
								 </div><!--Tab Contents End-->
							</div><!--End Colmn-->
						</div><!--End Row-->
					</div><!--End Panel Body-->					
				</div><!--Pannel Body End-->
			</div><!--Welll End-->
		</div>	<!--Tab Container End-->
	</body>
	<script type="text/javascript" charset="utf-8">
//****************************************************************************************************
//***************************************[GLOBAL VARIABLES]*******************************************
//****************************************************************************************************
//****************************************************************************************************		


 var global_query_cnter = 0
 var global_query_aync_cnter = 0
 var global_event_cnter = 0
 var global_event_total_cnter = 0
 var global_report_type_cnter = 0
 var global_query_qna_cnter = 0
 var global_event_cnter_limit = 200


 //QNA Query tracker
 var global_qna_query=new Array()
 //These variables are globally managed by the report END	
//****************************************************************************************************
//***************************************[GLOBAL VARIABLES]*******************************************
//****************************************************************************************************
//****************************************************************************************************


function js_onload(){

	js_debug('FN Run Start js_onload')	
	//function is fired upon load
	//log revision
	js_debug("ver1.a")

			  //wire up main report button
			  $('#run_qna_btn').click(function(){ 
					js_run_qna()
			  })			  
			  
			//set up modal and hide
			$('#modal_report_running').modal() 
			$('#modal_report_running').modal('hide') 

			//Wire up Test button
			$('#run_test_report_btn').click(function(){ 
				js_test()
			})
			//Set default tab
			js_activetab('tab5target')
						 	 
			//Enable tooltips
			$('.customtooltip_onload').tooltip();	
			
			//show debug menu item and tab
				$('#div_debug').show()
				$('#tab4').show()
				
			//Loads group dropdown select list
			js_debug('FN Run Complete js_onload')	
}




function js_run_qna(){
	 var query = $("#qna_query").val()

	if (query == ''){
		alert('AVP Report Factory UI Validation Error\n\n Description: A query has not been provided. \n\n')
		return;
	}	
	else {
			js_debug("Sending QNA Query: " + query);
			$('#qna_result_div_wrapper').show('slide')
			var qnatrack = new Object()
			var s0 = new Date()
			var s1 = s0.getTime()
			qnatrack.start = s0
			qnatrack.query = query

			var tmp = ''
			tmp += '<div class="panel panel-primary">'
			tmp += '<div class="panel-body">'
			
			tmp += '<span><b>Query ID:</b></span><span>'+ global_query_qna_cnter  +'</span>'
			tmp += '<br><span><b>Query:</b></span><span>'+ qnatrack.query +'</span>'
			
			var dt = new Date();
			var utcDate = dt.toUTCString();	
			
			tmp += '<br><span><b>Evaluation Time:</b></span><span>Query in progress since: ' + utcDate +'</span>'
			tmp += '</div>'
			tmp += '</div>'
			
			$("#qna_query").val(qnatrack.query)
			$('#qna_result_div_active').html(tmp)
			

			var callback =function(ret,qnatrack){
					qnatrack.callnumber = global_query_qna_cnter
					global_query_qna_cnter++
						
				
				js_debug("Returning QNA Query: " + qnatrack.query);

				if ((typeof(ret)) == 'object') {
		
					if ((Array.isArray(ret)) == true){
						 //Variable Length Object Return
						 var multi_type_results = ''
						 for( var i = 0; i < ret.length; i++ ) {
							multi_type_results += (ret[i]) + "<br/>";
						  } 
						  qnatrack.result = multi_type_results	
						  qnatrack.objecttype = '[Plural]'
						  qnatrack.plural_len = ret.length
						}
						else {
						  //Singular Length Object Return
						   qnatrack.result = ret
						   qnatrack.objecttype = '[Singular]'
						}
					}
				else {
				
						//Singular Return
						qnatrack.result = ret
						qnatrack.objecttype = ''
					}
					
				var e0 = new Date()
				var e01 = e0.getTime()
				qnatrack.end = e01
				qnatrack.mstime = ((((e01 - s1)/ 1000.0).toFixed(4)).toString())
				qnatrack.type = typeof(ret)
				qnatrack.success = true
				global_qna_query.push(qnatrack)
				js_run_qna_add_tile(qnatrack.callnumber)		
				js_run_qna_load_result_to_main(qnatrack.callnumber)
			}

			js_async_relevance_qna(query,callback,qnatrack)

	}
	
}

function js_run_qna_add_tile(qnatrackcallnumber){
	qnatrack = global_qna_query[qnatrackcallnumber]
	var addto = ''
		
		addto += '<div class="list-group-item">'																	 
		addto += '	<div class="row">'
		addto += '		<div class="col-md-1"><span class="glyphicon glyphicon-credit-card"></span></div>'
		addto += '		<div class="col-md-9"></div>'
		addto += '		<div class="col-md-2"><label><small>Id:' +qnatrack.callnumber+ '</small></label></div>'
		addto += '	</div>'
		addto += '	<div class="row">'
		addto += '		<div class="col-md-12">'
		addto += '         <span style="height:200px; overflow:auto; word-wrap: break-word;" class="text-left">'
		addto += '		      <strong>Q:</strong>'
		if(qnatrack.success ==  true) {
			addto += '		      <font color="green"><small>'+qnatrack.query+'</small></font>'
		}
		else {
			addto += '		      <font color="red"><small>'+qnatrack.query+'</small></font>'	
		}
		addto += '          </span>'
		addto += '      </div>'
		addto += '	</div>'
		addto += '	<div class="row">'
		if(qnatrack.success ==  true) {
			addto += '		<div class="col-md-1"><small>T:'+qnatrack.mstime +'</small></div>'
		}
		else {
			addto += '		<div class="col-md-1"><small><font color="red">Error</font></small></div>'
		}
		addto += '		<div class="col-md-9"></div>'
		
		var anc = '<a href="javascript:void(0);" onclick="js_run_qna_load_result_to_main(\''+ qnatrack.callnumber + '\'); return false;"><span" class="customtooltip_std_query" data-original-title="Click here to view results">' + '<small>Load</small>' + '</span></a>'
		addto += '		<div class="col-md-2">'+anc+'</div>'
		addto += '	</div>'
		addto += '</div>'		
		$('#query_qna_queue').prepend(addto)
}

function js_run_qna_load_result_to_main(qnatrackcallnumber){
	qnatrack = global_qna_query[qnatrackcallnumber]
	var a0 = new Date()
	var a1 = a0.getTime()	
	
	$('#qna_result_div_active').html('')
	var tmp = ''
	tmp += '<div class="panel panel-primary">'
	tmp += '<div class="panel-body">'
	
	tmp += '<span><b>Query ID:</b></span><span>'+ qnatrack.callnumber +'</span>'
	tmp += '<br><span><b>Query:</b></span><span style="overflow:auto; word-wrap: break-word;">'+ qnatrack.query +'</span>'
	if (qnatrack.success == true){
		tmp += '<br><span><b>Query Evaluation Time:</b></span><span>'+ qnatrack.mstime +' seconds </span>'
		tmp += '<br><span><b>Query Resulting Data Type:</b></span><span>'+ qnatrack.type + ' ' + qnatrack.objecttype + '</span>'
	
		if (qnatrack.objecttype !== "undefined" ) {
			if (qnatrack.objecttype == "Plural" )
			tmp += '<br><span><b>Query Resulting Data Object Array Length:</b></span><span>'+ qnatrack.plural_len + '</span>'	
		}
		tmp += '<br><span><b>Browser Render Time:</b></span><span id="qna_browser_render_time"></span>'	
	}	
	else {
		tmp += '<br><span><b>Error:</b></span><span><font color="red">'+qnatrack.errormsg+'</font></span>'
	}
	
	tmp += '</div>'
	tmp += '</div>'
	
	if (qnatrack.success == true){
		tmp += '<span><b>Results:</b></span><br><span>'+ qnatrack.result +'</span>'
	}
	
	$("#qna_query").val(qnatrack.query)
	$('#qna_result_div_active').html(tmp)
	
	var b0 = new Date()
	var b1 = b0.getTime()
	var rendertime = ((((b1 - a1)/ 1000.0).toFixed(3)).toString())	
	
	$('#qna_browser_render_time').html(rendertime)
}

function js_async_relevance_qna( query, callback, tmpobj ){

	 Relevance( query, { 
	   success: function ( result ) { 
			callback( result, tmpobj ); 
	   },  
	   failure: function ( error ) {
		   
			var tmp = ''
			tmp += '<div class="panel panel-danger">'
			tmp += '<div class="panel-body">'
			tmp += '<span><b>Query ID:</b></span><span>'+ global_query_qna_cnter  +'</span>'
			tmp += '<br><span><b>Query:</b></span><span>'+ query +'</span>'
			var dt = new Date();
			var utcDate = dt.toUTCString();			
			tmp += '<br><span><b>Error:</b></span><span> <font color="red">' + error +' </font></span>'
			tmp += '<br><span><b>Call Completed:</b></span><span> <font color="red">' + utcDate +' </font></span>'
			tmp += '</div>'
			tmp += '</div>'
			$('#qna_result_div_active').html(tmp)		   
		   
				var errdesc = '<font color="red">Returning QNA Query Error </font>'
					errdesc += '<BR><font color="red"> Query=' + query + '</font>'
					errdesc += '<BR><font color="red">ERROR:' +  error+ '</font>'
				js_debug(errdesc)
				var qnatrack = tmpobj
				qnatrack.callnumber = global_query_qna_cnter
				qnatrack.mstime = '0'
				qnatrack.type = 'Error'
				qnatrack.success = false
				qnatrack.errormsg = error
				global_query_qna_cnter++
				global_qna_query.push(qnatrack)
				js_run_qna_add_tile(qnatrack.callnumber)		
				
	   } 
	 },tmpobj)
}

function js_test(){
	var qstring = 'number of bes fixlets whose (name of it contains "Java")'
	var tmpobj = '123432432'
	var callback = js_test_callback
	js_async_queue (qstring, callback, tmpobj)
	
	var qstring = 'number of bes computers'
	var tmpobj = '123432432'
	var callback = js_test_callback
	js_async_queue (qstring, callback, tmpobj)

	var qstring = 'number of bes fixlets'
	var tmpobj = '123432432'
	var callback = js_test_callback
	js_async_queue (qstring, callback, tmpobj)
		
}
	
function js_test_callback(result,tmpobj){
	//alert(result)
	//alert(tmpobj)
}
	
/////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////[Async_Relevance START ]//////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
	//Global Vars
	var global_total_open_query_counter = 0							//Counter keeps tracks of calls in and out will be 0 if all returned
	var global_total_query_error_counter = 0						//Counter keeps track of total errors
	var global_query_queue_call_threshold = 2						//Global limiter to number of calls open...	
	var global_query_queue_instance_tracker 						//global_query_queue_instance_tracker keeps track of how many times the queue caller has called back to itself...
	var global_query_queue_call_multiplier = 20						//delay setting for calls
	var global_query_queue_call_delay_max_ms = 1500					//Maximum number of milliseconds to delay calls
	var global_query_queue_initialized = false						//Global for initializing Queue
	var global_query_queue_start_time = new Date()					//This sets the initial start time that the queue was created so we can calulate things like queries per sec
	var global_query_queue_total_batch_progress_counter = 0			//This is a running counter of calls that have called back to the call_back (ie. Completed Calls ran through queue)
	var global_total_batch_total_counter = 0						
	var global_total_batch_success_counter = 0 
	var global_query_queue_debug = false

function js_async_queue_reset(){
	global_query_queue_initialized = false
}
	
function js_async_queue(query,callback,tmpobj){
	if (global_query_queue_debug == true) {js_debug('caller=' + arguments.callee.caller.name)}
	//if the query queue has not been initialized... then lets set the instance tracker to sub one of the threshold initially 
	//and then set the global_query_queue_initialized variable to know we have the queue initialized, we also start the timer...
	//the critical piece is this code, should only run the first time the queue is initialized, NOT per query... but only the first time. 
	if (global_query_queue_initialized == false) {
		if (global_query_queue_debug == true) {js_debug('A Async Query Queue has been initialized')}
		global_query_queue_instance_tracker = global_query_queue_call_threshold -1 //global_query_queue_instance_tracker keeps track of how many times the queue caller has called back to itself...
		global_query_queue_initialized = true //by setting this breadcrumb we will not loop back into this if statement, until the initialization var is reset back to false, which should only occur if the same var was set to false		
		//Setting the defaults
		global_total_batch_total_counter = 0 //This is the total amount of queries throwm to the queue		
		global_total_batch_success_counter = 0 //This is the total amount of successful queries that have completed
		global_query_queue_total_batch_progress_counter = 0 //This is a running counter of calls that have called back to the call_back (ie. Completed Calls ran through queue)
		global_query_queue_start_time = new Date() //This sets the initial start time that the queue was created so we can calulate things like queries per sec
	}

	if (arguments.callee.caller.name == 'js_query_queue_sendbacktoqueue') {
		//the fn called itself
		//This statement should only run when the function been called byitself
		//This allows me to keep track of how many calls should be processed by the queue. 
		//If the function is called by itself it is being pushed back in the queue, if it is called by an external function that means we have a new call into the queue
		if (global_query_queue_debug == true) {js_debug('Caller=backtoque')}	
	} else {
		if (global_query_queue_debug == true) {js_debug('Caller=called externally')}
		global_total_batch_total_counter++
	}
	
	//global_query_queue_instance_tracker keeps track of how many times the queue caller has called back to itself...
	global_query_queue_instance_tracker ++

	 // so if the number of open calls is > the number of calls limited by the queue then lets sleep a bit, and multiply the instance tracker
	 if (global_total_open_query_counter > global_query_queue_call_threshold) { 
	 
		//Check in a few miliseconds * the ms multiplyer... So as more queue calls get behind, we should slow down
		//The name of this function is important, as this is how we know if the function called back to itself
		if (global_query_queue_call_delay_max_ms >  global_query_queue_call_multiplier * global_query_queue_instance_tracker )
			{var msdelay = global_query_queue_call_multiplier * global_query_queue_instance_tracker}
		else {
			var msdelay = global_query_queue_call_delay_max_ms
		}
		setTimeout(function js_query_queue_sendbacktoqueue(){
			js_async_queue(query,callback,tmpobj)
		 }, msdelay )
	  } 
	  
	  else {
		//there is some space in the queue - fire another query
		
		//So here we are defining the callback after when we recieve the call back from the async handler
		/////////////query_queue_wrapped_callback/////////////
		/////////////[         START            ]/////////////
		/////////////query_queue_wrapped_callback/////////////
		var query_queue_wrapped_callback = (function (result,tmpobj){
			if (global_query_queue_debug == true) {js_debug('In query_queue_wrapped_callback')}
			
			global_query_queue_total_batch_progress_counter ++	
			global_total_batch_success_counter ++
			//js_query_queue_ui_update_statistics()

				//Last Step, Call Passed in Callback
				if (global_query_queue_debug == true) {js_debug('Exiting Query Queues doublefire callback, calling passed in fn')}
				callback(result,tmpobj)
		});
		js_async_relevance(query, query_queue_wrapped_callback, tmpobj)
		global_query_queue_instance_tracker = 0 //this resets the queue instance tracker (which keeps track of how many times the queue has called itself)
	  }
}	

function js_async_relevance( query, callback, tmpobj ){
		global_query_aync_cnter++
		global_total_open_query_counter++
		var qtrack = new Object()
		var s0 = new Date()
		var s1 = s0.getTime()
		qtrack.start = s0
		qtrack.query = query
		qtrack.callnumber = global_query_aync_cnter	
		js_debug('Async Query Executing [ID=' + global_query_aync_cnter +'] Query= ' + query)

	 Relevance( query, { 
	   success: function ( result ) { 
			var e0 = new Date()
			var e1 = e0.getTime()
			qtrack.end = e1
			qtrack.mstime = ((e1 - s1).toString())
			js_debug('Returning Async Query: [ID=' + qtrack.callnumber + '] Query=' + query + ' Evaltime:' +  qtrack.mstime)
			global_total_open_query_counter = global_total_open_query_counter -1
			callback( result, tmpobj ); 
	   },  
	   failure: function ( error ) {
			global_total_query_error_counter++
			global_total_open_query_counter = global_total_open_query_counter -1
			alert('Returning Async Query Error: \n Query: ' + query + ' \n\n Error: ' + error);
				var errdesc = '<font color="red">Returning Async Query Error: [ID=' + qtrack.callnumber + '] </font>'
					errdesc += '<BR><font color="red"> Query=' + query + '</font>'
					errdesc += '<BR><font color="red">ERROR:' +  error+ '</font>'
				js_debug(errdesc)
	   } 
	 },qtrack, tmpobj);
}
/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////[Async_Relevance END ]///////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////


$(document).ready( function () {
		js_onload()
})	
		
//****************************************************************************************************
//**************************************[SUPPORTING FUNCTION]*****************************************
//****************************************************************************************************
//****************************************************************************************************
function js_randomint() {
  return Math.floor(Math.random() * (1000000000000 - 0 + 1)) + 0;
}

function js_activetab(tab){
    $('.nav-tabs a[href="#' + tab + '"]').tab('show');
};

function js_debug(varin){
	global_event_cnter++
	global_event_total_cnter++
	var dt = new Date();
	var utcDate = dt.toUTCString();	
	if (global_event_cnter > global_event_cnter_limit){
		global_event_cnter =0
		$('#div_debug').html('')
		$('#div_debug').append('<br><b><font size="2" color="black">+EVENT Log Rolled (' + utcDate + ')</font></b>')
	}
	
	$('#div_debug').append('<br><font size="2" color="blue">+EVENT ['+ global_event_total_cnter +'] - (' + utcDate + ')</font><br>')
	$('#div_debug').append( '<font size="2" color="black">  DESC: ' + varin + '</font>')		
}


function js_replaceall( text, invar, out ){
	//Replaces all text vars from a string (note will not work on an array, needs to be called per element in that case)
	var ret = text.split(invar).join(out);
	return ret;
}


function js_relevance(q){
	global_query_cnter++
	var a = Date.now();
	js_debug('Executing Query [ID=' + global_query_cnter +'] = ' + q)
	var ret = EvaluateRelevance(q)	
	var b = Date.now();
	var mscounter = (b-a)
	js_debug('Query [ID=' + global_query_cnter +'] Complete in: ' + mscounter + 'ms')
	return ret
}


</script>
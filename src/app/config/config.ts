export const config = {
    'interviewRounds': [{ 'name': 'First Round', 'value': 'first_round' }, { 'name': 'Second Round', 'value': 'second_round' }, { 'name': 'Third Round', 'value': 'third_round' }],
    'userType': ['Admin', 'Hr', 'Guest', 'Interviewee', 'Candidate'],
    'mobileNoPrefix': '+91',
    'testMaxtime': 7200000,
    'titles': { '/core/dashboa': 'Dashboard', '/core/setting': 'Settings', '/core/inbox': 'Inbox', '/core/inbox/e': 'Inbox', '/core/email-t': 'Email Tracking', '/core/intervi': 'Inbox'},
    'roles': { 'HR': ['/core/setting/emailtemplate', '/core/setting/createQuestion', '/core/setting/pendingCandidate', '/core/setting/candidateScore', '/core/setting/emailvariable', '/core/setting/tagsetting', '/core/setting/automaticTags', '/core/setting/jobProfileTags', '/core/inbox', '/core/setting/resetPassword', '/core/dashboard'], 'Guest': ['/core/inbox', '/core/setting/resetPassword', '/core/dashboard'], 'Interviewee': ['/core/interviewee-inbox', '/core/setting/resetPassword', '/core/dashboard']},
    'dashboardChartColor': [
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // green
            backgroundColor: 'rgba(50,205,50,0.2)',
            borderColor: 'rgba(50,205,50,1)',
            pointBackgroundColor: 'rgba(50,205,50,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(50,205,50,0.8)'
        }
    ],
    dashboardChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        animation: {
            easing: 'easeInQuad'
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    },
    dashboardPieChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
    },
    dashboardChartRefreshTime: 60000,
    fetchMailInterval: 300000,
    scheduleInterviewBy: 'scheduleByDirect',
    emailTrackingRecordPerPage: 100,
    round1: 'First Round',
    round2: 'Second Round',
    round3: 'Third Round',
    avatarUrl: 'https://pikmail.herokuapp.com',
    emailLimit: 20,
    allTagTitle: 'Mails/Attachment'
}
export const color_list = ['#cb891b', '#ef2e46', '#ff5722', '#ba21d3', '#f3b08c', '#f0793d', '#eb7303', '#db62e9', '#ffeb3b', '#3882b8'];
export const instructions = [
    "The test consists of 3 sections <b>Aptitude, English, Logical.</b> There is a time limit of <b>1 hr.</b>",
    "Press “Finish & Submit” only after you have completed all 3 sections.",
    "Do not <b>close/refresh</b> the test at all in between, if you do you will might have to start your test paper from scratch.", 
    "Test is given best in landscape mode. So change your mobile display to landscape mode.", 
    "Do not open any other tabs in your browser, if you open a new tab it will get recorded." 
    ];
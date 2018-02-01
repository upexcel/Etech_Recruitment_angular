export const config = {
    'interviewRounds': [{ 'name': 'First Round', 'value': 'first_round' }, { 'name': 'Second Round', 'value': 'second_round' }, { 'name': 'Third Round', 'value': 'third_round' }],
    'userType': ['Admin', 'Hr', 'Guest', 'Interviewee', 'Candidate'],
    'mobileNoPrefix': '+91',
    'testMaxtime': 7200000,
    'fb_version': 'v2.11',
    'titles': { '/core/dashboa': 'Dashboard', '/core/setting': 'Settings', '/core/inbox': 'Inbox', '/core/inbox/e': 'Inbox', '/core/email-t': 'Email Tracking', '/core/intervi': 'Inbox'},
    'roles': { 'HR': ['/core/setting/emailtemplate', '/core/setting/emailvariable', '/core/setting/tagsetting', '/core/setting/automaticTags', '/core/setting/jobProfileTags', '/core/inbox', '/core/setting/resetPassword', '/core/dashboard'], 'Guest': ['/core/inbox', '/core/setting/resetPassword', '/core/dashboard'], 'Interviewee': ['/core/interviewee-inbox', '/core/setting/resetPassword', '/core/dashboard']},
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
    scheduleInterviewBy: 'scheduleByDirect',
    emailTrackingRecordPerPage: 100
};
export const color_list = ['#cb891b', '#ef2e46', '#ff5722', '#ba21d3', '#f3b08c', '#f0793d', '#eb7303', '#db62e9', '#ffeb3b', '#3882b8'];

import EducationIcon from '~/components/icons/Profile/EducationIcon'
import HomeTownIcon from '~/components/icons/Profile/HomeTownIcon'
import JobIcon from '~/components/icons/Profile/JobIcon'
import RelationshipIcon from '~/components/icons/Profile/RelationshipIcon'

interface Props {
  profile: UserProfile | null
  setShowModal: (value: React.SetStateAction<boolean>) => void
}

const relationshipStatuses = [
  'Độc thân',
  'Đang hẹn hò',
  'Đang tìm hiểu',
  'Phức tạp',
  'Đã kết hôn',
  'Đã kết hôn',
  'Đã ly hôn',
  'Không xác định'
]

const ProfileItem = ({ icon, title, text }: { icon: JSX.Element; title: string; text: string }) => (
  <li className='flex items-center gap-3'>
    {icon}
    <div>
      {title} <span className='font-semibold text-black dark:text-white'>{text}</span>
    </div>
  </li>
)

function Introduce({ profile, setShowModal }: Props) {
  const getRelationshipStatus = (status: number) => relationshipStatuses[status] || 'Không xác định'

  return (
    <div className='lg:w-[400px]'>
      <div
        className='max-lg:grid max-lg:gap-6 sm:grid-cols-2 lg:space-y-4 lg:pb-8'
        uk-sticky='media: 1024; end: #js-oversized; offset: 80'
      >
        <div className='box p-5 px-6'>
          <div className='items-ce flex justify-between text-black dark:text-white'>
            <h3 className='text-lg font-bold'> Giới thiệu </h3>
            <a className='cursor-pointer text-sm text-blue-500' onClick={() => setShowModal(true)}>
              Chỉnh sửa
            </a>
          </div>
          <ul className='mt-4 space-y-4 text-sm text-gray-700 dark:text-white/80'>
            {profile?.Profile.home_town && (
              <ProfileItem icon={<HomeTownIcon />} title='Sống tại' text={profile.Profile.home_town} />
            )}
            {profile?.Profile.education && (
              <ProfileItem icon={<EducationIcon />} title='Học tại' text={profile.Profile.education} />
            )}
            {profile?.Profile.job && <ProfileItem icon={<JobIcon />} title='Làm việc tại' text={profile.Profile.job} />}
            {profile?.Profile.relationship_status && profile.Profile.relationship_status < 6 && (
              <ProfileItem
                icon={<RelationshipIcon />}
                title='Tình trạng'
                text={getRelationshipStatus(profile.Profile.relationship_status - 1)}
              />
            )}
            <li className='flex items-center gap-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                />
              </svg>
              <div>
                Có <span className='font-semibold text-black dark:text-white'> 3,240 </span> người theo dõi
              </div>
            </li>
          </ul>
          {/* Hobbies */}
          {profile?.Interests && (
            <div className='mt-4 flex flex-wrap gap-1 text-sm font-semibold capitalize'>
              {profile.Interests.map((interest) => (
                <div
                  key={interest.interest_id}
                  className='inline-flex items-center gap-2 rounded-full border border-gray-100 px-2.5 py-0.5 shadow'
                >
                  {interest.interest_name}
                </div>
              ))}
            </div>
          )}
          <div className='mb-2 mt-4 grid grid-cols-2 gap-1 overflow-hidden rounded-lg text-center text-sm'>
            <div className='relative aspect-[4/3] w-full'>
              <img src='src/assets/images/avatars/avatar-5.jpg' alt='' className='inset-0 h-full w-full object-cover' />
            </div>
            <div className='relative aspect-[4/3] w-full'>
              <img src='src/assets/images/avatars/avatar-7.jpg' alt='' className='inset-0 h-full w-full object-cover' />
            </div>
            <div className='relative aspect-[4/3] w-full'>
              <img src='src/assets/images/avatars/avatar-4.jpg' alt='' className='inset-0 h-full w-full object-cover' />
            </div>
            <div className='relative aspect-[4/3] w-full'>
              <img src='src/assets/images/avatars/avatar-6.jpg' alt='' className='inset-0 h-full w-full object-cover' />
            </div>
          </div>
        </div>
        <div className='box p-5 px-6'>
          <div className='items-ce flex justify-between text-black dark:text-white'>
            <h3 className='text-lg font-bold'>
              Bạn bè
              <span className='mt-0. block text-sm font-normal text-gray-500 dark:text-white'> 3489 Bạn bè </span>
            </h3>
            <a href='#' className='text-sm text-blue-500'>
              Tìm bạn
            </a>
          </div>
          <div className='mb-2 mt-4 grid grid-cols-3 gap-2 gap-y-5 text-center text-sm'>
            <div>
              <div className='relative aspect-square w-full overflow-hidden rounded-lg'>
                <img
                  src='src/assets/images/avatars/avatar-7.jpg'
                  alt=''
                  className='inset-0 h-full w-full object-cover'
                />
              </div>
              <div className='mt-2 line-clamp-1'> Jesse Steeve </div>
            </div>
            <div>
              <div className='relative aspect-square w-full overflow-hidden rounded-lg'>
                <img
                  src='src/assets/images/avatars/avatar-2.jpg'
                  alt=''
                  className='inset-0 h-full w-full object-cover'
                />
              </div>
              <div className='mt-2 line-clamp-1'> John Michael </div>
            </div>
            <div>
              <div className='relative aspect-square w-full overflow-hidden rounded-lg'>
                <img
                  src='src/assets/images/avatars/avatar-3.jpg'
                  alt=''
                  className='inset-0 h-full w-full object-cover'
                />
              </div>
              <div className='mt-2 line-clamp-1'> Monroe Parker </div>
            </div>
            <div>
              <div className='relative aspect-square w-full overflow-hidden rounded-lg'>
                <img
                  src='src/assets/images/avatars/avatar-4.jpg'
                  alt=''
                  className='inset-0 h-full w-full object-cover'
                />
              </div>
              <div className='mt-2 line-clamp-1'> Martin Gray </div>
            </div>
            <div>
              <div className='relative aspect-square w-full overflow-hidden rounded-lg'>
                <img
                  src='src/assets/images/avatars/avatar-5.jpg'
                  alt=''
                  className='inset-0 h-full w-full object-cover'
                />
              </div>
              <div className='mt-2 line-clamp-1'> James Lewis </div>
            </div>
            <div>
              <div className='relative aspect-square w-full overflow-hidden rounded-lg'>
                <img
                  src='src/assets/images/avatars/avatar-6.jpg'
                  alt=''
                  className='inset-0 h-full w-full object-cover'
                />
              </div>
              <div className='mt-2 line-clamp-1'> Alexa stella </div>
            </div>
          </div>
        </div>
        {/* Groups You Manage  */}
        <div className='border1 dark:bg-dark2 rounded-xl bg-white p-5 px-6 shadow'>
          <div className='flex items-baseline justify-between text-black dark:text-white'>
            <h3 className='text-base font-bold'> Suggested Manage </h3>
            <a href='#' className='text-sm text-blue-500'>
              See all
            </a>
          </div>
          <div className='side-list'>
            <div className='side-list-item'>
              <a href='timeline-group.html'>
                <img src='src/assets/images/avatars/avatar-2.jpg' alt='' className='side-list-image rounded-full' />
              </a>
              <div className='flex-1'>
                <a href='timeline-group.html'>
                  <h4 className='side-list-title'> John Michael</h4>
                </a>
                <div className='side-list-info'> Updated 6 day ago </div>
              </div>
              <button className='button bg-primary-soft dark:text-white'>Like</button>
            </div>
            <div className='side-list-item'>
              <a href='timeline-group.html'>
                <img src='src/assets/images/avatars/avatar-4.jpg' alt='' className='side-list-image rounded-full' />
              </a>
              <div className='flex-1'>
                <a href='timeline-group.html'>
                  <h4 className='side-list-title'> Martin Gray</h4>
                </a>
                <div className='side-list-info'> Updated 2 month ago </div>
              </div>
              <button className='button bg-primary-soft dark:text-white'>Like</button>
            </div>
            <div className='side-list-item'>
              <a href='timeline-group.html'>
                <img src='src/assets/images/avatars/avatar-3.jpg' alt='' className='side-list-image rounded-full' />
              </a>
              <div className='flex-1'>
                <a href='timeline-group.html'>
                  <h4 className='side-list-title'> Monroe Parker</h4>
                </a>
                <div className='side-list-info'> Updated 1 week ago </div>
              </div>
              <button className='button bg-primary-soft dark:text-white'>Like</button>
            </div>
            <div className='side-list-item'>
              <a href='timeline-group.html'>
                <img src='src/assets/images/avatars/avatar-1.jpg' alt='' className='side-list-image rounded-full' />
              </a>
              <div className='flex-1'>
                <a href='timeline-group.html'>
                  <h4 className='side-list-title'> Jesse Steeve</h4>
                </a>
                <div className='side-list-info'> Updated 2 day ago </div>
              </div>
              <button className='button bg-primary-soft dark:text-white'>Like</button>
            </div>
          </div>
          <button className='mt-2 w-full rounded-md bg-secondery px-3.5 py-1.5 text-sm font-medium text-black dark:text-white'>
            See all
          </button>
        </div>
        {/* Groups You Manage  */}
        <div className='border1 dark:bg-dark2 rounded-xl bg-white p-5 px-6 shadow'>
          <div className='flex items-baseline justify-between text-black dark:text-white'>
            <h3 className='text-base font-bold'> Suggested Manage </h3>
            <a href='#' className='text-sm text-blue-500'>
              See all
            </a>
          </div>
          <div className='side-list'>
            <div className='side-list-item'>
              <a href='timeline-group.html'>
                <img src='src/assets/images/avatars/avatar-2.jpg' alt='' className='side-list-image rounded-md' />
              </a>
              <div className='flex-1'>
                <a href='timeline-group.html'>
                  <h4 className='side-list-title'> John Michael</h4>
                </a>
                <div className='side-list-info'> Updated 1 week ago </div>
              </div>
              <button className='button bg-primary text-white'>Like</button>
            </div>
            <div className='side-list-item'>
              <a href='timeline-group.html'>
                <img src='src/assets/images/avatars/avatar-4.jpg' alt='' className='side-list-image rounded-md' />
              </a>
              <div className='flex-1'>
                <a href='timeline-group.html'>
                  <h4 className='side-list-title'> Martin Gray</h4>
                </a>
                <div className='side-list-info'> Updated 4 week ago </div>
              </div>
              <button className='button bg-primary text-white'>Like</button>
            </div>
            <div className='side-list-item'>
              <a href='timeline-group.html'>
                <img src='src/assets/images/avatars/avatar-3.jpg' alt='' className='side-list-image rounded-md' />
              </a>
              <div className='flex-1'>
                <a href='timeline-group.html'>
                  <h4 className='side-list-title'> Monroe Parker</h4>
                </a>
                <div className='side-list-info'> Updated 2 month ago </div>
              </div>
              <button className='button bg-primary text-white'>Like</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduce

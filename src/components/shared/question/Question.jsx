import { Icon } from './Icon'
import s from './Question.module.css'
import { useTranslation } from 'react-i18next'

export const Question = ({
    id = 55,
    images = [
        'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    pet_art = 'Кошка',
    pet_weight = '1 кг 200 г',
    pet_gender = 'Самец',
    is_homeless = true,
    isAwaited = false,
    question = 'Уличный кот, за которым я присматриваю, начал кашлять несколько раз в день в последние три недели. Кашель сухой, без выделений. Он активный, аппетит нормальный, но меня беспокоит частота кашля. Корм не меняли. Также прикладываю видео, где видно и слышно, как кот кашляет.',
    openModal,
}) => {
    const { t } = useTranslation()

    return (
        <section className={s.question_section}>
            <div className={s.question_header}>
                <p className={s.question_number}>
                    {t('customMessage.questionTitle')}
                    {id}
                </p>
                {isAwaited ? (
                    <button className={`${s.btn} ${s.awaiting_btn}`}>
                        Awaiting response
                    </button>
                ) : (
                    <button className={`${s.btn} `}>Response sent</button>
                )}
                <button
                    className={`${s.btn} ${s.actions_btn}`}
                    onClick={openModal}
                >
                    <span>Actions</span>
                    <Icon />
                </button>
                {/* TODO: add translations to btn texts */}
            </div>
            <div className={s.question_images}>
                {images.map((i) => (
                    <div key={i} className={s.question_imgBox}>
                        <img src={i} alt={`Image ${i}`} />
                    </div>
                ))}
            </div>
            <div className={s.question_details}>
                <p>{pet_art}</p>
                <p>{pet_weight}</p>
                <p>{pet_gender}</p>
                {is_homeless ? (
                    <p className={s.question_details__homeless}>
                        {t('customMessage.homelessAnimal')}
                    </p>
                ) : null}
            </div>
            <p className={s.question_text}>{question}</p>
        </section>
    )
}

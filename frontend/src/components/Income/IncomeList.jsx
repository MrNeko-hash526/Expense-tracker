import React from 'react'
import { LuDownload } from 'react-icons/lu'
import TransactionInfoCard from '../Cards/TransactionInfoCard'
import moment from 'moment'

const IncomeList = ({transactions,onDelete,onDownload}) => {
  return (
    <div className='card'>
        <div className='flex items-center justify-between'>
            <h5 className='text-lg'>Income Sources</h5>
             
            <button className='card-btn' onClick={onDownload}>
                <LuDownload className='text-lg' />
                <span className='ml-2'>Download</span>
            </button> 
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2'>
            {
                transactions?.map((income)=>(
                    <TransactionInfoCard
                        key={income._id}
                        title={income.source}
                        icon ={income.icon}
                        onDelete={() => onDelete(income._id)}
                        type="income"
                        amount={income?.amount}
                        date={moment(income.date).format('Do MMM YYYY')}
                        />
                ))
            }
        </div>
    </div>
  )
}

export default IncomeList
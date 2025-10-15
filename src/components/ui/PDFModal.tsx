"use client"

import { X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PDFModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PDFModal({ isOpen, onClose }: PDFModalProps) {
  if (!isOpen) return null

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/RiovaldoCV.pdf'
    link.download = 'Riovaldo_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative w-full max-w-6xl h-full max-h-screen bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Header Modal */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">My Career Path</h2>
          <div className="flex gap-2">
            <Button
              onClick={handleDownload}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Download size={16} />
              Download PDF
            </Button>
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="p-2"
            >
              <X size={20} />
            </Button>
          </div>
        </div>
        
        {/* PDF Viewer */}
        <div className="w-full h-full">
          <iframe
            src="/RiovaldoCV.pdf"
            className="w-full h-full border-0"
            title="Riovaldo CV"
          />
        </div>
      </div>
    </div>
  )
}
